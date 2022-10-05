import { Image } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { LaunchList } from './components/LaunchList';
import { LaunchDetails } from './components/LaunchDetails';
import logo from "./assets/spacex-logo.svg";

export function App() {
   return (
    <>
      <Image align="center" m={4} src={logo} width={300} />

      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
      </Routes>

    </>
  );
}
