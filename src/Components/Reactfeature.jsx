import React,{Component} from 'react';
import './Reactfeature.css'
export default class Reactfeature extends Component{
//    declaring global variables 
    state ={
        count:1,
        imgURl:"https://picsum.photos/200",
        list:['tag1','tag2','tag3']
    }
    styles={
        fontSize:10,
        fontWeight:'bold'
    }

    // constructor(){
    //     super();
    //     console.log(this,'from constructor')
    //     this.clickevent=this.clickevent.bind(this)
    // }

    render() {
        return (
        <React.Fragment>
            <h1>Hello world!!</h1>
            <span>data binding {this.state.count}</span>
            <div>getting data by method {this.formatCount()}</div>
            {/* <img src={this.state.imgURl} ></img> */}

            <div className='m-2'>class name</div>
            <div style={this.styles}>applying style</div>
            <div style={{fontSize:20}}>applying inline style</div>
            
            {/* looping for list/object */}
            <div>
                {this.state.list.map(x => <p key={x}> {x}</p>)}
            </div>

               {/* conditional rendering */}
               <div>{this.conditionalRender()}</div>
               <div onClick={this.clickevent}>onclick</div>
               <div onClick={()=>this.clickevent1(5)}>onclick passing parameter</div>
        </React.Fragment>
        ); 
    }
    formatCount(){
        const {count}=this.state;
        return count===0?'Zero' : count;
    }

    conditionalRender(){
        if(this.state.list.length===0) return 'There are no elements!!';
        return  <div>{this.state.list.map(x => <p key={x}> {x}</p>)}</div>;
    }
    clickevent =()=>{
        console.log("clicked",this)
        //this.state.count++
        this.setState({count:this.state.count+1})
    }
    clickevent1 =param=>{
        console.log("clicked1",param)
        //this.state.count++
       // this.setState({count:this.state.count+1})
    }
}


