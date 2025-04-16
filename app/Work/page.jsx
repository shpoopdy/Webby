import CardList from '../components/pCardList';

export const metadata = {
  title: 'Work',
  description: 'Some of my work!',
}

export default function Posts() {
  return (
    <main className="mainContain">
      <h1>Work</h1>
      <h3>Projects</h3>
      <CardList />
    </main>
  )
}
