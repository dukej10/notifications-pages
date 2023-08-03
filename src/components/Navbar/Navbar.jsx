import React from "react";
import { Box, Button, Typography, AppBar, Toolbar, Grid } from "@mui/material";
const Navbar = ({ read, setRead }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        mx: "auto",
        justifyContent: "space-between",
        width: 650,
      }}
      className="layout-helper header"
    >
      <Box sx={{ display: "flex" }} className="notifications">
        <Typography
          variant="h3"
          align="start"
          sx={{ marginRight: 1 }}
          className="oe"
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
