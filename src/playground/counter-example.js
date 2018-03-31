
class Counter extends React.Component{
constructor(props){
    super(props);
    this.minusOne = this.minusOne.bind(this)
    this.reset= this.reset.bind(this);
    this.addOne= this.addOne.bind(this);
    this.state={
        count:0
    };
}
minusOne  ()  {
this.setState((prevState)=>{
    return{
        count: prevState.count-1
    }
})
};

 reset() {
    this.setState((prevState)=>{
        return{
            count: 0
        }
    })}

addOne() {
this.setState((prevState)=>{
return{
    count: prevState.count +1
};
})
}
    
render(){
        return(
            <div>
           <h1>Count:{this.state.count}</h1> 
           <button onClick={this.addOne}> +1 </button>
           <button onClick ={this.minusOne}> -1 </button>
           <button onClick ={this.reset}> reset </button>
            
        </div>
        );
    }
}



ReactDOM.render(<Counter/>, document.getElementById('app'));



// let count = 0;
// const minusOne = () => {
// count--;
// renderButton();
//     console.log('minusOne')};
// const reset = () => {
  
//     count=0;
//     renderButton();
//     console.log('reset')};
// const addOne = () =>{
//     count++;
//     renderButton();
//     console.log('addOne')}





// const appRoot = document.getElementById('app');
// const renderButton = () => {
//     const template= (
//         <div>
//            <h1>Count: {count} </h1> 
//            <button onClick={addOne}> +1 </button>
//            <button onClick={minusOne}> -1 </button>
//            <button onClick={reset}> reset </button>
            
//         </div>
    
//     )
//     ReactDOM.render(template, appRoot);
// }

// renderButton();
// // ReactDOM.render(template, appRoot);