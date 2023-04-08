import { Component } from "react";
import AppInfo from "./components/app-info/app-info";
import AppFilter from "./components/app-filter/app-filter";
import SearchPanel from "./components/search-panel/search-panel";
import MovieList from "./components/movie-list/movie-list";
import MoviesAddForm from "./components/movies-add-form/movies-add-form";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Olamga nur sochgan oy",
          viewers: 2132,
          favourite: false,
          id: 1,
          like: false,
        },
        {
          name: "Umar Ibn Xattob",
          viewers: 1000,
          favourite: false,
          id: 2,
          like: false,
        },
        {
          name: "Said Islomxo'ja",
          viewers: 889,
          favourite: false,
          id: 3,
          like: false,
        },
      ],
      term:'',
      filter:'all',
    };
  }
  onDelete = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((c) => c.id != id),
    }));
  }; 
  addForm = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item.name,
      viewers: item.viewers,
      id: uuidv4(),
      favourite: false,
      like: false,
    };
    this.setState(({ data }) => ({
      data: [...data, newItem],
    }));
  };

  searchHandler = (arr,term)=>{
    if (term.length==0) {
      return arr;
    }
    return arr.filter(el=>el.name.toLowerCase().indexOf(term)>-1);
  }
  updateTermHandler = term =>{
    this.setState({term});
  }
  onToggleProp = (id, prop) => {
    this.setState(({ data }) => {
      return {
        data: data.map((el) => {
          if (el.id === id) {
            return { ...el, [prop]: !el[prop] };
          }
          return el;
        }),
      };
    });
  };

  filterHandler = (arr,filter)=>{
    switch (filter) {
      case 'popular':
        return arr.filter(el=>el.like)
        break;
      case 'mostViewers':
        return arr.filter(el=>el.viewers>1000);
        break;
      default:
        return arr;
        break;
    }
  }
  updateFilterHandler = filter => this.setState({filter});

  render() {
    const { data ,term,filter} = this.state;
    const allMoviesCount = data.length;
    const favouriteMovies = data.filter((el) => el.favourite).length;
    const visibleData=this.filterHandler(this.searchHandler(data,term),filter);
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo
            allMoviesCount={allMoviesCount}
            favouriteMovies={favouriteMovies}
          />
          <div className="search-panel">
            <SearchPanel updateTermHandler={this.updateTermHandler} />
            <AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler}/>
          </div>
          <MovieList
            onToggleProp={this.onToggleProp}
            data={visibleData}
            onDelete={this.onDelete}
          />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
