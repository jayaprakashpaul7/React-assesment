import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {cart: 0}



    onHandle = () => {
      const {cart} = this.state
      this.setState(prevState => {
        cart: prevState.cart + 1
      })
    }
  render() {
    const {cart} = this.state
    return (
      <div>
        <div>
          <p>9:30</p>
        </div>
        <div className="ecommerce-cart">
          <h1>E-commerce</h1>
          <div className="cart-c">
            <img src="image.js" alt="cart" />
            <p onClick={this.onHandle}>{cart}</p>
          </div>
        </div>
        <div className="bg-second">
          <ul className="category-panel">{ca}</ul>
          <div className="products-panel">p</div>
        </div>
        <div></div>
      </div>
    )
  }
}
export default Home
