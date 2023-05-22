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

export const UserTable = () => {
    const [id, setId] = useState('')
    const [emri, setEmri] = useState('')
    const [mbiemri, setMbiemri] = useState('')
    const [lista, setLista] = useState([{ id: 0, emri: 'placehoder', mbiemri: 'placeholder' }])

    const funksioniShto = () => {
        setLista(prev => ([...prev, { id: id, emri: emri, mbiemri: mbiemri }]))
    }

    return (
        <Flex>
            <Box>
                <Input placeholder='Sheno Id' onChange={(event) => setId(event.target.value)} />
                <Input placeholder='Sheno Emrin' onChange={(event) => setEmri(event.target.value)} />
                <Input placeholder='Sheno Mbiemrin' onChange={(event) => setMbiemri(event.target.value)} />
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
                        {lista.map(item => {
                            return <User key={item.id} id={item.id} emri={item.emri} mbiemri={item.mbiemri} />
                            /* return <Tr>
                                <Td key={item.id}>{item.id}</Td>
                                <Td>{item.emri} </Td>
                                <Td>{item.mbiemri}</Td>
                            </Tr> */

                        })}
                        {/* <User id={id} emri={emri} mbiemri={mbiemri} /> */}
                        {/* <Td>{id}</Td>
                        <Td>{emri}</Td>
                        <Td>{mbiemri}</Td> */}
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    )
}