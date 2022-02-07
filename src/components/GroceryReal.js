import  {Component} from 'react';
class GroceryReal extends Component {
   
    render() { 
        // {// console.log(this.props.items) 
        // // const items= this.props.items.map((item,index)=>{}}
            console.log(this.props.items)
            const notPurchased = <span> Items not purchased</span>;
            let span
            if (this.props.items.isPurchased === false) span= notPurchased
            else   span = 'itemsisPurchased'
          
        return(
            <div>
            <div>{this.props.items.item}</div>
            <div>{this.props.items.units}</div>
            <div>{this.props.items.quantity}</div>
            {span}

             
            
            </div>

       

        
        )
        // return(
        //     <div className="box">
        //         {}

        //     </div>
        
        // }
    // constructor() {
    //     super()
    //     this.state = {
    //         item: '',
    //         units: '',
    //         quantity: 0,
    //         isPurchased: false
    //     }
    // }

    // handleChange = event => {// handle change to care of the changes that may occur
    //         this.setState({[event.target.id]: event.target.value})
    // }
    // handleSubmit(event) {
    //     handleSubmit = event => {
    //         event.preventDefault();
    //         const newItem = App.parseForm(event.target);
    //         const item = this.state.item.concat(newItem);

    //         this.setState({item});
    //         App.resetForm(event.target);
    //     }
    //     };


//         }
    }

} 

export default GroceryReal;