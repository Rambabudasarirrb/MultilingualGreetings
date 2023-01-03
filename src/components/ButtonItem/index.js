import './index.css'

const ButtonItem = props => {
  const {buttonDetails, isActive, onChangeButtonItem} = props
  const {buttonText, id} = buttonDetails
  const onChangeButton = () => {
    onChangeButtonItem(id)
  }

  const activeButtonClassName = isActive ? 'activeButton' : 'in-activeButton'
  return (
    <li className="list-item">
      <button
        type="button"
        onClick={onChangeButton}
        className={`button ${activeButtonClassName}`}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default ButtonItem
