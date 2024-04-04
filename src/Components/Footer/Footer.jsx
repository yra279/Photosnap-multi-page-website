import style from './Footer.module.css';
import LinkArrow from '../LinkArrow/LinkArrow';
import { useNavigate } from 'react-router-dom';


export default function Footer() {
    const navigate = useNavigate();

    return (
        <footer className={style.footer}>
            <div className={style.footer__boxLeft}>
                <div className={style.footer__logoAndContacts}>
                    <img src="./logo-white.svg" alt="" />
                    <div className={style.footer__contacts}>
                        <div className={style.footer_iconFB} />
                        <div className={style.footer_iconPin} />
                        <div className={style.footer_iconTW} />
                        <div className={style.footer_iconYT} />
                        <div className={style.footer_iconInsta} />
                    </div>
                </div>

                <div className={style.footer__boxLinkPages}>
                    <a href="/" onClick={() => navigate('/', { replace: false })}>HOME</a>
                    <a href="/" onClick={() => navigate('stories', { replace: false })}>STORIES</a>
                    <a href="/">FEATURES</a>
                    <a href="/">PRICING</a>
                </div>
            </div>

            <div className={style.footer__description}>
                <LinkArrow text='GET AN INVITE' color='white' />
                <p>Copyright 2020. All Rights Reserved</p>
            </div>
        </footer>
    );
}
