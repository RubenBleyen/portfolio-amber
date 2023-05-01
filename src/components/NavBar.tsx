import {
  HStack,
  Image,
  Heading,
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { FiMenu } from 'react-icons/fi'

const NavBar = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
        <Box as="nav" padding={7} bg="bg-surface" boxShadow="md">
          <Center>
            <HStack spacing="10" justify="space-between">
            <Image src={logo} boxSize='60px'></Image>
            <Heading>Amber Jongsma</Heading>
              {isDesktop ? (
                <Flex float={'right'} justify="space-between" flex="1">
                  <ButtonGroup variant="link" spacing="8">
                    {['Home', 'Portfolio', 'About', 'Contact'].map((item) => (
                      <Button key={item}>{item}</Button>
                    ))}
                  </ButtonGroup>
                </Flex>
              ) : (
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              )}
            </HStack>
          </Center>
        </Box>
  );
};
export default NavBar;
