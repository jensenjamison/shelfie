import React, {Component} from "react";



export default class Form extends Component {
    constructor(){
        super();
        this.state = {
            image: false,
            product: false,
            price: 0
        }
        this.handleInput = this.handleInput.bind(this)

    }

    handleInput(e) {
        this.setState({[e.target.name] : e.target.value }) 
    }


    render(){
        return(
            <div>
                <form>
                    <input onChange = {(e) => this.setState({image: e.target.value})}></input>
                    <input onChange = {(e) => this.setState({product: e.target.value})}></input>
                    <input onChange = {(e) => this.setState({price: e.target.value})}></input>
                </form>
                    <button>Cancel</button>
                    <button>Add to Inventory</button>

            </div>
        )
    }
}