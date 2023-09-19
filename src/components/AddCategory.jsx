import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setValue] = useState('');
    const onInputChange = (event) => {
        //  console.log(event.target.value);
        setValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        // condicion si el valor es memor a 2 caracteres  finalisa la funcion 
        if(inputValue.trim().length <=1 ) return;
        // console.log(inputValue);
        // setCategories((categories)=>[inputValue,...categories]);
        onAddCategory(inputValue.trim());
        
        //refresca el formulario 

        setValue('');
        console.log('esta son ',inputValue);
    }
    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}>
            </input>
        </form>
    )
}
