import { useState } from "react";
import Header from "./components/Header";
import Post from "./components/Post";

import styles from "./App.module.css"
import "./global.css"
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
    <Header/>

    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
      <Post 
      author="Leonardo"
      content="ola, tudo bem ?" />
      <Post 
      author="Breno"
      content="ola, tudo bem ?" />

      </main>

    </div>
    </>
  );
}

export default App;
