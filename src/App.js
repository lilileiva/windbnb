import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Properties from './components/Properties/Properties';

function App() {

  let num
  const [numberGuests, setNumberGuests] = useState("")
  const [location, setLocation] = useState("")
  const [search, setSearch] = useState(false)
  const [listProperties, setListProperties] = useState([])

  const [dropdownMenu, setDropdownMenu] = useState(false)
  const changeDropdownState = () => {
    dropdownMenu ? setDropdownMenu(false) : setDropdownMenu(true)
  }

  const handleInputChange = (e) => {
    if (e.target.value == Number(e.target.value) && e.target.value !== " " && Number(e.target.value) !== NaN) num = e.target.value
    else e.target.value = ""
  }

  const handleInputSubmit = (e) => {
    e.preventDefault()
    if (!num) {
      return setSearch(false)
    }
    if (num) setNumberGuests(Number(num))    
    if (dropdownMenu == true) setDropdownMenu(false)
    setSearch(true)
    e.target.reset()
  }

  const locationSearch = (city) => {
    setLocation(city)
    setDropdownMenu(false)
    setSearch(true)
    return location
  }

  return (
    <div className="App">
      <Navbar
        handleInputChange={handleInputChange}
        handleInputSubmit={handleInputSubmit}
        dropdownMenu={dropdownMenu}
        changeDropdownState={changeDropdownState}
        locationSearch={locationSearch} 
        setListProperties={setListProperties}       
      />
      <Properties        
        numberGuests={numberGuests}
        setNumberGuests={setNumberGuests}
        location={location}
        setLocation={setLocation}
        search={search}
        setSearch={setSearch}
        listProperties={listProperties}
        setListProperties={setListProperties}
      />
      <Footer />
    </div>
  );
}

export default App;
