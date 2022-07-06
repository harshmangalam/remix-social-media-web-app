import {
  Avatar,
  Box,
  Button,
  Card,
  Image,
  Paper,
  SimpleGrid,
  Title,
} from "@mantine/core";

export default function Home() {
  return (
    <>
      {/* stories  */}

      <SimpleGrid cols={5}>
        {stories.map((story) => (
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
        ))}
      </SimpleGrid>
    </>
  );
}

const stories = [
  {
    thumbnail:
      "https://images.unsplash.com/photo-1649859394657-8762d8a4758a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    author: {
      id: "12endbnd",
      profilePic: "https://avatars.githubusercontent.com/u/10353856?v=4",
      name: "Harsh Mangalam",
    },
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1649859394657-8762d8a4758a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    author: {
      id: "12endbnd",
      profilePic: "https://avatars.githubusercontent.com/u/10353856?v=4",
      name: "Harsh Mangalam",
    },
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1649859394657-8762d8a4758a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    author: {
      id: "12endbnd",
      profilePic: "https://avatars.githubusercontent.com/u/10353856?v=4",
      name: "Harsh Mangalam",
    },
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1649859394657-8762d8a4758a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    author: {
      id: "12endbnd",
      profilePic: "https://avatars.githubusercontent.com/u/10353856?v=4",
      name: "Harsh Mangalam",
    },
  },
  {
    thumbnail:
      "https://images.unsplash.com/photo-1649859394657-8762d8a4758a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    author: {
      id: "12endbnd",
      profilePic: "https://avatars.githubusercontent.com/u/10353856?v=4",
      name: "Harsh Mangalam",
    },
  },
];
