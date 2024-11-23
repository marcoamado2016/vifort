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
import { Grid, Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import { useRouter } from 'next/navigation';
import Carousel from 'react-material-ui-carousel';
type Anchor = 'top' | 'left' | 'bottom' | 'right';
import Footer from './footer/page';
import Header from './header/page';
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
  const images = [
    "/images/vifort.jpg",
    "/images/vifort1.png",
    "/images/vifort2.png",
    "/images/vifort3.png",
    "/images/vifort4.png"
  ]
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
            <ListItemText primary={'Solicita nuestros servicios'} />
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
      <Header />
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
              <Carousel
                autoPlay={true}
                interval={3000}
                animation="slide"
                indicators={true}
                navButtonsAlwaysVisible={true}
              >
                {
                  images.map((src, index) => (
                    <Box
                      key={index}
                      component="img"
                      src={src}
                      alt={`Imagen ${index + 1}`}
                      sx={{
                        width: '100%',
                        height: { xs: '250px', sm: '300px', md: '400px' }, 
                        objectFit: 'cover', 
                        display: 'block',
                        borderRadius: '8px', 
                        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
                      }}
                    />
                  ))
                }
              </Carousel>
              <Typography
                style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', marginTop: '16px' }}
              >En VIFORT tu seguridad es nuestra prioridad las 24 horas, los 7 días de la semana.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}