import './index.css'

const NavBar = props => {
  const {state} = props
  const {score, topScore, isTrue} = state
  return (
    <nav className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        className="nav-image"
        alt="emoji logo"
      />
      <h1 className="nav-heading">Emoji Game</h1>
      {!isTrue && (
        <>
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </>
      )}
    </nav>
  )
}

export default NavBar
