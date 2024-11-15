'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { Grid } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import { useRouter } from 'next/navigation'
type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const router = useRouter();
  const handleRouter = (ruta: string) => {
    router.push(ruta)
  }
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key={1} disablePadding>
          <ListItemButton onClick={() => handleRouter("/trabajaConNosotros")}>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary={'trabaja con nosotros'} />
          </ListItemButton>
        </ListItem>
        <ListItem key={2} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalPoliceIcon />
            </ListItemIcon>
            <ListItemText primary={'Contactanos'} />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Grid container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            {(['left'] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <ViewHeadlineIcon />
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </Grid>
          <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item xs={12} sm={6} md={4} style={{ padding: '40px 0' }}>
              <Box
                component="img"
                src="/images/vifort.jpg" // Ruta de la imagen en la carpeta public
                sx={{
                  width: '100%', // Ocupa el 100% del contenedor
                  maxWidth: '300px', // Tamaño máximo para pantallas grandes
                  height: 'auto', // Mantiene la relación de aspecto
                  objectFit: 'cover',
                  display: 'block', // Centra la imagen horizontalmente
                  margin: 'auto', // Centra la imagen en su contenedor
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}