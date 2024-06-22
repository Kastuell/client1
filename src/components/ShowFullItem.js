import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
          <img alt='' src={"./img/" + this.props.item.img} onClick = {() => this.props.onShowItem(this.props.item)}/>
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <p>{this.props.item.fullDesc}</p>
          <p>{this.props.item.functionsM}</p>
          <p>{this.props.item.comlexion}</p>
          <b>{this.props.item.price}$</b>
          <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
          </div>
      </div>
    )
  }
}

export default ShowFullItem