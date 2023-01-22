import { Header } from "./components/Header"
import { Post } from "./Post"

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          Sidebar
        </aside>
          <main>
            <Post
              author="Rafael Ribeiro"
              content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, nisi? Obcaecati, dolorum, autem ad nisi doloribus id necessitatibus deleniti quaerat quibusdam dolore facere architecto recusandae assumenda doloremque? Id, ullam animi."
            />
            <Post
              author="Alidedson"
              content="Texto auto explicativo"
            />
          </main>
        
      </div>

    </>
  )
}



