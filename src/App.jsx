import React from "react";
import "./App.css";
import { TopBar } from "./components/TopBar.jsx";
import { dateFormatter } from "./libs/formatter";
import {
  Card,
  CardContent,
  Box,
  Grid,
  Typography,
  Stepper,
  StepLabel,
  Step,
  StepContent,
  Button,
} from "@mui/material";
import videoplaceholder from "./assets/videoplaceholder.png";
import { getPreviousTasks } from "./libs/taskFormatter";
import supabase from "./supabaseClient";

function App() {
  // title: "Minecraft survival #2",
  // step: 3,
  // stepdate: new Date("2023-06-13T18:46:30"),
  // ytlink: ""
  let [ldata, setLData] = React.useState({});

  const items = [
    "Felvétel",
    "Vágás",
    "Indexképkészítés",
    "Renderelés",
    "Feltöltés",
    "Kész!",
  ];

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("videos").select().order("id", { ascending: false }).limit(1);

      if (error) throw error.message;

      setLData(data[0]);

      console.log(ldata)
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <TopBar />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        { ldata == undefined ? <Typography variant="h2" >Nincsen adat az adatbázisban vagy hiba történt.</Typography> : (
          <Card variant="outlined" sx={{ width: "95%", marginTop: "20px" }}>
          <CardContent>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={12} sm={8} md={8} lg={8}>
                <br />
                <img src={videoplaceholder} alt="Videó képe" />
                <Typography variant="h3" sx={{ marginTop: "10px" }}>
                  {ldata.title}
                </Typography>
                {!(ldata.ytlink == "") ? <a href={ldata.ytlink}>YouTube link</a> : <></>}
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={8}>
                <Stepper activeStep={ldata.step} orientation="vertical">
                  {getPreviousTasks(ldata.step, items).map((item, indx) => (
                    <Step>
                      <StepLabel>
                        <Box>
                          <Typography variant="title">{item}</Typography>
                        </Box>
                      </StepLabel>
                      <StepContent>
                        {indx == ldata.step && dateFormatter(ldata.stepdate)}
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        ) }
        
      </Box>
    </>
  );
}

export default App;
