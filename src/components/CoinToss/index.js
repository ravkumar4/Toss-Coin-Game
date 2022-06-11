// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickTossGame = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    switch (tossResult) {
      case 0:
        this.setState(prevState => ({
          headsCount: prevState.headsCount + 1,
          imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        }))
        break
      default:
        this.setState(prevState => ({
          tailsCount: prevState.tailsCount + 1,
          imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        }))
        break
    }
    this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
  }

  render() {
    const {headsCount, tailsCount, totalCount, imageUrl} = this.state

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={imageUrl} className="image" alt="toss result" />
          <button
            className="button"
            type="button"
            onClick={this.onClickTossGame}
          >
            Toss Coin
          </button>
          <div className="toss-count-container">
            <p className="count"> Total: {totalCount}</p>
            <p className="count"> Heads: {headsCount}</p>
            <p className="count"> Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
