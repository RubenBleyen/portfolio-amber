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
import logo from "../assets/2022_AmberJongsma.png";
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="nav" padding={7} bg="bg-surface" boxShadow="md">
        <Flex justify="space-between" marginLeft={10}  marginRight={10}>
          <Image objectFit="scale-down" src={logo} width="250px" ></Image>
          {isDesktop ? (
            <Flex>
              <ButtonGroup float="right" variant="link" spacing="8">
                {["OVERVIEW"].map((item) => (
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
        </Flex>
    </Box>
  );
};
export default NavBar;
