

////----------------THE MAIN JS FILE WHERE EACH AND EVERYTHING HAS BEEN IMPORTED CONTAINING HEADER, FOOTER, LOGFORM-----------------------//


import './App.css';
import LogForm from './components/LogForm';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    
    
    <div className="App">
      
      <Header/>
    
      <LogForm/>
      
      <Footer/>

      
    </div>
  );
}


export default App;
