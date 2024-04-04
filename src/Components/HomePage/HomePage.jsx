import React from "react";
import styles from './HomePage.module.css';
import CardText from "../CardText/CardText";

import img1 from '../../photo/create-and-share.jpg';
import img2 from '../../photo/beautiful-stories.jpg';
import img3 from '../../photo/designed-for-everyone.jpg'

import imgMountain from '../../photo/mountains.jpg';
import imgCity from '../../photo/cityscapes.jpg';
import imgVoyage from '../../photo/18-days-voyage.jpg';
import imgArhitecturs from '../../photo/architecturals.jpg';

import iconResponsive from '../../icons/responsive.svg';
import iconNoLimits from '../../icons/no-limit.svg';
import iconEmbed from '../../icons/embed.svg';
import ImageCarousel from "../ImageCarousel/ImageCarousel";

export default function HomePage() {
    const listInfoCards = [
        {
            linkImage: imgMountain,
            title: 'The mountains',
            nameAuthor: 'by John Appleseed',

        },
        {
            linkImage: imgCity,
            title: 'Sunset Cityscapes',
            nameAuthor: 'by Benjsamin Cruz',

        },
        {
            linkImage: imgVoyage,
            title: '18 Days Voyage',
            nameAuthor: 'by Alexei Borodin',

        },
        {
            linkImage: imgArhitecturs,
            title: 'Architecturals',
            nameAuthor: 'by Samantha Brooke',

        },
    ];
    
    return (
        <main className={styles.main}>
            <section className={styles['main__section--1']}>
                <CardText
                    title='CREATE AND SHARE YOUR PHOTO STORIES.'
                    text='Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.'
                    textArrow='GET AN INVITE'
                    color='black'
                />
                <img src={img1} alt="" style={{ marginRight: '-8px' }} />
            </section>

            <section className={styles['main__section--1']}>
                <img src={img2} alt="" style={{ marginLeft: '-8px' }} />
                <CardText
                    title='BEAUTIFUL STORIES EVERYTIME'
                    text='We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.'
                    textArrow='VIEW THE STORIES'
                    color='white'
                />
            </section>

            <section className={styles['main__section--1']}>
                <CardText
                    title='DESIGNED FOR EVERYONE'
                    text='Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.'
                    textArrow='VIEW THE STORIES'
                    color='white'
                />
                <img src={img3} alt="" style={{ marginRight: '-8px' }} />
            </section>

            <ImageCarousel listInfoCards={listInfoCards} />

            <section className={styles['main__section--5']}>
                <div className={styles.main__iconCard}>
                    <img src={iconResponsive} alt="" />
                    <div className={styles.main__title}>
                        100% Responsive
                    </div>
                    <div className={styles.main__text}>
                        No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.
                    </div>
                </div>

                <div className={styles.main__iconCard}>
                    <img src={iconNoLimits} alt="" style={{ marginBottom: '37.5px' }} />
                    <div className={styles.main__title}>
                        No Photo Upload Limit
                    </div>
                    <div className={styles.main__text}>
                        Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.
                    </div>
                </div>

                <div className={styles.main__iconCard}>
                    <img src={iconEmbed} alt="" />
                    <div className={styles.main__title}>
                        Available to Embed
                    </div>
                    <div className={styles.main__text}>
                        Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.
                    </div>
                </div>
            </section>
        </main>
    );
}