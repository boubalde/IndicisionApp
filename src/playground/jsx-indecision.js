console.log("app.js is running!");
const app = {
    title: 'fences',
     subtitle: 'Left fences',
     options: ['one', 'two', 'three', 'four']
};

// only render the subtitle operator (and p tag) if subtitle exist - logic operator
// render the new p tag - if option.length>0 "Here are your options" "No options"

const onFormSubmit = (e) => {
e.preventDefault();
const option = e.target.elements.option.value;

if (option)
{
    app.options.push(option);
    e.target.elements.option.value='';
}
renderlenghtArray();
}
const toRemoveAll = () =>{
    app.options=[];
    renderlenghtArray();
}
const renderlenghtArray=() =>{
const template =(

    <div> 
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length>0 ? 'here are your options': 'no options'}</p>
    <p>{app.options.length}</p>
    <ol>
    <li>Item one </li>
    <li> Item two </li>
    </ol>
    <form onSubmit={onFormSubmit} >
    <input type= "text" name= "option" />
    <button> Add Option </button>
    <button onClick={toRemoveAll}> Remove All </button>
    </form>
    {
       app.options.map((number)=>{
          return <li key={number}> option: {number} </li>
       })
    }
    
    </div>
)
ReactDOM.render(template, appRoot);
}


const appRoot = document.getElementById('app');

renderlenghtArray();