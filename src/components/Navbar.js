import React,{useContext} from 'react'
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import ReactCountryFlag from "react-country-flag";
import styles from "./NavbarStyles";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from "./contexts/LanguageContext";

const Navbar = ({ classes }) => {
    const content = {
        english: {
            search: "Search",
            flag: <ReactCountryFlag countryCode="US" svg/>
        },
        french: {
            search: "CherCher",
            flag: <ReactCountryFlag countryCode="FR" svg/>
        },
        spanish: {
            search: "Buscar",
            flag: <ReactCountryFlag countryCode="ES" svg/>
        }
    }
    const {isDarkTheme , setTheme } = useContext(ThemeContext)
    const {language} = useContext(LanguageContext)
    const {search, flag} = content[language]
    return (
        <div className={classes.root}>
         <AppBar position="static" color={isDarkTheme ? "default" : "primary"}>
          <ToolBar>
           <IconButton className={classes.menuButton} color="inherit">
            <span> {flag} </span>
           </IconButton>
           <Typography className={classes.title} variant="h6" color="inherit">Dark Theme</Typography>
           <Switch onChange={setTheme}/>
           <div className={classes.grow} />
           <div className={classes.search}>
           <div className={classes.searchIcon}><SearchIcon /></div>
           <InputBase placeholder={`${search}...`} classes={{root: classes.Inputroot, input: classes.InputInput}} />
           </div>
          </ToolBar>
         </AppBar>
        </div>
    )
}

export default withStyles(styles)(Navbar)
