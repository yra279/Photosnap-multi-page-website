import styles from './Stories.module.css';

import LinkArrow from '../LinkArrow/LinkArrow';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

import imgMountain from '../../photo/mountains.jpg';
import imgCity from '../../photo/cityscapes.jpg';
import imgVoyage from '../../photo/18-days-voyage.jpg';
import imgArhitecturs from '../../photo/architecturals.jpg';

import imgWorldTour from '../../photo/stories/world-tour.jpg';
import imgUnforeseen from '../../photo/stories/unforeseen-corners.jpg';
import imgKing from '../../photo/stories/king-on-africa.jpg';
import imgTrip from '../../photo/stories/trip-to-nowhere.jpg';

import imgRage from '../../photo/stories/rage-of-the-sea.jpg';
import imgRunning from '../../photo/stories/running-free.jpg';
import imgBehing from '../../photo/stories/behind-the-waves.jpg';
import imgWaters from '../../photo/stories/calm-waters.jpg';

import imgMilkyWay from '../../photo/stories/milky-way.jpg';
import imgDarkForest from '../../photo/stories/dark-forest.jpg';
import imgSomwarper from '../../photo/stories/somwarpet.jpg';
import imgLandOfDreams from '../../photo/stories/land-of-dreams.jpg';

export default function Stories() {
    const listInfoCards = [
        {
            linkImage: imgMountain,
            title: 'The mountains',
            nameAuthor: 'by John Appleseed',
            date: 'March 16th 2020',

        },
        {
            linkImage: imgCity,
            title: 'Sunset Cityscapes',
            nameAuthor: 'by Benjamin Cruz',
            date: 'April 14th 2020',

        },
        {
            linkImage: imgVoyage,
            title: '18 Days Voyage',
            nameAuthor: 'by Alexei Borodin',
            date: 'April 11th 2020',

        },
        {
            linkImage: imgArhitecturs,
            title: 'Architecturals',
            nameAuthor: 'by Samantha Brooke',
            date: 'April 9th 2020',

        },
        {
            linkImage: imgWorldTour,
            title: 'World Tour 2019',
            nameAuthor: 'by Timothy Wagner',
            date: 'April 7th 2020',

        },
        {
            linkImage: imgUnforeseen,
            title: 'Unforseen Corners',
            nameAuthor: 'by William Malcolm',
            date: 'April 3rd 2020',

        },
        {
            linkImage: imgKing,
            title: 'King on Africa Part II',
            nameAuthor: 'by Tum Hillenburg',
            date: 'March 29th 2020',

        },
        {
            linkImage: imgTrip,
            title: 'The Trip to Nowhere',
            nameAuthor: 'by Felicia Rourke',
            date: 'April 21st 2020',

        },
        {
            linkImage: imgRage,
            title: 'Rage of The Sea',
            nameAuthor: 'by Mohammed Abdul',
            date: 'March 19th 2020',

        },
        {
            linkImage: imgRunning,
            title: 'Running Free',
            nameAuthor: 'by Michelle',
            date: 'March 16th 2020',

        },
        {
            linkImage: imgBehing,
            title: 'Behind the Waves',
            nameAuthor: 'by Lamarr Wilson',
            date: 'March 11th 2020',

        },
        {
            linkImage: imgWaters,
            title: 'Calm Waters',
            nameAuthor: 'by Samantha Brooke',
            date: 'March 9th 2020',

        },
        {
            linkImage: imgMilkyWay,
            title: 'The Milky Way',
            nameAuthor: 'by Benjamin Cruz',
            date: 'March 5th 2020',

        },
        {
            linkImage: imgDarkForest,
            title: 'Night at The Dark Forest',
            nameAuthor: 'by Mohammed Abdul',
            date: 'March 4th 2020',

        },
        {
            linkImage: imgSomwarper,
            title: "Somwarpet's Beauty",
            nameAuthor: 'by Michelle',
            date: 'March 1st 2020',

        },
        {
            linkImage: imgLandOfDreams,
            title: 'Land of Dreams',
            nameAuthor: 'by William Malcolm',
            date: 'February 25th 2020',

        },
    ];

    return (
        <main className={styles.main}>
            <section className={styles.main__sectionBanner}>
                <div className={styles['main__container-text']}>
                    <div>
                        <div className={styles.main__text}>
                            LAST MONTH'S FEATURED STORY
                        </div>

                        <div className={styles.main__title}>
                            HAZZY FULL MOON OF APPALACHIA
                        </div>
                    </div>

                    <div className={styles.main__textAuthor}>
                        March 2nd 2020 <span>by John Appleseed</span>
                    </div>

                    <div className={styles['main__text--2']}>
                        The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.
                    </div>

                    <LinkArrow color='white' text='GET AN INVITE' />
                </div>
            </section>

            <ImageCarousel listInfoCards={listInfoCards} />
        </main>
    );
}