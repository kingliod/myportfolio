import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import yourImage from "../static/portfolio_1x1.jpg";
import { Grid } from "@mui/material";

const drawerWidth = 350;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      <Stack
        direction="row"
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Avatar
          alt="John Llyod F. Cruz"
          src={yourImage}
          sx={{ width: 220, height: 220, mb: 1.5, mt: 1 }} // Adjust the size as needed
        />
      </Stack>
      <ListItemText sx={{ textAlign: "center", mb: 3 }}>
        John Llyod F. Cruz
      </ListItemText>

      <List>
        {["About", "Skills", "Education", "Experience", "Contact"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} sx={{ textAlign: "center" }} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <Typography
        variant="caption"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        © Copyright 2023 All Rights Reserved.
      </Typography>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
        // sx={{ display: { sm: "none" } }}
        >
          {/* NAV BAR NONE */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div"></Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Grid container spacing={2}>
          <Grid xs={0.5}></Grid>
          <Grid
            item
            xs={11.5}
            sx={{ border: "1px solid grey", textAlign: "left" }}
          >
            <Typography
              variant="overline"
              sx={{
                opacity: 0.8,
                letterSpacing: "3px",
                textTransform: "none",
                fontSize: 12,
              }}
            >
              ABOUT ME
            </Typography>
            <Typography
              variant="h6"
              sx={{
                letterSpacing: "5px",
                mb: ".70em",
              }}
            >
              WHO AM I?
            </Typography>

            <Typography
              variant="overline"
              sx={{
                opacity: 0.6,
                letterSpacing: ".6px",
                fontVariationSettings: "'wght' 50",
                textTransform: "none",
                lineHeight: "1.7",
                wordSpacing: "2px",
              }}
            >
              <span>
                <b style={{ fontWeight: "bold", letterSpacing: "3px" }}>
                  Hi, I'm Johnn Llyod F. Cruz,
                </b>
              </span>{" "}
              I have been working as an Senior Network Specialist on a Network
              Local Provider here in Eastern Visayas for just 1 year and 6
              months. I was started as a I.T Staff and was promoted after 6
              months, and also I have been working as a Front-End Web Developer
              as a Part-timer for almost 1 year. I am passionate about learning
              new skills and I have completed a number of training courses.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
