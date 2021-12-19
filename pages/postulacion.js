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
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Image,
} from "@chakra-ui/react"

export default function Home() {
    const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Postulacion</title>
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
        <Tabs>
        <TabList>
            <Tab>Vía de Ingreso</Tab>
            <Tab>Datos Personales y Académicos</Tab>
            <Tab>Selección de Carrera</Tab>
        </TabList>
        <TabPanels>
            <TabPanel> 
                <Text fontSize="2xl">Periodo:</Text>
                <Select bg="white" borderColor="white" color="black">
                  <option value="option1">Primer Periodo 2022</option>
                  <option value="option2">Segundo Periodo 2022</option>
                </Select>

                <Text fontSize="2xl">Tipo de admisión:</Text>
                <Select bg="white" borderColor="white" color="black">
                  <option value="option1">Admisión Especial a Carreras Diurnas</option>
                  <option value="option2">Carreras Técnicas Universitarias</option>
                  <option value="option3">Carreras Vespertinas</option>
                  <option value="option3">Programas de la Academia de Ciencias Aeronáuticas</option>
                  <option value="option3">Programas de Postgrado</option>
                </Select>

                <Text fontSize="2xl">Vía de ingreso:</Text>
                <Select bg="white" borderColor="white" color="black">
                  <option value="option1">Ingreso Deportista Destacada Élite</option>
                  <option value="option2">Ingreso desde otras Instituciones de Educación Superior</option>
                  <option value="option3">Ingreso Especial NEM</option>
                </Select>

            </TabPanel>

            <TabPanel>
            <Text fontSize="2xl">Ingresar datos:</Text>
              <Text fontSize="2xl">RUT:</Text>
              <Input placeholder="11.111.111-1" />
              <Text fontSize="2xl">Nombre completo:</Text>
              <Input placeholder="" />
              <Text fontSize="2xl">Fecha de nacimiento:</Text>
              <Input placeholder="01/11/2001" />
            </TabPanel>

            <TabPanel>
            <p>Selecciona tus preferencias, puedes elegir hasta tres opciones.</p>
            <Text fontSize="2xl">Campus:</Text>
                <Select bg="white" borderColor="white" color="black">
                  <option value="option1">Campus Casa Central Valparaíso</option>
                  <option value="option3">Campus San Joaquín</option>
                  <option value="option3">Campus Vitacura</option>                 
                  <option value="option3">Sede Concepción</option>
                  <option value="option2">Sede Viña del Mar</option>
                  <option value="option3">Campus Guayaquil</option>
                </Select>

                <Text fontSize="2xl">Carrera:</Text>
                <Menu closeOnSelect={false}>
  <MenuButton as={Button} color="black" colorScheme="black" bg="white">
    Seleccionar carreras
  </MenuButton>
  <MenuList minWidth="240px" color="black">
    <MenuOptionGroup  color="black" title="Carreras" type="checkbox">
      <MenuItemOption color="black" value="option1">Arquitectura</MenuItemOption>
      <MenuItemOption color="black" value="option2">Ingeniería Civil</MenuItemOption>
      <MenuItemOption color="black" value="option3">Ingeniería Civil Ambiental</MenuItemOption>
      <MenuItemOption color="black" value="option4">Ingeniería Civil Electrónica</MenuItemOption>
      <MenuItemOption color="black" value="option5">Ingeniería Civil Informática</MenuItemOption>    
    </MenuOptionGroup>
  </MenuList>
</Menu>
            </TabPanel>

        </TabPanels>
        </Tabs>

        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="blue" size="md" onClick={() => router.push("finpostulacion")}>Finalizar Postulación</Button>
          <Button colorScheme="blue" size="md" onClick={() => router.push("estadopostulacion")}>Ver estado de postulación</Button>
        </Stack>
      </Box>
      </main>
    </div>
  )
}


















