import {
    ActionIcon,
    Button,
    Flex,
    Text,
    useComputedColorScheme,
    useMantineColorScheme,
} from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import { useLocalStorage } from "../script/hooks/useLocalStorage";

const links = [
    { name: "Dashboard", to: "/" },
    { name: "Agents", to: "/agents" },
    { name: "Maps", to: "/maps" },
    { name: "Weapons", to: "/weapons" },
    // { name: "Gamemodes", to: "/gamemodes" },
    { name: "About", to: "/about" },
];

const Navbar = () => {
    const computedColorScheme = useComputedColorScheme();
    const [localColorScheme, setLocalColorScheme] = useLocalStorage<
        "light" | "dark"
    >("colorScheme", "dark");
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const changeColorScheme = (newColorScheme: "light" | "dark") => {
        setLocalColorScheme(newColorScheme);
        setColorScheme(newColorScheme);
    };
    return (
        <Flex
            w={"100%"}
            h={"100%"}
            p={20}
            justify={"space-between"}
            direction={"column"}
        >
            {/* <Icon></Icon> */}
            <Flex direction={"column"} gap={16} w={"100%"}>
                {links.map((link) => (
                    <Button
                        key={link.to}
                        component={NavLink}
                        to={link.to}
                        size={"md"}
                        ta={"left"}
                        variant="light"
                    >
                        <Text fz={16} ta={"left"}>
                            {link.name}
                        </Text>
                    </Button>
                ))}
            </Flex>
            <ActionIcon
                onClick={() =>
                    changeColorScheme(
                        computedColorScheme === "light" ? "dark" : "light"
                    )
                }
            >
                {computedColorScheme === "light" ? (
                    <IconSun />
                ) : (
                    <IconMoonStars />
                )}
            </ActionIcon>
            {/* <Button component={NavLink} to="/agents" size={"lg"}>
            </Button> */}
        </Flex>
    );
};

export default Navbar;
