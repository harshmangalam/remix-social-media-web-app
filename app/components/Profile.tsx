import {
  ActionIcon,
  Avatar,
  Divider,
  Group,
  Menu,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import { RiSettingsLine } from "react-icons/ri";
import { MdOutlineFeedback, MdOutlineLogout, MdSettings } from "react-icons/md";
export default function Profile() {
  return (
    <Menu
      size={"lg"}
      control={
        <ActionIcon radius={"xl"}>
          <Avatar radius={"xl"} size={"md"} />
        </ActionIcon>
      }
    >
      <Menu.Item>
       
          <Group spacing={"xs"}>
            <Avatar radius={"xl"} size={"lg"} />
            <Stack spacing={0}>
              <Title order={5}>Harsh Mangalam</Title>
              <Text size="sm">harshmangalam</Text>
            </Stack>
          </Group>
       
      </Menu.Item>
      <Divider />
      <Menu.Item icon={<RiSettingsLine size={24} />}>Settings</Menu.Item>
      <Menu.Item icon={<MdOutlineFeedback size={24} />}>Feedback</Menu.Item>
      <Menu.Item icon={<MdOutlineLogout size={24} />}>Logout</Menu.Item>
    </Menu>
  );
}
