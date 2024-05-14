import React, { useEffect, useState } from "react";
import Grid from "../components/Grid";
import AgentsCard from "../components/Card/AgentsCard";
import { AgentsModel } from "../script/types/AgentsModel";
import { useValorantAPI } from "../script/hooks/useValorantAPI";
import { Button, Flex, LoadingOverlay } from "@mantine/core";
import "./Agents.scss";

const filterButtons = [
    { target: "Controller" },
    { target: "Duelist" },
    { target: "Initiator" },
    { target: "Sentinel" },
];

const Agents = () => {
    const [filter, setFilter] = useState<string>("");

    const { data, loading } = useValorantAPI<AgentsModel>({ root: "agents" });

    return (
        <>
            <Flex className="buttonContainer">
                {filterButtons.map((el) => {
                    return (
                        <Button
                            className="triButton"
                            variant={filter === el.target ? "filled" : "light"}
                            color="rgba(128, 48, 48, 1)"
                            onClick={() => {
                                if (filter && filter !== el.target)
                                    return setFilter(el.target);
                                if (filter) return setFilter("");
                                setFilter(el.target);
                            }}
                        >
                            {el.target}
                        </Button>
                    );
                })}
            </Flex>

            <Grid>
                {data?.data
                    .sort((a, b) => {
                        return a.displayName.localeCompare(b.displayName);
                    })
                    .filter((el) => {
                        if (filter === "") return true;
                        return el.role.displayName === filter;
                    })
                    .map((el, id) => {
                        return (
                            <>
                                <AgentsCard data={el} key={id} />
                            </>
                        );
                    })}
            </Grid>
            <LoadingOverlay visible={loading} />
        </>
    );
};

export default Agents;
