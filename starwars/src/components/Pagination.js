import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
// import PageItem from 'react-bootstrap/Pagination';

const Pages = ( { charactersPerPage, totalCharacters, paginate } ) => {
    const pageNumbers = [];


    for(let i = 1; i < Math.ceil(totalCharacters / charactersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Pagination>
        {pageNumbers.map(number => {
        return <Pagination.Item className="click" onClick={() => paginate(number)} key={number}>{number}</Pagination.Item>
        })}
        </Pagination>
    )

}
export default Pages