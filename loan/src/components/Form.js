import React,{Component} from 'react';



class Form extends Component {
    state = { 
        amount:'',
        months:''
     }
     submitForm=(e)=>{
         e.preventDefault();
         //destructure  the data
         const {amount,months}=this.state;  
         //pass the data to main component 
         this.props.loanInfo(amount,months)
        }
    HandleChange=(e)=>{
        const {name,value}=e.target;

        //update the value of states
        this.setState({
            [name]:Number(value)
        })
    }
    ValidateForm=()=>{
        //check the values
        const {amount,months}=this.state;
        const notValid=!amount||!months;
        return notValid;
    }
    render() { 
        return ( 
            <form onSubmit={this.submitForm}>
                <div className="row">
                    <label>Amount</label>
                        <input 
                        onChange={this.HandleChange}
                        name="amount" 
                        type="number" 
                        className="u-full-width" 
                        placeholder="Eg. 3000"></input>
                </div>
                <div className="row">
                    <label>Months to repay</label>
                        <select 
                        onChange={this.HandleChange}
                        name="months" 
                        className="u-full-width">
                            <option value="">Select</option>
                            <option value="3">3 Months</option>
                            <option value="6">6 Months</option>
                            <option value="12">12 Months</option>
                            <option value="24">24 Months</option>
                        </select>
                </div>
                <div>
                    <input 
                    disabled= {this.ValidateForm()}
                    type="submit" 
                    value="calculate" 
                    className="u-full-width button-primary"/>
                </div>
            </form> 
        );
    }
}
 
export default Form;