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
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/home");
  };
  const handleClick = () => {
    navigate("/overview");
  };
  return (
    <Box as="nav" bg="bg-surface" boxShadow="md" padding={6}>
      <Flex justify="space-between">
        <Image
          onClick={handleLogoClick}
          className="hover-grow"
          paddingBottom={2}
          paddingRight={5}
          objectFit="scale-down"
          src={"/2022_AmberJongsma.png"}
          width="350px"
        ></Image>
        {isDesktop ? (
          <Flex>
            <ButtonGroup float="right" variant="link" spacing="8">
              {["OVERVIEW"].map((item) => (
                <Button onClick={handleClick} key={item}>
                  {item}
                </Button>
              ))}
            </ButtonGroup>
          </Flex>
        ) : (
          <IconButton
            onClick={handleClick}
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
