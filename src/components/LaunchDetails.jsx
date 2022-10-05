import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Heading, Box, Spacer, Tag, Flex, Text } from '@chakra-ui/react';
import * as API from '../services/launches';

export function LaunchDetails() {

    const [launch, setLaunch] = useState({});
    const { launchId } = useParams();

    useEffect(() => {
        API.getLaunchByFlightNumber(launchId)
            .then(setLaunch)
            .catch(console.log);
        }, [launchId]);

    return (
        <Box
            bg="gray.100"
            p={4}
            m={4}
            borderRadius="lg" 
        >
        {!launch ? (
            <div>Loading...</div>
        ) : (
            <>
            <Flex>
                <Text fontSize="2xl">
                    #{launch.flight_number} - Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                </Text>
                <Spacer />
                <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
                    {launch.launch_success ? "Success" : "Failure"}
                </Tag>
            </Flex>
            <Flex>
                <Text fontSize="2xl">Details: {launch.details} </Text>
            </Flex>
            <Flex>
                <Text fontSize="2xl">Rocket name: {!launch.rocket ? "---" : launch.rocket.rocket_name} </Text>
            </Flex>
            </>
        )}
        </Box>

    );
}