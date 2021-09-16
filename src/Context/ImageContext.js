import React, {createContext, useState} from "react";
import axios from "axios";

export const ImageContext = createContext();
const ImageContextProvider = ({children})=>{
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const runQueary = (query)=>{
        axios
        .get(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
        )
        .then(response => {
          setImages(response.data.photos.photo);
          setLoading(false);
        })
        .catch(error => {
          console.log(
            "Encountered an error with fetching and parsing data",
            error
          );
        });
    }
    return (
        <ImageContext.Provider value={{images, loading, runQueary}}>
            {children}
        </ImageContext.Provider>
    )
}

export default ImageContextProvider;
