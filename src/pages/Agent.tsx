import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useValorantAPI } from '../script/hooks/useValorantAPI';
import { Flex, Image, Loader, LoadingOverlay } from '@mantine/core';
import CenteredContent from '../components/CenteredContent';
import { AgentModel } from '../script/types/AgentsModel';
import "./Agent.scss"

const Agent = () => {
    const { uuid } = useParams();

    const { data, error, loading } = useValorantAPI<AgentModel>({ root: `agents`, params: { uuid } });

    let gradient = useMemo(() => {
        return data?.data.backgroundGradientColors.map((color, _id) => {
            return `#${color}`
        }).join(", ")
        // console.log(gradient)
    }, [data?.data])

    return (
        <CenteredContent>
            {/* // true ? <Flex w={"100%"} h={"calc(100vh - 64px)"} align={'center'} justify={"center"}><Loader color='red' size={"xl"} /></Flex> :  */}
            <Flex className='imageContainer' direction={"row"} style={{
                // background: ,
                backdropFilter: "blur(24px)",
                backgroundImage: `url(${data?.data.background}), linear-gradient( ${gradient})`,

            }}>
                <Image src={data?.data.fullPortraitV2} maw={256} h={480} fit="cover" />
                {/* <Text>{data?.data.}</Text> */}
            </Flex>
            <LoadingOverlay visible={loading || !data} />
            {/* {JSON.stringify(data, null, 4)} */}
        </CenteredContent>
    );
};

export default Agent;