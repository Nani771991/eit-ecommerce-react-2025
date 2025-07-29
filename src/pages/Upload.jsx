import React from 'react'
import Container from '../components/Container'
import Text from '../components/Text'
import Box from '../components/Box'
import Form from '../components/Form'

import { useForm } from '../hooks/useForm'
import { postProduct } from '../utils/api'

const validationsUpload ={
    name: {
      validation: value => value.length > 2,
      errorText: "El nombre es incorrecto"
    },
    amount: {
      validation: value => value > 0,
      errorText: "El precio debe ser mayor a 0"
    },
    amount: {
      validation: value => value > 0,
      errorText: "El stock debe ser mayor a 0"
    },
    brand: {
      validation: value => value.length > 0,
      errorText: "La marca es un campo requerido"
    },
    category: {
      validation: value => value.length > 3,
      errorText: "La categoría debe tener al menos 4 caracteres"
    },
    ageFrom: {
      validation: value => value > 0,
      errorText: "La edad desde debe ser mayor a 0"
    },
    ageTo: {
      validation: value => value > 0 && value <=100,
      errorText: "La edad hasta debe ser mayor a 0 y menor o igual a 100"
    },

}

function Upload() {

  const { values, onChange, errors, resetForm } = useForm({
      name: "",
      amount: 0,
      stock: 0,
      brand: "",
      category: "",
      shortDescription: "",
      largeDescription: "",
      freeDelivery: false,
      ageFrom: 0,
      ageTo: 0,
      image: ""
  }, validationsUpload)

    const handleSubmit = e => {
        e.preventDefault ()
        if (Object.values(errors).every( val => !val )) {
          postProduct(values)
            .then(() => alert("Producto guardado correctamente"))
            .then(() => resetForm())
            .catch( err => console.error(err) )
        } else {
          console.log("Formulario Invalido")
        }
    }

  return (
        <Container as="main">
            <Text as="h2">Alta de Productos</Text>
            <Box className="grid">
              <Box className="col-xs-12 col-md-6 col-lg-5 col-xl-4">
                  <Form 
                    values ={values}
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
                            name: "amount",
                            type: "number",
                            label: "Precio"
                          },
                          {
                            name: "stock",
                            type: "number",
                            label: "Stock"
                          },
                          {
                            name: "brand",
                            type: "text",
                            label: "Marca"
                          },
                          {
                            name: "category",
                            type: "text",
                            label: "Categoría"
                          },
                          {
                            name: "shortDescription",
                            type: "text",
                            label: "Descripción corta"
                          },
                          {
                            name: "largeDescription",
                            type: "text",
                            label: "Descripción larga"
                          },
                          {
                            name: "freeDelivery",
                            type: "checkbox",
                            label: "Envío gratis"
                          },
                          {
                            name: "ageFrom",
                            type: "number",
                            label: "Edad desde"
                          },
                          {
                            name: "ageTo",
                            type: "number",
                            label: "Edad hasta"
                          },
                          {
                            name: "image",
                            type: "text",
                            label: "URL imagen"
                          },
                      ]}
                  />    
              </Box>
            </Box>
        </Container>
      )
}

export default Upload