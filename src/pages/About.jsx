import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./About.css";
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
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="about-info">
        <h1 className="name">{items.name}</h1>
        <p className="role">{items.role}</p>
        <p className="info">Years Curating: {items.yearsCurating}</p>
        <p className="info">Address: {items.location}</p>
        <p className="email">Email: {items.email}</p>
        <p className="bio">{items.bio}</p>
      </div>
    </>
  );
};

export default About;
