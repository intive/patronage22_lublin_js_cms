import React from 'react';

import {Box, CssBaseline, List, ListItem, ListItemIcon, ListItemText, SvgIcon} from '@mui/material';
import menuLinks from "../../types/routes";
import {Link as RouterLink} from 'react-router-dom';

export default function Navigation() {
  return (
      <Box sx={{display: 'inline-block', width: '100%'}}>
        <CssBaseline/>
        <List>
          {menuLinks.map(({to, icon, label, id}) => (
              <ListItem button component={RouterLink} to={to} key={id}>
                <ListItemIcon><SvgIcon component={icon}/></ListItemIcon>
                <ListItemText primary={label}/>
              </ListItem>
          ))}
        </List>
      </Box>
  );
}
