import {
  ActionIcon,
  AppShell,
  Avatar,
  Center,
  Group,
  Indicator,
  Navbar,
  Stack,
  Text,
  ThemeIcon,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { Link } from "@remix-run/react";
import { BsImage } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi";
export default function StoriesRoute() {
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
                to="/"
              >
                <CgClose size={24} />
              </ActionIcon>

              <FaFacebook size={32} />
            </Group>
          </Navbar.Section>
          <Navbar.Section mt="md">
            <Title mb={"sm"} order={4}>
              Your Stories
            </Title>

            <Stack spacing={1}>
              <UnstyledButton
              component={Link}
              to="/stories/create"
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
                  <ThemeIcon variant="outline" radius="xl" size="xl">
                    <HiOutlinePlus size={24} />
                  </ThemeIcon>
                  <Stack spacing={0}>
                    <Title order={5}>Create story</Title>
                    <Text size="sm" color={"gray"}>
                      Share a photo or write something
                    </Text>
                  </Stack>
                </Group>
              </UnstyledButton>
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
                  <Stack spacing={0}>
                    <Title order={5}>Harsh Mangalam</Title>
                    <Text size="sm" color={"gray"}>
                      1h ago
                    </Text>
                  </Stack>
                </Group>
              </UnstyledButton>
            </Stack>
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
                <Stack spacing={0}>
                  <Title order={5}>Harsh Mangalam</Title>
                  <Text size="sm" color={"gray"}>
                    1h ago
                  </Text>
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
      <Center sx={{ height: "100%" }}>
        <Stack align={"center"}>
          <BsImage size={96} color="gray" />
          <Text size="xl" weight={"bold"} color={"gray"}>
            Create Stories
          </Text>
        </Stack>
      </Center>
    </AppShell>
  );
}
