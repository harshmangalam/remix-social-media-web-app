import { SimpleGrid } from "@mantine/core";
import StoryCard from "~/components/Story/StoryCard";

export default function IndexRoute() {
  return (
    <>
      {/* stories  */}

      <SimpleGrid cols={5}>
        {stories.map((story) => (
          <StoryCard story={story} />
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
