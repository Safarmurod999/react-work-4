import "./app-info.css";
const AppInfo = ({allMoviesCount,favouriteMovies}) => {
  return <div className="app-info mb-3">
    <p className="fs-3 text-uppercase">Barcha kinolar soni:{allMoviesCount}</p>
    <p className="fs-4 text-uppercase">Ko'rilgan kinolar soni:{favouriteMovies}</p>
  </div>
};

export default AppInfo;
