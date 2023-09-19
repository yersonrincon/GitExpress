import { useState } from "react"
import { AddCategory,GifGrid } from "./components";

export const GitExpertApp = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories);

    // haqui resiber el valor del input en el newCategory
    const onAddCategory = (newCategory) => {
        // evalua el los valor del listado retorno true o false 
        if (categories.includes(newCategory)) return;


        //const nuevoElemento='NARUTO';

        // se hace una nueva copia de las categorias y agrega una nueva
        setCategories([newCategory, ...categories]);
        // setCategories(cat=>[...cat,'NARUTO']);
        //categories.push(newCategory)

        //console.log(newCategory);

    }


    return (
        <>
            <h1>GitExpress APP</h1>
            <AddCategory
                // setCategories={setCategories}
                onAddCategory={(event) => onAddCategory(event)}
                currentCategories={categories}
            />

            {/*<button onClick={onAddCategory}>Agregar</button>*/}

            {categories.map(category => (
              
              <GifGrid key={category} category={category} />

            ))}


        </>
    )
}
