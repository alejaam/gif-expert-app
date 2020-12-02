import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    // const categories = ['One punch man', 'Dragon Ball', 'Metal gear solid'];
    const [categories, setCategories] = useState(['One punch man', 'Dragon Ball', 'Metal gear solid']);

    // const handleAdd = () => {
    //     //setCategories([...categories,'Spiderman']);
    //     setCategories(cats => [...cats, 'Spiderman']);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />
            <button >Agregar</button>
            <ol>
                {categories.map((category, i) => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
    );
}
