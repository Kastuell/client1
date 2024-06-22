import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Grid from '@mui/material/Grid';
import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import Tovar from '../components/Tovar';
import { fetchPosts, fetchTags } from '../redux/slices/posts';

export const Home = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state=> state.auth.data);
  const { posts } = useSelector(state=> state.posts);

  const isPostsLoading = posts.status === 'loading';
 
  const imggUrl = process.env.REACT_IMG_PATH

  React.useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <>
      <Tovar></Tovar>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) => 
          isPostsLoading ? (
            <Post  key={index} isLoading={true}/>
          ) : (
            <Post
              id={obj._id}
              title={obj.title}
              imageUrl={obj.imageUrl ? `${imggUrl}${obj.imageUrl}` : ''}
              user={obj.user}
              createdAt={obj.createdAt}
              viewsCount={obj.viewsCount}

              tags={obj.tags}
              isEditable={userData?._id === obj.user._id}
            />
          )
            )}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock />
        </Grid>
      </Grid>
    </>
  );
};
