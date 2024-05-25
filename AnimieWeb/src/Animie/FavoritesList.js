import React from 'react';

const FavoritesList = ({ favorites }) => {
  return (
    <div className="favorites">
      {favorites.map((anime, index) => (
        <div key={index} className="favoriteItem">
          <img src={anime.images.jpg.large_image_url} alt={anime.title} />
          <div className="title">{anime.title}</div>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
