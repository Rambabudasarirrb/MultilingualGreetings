import {Component} from 'react'
import ButtonItem from '../ButtonItem'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {isActiveButtonId: languageGreetingsList[0].id}

  onChangeButtonItem = id => {
    this.setState({isActiveButtonId: id})
  }

  renderGreetingImage = () => {
    const {isActiveButtonId} = this.state
    const {imageUrl, imageAltText} = languageGreetingsList[
      languageGreetingsList.findIndex(each => each.id === isActiveButtonId)
    ]
    return <img src={imageUrl} alt={imageAltText} className="image" />
  }

  render() {
    const {isActiveButtonId} = this.state
    return (
      <div className="Greeting-container">
        <h1 className="tittle">Multilingual Greetings</h1>
        <ul className="button-container">
          {languageGreetingsList.map(eachButton => (
            <ButtonItem
              key={eachButton.id}
              buttonDetails={eachButton}
              isActive={isActiveButtonId === eachButton.id}
              onChangeButtonItem={this.onChangeButtonItem}
            />
          ))}
        </ul>

        {this.renderGreetingImage()}
      </div>
    )
  }
}
export default Greetings
