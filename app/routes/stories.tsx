import {
    ActionIcon,
    AppShell,
    Avatar,

    Group,
    Navbar,
    Stack,
    Text,

    Title,
    UnstyledButton,
  } from "@mantine/core";
  import { Outlet } from "@remix-run/react";
  import { CgClose } from "react-icons/cg";
  import { FaFacebook } from "react-icons/fa";
  export default function StoriesRoute() {
    return (
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 350 }} p="xs">
            <Navbar.Section mt="xs">
              <Group>
                <ActionIcon radius={"xl"} size={"lg"} variant="hover" color={"gray"}>
                  <CgClose size={24} />
                </ActionIcon>
  
                <FaFacebook size={32} />
              </Group>
            </Navbar.Section>
            <Navbar.Section mt="md">
              <Title mb={"sm"} order={4}>
                Your Stories
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
                  <Avatar
                    src={"https://avatars.githubusercontent.com/u/57381638?v=4"}
                    radius={"xl"}
                    size={"lg"}
                  />
                  <Stack spacing={0}>
                    <Title order={5}>Harsh Mangalam</Title>
                    <Text size="sm">1h ago</Text>
                  </Stack>
                </Group>
              </UnstyledButton>
            </Navbar.Section>
            <Navbar.Section grow mt="md">
              <Title mb={"sm"} order={4}>
                All Stories
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
                  <Avatar
                    src={"https://avatars.githubusercontent.com/u/57381638?v=4"}
                    radius={"xl"}
                    size={"lg"}
                  />
                  <Stack spacing={0}>
                    <Title order={5}>Harsh Mangalam</Title>
                    <Text size="sm">1h ago</Text>
                  </Stack>
                </Group>
              </UnstyledButton>
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
        <Outlet />
      </AppShell>
    );
  }
  