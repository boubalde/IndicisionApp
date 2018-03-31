
class VisibilityToggle extends React.Component{

constructor(props){
    super(props);
    this.state={
        visibility:false
    };

    this.visible = this.visible.bind(this);
    
}
 visible  (){
       
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility 
            }
        
    })
}
render(){
    return(
            <div>
                <h1>Visibility Toggle </h1>
                <button onClick ={this.visible}> {this.state.visibility ? 'hide details' :' Show Details'}</button>
                
                {this.state.visibility && (<div >   <p>Your mouth stinks</p>
                
            

            </div>)}
        
       
    
    </div>
    )
}
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'))









// console.log("mom");
// let visibility= false;
// const visible = ()=>{
//     visibility=!visibility
   
//     thatshow();
// }

// const thatshow = ()=>{
// const template =(
//     <div>
//         <h1>Visibility Toggle </h1>
//         <button onClick ={visible}> {visibility ? 'hide details' :' Show Details'}</button>
        
//         {visibility && (<div >
        
//         <p>Your mouth stinks</p>

//             </div>)}
        
       
    
//     </div>
// )

// ReactDOM.render(template, appRoot);
// }
// const appRoot = document.getElementById('app');
// thatshow();