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
import { BsImages } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { VscTextSize } from "react-icons/vsc";
export default function CreateStoriesRoute() {
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

          <Navbar.Section grow mt="md">
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

          <Navbar.Section>
            <Group>
              <Button color={"gray"}>Discard</Button>
              <Button>Share to Story</Button>
            </Group>
          </Navbar.Section>
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
      <Center sx={{ height: "100%" }}>
        <Group spacing={"xl"}>
          <Paper
            radius={"md"}
            sx={(theme) => ({
              width: 200,
              height: 300,
              background: theme.colors.indigo[4],
              color: "white",
            })}
            shadow={"md"}
          >
            <Center sx={{ width: "100%", height: "100%" }}>
              <Stack align={"center"} spacing={"xs"}>
                <ThemeIcon radius="xl" size="xl" color="indigo">
                  <BsImages size={24} />
                </ThemeIcon>
                <Text weight={"bold"}>Create a photo story</Text>
              </Stack>
            </Center>
          </Paper>
          <Paper
            radius={"md"}
            sx={(theme) => ({
              width: 200,
              height: 300,
              background: theme.colors.pink[4],
              color: "white",
            })}
            shadow={"md"}
          >
            <Center sx={{ width: "100%", height: "100%" }}>
              <Stack align={"center"} spacing={"xs"}>
                <ThemeIcon radius="xl" size="xl" color="pink">
                  <VscTextSize size={24} />
                </ThemeIcon>
                <Text weight={"bold"}>Create a text story</Text>
              </Stack>
            </Center>
          </Paper>
        </Group>
      </Center>
    </AppShell>
  );
}
