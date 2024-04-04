import style from './CardImage.module.css';
import arrowWhite from '../../icons/arrow-white.svg'

export default function CardImage({ linkImage, title, nameAutor }) {
    return (
        <div className={style.card} style={{background: `url(${linkImage})`}}>
            <div className={style.bg}>
                <div className={style.title}>
                    {title}
                </div>
                <div className={style.text}>
                    {nameAutor}
                </div>
            
                <div className={style.line} />
                <div className={style.link}>
                    READ STORY
                    <img src={arrowWhite} alt="" style={{marginLeft: '170px', marginTop: '10px'}} />
                </div>
            </div>
        </div>
    );
}