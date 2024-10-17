import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant: 'outlined' | 'classic'
}
const Button = (props: PropsWithChildren<ButtonProps>) => {
	const { variant, children, ...otherProps } = props
	return (
		<button
			className={variant === 'outlined' ? styles.outlined : styles.classic}
			{...otherProps}
		>
			{children}
		</button>
	)
}

export default Button
