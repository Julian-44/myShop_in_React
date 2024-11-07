import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';


// если есть в корзине товары
const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach(el => summa += Number.parseFloat(el.price));
  return (
    <>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">Summa: {new Intl.NumberFormat().format(summa)}&euro;</p>
    </>
  )
}

// если корзина пуста
const showNothing = () => {
  return(
    <div className="empty">
      <h2>Product is no</h2>
    </div>
  )
}

export default function Header(props) {
  let [cardOpen, setCardOpen] = useState(false)

  return (
    <header>
        <div>
            <span className="logo">House Staff</span>
            <ul className='nav'>
                <li>About</li>
                <li>Contacts</li>
                <li>Profile</li>
            </ul>
            <FaShoppingCart onClick={() =>setCardOpen(cardOpen = !cardOpen)} className={`shop-card-button ${cardOpen && 'active'}`}/>


            {/* Реолизация окна открывания корзины корзины */}
            {cardOpen && (
              <div className='shop-card'>
                {props.orders.length > 0 ? showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className="presentation"></div>
    </header>
  )
}
