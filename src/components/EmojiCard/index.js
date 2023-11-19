// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {listData, clickEmoji} = props
  const {id, emojiName, emojiUrl} = listData
  const emojiClick = () => {
    clickEmoji(id)
  }
  return (
    <li className="emoji-item">
      <button type="button" className="emoji-button" onClick={emojiClick}>
        <img src={emojiUrl} className="emoji" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
