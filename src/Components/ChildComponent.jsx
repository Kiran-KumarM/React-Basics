import React,{Component} from 'react';
import Reactfeature from './Reactfeature';
import './Reactfeature.css'
export default class ChildComponent extends Component{
state={
    
}
    render(){
        console.log(this);
        return(
             <div>
            
            Count is = {this.props.counter.value}
            <span className='ml-2' onClick={()=>this.props.incrementCount(this.props.counter)}>Increment</span>
            <span className='ml-2' onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</span>
            </div>
        );
    }
   
}