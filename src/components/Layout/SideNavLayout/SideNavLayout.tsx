import { type } from 'os'
import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setIsCollapsed } from '../../../redux/slice/sideNaveLayoutSlice';
import { useLocation } from 'react-router-dom';
import VerticalNavLayout from '../../UI/VerticalNavLayout/VerticalNavLayout';
import { navigation } from '../../../navigation';


type props={
    children:ReactNode;
}
const SideNavLayout = ({children}:props) => {
    const dispatch=useDispatch()
    const SideNavLayoutState=useSelector((state:RootState)=>state.sideNavLayout)
    const {isCollapsed}=SideNavLayoutState
    const toggleCollapse=()=>{
        dispatch(setIsCollapsed(!isCollapsed))
    }
    const location =useLocation()
    const currentPath = `/${location.pathname?.split("/")[1]}`;

  return (
    <div className="h-screen w-screen">
      <div className={`border-r border-slate-300 h-full transition-all duration-500 ease-in-out ${isCollapsed ? "min-w-[50px] w-[50px]" : "min-w-[250px] w-[250px]"}`}>
        <VerticalNavLayout
            isCollapsed={isCollapsed}
            toggleCollapse={toggleCollapse}
            isPathEqualtoNavItem={(navItem: any) => navItem.path === currentPath}
            navigation={navigation}
             />
      </div>
    </div>
  )
}

export default SideNavLayout
