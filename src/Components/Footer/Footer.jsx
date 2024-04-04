import style from './Footer.module.css';
import LinkArrow from '../LinkArrow/LinkArrow';


export default function Footer() {
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
                    <a href="/">HOME</a>
                    <a href="/">STORIES</a>
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
