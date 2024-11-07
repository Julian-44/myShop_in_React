import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img}/>
        <h2>{this.props.item.title}</h2>
        <b>&euro;{this.props.item.price}&cent;</b>
        <FaTrash className='delete-item' onClick={() => this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order