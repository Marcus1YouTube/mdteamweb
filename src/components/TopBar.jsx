import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";


export const TopBar = () => {

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MDTeam Státusz
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
