import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl} = cardDetails

  return (
    <div className="card-item">
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="img-container">
        <img className="card-img" src={imgUrl} alt={title} />
      </div>
    </div>
  )
}

export default CardItem
