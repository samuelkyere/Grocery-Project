import { Component } from "react";
import GroceryReal from "./components/GroceryReal";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      groceries: [
        {
          item: "Mango",
          units: "3lbs",
          quantity: 1,
          isPurchased: false,
        },
        {
          item: "Orange",
          units: "5 lbs",
          quantity: "5",
          isPurchased: true,
        },
        {
          item: "Pear",
          units: "3lbs",
          quantity: 2,
          isPurchased: true,
        },
      ],
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();

    const groForm = event.target;
    const groFormData = {
      item: groForm.item.value,
      units: groForm.units.value,
      quantity: groForm.quantity.value,
      isPurchased: groForm["is-purchased"].checked,
    };
    console.log(groFormData);
    this.setState({ groceries: [...this.state.groceries, groFormData] });
  };

  handleChange = (event) => {
    // handle change to care of the changes that may occur
    this.setState({ [event.target.id]: event.target.value });
    console.log(this.state);
  };

  // handleSubmit = event => {
  //     event.preventDefault();
  //     const newItem = App.parseForm(event.target);
  //     const item = this.state.item.concat(newItem);

  //     this.setState({item});
  //     App.resetForm(event.target);

  // };

  handleClick = (event) => {
    const newGrocery = {
      item: this.state.item,
      quantity: this.state.quantity,
      units: this.state.units,
      isPurchased: false,
    };
    this.setState({ groceries: [...this.state.groceries, newGrocery] });
  };
  render() {
    return (
      <div className="mp">
        
        <div>
          // <label htmlFor="item"> Item: </label>
          //{" "}
          <input
            id="item"
            onChange={this.handleChange}
            value={this.state.groceryItem}
          />
          <label htmlFor="units"> Unit : </label>
          <input
            id="units"
            onChange={this.handleChange}
            value={this.state.groceries.units}
            type="units"
          />
          <label htmlFor="quantity"> Quantity : </label>
          <input
            id="quantity"
            onChange={this.handleChange}
            value={this.state.groceries.quantity}
            type="quantity"
          />
          <button onClick={this.handleClick}>Submit</button>
          <div className='pd'>
            <div>{this.state.groceries.item}</div> :{" "}
            <div>{this.state.groceries.units}</div> -{" "}
            <div>{this.state.groceries.quantity}</div>
          </div>
        </div>
        <ul>
          {this.state.groceries.map((groceryItem, index) => (
            <GroceryReal items={groceryItem} key={index} />
          ))}
        </ul>
      </div>
    );
  }
  //   render() {
  //     return(
  // <div>
  //   <label htmlFor="item"> Item: </label>
  //   <input
  //         id="item"
  //         onChange={this.handleChange}
  //         value={this.state.item} />
  //         <label htmlFor="units"> Unit : </label>
  //         <input id="units" onChange={this.handleChange}
  //         value={this.state.units}
  //         type="units"/>
  //         <label htmlFor="quantity"> Quantity : </label>
  //         <input id="quantity" onChange={this.handleChange}
  //         value={this.state.quantity}
  //         type="quantity"/>
  //         <button>Submit</button>
  //         <GroceryReal/>
  //         <div>
  // <div>{this.state.item}</div> : <div>{this.state.units}</div> - <div>{this.state.quantity}</div>
  //         </div>
  //   </div>
}

export default App;
