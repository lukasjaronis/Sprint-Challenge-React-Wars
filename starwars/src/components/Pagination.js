import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
// import PageItem from 'react-bootstrap/Pagination';

const Pages = ( { charactersPerPage, totalCharacters, paginate } ) => { 
    const pageNumbers = []; // empty array for the # of pages


    for(let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) { // math ciel = largest whole number. 
        pageNumbers.push(i);                                    
    }

    // we push characters out of the page by 4 pretty much. (10 characters / 4 (due to state) = 3 pages)

    return (
        <Pagination>
        {pageNumbers.map(number => {
        return <Pagination.Item className="click" onClick={() => paginate(number)} key={number}>{number}</Pagination.Item>
        })}
        </Pagination>
    )

}
export default Pages