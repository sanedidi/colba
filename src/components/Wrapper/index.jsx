import React from 'react'
import { Flex } from '@chakra-ui/react'
const Wrapper = ({ children, column, row, ...props }) => {
    return (
        <Flex {...props} flexDir={column ? "column" : row ? "row" : null}  >
            {children}
        </Flex>
    )
}

export default Wrapper