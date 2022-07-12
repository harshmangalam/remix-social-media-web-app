import { ActionIcon } from "@mantine/core";
import { SiIcon } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <ActionIcon
      
      color={"blue"}
      
      p={0}
      radius={"xl"}
      size="lg"
      aria-label="Brand Logo"
      component={Link}
      to="/"
    >
      <SiIcon size={32} />
    </ActionIcon>
  );
}
