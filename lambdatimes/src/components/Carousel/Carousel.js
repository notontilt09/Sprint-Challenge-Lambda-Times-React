import React, { Component } from 'react';
import { carouselData } from '../../data';
import styled from 'styled-components';
// Complete this Carousel 

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;

  @media (min-width: 1200px) {
      width: 1200px;
  }

  img {
    width: 100%;
    display: none;
  }
`;

const LeftButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  top: 50%;
  left: 25px;
  transform: translate(0, -50%);

  &: hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`;

const SelectedImage = styled.div``;

const RightButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  top: 50%;
  right: 25px;
  transform: translate(0, -50%);

  &: hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`;

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
      <CarouselContainer>
        <LeftButton onClick={this.leftClick}>{"<"}</LeftButton>
        <SelectedImage>{this.selectedImage()}</SelectedImage>
        <RightButton onClick={this.rightClick}>{">"}</RightButton>
      </CarouselContainer>
    )
  }
}

export default Carousel;