import React,{Component,Fragment} from 'react';
import './normalize.css';
import './skeleton.css';
import Form from './components/Form';
import {calculateTotal} from './helper'
import Result from './components/Result'
import Message from './components/Message';
import Spinner from './components/Spinner';

class App extends Component {
    state={
        amount:"",
        months:"",
        total:"",
        loading:false
    }
    loanInfo=(amount,months)=>{
        let total=calculateTotal(amount,months);
        
        this.setState({
            loading:true
        },()=>{
            setTimeout(() => {
                //set the states
        this.setState(
            {   amount,
                months,
                total,
                loading:false
            });
            }, 3000);
        })
     }
    render() { 
        //destructuring the object
        const{amount,total,months,loading}=this.state;

        //conditionallyrender the data
        let component;
        if(total==='' && !loading){
            component=<Message/> ;
        }else if(loading) {
            component=<Spinner/>
        }else {
           component= <Result
                amount={amount}
                total={total}
                months={months}/>
        }
        return ( 
        <Fragment>
            <h1> Loan Calculator </h1>
                <div className="container">
                    <Form
                        loanInfo={this.loanInfo}/> 
                    <div className="messages">
                        {component}
                    </div>    
                </div>
         </Fragment> );
    }
}
 

export default App;