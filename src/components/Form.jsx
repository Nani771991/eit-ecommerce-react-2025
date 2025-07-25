import React from 'react'
import Box from './Box'
import Text from './Text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Form({
    inputsArray,
    values,
    errors,
    onChange,
    onSubmit
}) {
  return (
    <form onSubmit={onSubmit} className='form__container'>
        {
            inputsArray.map(
                ({name, label, type}) =>
                    <Box key={name} className="form__input-group">
                        <Text as='label' className="form__label" htmlFor={name}>{label}</Text>
                        <input 
                            id={name} 
                            name={name} 
                            type={type} 
                            value={values[name]} 
                            onChange={onChange} 
                            className={`form__input${ errors[name] ? " with-error" : ""}`}/>
                        {errors[name] && <Text as="span" className="form__error">{errors[name]}</Text>}
                    </Box>
            )
        }
        <button type="submit" className="form__submit btn btn__primary"><FontAwesomeIcon icon={faPaperPlane} />Enviar</button>
    </form>
  )
}

export default Form