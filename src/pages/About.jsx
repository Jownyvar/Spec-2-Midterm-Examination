import { useEffect, useState } from "react";

useEffect;

const About = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setItems(data.curator);

      } catch (error) {
        console.log(error);
      }
    }
    fetchItems();
  }, []);
  return (<>
    <h1>{items.name}</h1>
  </>);
};

export default About;
