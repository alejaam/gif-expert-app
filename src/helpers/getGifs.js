export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=Ccx08K44oZE5u1GL4d4EOuhejM2dStiO&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    }); 
    return gifs;
}