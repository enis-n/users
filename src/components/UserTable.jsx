import React, { useState } from 'react'
import { User } from './User'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Flex,
    Input,
    Box,
    Button,
} from '@chakra-ui/react'

export const UserTable = ({ handleChange, fromaKomplete, funksioniShto, lista }) => {

    return (
        <Flex>
            <Box>
                <Input
                    name="id"
                    placeholder='Sheno Id'
                    onChange={(event) => handleChange(event)}
                    value={fromaKomplete.id}
                />
                <Input
                    name="emri"
                    placeholder='Sheno Emrin'
                    onChange={(event) => handleChange(event)}
                    value={fromaKomplete.emri}
                />
                <Input
                    name="mbiemri"
                    placeholder='Sheno Mbiemrin'
                    onChange={(event) => handleChange(event)}
                    value={fromaKomplete.mbiemri}
                />
                <Button onClick={funksioniShto}>Shto ne tabel</Button>
            </Box>
            <TableContainer width='full'>
                <Table variant='simple'>
                    <TableCaption>Tabela e userave</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Emri</Th>
                            <Th>Mbiemri</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {lista.users.map(item => {
                            // return <User key={item.id} id={item.id} emri={item.emri} mbiemri={item.mbiemri} />
                            return (
                                <Tr key={item.id} >
                                    <Td >{item.id}</Td>
                                    <Td>{item.firstName} </Td>
                                    <Td>{item.lastName}</Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex >
    )
}