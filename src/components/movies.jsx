import React, { Component } from 'react';
import MoviesTabel from "./moviesTabel";
import Pagenation from "./common/pagenation";
import Categories from "./common/category";
import { pagenate } from "../utils/pagenate";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";
class Movies extends Component {
    state = {
        movies: [],
        category: [],
        pageSize: 3,
        currentPage: 1,
        sortColumn: { path: 'title', order: 'asc' }
    };
    componentDidMount() {
        const category = [{ _id: "", name: "All Categories" }, ...getGenres()];
        this.setState({ movies: getMovies(), category });
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
    };
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    handleCategorySelect = category => {
        // console.log("Category Selected", category);
        this.setState({ selectedCategory: category, currentPage: 1 });
    };
    handleSort = sortColumn => {
        this.setState({ sortColumn });
    }
    //
    getPageData = () => {
        const { currentPage, pageSize, selectedCategory, sortColumn, movies: allMovies } = this.state;
        const filtered = selectedCategory && selectedCategory._id
            ? allMovies.filter(m => m.category._id === selectedCategory._id)
            : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        const movies = pagenate(sorted, currentPage, pageSize);
        return { totalCount: filtered.length, data: movies };
    }
    render() {
        const { length: count } = this.state.movies;
        const { currentPage, pageSize, sortColumn } = this.state;
        if (count === 0)
            return <p>There is no movie Here</p>;

        const { totalCount, data: movies } = this.getPageData();



        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-3">
                            <Categories
                                items={this.state.category}
                                selectedItem={this.state.selectedCategory}
                                onItemSelect={this.handleCategorySelect} />
                        </div>
                        <div className="col-md-9">
                            <p>Total Number of Movies: {totalCount}</p>
                            <MoviesTabel
                                movies={movies}
                                sortColumn={sortColumn}
                                onLike={this.handleLiked}
                                onDelete={this.handleDelete}
                                onSort={this.handleSort}
                            />
                            <Pagenation
                                itemCount={totalCount}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onPageChange={this.handlePageChange} />
                        </div>
                    </div>
                </div>

            </React.Fragment>

        );
    }

}

export default Movies;