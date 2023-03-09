import { SigninButton } from '../signin-button/signin-button'
import styles from './header.module.scss'

export const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContext}>
                <img src="/images/logo.svg" alt="Logo ignews" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>
                <SigninButton />
            </div>
        </header>
    )
}