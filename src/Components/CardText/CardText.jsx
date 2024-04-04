import LinkArrow from '../LinkArrow/LinkArrow';
import styles from './CardText.module.css';

export default function CardText({ title, text, textArrow, color }) {
    return (
        <div className={styles.background} style={{background: color, marginLeft: '-8px'}}>
            <div className={styles.title} style={{color: color === 'black' ? 'white' : 'black'}}>
                {title}
            </div>
            <div className={styles.text}>
                {text}
            </div>
            <div style={{marginLeft: '-50px'}}>
                <LinkArrow text={textArrow} color={color === 'black' ? 'white' : 'black'} />
            </div>
        </div>
    );
}