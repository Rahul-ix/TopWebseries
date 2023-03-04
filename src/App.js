import logo from './logo.svg';
import './App.css';
// import Header from './Header';
// import {Header,Footer} from './Header';
// import Employee from './Employee';
import Header from './Component/Header';
import MovieList from './Component/MovieList';
import data from './data.json'
function App() {
  // let name="Rahul RK"
  return (
    <div className="App">
    {/* <Header/>
    <Footer/> */}
        {/* <h1>{name}</h1> */}
        {/* <Employee 
        name="Rahul RK"
         age ={26}/>
         <Employee 
        name="XYZ"
         age ={20}/>
         <Employee 
        name="pqr"
         age ={29}/> */}
         {/* <Employee/> */}
  {/* <h1 style={{backgroundColor:"blue"}}>working</h1> */}
  <Header 
  name="Top 10 Movies"/>
 
{
  
  data.map((Element)=>{
    return(
      <MovieList image={Element.image} Story={Element.Story}/>
      )
  })

  } 
   </div>
  );
}

export default App;
