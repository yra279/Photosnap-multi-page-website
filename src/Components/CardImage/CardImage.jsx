import style from './CardImage.module.css';
import arrowWhite from '../../icons/arrow-white.svg'

export default function CardImage({ linkImage, title, nameAutor, date = undefined }) {
    return (
        <div className={style.card} style={{ background: `url(${linkImage})` }}>
            <div className={style.bg} style={{ paddingTop: date !== undefined ? '322.5px' : '350px' }}>
                {
                    date ?
                        <div className={style.text}>
                            {date}
                        </div>
                        : null
                }
                <div className={style.title}>
                    {title}
                </div>
                <div className={style.text}>
                    {nameAutor}
                </div>

                <div className={style.line} />
                <div className={style.link}>
                    READ STORY
                    <img src={arrowWhite} alt="" style={{ marginLeft: '170px', marginTop: '10px' }} />
                </div>
            </div>
        </div>
    );
}