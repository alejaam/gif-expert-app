import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One punch man', 'Dragon Ball', 'Metal gear solid'];
    const [categories, setCategories] = useState(['Metal gear solid']);

    // const handleAdd = () => {
    //     //setCategories([...categories,'Spiderman']);
    //     setCategories(cats => [...cats, 'Spiderman']);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map((category) => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>
    );
}
