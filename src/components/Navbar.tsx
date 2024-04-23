import { Button, Flex, Text } from '@mantine/core';

import { NavLink } from 'react-router-dom';

const links = [
    { name: "Agents", to: "/agents" },
    { name: "Maps", to: "/maps" },
    { name: "Weapons", to: "/weapons" },
    { name: "Gamemodes", to: "/gamemodes" },
    { name: "About", to: "/about" },
];

const Navbar = () => {
    return (
        <Flex w={"100%"} h={"100%"} p={20} >
            {/* <Icon></Icon> */}
            <Flex direction={"column"} gap={16} w={"100%"}>

                {
                    links.map((link) => (
                        <Button
                            key={link.to}
                            component={NavLink}
                            to={link.to}
                            size={"md"}
                            ta={"left"}
                            variant='light'
                        >
                            <Text fz={16} ta={"left"}>
                                {link.name}
                            </Text>
                        </Button>
                    ))
                }
            </Flex>
            {/* <Button component={NavLink} to="/agents" size={"lg"}>
            </Button> */}
        </Flex>
    );
};

export default Navbar;