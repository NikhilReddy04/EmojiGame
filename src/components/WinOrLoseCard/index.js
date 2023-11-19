import './index.css'

const WinOrLooseCard = props => {
  const {state, keepPlaying} = props
  const {score} = state
  const isKeep = score === 12
  const heading = isKeep ? 'You Won' : 'You Lose'
  const scores = isKeep ? 'Best Score' : 'Score'
  const numbers = isKeep ? '12/12' : `${score}/12`
  const imgUrl = isKeep
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="image-div">
      <div className="side-div">
        <h1 className="top-heading">{heading}</h1>
        <p className="score-name">{scores}</p>
        <p className="score-numbers">{numbers}</p>
        <button type="button" className="play-again" onClick={keepPlaying}>
          Play Again
        </button>
      </div>
      <img src={imgUrl} className="image-result" alt="win or lose" />
    </div>
  )
}
export default WinOrLooseCard
