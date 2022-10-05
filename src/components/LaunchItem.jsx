import { Box, Button, Icon, Flex, Spacer, Text, Tag } from "@chakra-ui/react";
import { HiCalendar } from 'react-icons/hi';
import dayjs from "dayjs";
import "dayjs/locale/es";

export function LaunchItem(launch) {
    return (
        <Box
            bg="gray.100"
            p={4}
            m={4}
            borderRadius="lg" 
        >
        <Flex>
            <Text fontSize="2xl">
                Mission <strong>{launch.mission_name}</strong>
                ({launch.launch_year})
            </Text>
            <Spacer />
            <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
                {launch.launch_success ? "Success" : "Failure"}
            </Tag>
        </Flex>
        <Flex align="center">
            <Icon as={HiCalendar} color="gray.500" />
            <Text fontSize="sm" ml={1}>
                {dayjs(launch.launch_date_local).locale("es").format("dddd D MMMM, YYYY, HH:MM")}
            </Text>
        </Flex>
        <Button mt={2} colorScheme="purple">
            More Details
        </Button>
        </Box>
    );
}