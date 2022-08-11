import React,{Component} from 'react';
import Reactfeature from './Reactfeature';
import ChildComponent from './ChildComponent';

export default class MainComponent extends Component{
state={
    mainCounter:[
        {id:1,value:3},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0},
    ]

}
render(){
    return(
        <div>
            <p onClick={this.Reset}>Reset</p>
            {this.state.mainCounter.map(counter => (
                <ChildComponent key={counter.id} onDelete={this.Delete} incrementCount={this.incrementCount}counter={counter}  ></ChildComponent>
            ))}
          
        </div>
    );
}
Delete = id=>{
     console.log("event called",id)  
     this.setState({mainCounter : this.state.mainCounter.filter(x=>x.id != id)})
}
Reset=()=>{
    let counter=this.state.mainCounter.map(c=>{c.value=0;return c;})
    this.setState({mainCounter:counter})
}
incrementCount = counter =>{
    console.log("counter",counter)
    //this.setState({value:this.state.value+1})
    const Counters=[...this.state.mainCounter];
    const index=Counters.indexOf(counter);
    Counters[index]={...counter};
    Counters[index].value++;
    this.setState({mainCounter:Counters});

}

}