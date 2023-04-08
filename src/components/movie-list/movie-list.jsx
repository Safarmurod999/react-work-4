import "./movie-list.css";
import MovieListItem from "../movie-list-item/movie-list-item";

const MovieList = ({ data, onDelete, onToggleProp }) => {
  return (
    <ul className="movie-list mt-3">
      {data.map((el) => {
        return (
          <MovieListItem
            key={el.id}
            name={el.name}
            viewers={el.viewers}
            favourite={el.favourite}
            like={el.like}
            onDelete={() => onDelete(el.id)}
            onToggleProp={(e) =>
              onToggleProp(el.id, e.currentTarget.getAttribute("data-toggle"))
            }
          />
        );
      })}
    </ul>
  );
};

export default MovieList;
