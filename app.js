import './App.css';
import React, { Component } from 'react'


class ShowImage extends Component{
  constructor(props){
    super(props)
    this.state={
         imgSrc:"https://m.media-amazon.com/images/I/81Nkurnj9hL._SL1500_.jpg"
    }
  }
  handleBasketBall=()=>{
   this.setState({
     imgSrc:"https://cdn.britannica.com/q:60/44/193844-050-11485B18/ball-net-basketball-game-arena.jpg"
   })
  }
  handleCricket=()=>{
    this.setState({
      imgSrc:"https://citytoday.news/wp-content/uploads/2019/07/pages4and5.jpg"
    })
  }
  handlePubg=()=>{
    this.setState({
      imgSrc:"https://images.indianexpress.com/2020/09/PUBG-mobile.jpg"
    })
  }
  handlelaptop=()=>{
    this.setState({
      imgSrc:"https://i.pcmag.com/imagery/roundups/02naaOkVLe7DIiejFUyDPJp-31..1588859331.jpg"
    })
  }
  handleTiger=()=>{
    this.setState({
      imgSrc:"https://m.media-amazon.com/images/I/81Nkurnj9hL._SL1500_.jpg"
    })
  }

    
    render(){
      return(
           <center>
             <img src={this.state.imgSrc} alt=""/>
             <div>
             <button onClick={this.handleBasketBall}>BasketBall</button>
             <button onClick={this.handleCricket}>Cricket</button>
             <button onClick={this.handlelaptop}>Laptop</button>
             <button onClick={this.handlePubg}>pubg</button>
             <button onClick={this.handleTiger}>Tiger</button>
             </div>
           </center>
      )
    }
  }


export default ShowImage;


// basketball:".../assets/basketball.jpg",
//          cricket:".../assets/cricket.jpg",
//          laptop:".../assets/laptop.jpg",
//          pubg:".../assets/pubg.jpg",
//          tiger:".../assets/tiger.jpg"



