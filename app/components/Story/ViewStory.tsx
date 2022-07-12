import {
  ActionIcon,
  Avatar,
  Box,
  Group,
  Image,
  Paper,
  Progress,
  Text,
} from "@mantine/core";
import { BsFillPlayFill, BsFillVolumeMuteFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";

interface ViewStoryProps {
  author: {
    name: string;
  };
  photo: string;
}
export default function ViewStory({ author, photo }: ViewStoryProps) {
  return (
    <Paper
      radius={0}
      sx={(theme) => ({
        background: theme.colors.dark,
        width: "100%",
        height: "100%",
      })}
      py="md"
    >
      <Box sx={{ maxWidth: 450, position: "relative" }} mx="auto">
        <Image
          width={450}
          height={"100%"}
          alt={author.name}
          src={photo}
          fit={"cover"}
          radius={"md"}
        />
        <Box mt={"xs"}>
          <Progress color={"orange"} value={40} />
        </Box>

        <Group
          sx={{ position: "absolute", top: 0, right: 0, left: 0 }}
          p={"md"}
          position="apart"
        >
          <Group spacing={"sm"}>
            <Avatar radius={"xl"} />
            <Text weight={"bold"} color={"dark"}>
              Harsh Mangalam
            </Text>
          </Group>

          <Group spacing={"xs"}>
            <ActionIcon>
              <BsFillPlayFill size={24} />
            </ActionIcon>
            <ActionIcon>
              <BsFillVolumeMuteFill size={24} />
            </ActionIcon>
            <ActionIcon>
              <FiMoreHorizontal size={24} />
            </ActionIcon>
          </Group>
        </Group>
      </Box>
    </Paper>
  );
}
