import './input.css'
import { BaseInput } from '../../../types/intefaces'
export default function Input({name,placeholder,styles, type,requared,func}:BaseInput){
    return(
        <input
            style={styles}   
            type={type}
            name={name}
            onChange={func}
            required={requared}
            placeholder={placeholder}
            className='input'
        />
    )
}