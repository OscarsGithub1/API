import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([]);
useEffect( () => {

  const fetchData = async () => {
    const res = await fetch('http://localhost:3000');
    const data = await res.json();
   // console.log(data);
    console.log("data.items", data.items);
    console.log("data.name",  data.name);
    console.log("data", data);
    console.log("items", items);
    setItems(data);
   
  }

  fetchData();

}, [])  
  return (
 <>
 {items.map(i => (
  <p>{i.name}, {i.description}</p>
 ))}
 
 </>
  )
}

export default App
