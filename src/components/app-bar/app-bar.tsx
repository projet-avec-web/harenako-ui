import { Typography, AppBar } from '@mui/material';
import { SidebarToggleButton } from 'react-admin';

const APP_BAR_STYLE = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'between',
  alignItems: 'center',
  width: '100%',
  color: 'white',
  height: '50px',
  py: 1,
  px: 1,
  boxShadow: '10px 0px 10px gray',
};

export default function CustomAppBar() {
  return (
    <AppBar sx={APP_BAR_STYLE}>
      <SidebarToggleButton />
      <Typography textAlign={'center'} fontWeight={'bold'}>
        Gestion de patrimoine
      </Typography>
    </AppBar>
  );
}
