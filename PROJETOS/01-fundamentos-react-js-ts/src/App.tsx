import styles from './App.module.css'
import './global.css';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

const posts = [
  {
    id: 1,
    author:{
        avatarUrl: 'https://avatars.githubusercontent.com/u/103512217?v=4',
        name:'Júlia Reis',
        role:'Estagiária '
      },
      content: [
        {type:'paragraph', content:'Fala galera'},
        {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type:'link', content:'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2022-06-19 20:00:00')
  },
];


export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>      
       
       <Sidebar/>
        <main>
          {posts.map(post => {
            return(
            <Post key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
                />
              )
            })}
        </main>
      

      </div>
    </div>
  )
}
