import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 

class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      selected: null
    }
  }
  componentDidMount(){
    this.setState({
      carousel: carouselData,
      selected: 0
    })
  }

  leftClick = () => {
    if (this.state.selected === 0) {
      this.setState({
        selected: this.state.carousel.length -1
      })
    } else {
      this.setState({
        selected: this.state.selected - 1
      })
    }

  }

  rightClick = () => {
    if (this.state.selected === (this.state.carousel.length - 1)) {
      this.setState({
        selected: 0
      })
    } else {
      this.setState({
        selected: this.state.selected + 1
      })
    }
  }

  selectedImage = () => {
    return <img src={this.state.carousel[this.state.selected]} alt='carousel' style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="selected-Image">{this.selectedImage()}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}

export default Carousel;