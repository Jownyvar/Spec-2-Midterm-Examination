import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import "./Movie.css";

const Movie = () => {
  const itemData = useLocation().state.item;
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>{`${itemData.title} Details`}</title>
      </Helmet>

      <button className="go-back" onClick={() => navigate(-1)}>Go Back</button>

      <div className="card">
        <div className="title">
          <h2>{itemData.title}</h2>
           <p>ID:  {itemData.id}</p>
        </div>

        <div className="info">
          <div className="description">
            <p>{itemData.description}</p>
          </div>
          <div className="genre">
            <p>Genre: {itemData.genre}</p>
          </div>
          <div className="type">
            <p>Type: {itemData.type}</p>
          </div>
          <div className="cast">
            <p>Casts: {itemData.cast}</p>
          </div>
          <div className="release">
            <p>Release: {itemData.release.year}</p>
            <p>Studio: {itemData.release.studio}</p>
            <p>Publisher: {itemData.release.publisher}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
