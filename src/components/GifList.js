import React from "react";

class GifList extends React.Component {

  gohere = () => {

  }

  render() {
    
    if (this.props.gifs.length === 0) {
      return (<div>hello</div>)
    } else {
      return (
        <ul>
          <li>
            <img src={this.props.gifs[0].images.original.url} alt=""></img>
          </li>
          <li>
            <img src={this.props.gifs[1].images.original.url} alt=""></img>
          </li>
          <li>
            <img src={this.props.gifs[2].images.original.url} alt=""></img>
          </li>
        </ul>
      )
    }

    

  }

}

export default GifList