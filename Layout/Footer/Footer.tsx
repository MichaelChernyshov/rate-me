import React from 'react'
import { FooterProps } from './Footer.props'
import styles from './Footer.module.css'
import cn from 'classnames'

const Footer = ({ ...props }: FooterProps) => {
  return <div {...props}>Footer</div>
}

export default Footer
