import { Flex } from '@mantine/core';
import React from 'react';

const CenteredContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <Flex w={"100%"} h={"100%"} p={32}
            // bg={"blue"} 
            direction={"column"} align={"center"}>
            <Flex w={"100%"} maw={1280} h={"100%"} pos={"relative"}
            // bg={"pink"}
            >
                {children}
            </Flex>
        </Flex>
    );
};

export default CenteredContent;