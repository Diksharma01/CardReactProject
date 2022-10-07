import React, { Component } from 'react'
import './App.css';
import { v4 } from "uuid" ;



export default class App extends Component {

  constructor(){
    super()
    this.state ={
      username:"",
      url:"",
      desc:"",
      id:v4(),
      cards:[]
    }
  }
  onChangeHandler =(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  onSubmit=()=>{
    let obj ={ username:this.state.username ,url:this.state.url, desc:this.state.desc,id:this.state.id}
    let copycard = this.state.cards
    copycard.push(obj)
    this.setState({ cards:copycard,id:v4()})
    console.log(this.state.cards)
  }
  onDeletCard = (id)=>{
    let filtercard = this.state.cards.filter(card=> card.id !== id)
    this.setState({cards:filtercard})
  }
  render() {
    // console.log(this.state)
  
    return (
      <div> <div id="back" style={{width:"100%" , height:"100vh"}}>
      <div id="left">
          <div id="form">
              <input id="username"   name="username" onChange={(e)=> this.onChangeHandler(e)} type="text" placeholder="Username "/>
              {/* <p id="Uerr" style="color: rgb(5, 5, 5);"></p> */}
              <input id="url"  name="url" onChange={(e)=>  this.onChangeHandler(e)} type="text" placeholder="Url"/>
              {/* <p id="urlerr" style="color:black;"></p> */}
              <textarea id="desc" name="desc" onChange={(e)=> this.onChangeHandler(e)} placeholder="Desc..." cols="30" rows="10"></textarea>
              {/* <p id="descerr" style="color: black;"></p> */}
              <button id="btn"onClick={( )=> this.onSubmit()}>submit</button>
          </div>

      </div>

      <div id="right">
          <nav id="nav">
              <div id="box">
                  <input type="text" id="search" placeholder="Search...txt..."/>
              </div>
          </nav>

          <div id="cardcontainer">
                  {
                    this.state.cards.map(card=>{
                 return <div className="card">
                    <img src={card.url} alt=""/>
                <h2>{card.username}</h2>
                <p>{card.desc}.</p>
                <button  onClick={()=>this.onDeletCard(card.id)}>Delete</button>
                </div>
                    })
                  }
          </div>
      </div>
   </div>
 </div>
    )
  }
}







































// import Header from './Components/Header';
// import Container from './Components/Container';
// import React, { Component } from 'react'

// export default class App extends Component {
//  constructor(){
//   super()
//   this.state ={
//     num:9
//   }
//   console.log(this.state)
//  }
 
 
 
//   data ={
//     num:7
//   }

//   setNum = ()=>{
//  this.setState({num:"diksha"})
//     return 0
//   }
//   render() {
//     console.log(this.setNum);
//    return( 
//    <div  style={{ width:"100%" , height:"100vh", backgroundColor:"white", color:"white", fontSize:"25px"}}> 
//    <div style={{width:"10%" , height:"10%" , backgroundColor:"blue" }}> <button  id='btn' onClick={()=>this.setNum()} >
//     </button></div>
//       <Header/>
//      <Container/>
  
// </div>
//     )
//     }
//   }