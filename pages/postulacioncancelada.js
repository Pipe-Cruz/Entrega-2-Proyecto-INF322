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
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Box bg="#319795" w="40%" p={4} color="white">
        <Text fontSize="2xl">La postulación ha sido cancelada con éxito</Text>
        <br/>

      <Stack direction="row" spacing={4} align="center">
        <Button colorScheme="blue" size="md" onClick={() => router.push("postulacion")}>Volver a la página principal</Button>
        <Button colorScheme="blue" size="md" onClick={() => router.push("estadopostulacion")}>Revisar estado postulación</Button>
       </Stack>

        
        </Box>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
