import './index.css'

const ThumbnailItem = props => {
  const {eachThumbnail, thumbnailClick} = props
  const {id, thumbnailUrl} = eachThumbnail

  const onThumbnailClick = () => {
    thumbnailClick(id)
  }

  return (
    <li className="thumbnail-item">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onThumbnailClick}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ThumbnailItem
