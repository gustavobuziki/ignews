import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './signin-button.module.scss'

export const SigninButton = () => {
    const isLogged = true

    return isLogged ? (
        <button 
            type='button'
            className={styles.signinButton}
        >
            <FaGithub color='#04d361' />
            username
            <FiX color='#737388' className={styles.closeIcon} /> 
        </button>
    ) : (
        <button 
            type='button'
            className={styles.signinButton}
        >
            <FaGithub color='#eba417' />
            Sign in with GitHub
        </button>
    )
}