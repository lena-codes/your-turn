import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, ChangeEvent } from 'react'

const Home: NextPage = () => {

  const [name, setName] = useState(" ");

  const handleInput = (event: any) => {
    setName(event.target.value);
  };

  const logValue = () => {
    return (<p>{name}</p>);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Your turn</title>
        <meta name="description" content="Randomly choose a person out of a group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Whose turn is it?
        </h1>
        <div>
          <input onChange={handleInput} placeholder={'Enter a name'}></input>
          <div>
            {logValue()}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://lena.codes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by @lena_codes
        </a>
      </footer>
    </div>
  )
}

export default Home
