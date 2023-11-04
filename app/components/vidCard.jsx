import styles from './pCardList.module.css';

export default function vidCard() {
    return (
        <div className={styles.grid_container}>
            <iframe className={styles.vCard} width="560" height="315" src="https://www.youtube.com/embed/JpS-5yyli44?si=lQ8OoDopvaEd08f7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe className={styles.vCard} width="560" height="315" src="https://www.youtube.com/embed/NixwwC1gF18?si=x6cxc2FMbW6EVaJC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}