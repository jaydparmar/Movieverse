import Home from './Components/Home/Home';
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Components/Header/Header';
import TvShow from './Components/TvShow/TvShow';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/tvshow" element={<TvShow/>}/> */}
      </Routes>
    </Router>
    
  );
}

export default App;
