import * as React from 'react';
import LayoutStyles from './LayoutStyle'
import {Link, Typography} from "@mui/material";

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = () => {
    const classes = LayoutStyles();
    return (
        <>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
        </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="textSecondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
        </Typography>
                <Copyright />
            </footer>
        </>
    );
};
export default Footer;
