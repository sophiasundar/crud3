import './App.css';
import NavBarMUI from "./Component1/navBar";
import Dashboard from "./Component1/dashboard";
    
function App() {
  
  return (
    <div className="App">
      
      {/* children is to be checked */}
       
       <NavBarMUI></NavBarMUI>
        <Dashboard/>



      

    </div>
  );
  }

export default App;
