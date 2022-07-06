import { Avatar, Image, Paper, Title } from "@mantine/core";

export default function StoryCard({ story }) {
  return (
    <Paper sx={{ position: "relative" }}>
      <Image src={story.thumbnail} radius="md" alt={story.author.name} />

      <Avatar
        sx={{ position: "absolute", top: 0 }}
        m={"xs"}
        src={story.author.profilePic}
        alt={story.author.name}
      />
      <Title
        order={6}
        sx={{
          position: "absolute",
          bottom: 0,
        }}
        m="xs"
      >
        {story.author.name}
      </Title>
    </Paper>
  );
}
