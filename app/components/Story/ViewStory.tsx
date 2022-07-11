import { Center, Image, Paper } from "@mantine/core";

interface ViewStoryProps {
  author: {
    name: string;
  };
  photo: string;
}
export default function ViewStory({ author, photo }: ViewStoryProps) {
  return (
    <Center
      sx={{
        width: "100%",
        maxWidth: "400px",
        flexGrow: 1,
        margin: "auto",
        height: "100%",
      }}
    >
      <Image
        height={"100%"}
        width="100%"
        alt={author.name}
        radius={"md"}
        src={photo}
        fit={"cover"}
      />
    </Center>
  );
}
