import React, { Component } from 'react';
import Like from "./like";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
    state = {
        movies: getMovies()
    };

    handleDelete = movie => {
        console.log(movie);
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };
    handleLiked = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }

    render() {
        const { length: count } = this.state.movies;
        if (count === 0)
            return <p>There is no movie Here</p>;

        return (
            <React.Fragment>
                <div className="container">
                    <p>Total Number of Movies: {count}</p>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th>Favourite</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.movies.map(movie => (
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td><Like liked={movie.liked} onClick={() => this.handleLiked(movie)} /></td>
                                    <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger">Delete</button></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

            </React.Fragment>

        );
    }

}

export default Movies;