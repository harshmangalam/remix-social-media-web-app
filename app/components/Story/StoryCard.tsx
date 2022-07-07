import { Avatar, Box, Image, Indicator, Paper, Title } from "@mantine/core";

export default function StoryCard({ story }) {
  return (
    <Paper sx={{ position: "relative" }}>
      <Image src={story.thumbnail} radius="md" alt={story.author.name} />
      <Box sx={{ position: "absolute", top: 0 }}>
      <Indicator inline size={16} offset={7} position="bottom-end" color="red" withBorder>
      <Avatar
        size="lg"
        radius="xl"
        src={story.author.profilePic}
      />
    </Indicator>
      </Box>
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
