import Head from "next/head";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ToolBar from "@mui/material/ToolBar";
import Typography from "@mui/material/Typography";
export default function HomePage() {

  return(
    <Container>
      <Head>
          <title>Once Upon a Time - RPG</title>
      </Head>
      <Grid container>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={3}>
          <img src="images/ouat-logo.png"></img>
        </Grid>
      </Grid>
    </Container>
  );

} // HomePage
