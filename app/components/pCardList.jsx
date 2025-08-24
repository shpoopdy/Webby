import React from 'react';
import styles from './pCardList.module.css';

// Components
import Card from './pCard';

const projectData = [
  {
    "id": 0,
    "name": "Movie Friends",
    "Image": "/images/movie-friends.png",
    "Link": "https://www.movie-friends.com/",
    "text": "Website that allows you to create a list which you can populate with items and share with approved friends. They will also be able to add items to this list upon approval.",
    "alt_text": "Login page for movie-friends.com"
  }
]

export default function pCardList() {
  return (
    <div className={styles.grid_container}>
      {projectData.map(project => <Card key={project.id} {...project}/>)}
    </div>
  )
}