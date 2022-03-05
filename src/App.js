import Navbar from "./components/Navbar";
// import Regform from "./components/Regform"
import './App.css';
import Footer from "./components/Footer";
import "./components/Css/footer.css";
import Email_ver from "./components/Email_ver"
import "./components/Css/Email_var.css"

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
    <Email_ver></Email_ver>
    <Footer></Footer>
    </div>
  );
}

export default App;
