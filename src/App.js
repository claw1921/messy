// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';



function App() {
  return (
  <>
  <Navbar title="TextUtils3" about="AbouttextUtils" />
  <div className="container my-3">
  <TextForm heading ="Enter your text here to Convert : "/>
  </div>
  </>
  );
}

export default App;
