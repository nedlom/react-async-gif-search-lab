import React from "react";

class GifSearch extends React.Component {

  constructor() {
    super()
    this.state = {
      input: ""
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    event.target.reset()
    this.props.gifFetch(this.state.input)
  }

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        Enter a Search Term:
        <input type='text' onChange={this.handleInputChange} value={this.state.input}></input>
        <input type='submit'></input>
      </form>
    )
  }

}

export default GifSearch