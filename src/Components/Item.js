import React from 'react';
import Container from './Container';

export default function Item({searchTerm}) {
    return (
        <div>
        <h2>{searchTerm} Pictures</h2>
        <Container searchTerm={searchTerm} />
      </div>
    )
}
