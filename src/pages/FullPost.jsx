import React from "react";
import Markdown from 'react-markdown';
import { useParams } from "react-router-dom";
import remarkGfm from 'remark-gfm';
import axios from "../axios";

import { Post } from "../components/Post";


const imggUrl = process.env.REACT_APP_IMG_PATH
export const FullPost = () => {
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const { id } = useParams();

React.useEffect(() => {
  axios
    .get(`/posts/${id}`)
    .then((res) => {
    setData(res.data);
    setLoading(false);
  })
  .catch((err) => {
    console.warn(err);
    alert('Ошибка при получении статьи');
  })
}, [id]);

if (isLoading) {
  return <Post isLoading={isLoading} isFullPost />
}

  return (
    <>
      <Post
         id={data._id}
         title={data.title}
         imageUrl={data.imageUrl ? `${imggUrl}${data.imageUrl}` : ''}
         user={data.user}
         createdAt={data.createdAt}
         viewsCount={data.viewsCount}

         isFullPost
      >
        <Markdown remarkPlugins={[remarkGfm]}>{data.text}</Markdown>
      </Post>
      
    </>
  );
};
