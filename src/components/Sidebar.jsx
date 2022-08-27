import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

const Sidebar = () => {
  return (
    <Box bgcolor="skyblue" flex={1} p={2} sx={{ display: { xs:"none", sm:"block"}}}>
        <List>
            <ListItem disabledPadding>
                <ListItemButton component="a" href='#home'>
                    <ListItemIcon>

                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                </ListItemButton>
            </ListItem>
        </List>
    </Box>
  )
}

export default Sidebar