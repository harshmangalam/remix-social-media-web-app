import { Box, Center, Paper, Stack, Text, Title } from "@mantine/core";

export default function StoryTextPreview({ textStory }) {
  return (
    <Paper
      sx={(theme) => ({ height: "100%", maxWidth: "900px", margin: "auto" })}
      radius={"md"}
      shadow={"md"}
      p={"md"}
    >
      <Stack sx={{ height: "100%" }}>
        <Title order={6}>Preview</Title>
        <Paper
          radius={"md"}
          sx={(theme) => ({ background: theme.colors.dark, flexGrow: 1 })}
          p={"md"}
        >
          <Paper
            radius={"md"}
            sx={(theme) => ({
              background: textStory.background,
              flexGrow: 1,
              maxWidth: "50%",
              margin: "auto",
              height: "100%",
            })}
            p={"md"}
          >
            <Center sx={{ height: "100%" }}>
              <Text size="lg" weight={"bold"} color={"white"}>
                {textStory.text || "Start typing"}
              </Text>
            </Center>
          </Paper>
        </Paper>
      </Stack>
    </Paper>
  );
}
