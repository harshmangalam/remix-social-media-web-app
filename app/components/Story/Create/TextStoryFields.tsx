import {
  ColorPicker,
  ColorSwatch,
  Group,
  Paper,
  Stack,
  Textarea,
  useMantineTheme,
} from "@mantine/core";
import StoryCard from "../StoryCard";

export default function TextStoryFields({ textStory, setTextStory }) {
  const theme = useMantineTheme();
  return (
    <Stack>
      <Textarea
        aria-label="Start typing"
        placeholder="Start typing"
        autosize
        minRows={4}
        maxRows={6}
        value={textStory.text}
        radius={"md"}
        onChange={(e) =>
          setTextStory((story) => ({ ...story, text: e.target.value }))
        }
      />

      <ColorPicker
        sx={{ width: "100%" }}
        swatchesPerRow={7}
        format="hex"
        value={textStory.background}
        onChange={(v) => setTextStory((story) => ({ ...story, background: v }))}
        swatches={[
          "#25262b",
          "#868e96",
          "#fa5252",
          "#e64980",
          "#be4bdb",
          "#7950f2",
          "#4c6ef5",
          "#228be6",
          "#15aabf",
          "#12b886",
          "#40c057",
          "#82c91e",
          "#fab005",
          "#fd7e14",
        ]}
      />
    </Stack>
  );
}
