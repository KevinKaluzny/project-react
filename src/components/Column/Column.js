import styles from './Column.module.scss';
import Card from '../Card/Card';

const Column = props => {
    return (
        <article className={styles.column}>
            <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2>
            <ul className={styles.cards}>
                {props.cards.map(card => <Card key={card.id}>{card.title}</Card>)}
            </ul>
        </article>
    );
}

export default Column;