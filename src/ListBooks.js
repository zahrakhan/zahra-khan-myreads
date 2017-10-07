import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

const ListBooks = ({
    shelves,
    shelfTypes,
    onSearch,
    onChangeBookShelf
}) => (
        <div className="list-books" >
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {Object.keys(shelves).map(shelf => (
                    <BookShelf
                        key={shelf}
                        title={shelfTypes[shelf]}
                        books={shelves[shelf]}
                        shelfTypes={shelfTypes}
                        onChangeBookShelf={onChangeBookShelf}
                    />
                ))}
            </div>
            <div className="open-search">
                <a onClick={() => onSearch()}>Add a book</a>
            </div>
        </div>
    )

ListBooks.propTypes = {
    shelves: PropTypes.shape({
        currentlyReading: PropTypes.arrayOf(PropTypes.object),
        read: PropTypes.arrayOf(PropTypes.object),
        wantToRead: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    shelfTypes: PropTypes.object,
    onChangeBookShelf: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
}

export default ListBooks