// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';




function App() {
  return (
  <>
  <Navbar title="TextUtil" about="About Text Utils" />
  <div className="container my-3">
   <TextForm heading = "Enter your text here to Convert : "/>
   {/* <About/> */}
  </div>

  </>
  );
}

export default App;
