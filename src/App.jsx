import { ChakraProvider } from "@chakra-ui/react";
import { Image, Heading } from "@chakra-ui/react";
import { LaunchItem } from "./components/LaunchItem";
import React, { useState, useEffect } from 'react';
import logo from "./assets/spacex-logo.svg";

import * as API from "./services/launches"

export function App() {

  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

   return (
    <>
      <Image m={4} src={logo} width={300} />
      <Heading as="h1" m={4} size="lg">SpaceX Launches</Heading>
      <section>
        {launches.map((launch) => (
          <LaunchIt em key={launch.flight_number} {...launch} />
        ))}
      </section>
    </>
  );
}
