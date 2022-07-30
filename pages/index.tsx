import Head from "next/head";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import ToolBar from "@mui/material/ToolBar";
import Typography from "@mui/material/Typography";

export default function HomePage() {

  return(
    <Container>
      <Head>
        <title>Once Upon a Time - RPG</title>
      </Head>
      <AppBar>
        <ToolBar>
          <Typography>Once Upon a Time</Typography>
        </ToolBar>
        <Container>
          <Box>

          </Box>
        </Container>
      </AppBar>
    </Container>
  );

} // HomePage
