import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Switch } from '@material-ui/core';
import Link from 'next/link';
import ClearLogo from 'assets/icons/ClearLogo';

export default function Header({ darkState, handleThemeChange }) {
  const classes = useStyles();

  const links = [
    { label: 'Travel', href: '/maps' },
    { label: 'Health', href: '/health' },
    // { label: 'Sign Out', href: '/auth/signout' },
  ]
    .filter((link) => link)
    .map(({ label, href }) => {
      return (
        <Link href={href} key={href}>
          <Button color="inherit">{label}</Button>
        </Link>
      );
    });

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <a href="/">
              <ClearLogo />
            </a>
          </Typography>
          <Switch checked={darkState} onChange={handleThemeChange} />
          {links}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    paddingTop: 20,
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
}));
