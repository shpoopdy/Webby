import React from 'react';
import styles from './pCardList.module.css';

//Components
import Video from './vidCard';
const vidData = [
    {
        "id": 1,
        "src": <iframe className={styles.vCard} width="560" height="315" src="https://www.youtube.com/embed/NixwwC1gF18?si=2J6DpQm4G1wsQcsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },
    {
        "id": 2,
        "src": <iframe className={styles.vCard} width="560" height="315" src="https://www.youtube.com/embed/JpS-5yyli44?si=lQ8OoDopvaEd08f7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },
    {
        "id": 3,
        "src": <iframe className={styles.vCard} width="560" height="315" src="https://www.youtube.com/embed/bOpOTIkiYTg?si=BG3-Yr1ajyPvKIVO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    }
]
export default function vidCardList(props) {
    return (
        <div className={styles.grid_container}>
            {vidData.map(project => <Video key={project.id} {...project}/>)}
        </div>
    )
}