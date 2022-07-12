import { Input } from "@mantine/core";
import { BiSearch } from "react-icons/bi";

export default function SearchHome() {
  return (
    <Input
      radius={"xl"}
      size={"sm"}
      variant="filled"
      icon={<BiSearch size={20} />}
    />
  );
}
