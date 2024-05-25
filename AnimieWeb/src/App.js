
import React, { useEffect, useState } from "react";
import "./Animie/style.css";
import AnimieCards from "./Animie/AnimieCards";
import AnimieInfo from "./Animie/AnimieInfo";
import FavoritesList from "./Animie/FavoritesList";

function App() {
  const [search, setSearch] = useState("Naruto");
  const [animeData, setAnimeData] = useState([]);
  const [animiesInfo, setAnimieInfo] = useState();
  const [favorites, setFavorites] = useState([]);

  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`);
    const resData = await res.json();
    console.log(resData)
    setAnimeData(resData.data || []);
  };

  const addToFavorites = (anime) => {
    setFavorites([...favorites, anime]);
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <>
      <div className="navbar">
        <h1> Animes</h1>
        <div className="sea">
          <input
            type="text"
            placeholder="Search Anime"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
           
        </div>
      </div>
      <div className="container">
        <div className="animierow">
          {animeData.length > 0 && <AnimieCards list={animeData} setAnimieInfo={setAnimieInfo} />}
        </div>
      </div>
      <div className="Information">
        {animiesInfo && <AnimieInfo animiesInfo={animiesInfo} addToFavorites={addToFavorites} />}
      </div>
      <div className="fav">
        <h2>Favourites</h2>
        <FavoritesList favorites={favorites} />
      </div>
    </>
  );
}

export default App;






