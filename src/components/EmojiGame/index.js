import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import WinOrLooseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickList: {},
    isTrue: false,
  }

  clickEmoji = id => {
    const {clickList, score, topScore} = this.state
    const condition = id in clickList
    if (!condition) {
      const newScore = score + 1
      const newTopScore = newScore >= topScore ? newScore : topScore
      const newClickList = clickList
      newClickList[id] = id
      this.setState({
        score: newScore,
        topScore: newTopScore,
        clickList: newClickList,
        isTrue: newScore === 12,
      })
    } else {
      this.setState(prevState => ({
        score: prevState.score,
        topScore: prevState.topScore,
        clickList: prevState.clickList,
        isTrue: true,
      }))
    }
  }

  keepPlaying = () => {
    this.setState(prevState => ({
      score: 0,
      topScore: prevState.topScore,
      clickList: {},
      isTrue: false,
    }))
  }

  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const emojiList = shuffledEmojisList()
    const {isTrue} = this.state
    return (
      <div className="main-container">
        <NavBar state={this.state} />
        <h1 className="imp-heading">Don't Click the same emoji twice</h1>
        {!isTrue && (
          <ul className="ul-list">
            {emojiList.map(eachValue => (
              <EmojiCard
                key={eachValue.id}
                listData={eachValue}
                clickEmoji={this.clickEmoji}
              />
            ))}
          </ul>
        )}
        {isTrue && (
          <WinOrLooseCard state={this.state} keepPlaying={this.keepPlaying} />
        )}
      </div>
    )
  }
}

export default EmojiGame
