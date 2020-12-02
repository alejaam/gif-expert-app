import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
// import { GirGridItem } from './GirGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data, loading} = useFetchGifs();

    // useEffect(() => {
    //     getGifs(category).then(setImages);
    // }, [category]);
    
    return (
        <>
            <h3>{category}</h3>
            {loading ? 'Cargando...' : 'Fin de carga'}
            {/* <div className="card-grid">
                {
                    images.map(img =>
                        <GirGridItem key={img.id} {...img} />
                    )
                }
            </div> */}
        </>
    )
}
