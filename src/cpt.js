import React from "react";


class Cpt extends React.Component {
    

      state = {
            count: 0
        }
        
    

    Increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    Decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    
 
    render() {
        return (
            <div>
                <button onClick={() => this.Increment()}>+</button>
                Compteur:  {this.state.count}
                <button onClick={() => this.Decrement()}>-</button>
            </div>
        )
    }
}

export default Cpt;