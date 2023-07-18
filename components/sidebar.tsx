"use client"
import { Sidebar as _Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export const Sidebar = () => {
    return <_Sidebar >
        <Menu className='bg-background'>
            <SubMenu label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
        </Menu>
    </_Sidebar>
}