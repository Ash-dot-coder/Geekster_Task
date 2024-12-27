import "./Card.css";

const Card = ({ poster, title, year, director, duration, genres, description }) => {
    return (
        <div className="movie-card">
          <div className="card-left">
            <img src={poster} alt={`${title} Poster`} className="movie-poster" />
          </div>
          <div className="card-right">
            <h2>
              {title} <span>{year}, {director}</span>
            </h2>
            <p className="details">
              <span>{duration} min</span> &middot; <span>{genres.join(", ")}</span>
            </p>
            <p className="description">{description}</p>
            <div className="actions">
              <button className="share-btn">Share</button>
              <button className="like-btn">❤</button>
              <button className="comment-btn">💬</button>
            </div>
          </div>
        </div>
      );
};

export default Card;
