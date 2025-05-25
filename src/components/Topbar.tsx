import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  ListItemText,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { memo, useState, type JSX } from 'react';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { id: 1, text: '1.add', path: '/add' },
  { id: 2, text: '2.isPrime', path: '/isPrime' },
  { id: 3, text: '3.fizzbuzz', path: '/fizzbuzz' },
  { id: 4, text: '4.mockMonth', path: '/mockMonth' },
  { id: 5, text: '5.asynchronous', path: '/asynchronous' },
  { id: 6, text: '6.mockApiResponse', path: '/mockApiResponse' },
];

const Topbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => {
    setIsOpen(open);
  };

  const navigate = useNavigate();

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => toggleDrawer(false)}>
      <List>
        {menuItems.map(item => (
          <ListItem key={item.id} onClick={() => navigate(item.path)} disablePadding>
            <ListItemButton>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem onClick={() => navigate('/appendix')} disablePadding>
          <ListItemButton>
            <ListItemText primary={'参考'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={isOpen} onClose={() => toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => navigate('/')}
          >
            ソフトウェアテスト ユニットテスト
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default memo(Topbar);
