import styles from './subscribe-button.module.scss'

export const SubscribeButton = () => {
    return (
        <button
            className={styles.subscribeButton}
            type='button'
        > 
            Subscribe now
        </button> 
    )
}