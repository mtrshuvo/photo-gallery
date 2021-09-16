import React, {useEffect, useContext} from 'react';
import {ImageContext} from '../Context/ImageContext';
import Loader from './Loader';
import Gallery from './Gallery';

export default function Container({searchTerm}) {
    const {images, loading, runQueary} = useContext(ImageContext);

    useEffect(()=>{
        runQueary(searchTerm);
    }, [searchTerm]);

    return (
       <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
    )
}
