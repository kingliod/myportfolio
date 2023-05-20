import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import yourImage from "../static/portfolio_1x1.jpg";
import { Grid } from "@mui/material";

import Eme from "./progressbar/Eme";
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
          sx={{ backgroundColor: "white" }}
        >
          {/* NAV BAR NONE */}
          <IconButton
            color="black"
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
        <Grid container spacing={5}>
          {/*ABOUT ME*/}
          <Grid sm={0.5} xs={{ display: { xs: "none" } }}></Grid>
          <Grid item sm={11} sx={{ textAlign: "left" }}>
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
                textAlign: "justify",
              }}
            >
              {" "}
              <div style={{ textAlign: "justify" }}>
                <span>
                  <b style={{ fontWeight: "bold", letterSpacing: "3px" }}>
                    Hi, I'm Johnn Llyod F. Cruz,
                  </b>
                </span>{" "}
                a fresh graduate with a passion for continuous learning and
                personal growth. Throughout my academic journey, I have
                developed a strong foundation in web development and machine
                learning, equipping me with the necessary knowledge and skills
                to thrive in the professional world. I possess a keen eye for
                detail, a strong work ethic, and a natural curiosity that drives
                me to seek innovative solutions to challenges. Alongside my
                academic pursuits, I have actively engaged in various
                extracurricular activities, honing my leadership and teamwork
                abilities. I believe in the power of collaboration and enjoy
                working alongside diverse teams to achieve common goals. As a
                lifelong learner, I am eager to embark on new experiences and
                contribute my skills to a dynamic and forward-thinking
                organization. With a commitment to excellence, adaptability, and
                a growth mindset, I am excited to make a meaningful impact and
                contribute to the success of any team I am a part of.
              </div>
            </Typography>
          </Grid>
          <Grid sm={0.5} xs={{ display: { xs: "none" } }}></Grid>
          {/*END OF ABOUT ME*/}

          {/*MY SPECIALTY*/}
          <Grid sm={0.5} xs={{ display: { xs: "none" } }}></Grid>
          <Grid item sm={11} sx={{ textAlign: "left" }}>
            <Typography
              variant="overline"
              sx={{
                opacity: 0.8,
                letterSpacing: "3px",
                textTransform: "none",
                fontSize: 12,
              }}
            >
              MY SPECIALTY
            </Typography>
            <Typography
              variant="h6"
              sx={{
                letterSpacing: "5px",
                mb: ".70em",
              }}
            >
              MY SKILLS
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
                textAlign: "justify",
              }}
            >
              <div style={{ textAlign: "justify" }}>
                {/* <span>
                  <b style={{ fontWeight: "bold", letterSpacing: "3px" }}>
                    Hi, I'm Johnn Llyod F. Cruz,
                  </b>
                </span>{" "} */}
                A front-end developer who is have an experience in UI/UX
                development. For the past 1 year, have been designing and
                developing websites, using a keen eye for interactive design to
                develop pixel-perfect code that translates static design
                concepts into engaging digital experiences. Main areas of focus
                are in HTML5, Bootstrap / CSS3, and JavaScript.
              </div>
              <Eme />
            </Typography>
          </Grid>
          <Grid sm={0.5} xs={{ display: { xs: "none" } }}></Grid>
          {/*END OF MY SPECIALTY*/}
        </Grid>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
