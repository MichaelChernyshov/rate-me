import styles from './Button.module.css'
import { ButtonProps } from './Button.props'
import cn from 'classnames'

const Button = ({ children, arrow = 'none', appearence, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearence === 'primary',
        [styles.ghost]: appearence === 'ghost',
      })}
      {...props}>
      {children}
      {arrow != 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
          })}>
          f
        </span>
      )}
    </button>
  )
}

export default Button
