import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {cart: 0, category: []}

  data = name =>
    this.setState(prevState => ({category: [...prevState.category, name]}))

  onHandle = () => {
    const {cart} = this.state
    this.setState(prevState => {
      cart: prevState.cart + 1
    })
  }

  render() {
    const {cart, category} = this.state

    const url = 'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d'

    fetch(url)
      .then(res => res.json())
      .then(rows => {
        const {categories} = rows
        const {name} = categories
        console.log(name)
      })

    return (
      <div>
        <div className="time-icon">
          <p className="time">9:30</p>
          <div className="icons-c">
            <img
              src="https://cdn-icons-png.flaticon.com/512/93/93158.png"
              className="wifi"
            />
            <img
              src="https://static.thenounproject.com/png/3455928-200.png"
              className="wifi"
            />
          </div>
        </div>
        <div className="ecommerce-cart">
          <h1 className='ecom'>E-commerce</h1>
          <div className="cart-c">
            <img
              className="cart-icon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgEF71X2YBsKImQWloQRhgWRICwnIskgH6odsTXy2zg&s"
              alt="cart"
            />
            <p onClick={this.onHandle}>{cart}</p>
          </div>
        </div>
        <div>category</div>
      </div>
    )
  }
}
export default Home
