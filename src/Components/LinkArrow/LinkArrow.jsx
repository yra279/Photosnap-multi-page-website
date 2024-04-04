import styles from './LinkArrow.module.scss';
import arrowBlackLink from '../../icons/arrow-black.svg';
import arrowWhiteLink from '../../icons/arrow-white.svg';

export default function LinkArrow({ text, color }) {
    return (
        <div className={styles.container}>
            <a href="/" style={{color: color !== 'black' ? '#fff' : '#000'}}>
                {text}
            </a>
            <img src={color === "black" ? arrowBlackLink : arrowWhiteLink} alt="" className={styles.arrow} />
        </div>
    );
}