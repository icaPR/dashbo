import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Text,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UsersList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} p={"8"} bg="gray.800">
          <Flex mb="8" justify="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} w="8" color="gray.300">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data</Th>}
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td px={["4", "4", "6"]}>
                  <Box>
                    <Text fontWeight="bold">Jode da Silva</Text>
                    <Text fontSize="sm" color="gray.300">
                      josedasilva@email.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <Td px={["4", "4", "6"]}>
                    <Text>01 de Dez, 2022</Text>
                  </Td>
                )}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="pink"
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
