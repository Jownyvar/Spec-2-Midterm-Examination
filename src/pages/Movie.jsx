import { Helmet } from "react-helmet-async"
import { useLocation, useNavigate } from "react-router-dom"


const Movie = () => {
  const itemData = useLocation ().state.item;
  const navigate = useNavigate();


  return (
    <>
    <Helmet>
      <title>{`${itemData.name} Details`}</title>
    </Helmet>

    <button onClick={() => navigate(-1)}>Go Back</button>
    <h2>{itemData.name}</h2>
    <p>{itemData.description}</p>
    </>
    
  )
}

export default Movie