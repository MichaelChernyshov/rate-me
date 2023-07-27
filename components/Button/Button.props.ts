import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
  appearence: 'primary' | 'ghost'
}
