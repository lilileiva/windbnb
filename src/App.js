import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Properties from './components/Properties/Properties';

function App() {

  let num
  const [numberGuests, setNumberGuests] = useState("")

  const handleInputChange = (e) => {
    if (e.target.value == Number(e.target.value) && e.target.value !== " " && Number(e.target.value) !== NaN) num = e.target.value
    else e.target.value = ""
  }

  const handleInputSubmit = (e) => {
    e.preventDefault()
    if (num) setNumberGuests(Number(num))
    else setNumberGuests("")
  }

  const [dropdownMenu, setDropdownMenu] = useState(false)
  const changeDropdownState = () => {
    dropdownMenu ? setDropdownMenu(false) : setDropdownMenu(true)
  }

  return (
    <div className="App">
      <div className="container">
        <Navbar
          handleInputChange={handleInputChange}
          handleInputSubmit={handleInputSubmit}
          dropdownMenu={dropdownMenu}
          changeDropdownState={changeDropdownState}
        />
        <Properties numberGuests={numberGuests} dropdownMenu={dropdownMenu} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
