import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      editing: false
    };
  }

  componentDidMount() {
    this.fetchMovie(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err.response));
  };

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  toggleEditMovie = () => {
    this.setState({
      ...this.state,
      editing: !this.state.editing
    })
  }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>; 
    }

    return (
      <div className="save-wrapper">
        <MovieCard editing={this.state.editing} movie={this.state.movie} />
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
        <div className={`edit-button ${this.state.editing ? 'hidden' : ''}`} onClick={this.toggleEditMovie}>
          Edit
        </div>
        <div className={`submit-button ${!this.state.editing ? 'hidden' : ''}`} onClick={this.toggleEditMovie}>
          Submit
        </div>
      </div>
    );
  }
}
