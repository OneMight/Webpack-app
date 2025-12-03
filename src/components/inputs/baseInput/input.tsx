import './input.css'
import { BaseInput } from '../../../types/intefaces'
export default function Input({name,placeholder,styles, type,requared}:BaseInput){
    return(
        <input
            style={styles}   
            type={type}
            name={name}
            required={requared}
            placeholder={placeholder}
            className='input'
        />
    )
}