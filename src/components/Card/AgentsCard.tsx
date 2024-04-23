import React, { useEffect, useMemo, useState } from 'react';
import { Card, Image, Text, Badge, Group, Flex } from '@mantine/core';
import { AgentDataModel } from '../../script/types/AgentsModel';
import { NavLink } from 'react-router-dom';

const AgentsCard = ({ data }: { data: AgentDataModel | undefined }) => {
    // const [gradient, setGradient] = useState<string | undefined>("")
    let gradient = useMemo(() => {
        return data?.backgroundGradientColors.map((color, _id) => {
            return `#${color}`
        }).join(", ")
        // console.log(gradient)
    }, [data])

    // ${data?.backgroundGradientColors.map((color, _id) => color).join(", ")}
    return (
        <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            component={NavLink}
            to={`/agents/${data?.uuid}`}
            w={160}
        // href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        >
            <Card.Section id='esfsefoiiuui' style={{
                background: `linear-gradient( ${gradient})`,
                backdropFilter: "blur(24px)",
            }}>
                {/* <Box> */}

                <Image
                    src={data?.displayIcon}
                    height={160}
                    width={160}
                    alt="icon"
                />
                {/* </Box> */}
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs" display={"flex"} style={{ flexDirection: "column" }}>
                <Text fw={500}>{data?.displayName}</Text>
                <Badge color="pink" leftSection={<Image src={data?.role.displayIcon} w={12} h={12} color='white' />}>{data?.role.displayName}</Badge>
            </Group>

            {/* s */}

        </Card>
    );
};

export default AgentsCard;