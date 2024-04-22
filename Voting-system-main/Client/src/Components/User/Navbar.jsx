import React from "react";
import {
  Toolbar,
  Typography,
  AppBar,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HowToVoteOutlinedIcon from "@mui/icons-material/HowToVoteOutlined";
import { NavbarData } from "../../Data/NavbarData";
import { Link } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";

export default function ButtonAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Adjust the breakpoint as needed

  const style = {
    logo: {
      fontSize: 35,
      paddingRight: 10,
    },
    navLink: {
      fontSize: 20,
      color: "white",
    },
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        sx={{
          background:
            "linear-gradient(119deg, rgba(135,13,57,1) 0%, rgba(121,9,113,1) 50%, rgba(192,0,255,1) 100%)",
          boxShadow: "none",
          borderBottom: "1px solid #2E3B55",
        }}
      >
        <Toolbar>
          <Grid container spacing={0}>
            <Grid item xs={4} display="flex">
              <HowToVoteOutlinedIcon style={style.logo} />
              <Typography variant="h5">Voting System</Typography>
            </Grid>
            <Grid item xs={8}>
              <Grid container gap={6} justifyContent="flex-end">
                {isMobile ? ( // Check if it's a mobile screen
                  <>
                    <IconButton
                      aria-label="menu"
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MenuIcon style={{ color: "white" }} />
                    </IconButton>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      sx={{
                        "& .MuiList-root": {
                          backgroundColor: "#333", // Background color for the menu
                        },
                        "& .MuiMenuItem-root": {
                          color: "white", // Text color for menu items
                        },
                      }}
                    >
                      {NavbarData.map((item, index) => (
                        <Link to={item.link} key={index}>
                          <MenuItem onClick={handleClose}>
                            <Typography style={style.navLink}>
                              {item.title}
                            </Typography>
                          </MenuItem>
                        </Link>
                      ))}
                    </Menu>
                  </>
                ) : (
                  // Render the normal navbar for larger screens
                  NavbarData.map((item, index) => {
                    return (
                      <Link to={item.link} key={index}>
                        <Typography style={style.navLink}>{item.title}</Typography>
                      </Link>
                    );
                  })
                )}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
