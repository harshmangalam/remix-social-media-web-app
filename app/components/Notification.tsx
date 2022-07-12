import {
  Popover,
  Text,
  Button,
  Image,
  ActionIcon,
  Group,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdNotifications } from "react-icons/md";
export default function Notification() {
  const [opened, setOpened] = useState(false);

  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      target={
        <ActionIcon
          onClick={() => setOpened((o) => !o)}
          size={"md"}
          radius={"xl"}
        >
          <MdNotifications size={24} />
        </ActionIcon>
      }
      width={260}
      position="bottom"
    >
      <Group position="apart">
        <Title order={3}>Notifications</Title>
        <ActionIcon variant="hover" color={"blue"}>
          <FiMoreHorizontal size={24} />
        </ActionIcon>
      </Group>
    </Popover>
  );
}
