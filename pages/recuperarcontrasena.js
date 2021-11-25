import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/react"
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()
    return (
      <div className={styles.container}>
  
        <main className={styles.main}>
  
        <Text fontSize="2xl">Recuperar contraseña</Text>
        <Box bg="#319795" w="40%" p={4} color="white">
          <p> Se le enviará un código de recuperación al correo enlazado a su RUT.</p>
          <Text fontSize="2xl">RUT:</Text>
          <Input placeholder="11.111.111-1" />
          <Text fontSize="2xl">Código de recuperación:</Text>
          <Input placeholder="" />
          <Text fontSize="2xl">Nueva contraseña:</Text>
          <Input placeholder="" />
  
            <Stack direction="row" spacing={4} align="center">
                <Button colorScheme="blue" size="md" onClick={() => router.push("postulacion")}>Ir a la página principal</Button>
            </Stack> 
        </Box>
        </main>
      </div>
    )
  }