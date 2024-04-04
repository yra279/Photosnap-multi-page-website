import CardImage from '../CardImage/CardImage';
import styles from './ImageCarousel.module.css';

export default function ImageCarousel({ listInfoCards }) {
    return (
        <section className={styles.containerImageCarousel}>
            {
                listInfoCards.map(({ linkImage, title, nameAuthor }) => (
                    <CardImage
                        linkImage={linkImage}
                        title={title}
                        nameAutor={nameAuthor}
                    />
                ))
            }
        </section>
    );
}