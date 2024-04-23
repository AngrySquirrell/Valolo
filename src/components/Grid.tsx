import { Flex } from '@mantine/core';
import './Grid.scss';
import React from 'react';

const Grid = ({ children }: { children: React.ReactNode }) => {
    return (
        <Flex className='gridWrapper' p={20} align={"center"} justify={"center"}>
            <Flex gap={12} className='grid' w={"100%"} maw={1280}>
                {children}
            </Flex>
        </Flex>
    );
};

export default Grid;