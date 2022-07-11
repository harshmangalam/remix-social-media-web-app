import {
  ActionIcon,
  AppShell,
  Avatar,
  Button,
  Center,
  Group,
  Indicator,
  Navbar,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { Link } from "@remix-run/react";
import { useRef, useState } from "react";
import { BsImages } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { VscTextSize } from "react-icons/vsc";
import PhotoStoryFields from "~/components/Story/Create/PhotoStoryFields";
import TextStoryFields from "~/components/Story/Create/TextStoryFields";
import StoryPhotoPreview from "~/components/Story/Preview/StoryPhotoPreview";
import StoryTextPreview from "~/components/Story/Preview/StoryTextPreview";

type StoryType = "photo" | "text" | null;

export default function CreateStoriesRoute() {
  const [storyType, setStoryType] = useState<StoryType>();
  const [textStory, setTextStory] = useState({
    text: "",
    background: "#25262b",
  });

  const [selectedPhoto, setSelectedPhoto] = useState<string>("");

  function handleDiscardStory() {
    if (storyType === "photo") {
      setSelectedPhoto("");
    }
    if (storyType === "text") {
      setTextStory({ text: "", background: "#25262b" });
    }

    setStoryType(null);
  }
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 350 }} p="xs">
          <Navbar.Section mt="xs">
            <Group>
              <ActionIcon
                radius={"xl"}
                size={"lg"}
                variant="hover"
                color={"gray"}
                component={Link}
                to="/stories"
              >
                <CgClose size={24} />
              </ActionIcon>

              <FaFacebook size={32} />
            </Group>
          </Navbar.Section>

          <Navbar.Section mt="md">
            <Title mb={"sm"} order={4}>
              Your Story
            </Title>
            <UnstyledButton
              sx={(theme) => ({
                display: "block",
                width: "100%",
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[0]
                    : theme.black,

                "&:hover": {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[0],
                },
              })}
            >
              <Group>
                <Indicator
                  inline
                  size={16}
                  offset={8}
                  position="bottom-end"
                  color="red"
                  withBorder
                >
                  <Avatar
                    size="lg"
                    radius="xl"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                  />
                </Indicator>

                <Title order={5}>Harsh Mangalam</Title>
              </Group>
            </UnstyledButton>
          </Navbar.Section>

          {storyType === "photo" && (
            <Navbar.Section grow mt={"sm"}>
              <PhotoStoryFields setSelectedPhoto={setSelectedPhoto} />
            </Navbar.Section>
          )}
          {storyType === "text" && (
            <Navbar.Section grow mt={"sm"}>
              <TextStoryFields
                textStory={textStory}
                setTextStory={setTextStory}
              />
            </Navbar.Section>
          )}
          {storyType && (
            <Navbar.Section>
              <Group>
                <Button onClick={handleDiscardStory} color={"gray"}>
                  Discard
                </Button>
                <Button>Share to Story</Button>
              </Group>
            </Navbar.Section>
          )}
        </Navbar>
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
      {storyType === "photo" && (
        <StoryPhotoPreview selectedPhoto={selectedPhoto} />
      )}
      {storyType === "text" && <StoryTextPreview textStory={textStory} />}
      {!storyType && (
        <Center sx={{ height: "100%" }}>
          <Group spacing={"xl"}>
            {stories.map((story) => (
              <Paper
                onClick={() => setStoryType(story.type as StoryType)}
                radius={"md"}
                sx={(theme) => ({
                  width: 200,
                  height: 300,
                  background: theme.colors[story.background]["4"],
                  color: "white",
                  cursor: "pointer",
                })}
                shadow={"md"}
              >
                <Center sx={{ width: "100%", height: "100%" }}>
                  <Stack align={"center"} spacing={"xs"}>
                    <ThemeIcon radius="xl" size="xl" color={story.background}>
                      {story.icon}
                    </ThemeIcon>
                    <Text weight={"bold"}>{story.text}</Text>
                  </Stack>
                </Center>
              </Paper>
            ))}
          </Group>
        </Center>
      )}
    </AppShell>
  );
}

const stories = [
  {
    type: "photo",
    icon: <BsImages size={24} />,
    text: "Create a photo story",
    background: "indigo",
  },
  {
    type: "text",
    icon: <VscTextSize size={24} />,
    text: "Create a text story",
    background: "pink",
  },
];
