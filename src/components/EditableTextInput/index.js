import {Component} from 'react'

import {
  AppContainer,
  CardContainer,
  Heading,
  InputContainer,
  InputElement,
  ParagraphText,
  Button,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {
    inputText: '',
    isSaved: false,
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  render() {
    const {inputText, isSaved} = this.state

    return (
      <AppContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isSaved ? (
              <ParagraphText>{inputText}</ParagraphText>
            ) : (
              <InputElement
                type="text"
                value={inputText}
                onChange={this.onChangeInput}
              />
            )}
            <Button type="button" onClick={this.onClickButton}>
              {isSaved ? 'Edit' : 'Save'}
            </Button>
          </InputContainer>
        </CardContainer>
      </AppContainer>
    )
  }
}

export default EditableTextInput
