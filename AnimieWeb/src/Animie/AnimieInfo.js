
import React from 'react';
import "./style.css";

const AnimieInfo = (props) => {
  const { title, source, rank, popularity, members, status, rating, duration, synopsis, images } = props.animiesInfo;

  const handleAddToFavorites = () => {
    props.addToFavorites(props.animiesInfo); 
  };

  return (
    <div className='infoCard'>
      <div className='imag'>
        <h3 className='tit'>{title}</h3>
        <img src={images.jpg.large_image_url} alt={title} />
      </div>
      <br />
      <div className='infoCardName'>
        <h4>Rank: {rank}</h4>
        <h4>Source: {source}</h4>
        <h4>Popularity: {popularity}</h4>
        <h4>Members: {members}</h4>
        <h4>Status: {status}</h4>
        <h4>Rating: {rating}</h4>
        <div className='content'>
          <p>{synopsis}</p>
        </div>
        <button onClick={handleAddToFavorites}>Add to favorites</button>
      </div>
    </div>
  );
};

export default AnimieInfo;
