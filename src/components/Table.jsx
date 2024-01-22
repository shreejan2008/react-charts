
import {
    Table, 
    TableContainer, 
    Tbody, 
    Td, 
    Th, 
    Thead,
    Tr,
    Heading,
    Box
} from "@chakra-ui/react";

function DataTable({data}){
    console.log(data)
    return (
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th borderColor= {"#ffd5e5"} borderBottomWidth={1} paddingX={"20px"}>Name</Th>
                            <Th borderColor= {"#ffd5e5"} borderBottomWidth={1} paddingX={"20px"}>Equity</Th>
                            <Th borderColor= {"#ffd5e5"} borderBottomWidth={1} paddingX={"20px"}>Weight</Th>
                            <Th borderColor= {"#ffd5e5"} borderBottomWidth={1} paddingX={"20px"}>Returns</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            data?.map(
                                (item, key)=>
                                <Tr key={key}>
                                    <Td borderColor= {"#00000"} borderBottomWidth={1} paddingX={"20px"} textAlign={"start"}>{item.csbd_typename}</Td>
                                    <Td paddingX={"20px"}>{item.csbd_equity}</Td>
                                    <Td paddingX={"20px"}>{item.csbd_weight.toFixed(2)}</Td>
                                    <Td paddingX={"20px"}>{item.csbd_retprc.toFixed(2)}</Td>
                                </Tr>
                            )
                        }
                    </Tbody>
                </Table>
            </TableContainer>
    );
}

export default DataTable;