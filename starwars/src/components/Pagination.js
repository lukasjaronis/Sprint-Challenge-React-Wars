import React from 'react';

import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/Pagination';

const Pages = ( { charactersPerPage, totalCharacters, paginate } ) => {
    const pageNumbers = [];


    for(let i = 1; i < Math.ceil(totalCharacters / charactersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Pagination>
        {pageNumbers.map(number => {
        return <PageItem onClick={() => paginate(number)} key={number}>{number}</PageItem>
        })}
        </Pagination>
    )

}
export default Pages