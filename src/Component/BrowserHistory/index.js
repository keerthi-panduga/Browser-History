import './index.css'

const BrowserHistory = props => {
  const {historyList, deleteFun} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList

  const deleteIcon = () => {
    deleteFun(id)
  }

  return (
    <li className="list-container">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} className="img3" alt="domain logo" />
      <div className="name-container">
        <p className="heading">{title}</p>
        <p className="para">{domainUrl}</p>
      </div>
      <button onClick={deleteIcon} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="img2"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default BrowserHistory
