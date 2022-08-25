import React from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }

  gifFetch = (input) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=Vp96lpbSzQLXNw5Hr6R3IFYffMMchcPE&rating=g`
    
    fetch(url)
    .then(resp => resp.json())
    .then(json => {
      const x = json.data.slice(0, 3)
      debugger
      this.setState({
        gifs: x
      })
    })
    
  }

  render() {
    return (
      <div>
        <GifSearch gifFetch={this.gifFetch}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

  // componentDidMount() {
  //   fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=Vp96lpbSzQLXNw5Hr6R3IFYffMMchcPE&rating=g")
  //   .then(resp => resp.json())
  //   .then(json => {
  //     debugger
  //     this.setState( {
  //       gifs: json.data.slice(0, 3)   
  //     })
  //   })
  // }
  
}

export default GifListContainer