import { useContext } from "react";
import { GlobalContext } from "../script/globalContext";
import { useValorantAPI } from "../script/hooks/useValorantAPI";
import { AgentsModel } from "../script/types/AgentsModel";
import { Box, Button, Flex, Text, Tooltip } from "@mantine/core";
import Grid from "../components/Grid";
import { objectKeys } from "../script/objectKeys";
import { Link, NavLink } from "react-router-dom";
type DashCardName = "Agents" | "Maps" | "Weapons" | "Gamemodes" | "Skins";
type DashCardsModel = Record<
    DashCardName,
    {
        title: string;
        description: string;
        link: string;
    }
>;

const DashCards: DashCardsModel = {
    Agents: {
        title: "Agents",
        description: "View all agents in the game",
        link: "/agents",
    },
    Maps: {
        title: "Maps",
        description: "View all maps in the game",
        link: "/maps",
    },
    Weapons: {
        title: "Weapons",
        description: "View all weapons in the game",
        link: "/weapons",
    },
    Gamemodes: {
        title: "Gamemodes",
        description: "View all gamemodes in the game",
        link: "/gamemodes",
    },
    Skins: {
        title: "Skins",
        description: "View all skins in the game",
        link: "/skins",
    },
};

const Dashboard = () => {
    const globalContext = useContext(GlobalContext);
    // console.log(globalContext)
    const { data } = useValorantAPI<AgentsModel>({ root: "agents" });

    // data?.data.map((agent) => {
    //     agent.
    // })
    console.log(data);
    return (
        <Flex>
            <Flex className="header"></Flex>
            <Grid>
                {objectKeys(DashCards).map((el: keyof typeof DashCards) => {
                    return (
                        <Tooltip label={<p>{DashCards[el].description}</p>}>
                            <Button
                                key={el}
                                p={20}
                                bg="gray"
                                component={NavLink}
                                to={DashCards[el].link}
                            >
                                <Text c={"blue"}>{DashCards[el].title}</Text>
                                {/* <h1>{DashCards[el].title}</h1>
                            <p>{DashCards[el].description}</p> */}
                            </Button>
                        </Tooltip>
                    );
                })}
            </Grid>
        </Flex>
    );
};

export default Dashboard;
