import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useValorantAPI } from "../script/hooks/useValorantAPI";
import {
    Badge,
    Divider,
    Flex,
    Image,
    Loader,
    LoadingOverlay,
    Text,
    Tooltip,
} from "@mantine/core";
import CenteredContent from "../components/CenteredContent";
import { AgentModel } from "../script/types/AgentsModel";
import "./Agent.scss";

const Agent = () => {
    const { uuid } = useParams();

    const { data, error, loading } = useValorantAPI<AgentModel>({
        root: `agents`,
        params: { uuid },
    });

    let gradient = useMemo(() => {
        return data?.data.backgroundGradientColors
            .map((color, _id) => {
                return `#${color}`;
            })
            .join(", ");
        // console.log(gradient)
    }, [data?.data]);

    return (
        <>
            <CenteredContent>
                {/* // true ? <Flex w={"100%"} h={"calc(100vh - 64px)"} align={'center'} justify={"center"}><Loader color='red' size={"xl"} /></Flex> :  */}
                <Flex
                    className="imageContainer"
                    direction={"row"}
                    style={{
                        // background: ,
                        backdropFilter: "blur(24px)",
                        backgroundImage: `url(${data?.data.background}), linear-gradient( ${gradient})`,
                    }}
                >
                    <Image
                        src={data?.data.fullPortraitV2}
                        w={256}
                        h={480}
                        fit="cover"
                    />
                </Flex>
                <Flex
                    w={"100%"}
                    direction={"column"}
                    gap={32}
                    justify={"left"}
                    align={"center"}
                    m={24}
                    p={12}
                    bg={`#${data?.data.backgroundGradientColors[0]}`}
                    style={{
                        borderRadius: "5px",
                        border: `1px solid #${data?.data.backgroundGradientColors[1]}`,
                    }}
                >
                    <Flex direction={"column"} align={"center"}>
                        <Flex
                            w={"60%"}
                            justify={"space-around"}
                            align={"center"}
                        >
                            <Tooltip
                                label={<Text>{data?.data.developerName}</Text>}
                            >
                                <Text fz={32}>{data?.data.displayName}</Text>
                            </Tooltip>
                            <Badge
                                color={`#${data?.data.backgroundGradientColors[2]}`}
                                leftSection={
                                    <Image
                                        src={data?.data.role.displayIcon}
                                        w={12}
                                        h={12}
                                        color="white"
                                    />
                                }
                            >
                                {data?.data.role.displayName}
                            </Badge>
                        </Flex>
                        <Text ta={"center"} w={"60%"}>
                            {data?.data.description}
                        </Text>
                    </Flex>
                    <div className="divider" />
                    <Flex
                        w={"100%"}
                        align={"start"}
                        justify={"center"}
                        gap={32}
                    >
                        {data?.data.abilities.map((ability, id) => {
                            return (
                                <Tooltip
                                    multiline
                                    position="bottom"
                                    withArrow
                                    label={
                                        <Text maw={240}>
                                            {ability.description}
                                        </Text>
                                    }
                                >
                                    <Flex
                                        w={"15%"}
                                        direction={"column"}
                                        justify={"center"}
                                        align={"center"}
                                        gap={8}
                                    >
                                        <Image
                                            src={ability.displayIcon}
                                            width={48}
                                            w={48}
                                            height={48}
                                            h={48}
                                        />
                                        <Text ta={"center"}>
                                            {ability.displayName}
                                        </Text>
                                        <Text>
                                            <b>Slot : </b>
                                            {ability.slot}
                                        </Text>
                                    </Flex>
                                </Tooltip>
                            );
                        })}
                    </Flex>
                </Flex>

                <LoadingOverlay visible={loading || !data} />
                {/* {JSON.stringify(data, null, 4)} */}
            </CenteredContent>
            <CenteredContent>
                <Text>{JSON.stringify(data?.data, null, 4)}</Text>
            </CenteredContent>
        </>
    );
};

export default Agent;
