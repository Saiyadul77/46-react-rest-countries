import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}
function LoadCountries() {
  const [countries, setCountries] = useState([])
  useEffect(countries => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h1>Visiting every country in the World!!</h1>
      <h4>Available Countries: {countries.length}</h4>
      {
        countries.map(country => <CountryName name={country.name} area={country.area} capital={country.capital} region={country.region}></CountryName>)
      }
    </div>
  )
}
function CountryName(props) {
  return (
    <div className='country'>
      <h1>Country Name:{props.name}</h1>
      <h1>Total Area: {props.area}</h1>
      <h1>Capital: {props.capital}</h1>
      <h1>Region: {props.region}</h1>
    </div>
  )
}

export default App;
