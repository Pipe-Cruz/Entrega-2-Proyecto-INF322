import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { 
  Box,
  Button, 
  ButtonGroup,
  Input,
  Text,
  Stack,
  Image, 
} from "@chakra-ui/react"

export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Registro</title>
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

      <Text fontSize="2xl">Registro</Text>
      <Box bg="#319795" w="100%" p={4} color="white">

        <Text fontSize="2xl">Correo Electrónico:</Text>
        <Input placeholder="user@gmail.com" />
        <Text fontSize="2xl">RUT:</Text>
        <Input placeholder="11.111.111-1" />
        <Text fontSize="2xl">Contraseña:</Text>
        <Input placeholder="" />
        <Text fontSize="2xl">Confirmar Contraseña:</Text>
        <Input placeholder="" />

      <Stack direction="row" spacing={4} align="center">
        <Button colorScheme="blue" size="md" onClick={() => router.push("login")}>Regístrate</Button>
      </Stack>

        
        </Box>
      </main>
    </div>
  )
}