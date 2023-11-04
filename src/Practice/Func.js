import React, { useState } from 'react';
import axios from 'axios';

const Func = () => {
  const [postalCode, setPostalCode] = useState('');
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(false);


  const fetchLocationInfo = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.zippopotam.us/IN/${postalCode}`);
      setLocationData(response.data);
    } catch (error) {
      console.error('Error fetching location data:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="App">
    <h1>ZIP Code Location Information</h1>
    <div>
      <input
        type="text"
        placeholder="Enter ZIP Code"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <button onClick={fetchLocationInfo}>Fetch Location</button>
    </div>
    {loading && <p>Loading...</p>}
    {locationData && (
      <div>
        <h2>Location Information</h2>
        <p>Country: {locationData.country}</p>
        <p>State: {locationData.places[0].state}</p>
        <p>City: {locationData.places[0]['place name']}</p>
        <p>Longitude: {locationData.places[0].longitude}</p>
        <p>City: {locationData.places[0]['state abbreviation']}</p>
        <p>Latitude: {locationData.places[0].latitude}</p>
        </div>
      )}
    </div>
  )
}

export default Func
