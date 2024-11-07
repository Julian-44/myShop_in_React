import React from "react"
import Footer from "./componets/Footer/Footer"
import Header from "./componets/Heder/Header"
import Items from "./componets/Items/Items"
import Cotgoris from "./componets/Cotegoris/Cotgoris"
import ShowFullItem from "./componets/ShowFullItem/ShowFullItem"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул',
          img: 'chair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '34.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'tables',
          price: '49.99'
        },
        {
          id: 3,
          title: 'крастное кресло',
          img: 'chair-red.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '39.99'
        },
        {
          id: 4,
          title: 'Светильник',
          img: 'luminaire.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'luminaire',
          price: '14.99'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCotgory = this.chooseCotgory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Cotgoris chooseCotgory={this.chooseCotgory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} item={this.state.fullItem} onShowItem={this.onShowItem} />}
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCotgory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})
    // console.log(this.state.orders)
  }
}

export default App
