import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Home.css";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setItems(data.titles);
      } catch (error) {
        console.log(error);
      }
    }
    fetchItems();
  }, []);

  return (
    <>
      <Helmet>
        <title>Netflix.budget Edition</title>
      </Helmet>
      <div className="HomePage">
        {items.map((item) => {
          return (
            <>
              <div className="ewan" key={item.id}>
                <p className="title">{item.title}</p>
                <p className="genre">{item.genre}</p>

                <div className="button">
                  <Link
                    className="link"
                    to={`/Movie/${item.id}`}
                    state={{ item }}
                  >
                    View Movie Details
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
