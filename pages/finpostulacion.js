import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Stack } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { Select } from "@chakra-ui/react"

export default function Home() {
    const router = useRouter()
    return (
        <div className={styles.container}>
        <main className={styles.main}>

        <Box bg="#319795" w="40%" p={4} color="white">

        <Text fontSize="2xl">La postulación ha sido ingresada con éxito.</Text>

        <Stack direction="row" spacing={4} align="center">
            <Button colorScheme="blue" size="md" onClick={() => router.push("postulacion")}>Volver a la página principal</Button>
        </Stack>
        
        </Box>
      </main>
    </div>
    )
}    
