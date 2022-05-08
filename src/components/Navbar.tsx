import ApiIcon from '@mui/icons-material/Api';
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Avatar, Box, Button, Container, IconButton, Link, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { FC, ReactElement, useState } from "react";
import { NavLink } from "react-router-dom";

interface Link {
  path: string;
  label: string;
}

const Navbar: FC = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);

  const openNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const closeNavMenu = () => {
    setAnchorElNav(null);
  };

  const links: Link[] = [
    { path: '/', label: 'Home' },
    { path: '/counter', label: 'Counter' },
    { path: '/todo', label: 'Todo' },
    { path: '/music/library', label: 'Music' }
  ];

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <ApiIcon fontSize="large" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={openNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={closeNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {links.map(link => (
                <MenuItem key={link.label} onClick={closeNavMenu}>
                  <Link
                    component={NavLink}
                    to={link.path}
                    color="black"
                    underline="none"
                    variant="button"
                  >
                    {link.label}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {links.map(link => (
              <Button
                key={link.label}
                onClick={closeNavMenu}
                href={link.path}
                sx={{ my: 2, color: 'white', display: 'block', height: '100%', padding: '0.5rem 1rem' }}
              >

                {link.label}

              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Opens nothing">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://c4.wallpaperflare.com/wallpaper/937/265/274/doutzen-kroes-supermodel-face-wallpaper-preview.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;