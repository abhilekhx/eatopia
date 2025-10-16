import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AddCallIcon from "@mui/icons-material/AddCall";

export default function Home() {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        <AddCallIcon></AddCallIcon>Success
      </Button>
      <Button variant="outlined" color="error">
        Error<AddReactionIcon></AddReactionIcon>
      </Button>
    </div>
  );
}
