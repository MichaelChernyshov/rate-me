import React from 'react'
import { FooterProps } from './Footer.props'
import styles from './Footer.module.css'
import cn from 'classnames'
import { format } from 'date-fns'

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>RateMe © {format(new Date(), 'yyyy')}</div>
      <a href='#' target='_blank'>
        User agreements
      </a>
      <a href='#' target='_blank'>
        Privacy policy
      </a>
    </footer>
  )
}

export default Footer
