import React from 'react';
import Image from "./Image";
import NoImg from './NoImg';

export default function Gallery({data}) {
    let noImages;
    let images;
    let result = data;
    if (result.length > 0){
        images = result.map((image=>{
            let farm = image.farm;
            let server = image.server;
            let id = image.id;
            let secret = image.secret;
            let title = image.title;
            let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
            return <Image url={url} key={id} alt={title} />;
        }))
    }else{
        noImages = <NoImg />
    }
    return (
        <div>
            <ul>
            {images}
            </ul>
            {noImages}
        </div>
    )
}
