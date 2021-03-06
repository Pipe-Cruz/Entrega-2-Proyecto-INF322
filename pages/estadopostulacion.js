import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import {
    Input,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Image,
    Stack,
    Text,
    Button,
    ButtonGroup,
    Box,
  } from "@chakra-ui/react"

export default function Home() {
    const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Estado Postulacion</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/utfsm.ico" />
      </Head>

      <main className={styles.main}>

      <Box bg='#319795' w='100%' p={2} color='white'>
          <Stack spacing={4} direction='row' align='center'>
            <Button colorScheme="#319795" size="md" onClick={() => router.push("http://localhost:3000")}>Inicio</Button>
            <Button colorScheme="#319795" size="md" onClick={() => router.push("login")}>Iniciar sesión</Button>
          </Stack>
        </Box>
        
        <Image src='/utfsmlogo.png' alt='UTFSM' />
        
        <Image src='/portada.jpeg' alt='UTFSM' />

        <Box bg='white' w='100%' p={4} color='white'/>


        <Box bg="#319795" w="100%" p={4} color="white">
        <Text fontSize="2xl">Estado de postulación</Text>

        <Table variant="simple">
  <Thead>
    <Tr>
      <Th>Carrera</Th>
      <Th>Estado</Th>
      <Th></Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>1. Ingeniería Civil Informática</Td>
      <Td>Aceptada</Td>
      <Td>
        <Button colorScheme="blue" size="md" onClick={() => router.push("postulacioncancelada")}>Cancelar Postulacion</Button>
      </Td>
    </Tr>
    <Tr>
      <Td>2. Ingeniería Civil Electrónica</Td>
      <Td>Rechazada</Td>
      <Td>
        <Button colorScheme="blue" size="md" onClick={() => router.push("postulacioncancelada")}>Cancelar Postulacion</Button>
      </Td>
    </Tr>
    <Tr>
      <Td>3. Ingeniería Civil Ambiental</Td>
      <Td>En Proceso</Td>
      <Td>
        <Button colorScheme="blue" size="md" onClick={() => router.push("postulacioncancelada")}>Cancelar Postulacion</Button>
      </Td>
    </Tr>
    <Tr>
      <Td>4. Arquitectura</Td>
      <Td>Cancelada</Td>
      <Td>
        <Button colorScheme="blue" size="md" onClick={() => router.push("postulacioncancelada")}>Cancelar Postulacion</Button>
      </Td>
    </Tr>
  </Tbody>
  <Tfoot>
  </Tfoot>
</Table>

      <br/>
      <Stack direction="row" spacing={4} align="center">
        <Button colorScheme="blue" size="md" onClick={() => router.push("http://localhost:3000")}>Volver a la pagina principal</Button>
      </Stack>

        </Box>
      </main>
    </div>
  )
}
