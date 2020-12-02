import React from 'react'

export const GifGrid = ({ category }) => {
    
    const getGifs = async() => {
        const url = 'http://api.giphy.com/v1/gifs/search?q=Metal+Gear&api_key=Ccx08K44oZE5u1GL4d4EOuhejM2dStiO&limit=10';
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
        console.log(gifs);
    }
    getGifs();
    return (
        <div>
            <h3>{ category }</h3>
        </div>
    )
}
