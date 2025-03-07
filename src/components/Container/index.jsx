import { Box } from '@chakra-ui/react'
import React from 'react'
export const CustomContainer = ({ children }) => {
    return (
        <Box m={"0 auto"} maxW="1600px" w={"95%"}>
            {children}
        </Box>
    )
}

