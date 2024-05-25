import React from "react";
import "./style.css";

const AnimieCards = ({ list ,setAnimieInfo}) => {
  return (
    <>
      {list.map((anime, index) => (
        <div className="card" key={index} onClick={()=>setAnimieInfo(anime)}>
          <img src={anime.images.jpg.large_image_url} alt={anime.title} />
          <h4 className="tcards">{anime.title}</h4>
        </div>
      ))}
    </>
  );
};

export default AnimieCards;
