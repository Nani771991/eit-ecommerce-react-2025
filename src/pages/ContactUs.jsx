import Box from '../components/Box'
import Container from '../components/Container'
import Form from '../components/Form'
import Text from '../components/Text'

import { useForm } from "../hooks/useForm"
import { postContact } from '../utils/api'

const inputsValidations = {
    name: {
     validation: value => value.length > 2,
     errorText: "El nombre es incorrecto"
  },
    email: {
      validation: value => {
        const regexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        return regexp.test (value);
    }, 
    errorText: "El email no tiene el formato correcto"
  },
    subject: {
        validation: value => value.length > 0,
        errorText: "El asunto es obligatorio"
  },
    message: {
        validation: value => value.length > 0,
          errorText: "Ingrese un texto"
    }
  }

function ContactUs() {

    const {values, onChange, errors} = useForm ({
        name: "",
        email: "",
        subject: "",
        message: ""
    }, inputsValidations)

    const handleSubmit = e => {
        e.preventDefault ()
        if (Object.values(errors).every( val => !val )) {
          postContact(values)
            .then(() => alert("mensaje enviado correctamente"))
            .catch( err => console.error(err) )
        } else {
          console.log("Formulario Invalido")
        }
    }

    return (
        <Container as="main">
        <Text as="h2">Contactanos</Text>
        <Box className="grid">
            <Box className="col-xs-12 col-md-6 col-lg-5 col-xl-4">
                <Form 
                    values={values}
                    errors={errors}
                    onChange={onChange}
                    onSubmit={handleSubmit}
                    inputsArray={[
                        {
                            name: "name",
                            type: "text",
                            label: "Nombre"
                        },
                        {
                            name: "email",
                            type: "email",
                            label: "e-Mail"
                        },
                        {
                            name: "subject",
                            type: "text",
                            label: "Asunto"
                        },
                        {
                            name: "message",
                            type: "text",
                            label: "Mensaje"
                        },
                    ]}
                />
            </Box>
        </Box>
    </Container>
  )
}
export default ContactUs