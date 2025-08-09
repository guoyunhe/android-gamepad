import LanguageMenu from '#components/LanguageMenu';
import {
  Android as AndroidIcon,
  GitHub as GitHubIcon,
  Menu as MenuIcon,
  SportsEsports as SportsEsportsIcon,
} from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { ThemeToggle } from 'material-app';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'wouter';

export interface TopNavProps {
  onMenuButtonClick: () => void;
}

export default function TopNav({ onMenuButtonClick }: TopNavProps) {
  const { t } = useTranslation();
  const [location] = useLocation();

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuButtonClick}
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          component={Link}
          to="/"
          style={{
            display: 'flex',
            color: 'inherit',
            textDecoration: 'none',
            alignItems: 'center',
          }}
        >
          <Box component="img" src="/logo.png" width={48} height={48} sx={{ mr: 1 }} />
          <Typography fontSize={14} lineHeight={1} color="inherit" fontWeight={600}>
            Android+
            <br />
            Gamepad
          </Typography>
        </Box>
        <Stack direction="row" ml={3} sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Button
            variant={location === '/features' ? 'contained' : 'text'}
            color="inherit"
            disableElevation
            component={Link}
            to="/"
            startIcon={<AndroidIcon />}
          >
            {t('Games')}
          </Button>
          <Button
            variant={location === '/pricing' ? 'contained' : 'text'}
            color="inherit"
            disableElevation
            startIcon={<SportsEsportsIcon />}
            component={Link}
            to="/controllers"
          >
            {t('Controllers')}
          </Button>
          <Button
            variant={location === '/support' ? 'contained' : 'text'}
            color="inherit"
            disableElevation
            startIcon={<GitHubIcon />}
            component="a"
            href="https://github.com/guoyunhe/android-gamepad"
          >
            GitHub
          </Button>
        </Stack>
        <Box flex="1 1 auto" />
        <ThemeToggle />
        <Stack direction="row">
          <LanguageMenu />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
