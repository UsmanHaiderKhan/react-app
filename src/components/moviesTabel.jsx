import React, { Component } from 'react';
import TabelHeader from "./common/tabelHeader";
import Like from "./common/like";

class MoviesTabel extends Component {
    state = {}
    columns = [
        { path: "title", label: "Title" },
        { path: "gener.name", label: "Category" },
        { path: "numberInStock", label: "Stock" },
        { path: "dailyRentalRate", label: "Rate" },
        { key: "like" },
        { key: "delete" },
    ];

    render() {
        const { movies, onDelete, onLike, sortColumn, onSort } = this.props;
        return (
            <table className="table table-striped table-hover">
                <TabelHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
                <tbody>
                    {movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><Like liked={movie.liked} onClick={() => onLike(movie)} /></td>
                            <td><button onClick={() => onDelete(movie)} className="btn btn-danger">Delete</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        );
    }
}

export default MoviesTabel;