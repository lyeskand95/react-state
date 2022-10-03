import React from "react";
import Cpt from "./cpt";


  class App extends React.Component {
    state = {
           fullName:"gomycode",
           bio:"ecole",
            imgSrc:'https://www.emploitic.com/attachments/company_logo/logo_4757551.jpg'
            , profession:"test",
            show: false
    };
    handleShow = () => {
      this.setState({
        show: !this.state.show
      })
    }
  
    render(){
      return (
        <div>
          {this.state.show ? (
            <>
              <h1>{this.state.fullName}</h1>
              <h1>{this.state.bio}</h1>
              <img src={this.state.imgSrc} alt="err" />
              <h1>{this.state.profession}</h1>
            </>
          ) :
          (
            <h1>Show profile</h1>
          )
          }
          <button onClick={this.handleShow}>{!this.state.show ? "show" : "hide"}</button>
          <>
        <h1>Show compteur</h1>
        <Cpt />
        </>
        </div>
      );

   }
  }
  export default App;
