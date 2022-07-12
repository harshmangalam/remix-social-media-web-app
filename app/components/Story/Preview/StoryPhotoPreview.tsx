import {
  AspectRatio,
  Box,
  Center,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { BsImages } from "react-icons/bs";

export default function StoryPhotoPreview({
  selectedPhoto,
}: {
  selectedPhoto: string;
}) {
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
          {selectedPhoto ? (
           
              <AspectRatio ratio={720 / 1080} sx={{ maxWidth: 400 }} mx="auto">
                <Image
                  radius="md"
                  src={selectedPhoto}
                  width="100%"
                  height={"100%"}
                />
              </AspectRatio>
         
          ) : (
            <Center sx={{ height: "100%" }}>
              <Stack justify={"center"} align={"center"}>
                <BsImages size={50} color={"white"} />
                <Text size="lg" weight={"bold"} color={"white"}>
                  Select photo to see preview
                </Text>
              </Stack>
            </Center>
          )}
        </Paper>
      </Stack>
    </Paper>
  );
}
