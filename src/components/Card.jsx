import React from 'react'
import Box from './Box'
import Text from './Text'

function Card({
    image,
    name,
    shortDescription,
    amount
}) {
  return (
    <Box className="card">
        <img src={image} alt={name} />
        <Box className="card__content m-4">
            <Box>
                <Text as="h3">{name}</Text>
                <Text>{shortDescription}</Text>
            </Box>
            <Box className="card__price">
                <hr className="w-100"/>
                <Text as='b'>{`$ ${amount}`}</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default Card