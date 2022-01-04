import React from "react";
import { Box, Flex, Progress, Text} from "@chakra-ui/react";

export const Skills = () => {
    return (
        <>

            <Text pt={2} pb={2} fontSize='3xl' fontWeight={'bold'}>My skills</Text>





            <Flex justify={"space-between"} direction={"row"} pb={2}>
                <Box bg='green.300' w={'15%'} alignItems={"center"} textAlign={"center"}>
                    HTML
                </Box>
                <Progress colorScheme='green' height='32px' value={90} hasStripe w={"75%"}/>
                <Box  w={'10%'} alignItems={"center"} textAlign={"center"}>
                    90 %
                </Box>
            </Flex>

            <Flex justify={"space-between"} direction={"row"} pb={2}>
                <Box bg='green.300' w={'15%'} alignItems={"center"} textAlign={"center"}>
                    CSS
                </Box>
                <Progress colorScheme='green' height='32px' value={90} hasStripe w={"75%"}/>
                <Box  w={'10%'} alignItems={"center"} textAlign={"center"}>
                    90 %
                </Box>
            </Flex>

            <Flex justify={"space-between"} direction={"row"} pb={2}>
                <Box bg='green.300' w={'15%'} alignItems={"center"} textAlign={"center"}>
                    JavaScript
                </Box>
                <Progress colorScheme='green' height='32px' value={80} hasStripe w={"75%"}/>
                <Box  w={'10%'} alignItems={"center"} textAlign={"center"}>
                    80 %
                </Box>
            </Flex>

            <Flex justify={"space-between"} direction={"row"} pb={2}>
                <Box bg='green.300' w={'15%'} alignItems={"center"} textAlign={"center"}>
                    React
                </Box>
                <Progress colorScheme='green' height='32px' value={80} hasStripe w={"75%"}/>
                <Box  w={'10%'} alignItems={"center"} textAlign={"center"}>
                    80 %
                </Box>
            </Flex>

            <Flex justify={"space-between"} direction={"row"} pb={2}>
                <Box bg='green.300' w={'15%'} alignItems={"center"} textAlign={"center"}>
                    TypeScript
                </Box>
                <Progress colorScheme='green' height='32px' value={70} hasStripe w={"75%"}/>
                <Box  w={'10%'} alignItems={"center"} textAlign={"center"}>
                    70 %
                </Box>
            </Flex>

            <Flex justify={"space-between"} direction={"row"} pb={2}>
                <Box bg='green.300' w={'15%'} alignItems={"center"} textAlign={"center"}>
                    Redux
                </Box>
                <Progress colorScheme='green' height='32px' value={80} hasStripe w={"75%"}/>
                <Box  w={'10%'} alignItems={"center"} textAlign={"center"}>
                    80 %
                </Box>
            </Flex>

            <Flex justify={"space-between"} direction={"row"} pb={2}>
                <Box bg='green.300' w={'15%'} alignItems={"center"} textAlign={"center"}>
                    PhotoShop
                </Box>
                <Progress colorScheme='green' height='32px' value={60} hasStripe w={"75%"}/>
                <Box  w={'10%'} alignItems={"center"} textAlign={"center"}>
                    80 %
                </Box>
            </Flex>

            <Flex justify={"space-between"} direction={"row"} pb={2}>
                <Box bg='green.300' w={'15%'} alignItems={"center"} textAlign={"center"}>
                    UI Design
                </Box>
                <Progress colorScheme='green' height='32px' value={50} hasStripe w={"75%"}/>
                <Box  w={'10%'} alignItems={"center"} textAlign={"center"}>
                    80 %
                </Box>
            </Flex>

        </>
    )
}