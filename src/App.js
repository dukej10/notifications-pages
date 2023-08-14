import logo from "./logo.svg";
import "./App.scss";
import "./styles/main.scss";
import NotificationsPannel from "./client/notificationsPannel";
import Navbar from "./components/Navbar/Navbar";
import { Box, Grid } from "@mui/material";
import { useState } from "react";
function App() {
  let [read, setRead] = useState(false);
  return (
    <div className="App">
      <Grid container className="container">
        <Navbar setRead={setRead} read={read} />
        <NotificationsPannel read={read} />
      </Grid>
    </div>
  );
}

export default App;
