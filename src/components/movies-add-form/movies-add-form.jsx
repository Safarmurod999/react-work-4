import "./movies-add-form.css";
import { Component } from "react";
class MoviesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      viewers: "",
    };
  }
  changeHandlerInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { name, viewers } = this.state;
    const { addForm } = this.props;
    return (
      <div className="movies-add-form mt-3">
        <h3>Yangi kino qo'shish</h3>
        <form className="add-form d-flex" onSubmit={(e) => addForm(e, {name,viewers})}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Kino nomi"
            name="name"
            value={name}
            onChange={this.changeHandlerInput}
          />
          <input
            type="text"
            className="form-control new-post-label ms-3 me-3"
            placeholder="Ko'rishlar soni"
            name="viewers"
            value={viewers}
            onChange={this.changeHandlerInput}
          />
          <button type="submit" className="btn btn-outline-dark">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

export default MoviesAddForm;
