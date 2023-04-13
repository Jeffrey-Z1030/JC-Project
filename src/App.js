import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Discover from "./Components/Discover";
import Job from "./Components/Jobs";
import Learning from "./Components/Learning";
import People from "./Components/People";
import { Routes,Route } from "react-router-dom";
import JoinNow from "./Components/JoinNow";
import SignIn from "./Components/SignIn";

function App() {
	return (
		<div className="App">
			<header>
        <NavBar/>
      </header>
			<body>
        <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route path='discover' element={<Discover/>}/>
          <Route path='job' element={<Job/>}/>
          <Route path='learning' element={<Learning/>}/>
          <Route path='people' element={<People/>}/>
          <Route path='join' element={<JoinNow/>}/>
          <Route path='signin' element={<SignIn/>}/>
        </Routes>

      </body>
			<footer>
        <Footer/>
      </footer>
		</div>
	);
}

export default App;
