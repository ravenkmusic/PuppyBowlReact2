import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import './App.css'

function App() {

  return (
     <div id="container">
        <NavBar />
        <SearchBar />
        <MainSection />
    </div> 
  )
}

export default App
