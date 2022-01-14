import {Component} from 'react'
import GroceryList from './components/GroceryList'
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            item: 'Mango',
            units: '3lbs',
            quantity: 1,
            isPurchased: false
        }
    }

    handleChange = event => {// handle change to care of the changes that may occur
            this.setState({[event.target.id]: event.target.value})
            console.log(this.state)
    }
   
        handleSubmit = event => {
            event.preventDefault();
            const newItem = App.parseForm(event.target);
            const item = this.state.item.concat(newItem);

            this.setState({item});
            App.resetForm(event.target);
        
        };
          render() {
            return(
        <div>
          <label htmlFor="item"> Item: </label>
          <input
                id="item"
                onChange={this.handleChange}
                value={this.state.item} />
                <label htmlFor="units"> Unit : </label>
                <input id="units" onChange={this.handleChange}
                value={this.state.units}
                type="units"/>
                <label htmlFor="quantity"> Quantity : </label>
                <input id="quantity" onChange={this.handleChange}
                value={this.state.quantity}
                type="quantity"/>
                <button>Submit</button>
                <GroceryList/>
                <div>
        <div>{this.state.item}</div> : <div>{this.state.units}</div> - <div>{this.state.quantity}</div> 
                </div>
          </div>

 
            )

          }
      }

    

export default App;
