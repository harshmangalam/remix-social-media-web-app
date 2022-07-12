import {
  AppShell,
  Group,
  Header,
  Navbar,
  SimpleGrid,
} from "@mantine/core";
import Logo from "~/components/Logo";
import Notification from "~/components/Notification";
import Profile from "~/components/Profile";
import SearchHome from "~/components/SearchHome";
import StoryCard from "~/components/Story/StoryCard";

export default function IndexRoute() {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar p="xs" width={{ base: 300 }}></Navbar>}
      header={
        <Header height={60} p="xs">
          <Group position="apart">
            <Group spacing={"sm"}>
              <Logo />
              <SearchHome />
            </Group>

            <Group spacing={"sm"}>
              <Notification />
              <Profile />
            </Group>
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <SimpleGrid cols={5}>
        {stories.map((story) => (
          <StoryCard story={story} />
        ))}
      </SimpleGrid>
    </AppShell>
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
