import { useState, useEffect } from 'react';
import { Heading, Box, Image } from '@chakra-ui/react';
import { LaunchItem } from './LaunchItem';
import * as API from '../services/launches';

  export function LaunchList() {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        API.getAllLaunches()
            .then(setLaunches)
            .catch(console.log);
      }, []);

    return (
        <>
            <Heading align="center" as="h1" m={4} size="lg">SpaceX Launches</Heading>

            {launches.length === 0 ? (
                <Box
                    bg="gray.100"
                    p={4}
                    m={4}
                    borderRadius="lg" 
                >
                    <div>Cargando...</div>
                </Box>
            ) : (
                <section>
                    {launches.map((launch) => (
                        <LaunchItem key={launch.flight_number} {...launch} />
                    ))}
                </section>
            )}

        </>
    );
}