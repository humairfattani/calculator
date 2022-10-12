import { Link, Route, Routes } from "react-router-dom";
import Message from "./Dashboard screens/Message";
import Abc from "./Dashboard screens/Abc";
import Feedback from "./Dashboard screens/Feedback";
import Notification from "./Dashboard screens/Notification";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;
function Dashboard(){
    return<>
   

   <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
      
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
                        <Toolbar />
                                <Divider />
            
        <List>
          {[<Link to="Message">Massage</Link>, <Link to="Feedback">Feedback</Link>, <Link to="Notification">Notification</Link>, 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                {/* <ListItemIcon> */}
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                {/* </ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
         </Drawer>
         
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
        <Toolbar />
        
        <Routes>
          <Route path="/" element={<Abc/>}/>
        <Route path="Message" element={<Message/>}/>
        <Route path="Feedback/" element={<Feedback/>}/>
        <Route path="Notification/" element={<Notification/>}/>
    </Routes>     
      </Box>
    </Box>




    {/* <h1>Dashboard</h1> */}
    {/* <Link to="Message">Massage</Link><br/> */}
    {/* <Link to="Feedback">Feedback</Link><br/> */}
    {/* <Link to="Notification">Notification</Link> */}
   




    </>
}
export default Dashboard;