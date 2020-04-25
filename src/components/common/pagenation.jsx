import React from 'react';
import propTypes from "prop-types";
import _ from "lodash";
const Pagenation = (props) => {
    const { itemCount, pageSize, onPageChange, currentPage } = props;
    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return (<nav>
        <ul className="pagination" style={{ "cursor": "pointer" }}>
            {pages.map(page => (
                <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                    <a onClick={() => onPageChange(page)} className="page-link">{page}</a>
                </li>
            ))}
        </ul>
    </nav>
    );
}
Pagenation.propTypes = {
    itemCount: propTypes.number.isRequired,
    pageSize: propTypes.number.isRequired,
    onPageChange: propTypes.func.isRequired,
    currentPage: propTypes.number.isRequired
}
export default Pagenation;
