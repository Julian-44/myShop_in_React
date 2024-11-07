import React, { Component } from 'react'

export class Cotgoris extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cotegoris: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'chairs',
                    name: 'Стулья'
                },
                {
                    key: 'tables',
                    name: 'Столы'
                },
                {
                    key: 'luminaire',
                    name: 'Светильники'
                },
            ]
        }
    }
  render() {
    return (
      <div className='cotegoris'>
        {this.state.cotegoris.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCotgory(el.key)} >{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Cotgoris