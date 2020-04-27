import React from 'react';
import TabelHeader from "./tabelHeader";
import TableBody from "./tableBody";
const Table = (props) => {
    const { data, columns, sortColumn, onSort } = props;

    return (
        <table className="table table-striped table-hover">
            <TabelHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
            <TableBody data={data} columns={columns} />
        </table>
    );
}

export default Table;