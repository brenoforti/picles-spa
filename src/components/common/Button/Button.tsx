import { ButtonHTMLAttributes } from "react"
import styles from './Button.module.css'
import { ButtonVariants } from "./Button.constants"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariants
}

export function Button({ variant = ButtonVariants.Default, children, ...rest }: IButton) {
    let buttonClass = styles.buttonBase

    switch (variant) {
        case ButtonVariants.Default:
            buttonClass += ` ${styles.buttonDefault}`
            break
        case ButtonVariants.Disabled:
            buttonClass += ` ${styles.buttonDisabled}`
            break
        case ButtonVariants.Outlined:
            buttonClass += ` ${styles.buttonOutlined}`
            break
        case ButtonVariants.Text:
            buttonClass += ` ${styles.buttonText}`
            break
    }
    return <button className={buttonClass} {...rest}>{children}</button>
}