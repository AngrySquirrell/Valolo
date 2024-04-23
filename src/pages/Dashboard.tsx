import { useContext } from "react";
import { GlobalContext } from "../script/globalContext";
import { useValorantAPI } from "../script/hooks/useValorantAPI";
import { AgentsModel } from "../script/types/AgentsModel";
import { Box, Flex } from "@mantine/core";
import Grid from "../components/Grid";
import { objectKeys } from "../script/objectKeys";
type DashCardName = "Agents" | "Maps" | "Weapons" | "Gamemodes" | "Skins"
type DashCardsModel = Record<DashCardName, {
    title: string,
    description: string,
    link: string
}>


const DashCards: DashCardsModel = {
    Agents: {
        title: "Agents",
        description: "View all agents in the game",
        link: "/agents"
    },
    Maps: {
        title: "Maps",
        description: "View all maps in the game",
        link: "/maps"
    },
    Weapons: {
        title: "Weapons",
        description: "View all weapons in the game",
        link: "/weapons"
    },
    Gamemodes: {
        title: "Gamemodes",
        description: "View all gamemodes in the game",
        link: "/gamemodes"
    },
    Skins: {
        title: "Skins",
        description: "View all skins in the game",
        link: "/skins"
    },
}

const Dashboard = () => {
    const globalContext = useContext(GlobalContext)
    // console.log(globalContext)
    const { data } = useValorantAPI<AgentsModel>({ root: "agents" })

    // data?.data.map((agent) => {
    //     agent.
    // })
    console.log(data)
    return (
        <Flex>
            <Flex className="header">

            </Flex>
            <Grid>
                {objectKeys(DashCards).map((el: keyof typeof DashCards) => {
                    return (
                        <Box key={el} p={20} bg="gray">
                            <h1>{DashCards[el].title}</h1>
                            <p>{DashCards[el].description}</p>
                        </Box>
                    )
                })}
            </Grid>
        </Flex>
    );
};

export default Dashboard;