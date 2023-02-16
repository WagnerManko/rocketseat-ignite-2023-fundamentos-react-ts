import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

const posts = [
  {
    id: 1,
    author: {
      avatarURL: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa! 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto. É um projeto que fiz no evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:02:57'),
  },

  {
    id: 2,
    author: {
      avatarURL: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educador @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare2'},
    ],
    publishedAt: new Date('2022-05-07 10:07:06'),
  },
];

function App() {
  
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post =>
            <Post
            key={post.id}  author={post.author} content={post.content} publishedAt={post.publishedAt} />
          )}
        </main>
      </div>
    </div>
  )
}

export default App
