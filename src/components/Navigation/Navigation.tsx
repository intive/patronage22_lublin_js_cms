import React from 'react';
import {Box, CssBaseline, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import menuLinks from "../../types/routes";
import {Link as RouterLink} from 'react-router-dom';

type NavProps = {
  label: string,
  id: number,
  to: string
}
export default function Navigation() {
  return (
      <Box sx={{display: 'flex'}}>
        <CssBaseline/>
        <List>
          {menuLinks.map((props: NavProps) => (
              <ListItem button component={RouterLink} to={props.to} key={props.label}>
                <ListItemIcon>
                  {props.id % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                </ListItemIcon>
                <ListItemText primary={props.label}/>
              </ListItem>
          ))}
        </List>
      </Box>
  );
}
