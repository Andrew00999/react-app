import React from 'react';
import styles from './MyModal.module.css'

const MyModal = ({ children, visible, setVisible }) => {

    const rootClasses = [styles.MyModal]
    if (visible) {
        rootClasses.push(styles.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={styles.ModalContent} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal;