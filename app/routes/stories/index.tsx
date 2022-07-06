import { Box, Center, Paper, Stack, Text } from "@mantine/core";
import {BsImage} from "react-icons/bs"
export default function StoriesHomeRoute(){
    return (
        <Center sx={{height:"100%"}}>
            <Stack align={"center"}>
            <BsImage size={96} color="gray" />
            <Text size="xl" weight={"bold"} color={"gray"}>
                Select a story to open
            </Text>
            </Stack>
        </Center>
    )
}