import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Properties from './components/Properties/Properties';

function App() {
  
  const [numberGuests, setNumberGuests] = useState(0)
  const [location, setLocation] = useState("")
  const [isSearch, setIsSearch] = useState(false)
  const [listProperties, setListProperties] = useState([])

  const [dropdownMenu, setDropdownMenu] = useState(false)
  const changeDropdownState = () => {
    dropdownMenu ? setDropdownMenu(false) : setDropdownMenu(true)
  }

  const search = () => {
    if (location !== "" || numberGuests > 0) {
      setDropdownMenu(false)
      setIsSearch(true)    
    }
  }

  return (
    <div className="App">
      <Navbar
        dropdownMenu={dropdownMenu}
        changeDropdownState={changeDropdownState}
        setListProperties={setListProperties}
        numberGuests={numberGuests} 
        setNumberGuests={setNumberGuests}
        search={search}
        location={location}   
        setLocation={setLocation}  
      />
      <Properties        
        numberGuests={numberGuests}
        setNumberGuests={setNumberGuests}
        location={location}
        setLocation={setLocation}
        isSearch={isSearch}
        setIsSearch={setIsSearch}
        listProperties={listProperties}
        setListProperties={setListProperties}
      />
      <Footer />
    </div>
  );
}

export default App;
