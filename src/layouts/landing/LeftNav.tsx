import {
  Android as AndroidIcon,
  GitHub as GitHubIcon,
  SportsEsports as SportsEsportsIcon,
} from '@mui/icons-material';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'wouter';
import { drawerWidth } from './config';

export interface LeftNavProps {
  drawerOpen: boolean;
  onDrawerClose: () => void;
}

export default function LeftNav({ drawerOpen, onDrawerClose }: LeftNavProps) {
  const { t } = useTranslation();
  const [location] = useLocation();

  return (
    <Drawer open={drawerOpen} onClose={onDrawerClose} sx={{ width: drawerWidth }}>
      <List sx={{ width: drawerWidth }} onClick={onDrawerClose}>
        <ListItemButton selected={location === '/'} component={Link} to="/">
          <ListItemIcon>
            <AndroidIcon />
          </ListItemIcon>
          <ListItemText primary={t('Games')} />
        </ListItemButton>
        <ListItemButton selected={location === '/controllers'} component={Link} to="/controllers">
          <ListItemIcon>
            <SportsEsportsIcon />
          </ListItemIcon>
          <ListItemText primary={t('Controllers')} />
        </ListItemButton>
        <ListItemButton component="a" href="https://github.com/guoyunhe/android-gamepad">
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText primary="GitHub" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
