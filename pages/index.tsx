import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { NameForm } from '../components/name-form'

export interface ItemType {
  id: number;
  name: string;
}

const Home: NextPage = () => {

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pr-1 flex flex-col justify-center items-center h-screen text-gray-900 dark:text-white" >
      <Head>
        <title>Your turn</title>
        <meta name="description" content="Randomly choose a person or a thing out of a group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-20 flex-1 flex-col justify-center items-center ">
        <h1 className="hocus:underline text-4xl m-0 text-center mb-10" >
          Whose turn is it?
        </h1>
        <NameForm />
      </main>

      <footer className="w-full h-1/5 border-t-2 flex justify-center items-center flex-grow-1">
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
