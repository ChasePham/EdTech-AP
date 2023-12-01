import { useNavigate, NavLink } from "react-router-dom";
import React from 'react';
import "../css/NavBar.css";
import "@fontsource/roboto/400.css"; 
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BlankProfile from "../images/blankProfile.jpeg";
import { useEffect, useState } from "react";



export default function NavBar({curPage}) {

    const navigate = new useNavigate();

    const toAccountPage = (popupState) => {
        popupState.close();
        navigate("/account");
    }

    const logOut = (popupState) => {
        popupState.close();
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.setItem("profilePic", BlankProfile);
        navigate("/");
    }

    const theme = createTheme({
        palette: {
          white: {
            main: "#fff",
            contrastText: "#fff"
          }
        }
      });

    return (
        <nav className="nav">
            <ul>
                <a href="/home"><h1>octomize.</h1></a>
                <li>
                    <NavLink className="uladjust" style={{textDecorationLine: curPage == "home" ? 'underline' : 'none'}} to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink className="uladjust" style={{textDecorationLine: curPage == "input" ? 'underline' : 'none'}} to="/input">Generate</NavLink>
                </li>
                <li>
                    <NavLink className="uladjust" style={{textDecorationLine: curPage == "octo" ? 'underline' : 'none'}} to="/octo">Octo</NavLink>
                </li>
                <li>
                    <NavLink className="uladjust" style={{textDecorationLine: curPage == "about" ? 'underline' : 'none'}} to="/about">About</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/account">My Account</NavLink>
                </li>
                <li>
                    <ThemeProvider theme={theme}>
                        <PopupState variant="popover">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button color="white" variant="text" {...bindTrigger(popupState)}>
                                        <img src={localStorage.profilePic} alt = "profile"/>
                                    </Button>
                                    <Menu {...bindMenu(popupState)}>
                                        <MenuItem onClick={() => {toAccountPage(popupState);}}>Account</MenuItem>
                                        <MenuItem onClick={() => {logOut(popupState);}}>Logout</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </ThemeProvider>
                </li>
            </ul>
        </nav>
    )
}