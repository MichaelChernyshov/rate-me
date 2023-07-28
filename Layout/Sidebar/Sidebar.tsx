import React from 'react'
import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.css'
import cn from 'classnames'

const Sidebar = ({ ...props }: SidebarProps) => {
  return <div {...props}>Sidebar</div>
}

export default Sidebar
