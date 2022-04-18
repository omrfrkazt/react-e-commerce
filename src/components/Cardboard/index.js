import Input from '../Input'
import styles from './cardboard.module.css'
const Cardboard = ({ children, style={} }) => {
    return (
        <div className={styles.cardboard} style={style}>
            {children}
        </div>
    )
}

export default Cardboard