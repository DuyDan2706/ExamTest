import React from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import './SideBar.scss'
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import sidebarBg from '../../asset/bg2.jpg';
import { GiCheckeredFlag } from "react-icons/gi"
import { MdOutlinePedalBike } from "react-icons/md"
import { HiAcademicCap } from "react-icons/hi2";
// import {DiReact} from "react-icons/gi"
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
const SideBar = (props) => {
  const { image, collapsed, toggled, handleToggleSidebar } = props
  return (
    <>
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: '24px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
         
            <NavLink   to='/' className='nav-link ' > <HiAcademicCap size={'3em'} color={"00bfff"} />  Duy Đan </NavLink>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              icon={<FaTachometerAlt />}
                
            >
                 Dashboard
            <Link  to="/Admin"/>
            </MenuItem>

          </Menu>
          <Menu iconShape="circle">
            <SubMenu


              icon={<FaGem />}
              title="Features"
            >
              <MenuItem> Quản Lý Users
              <Link  to="/Admin/manage-user"/>
               </MenuItem>
              <MenuItem>Quản Lý Bài Quiz</MenuItem>
              <MenuItem> Quản Lý câu Hỏi</MenuItem>
            </SubMenu>

          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 24px',
            }}
          >
            <a
              href="https://github.com/DuyDan2706/ExamTest"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                DuyDan2706
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  )
}

export default SideBar;