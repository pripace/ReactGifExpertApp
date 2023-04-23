import { useState } from "react"; 


export const AddCategory = ({onNewCategory}) => {

const [inputValue, setInputValue] = useState('')

const onInputChange = ({ target }) => {  //puedo sacar el event y desestructurar con llaves el target directo, y saco de todos lados la e.
    setInputValue(target.value)
}

const onSubmit = (e) => {
    e.preventDefault();
    if( inputValue.trim().length <= 1) return;

    //setCategories ( categories => [...categories, inputValue]);
    onNewCategory( inputValue.trim() );
    setInputValue('');
    
}

    return (
        <form onSubmit={ onSubmit }>
        <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
        />
        </form>
  )
}
