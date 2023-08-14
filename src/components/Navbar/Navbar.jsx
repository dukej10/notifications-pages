import React from "react";
import { Box, Button, Typography, AppBar, Toolbar, Grid } from "@mui/material";
const Navbar = ({ read, setRead }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        padding: 1,
      }}
      className="header"
    >
      <Box sx={{ display: "flex" }} className="notifications">
        <Typography
          variant="h3"
          align="start"
          className="title-notify"
          sx={{ marginRight: 1 }}
        >
          Notifications
        </Typography>
        <Box className="number">
          <Typography className="value">{read ? "0" : "3"}</Typography>
        </Box>
      </Box>

      <Box alignItems={"end"}>
        <Button
          alignItems={"center"}
          color="inherit"
          className="mark-read"
          onClick={() => setRead(true)}
        >
          Mark all as read
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
