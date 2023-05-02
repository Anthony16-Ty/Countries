import React, { useEffect, useState } from "react"


const App = () => {
  const [restcountries, setRestCountries] = useState([])
  const [img, setImg] = useState();

  const fetchRestCountryData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setRestCountries(data)
      })
  }

  useEffect(() => {
    fetchRestCountryData()
  }, [])

  
  const fetchImage = async () => {
    const imageUrl = "https://flagcdn.com/w320/fo.png";
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
    
  };

  useEffect(() => {
    fetchImage();
  }, []);
  return (
    <div><>
    <img src={img} alt="icons" />
  </>

   
   {restcountries.length > 0 && (
     <ul>
       {restcountries.map(restcountry => (
         <li key={restcountry.name.common}>{restcountry.name.official}<img src={restcountry.flags.png} alt="icons"/></li>
       ))}
     </ul>
   )}</div>
    
   
  );

  
  



  

  
}



export default App;


