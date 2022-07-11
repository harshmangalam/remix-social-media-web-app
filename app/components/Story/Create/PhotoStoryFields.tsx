import { Box, Group, Text } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { BsImages } from "react-icons/bs";

export default function PhotoStoryFields({ setSelectedPhoto }) {
  function handleFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  }
  return (
    <Box>
      <Dropzone
        onDrop={(files) => handleFile(files[0])}
        onReject={(files) => console.log("rejected files", files)}
        accept={IMAGE_MIME_TYPE}
      >
        {(status) => (
          <Group
            position="center"
            spacing={"sm"}
            style={{ pointerEvents: "none" }}
          >
            <BsImages size={40} />

            <Text size="lg" align="center" inline>
              Drag photo or click to select photo
            </Text>
          </Group>
        )}
      </Dropzone>
    </Box>
  );
}
