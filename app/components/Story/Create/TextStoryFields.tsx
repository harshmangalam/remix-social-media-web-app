import { Box, Textarea } from "@mantine/core";

export default function TextStoryFields() {
  return (
    <Box>
      <Textarea
        aria-label="Start typing"
        placeholder="Start typing"
        autosize
        minRows={4}
        maxRows={6}
      />
    </Box>
  );
}
