import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { NameForm } from '../components/name-form';
import { useSessionStorage } from '../hooks/useSessionStorage';
import { RunButton } from '../components/run-button';

export interface ItemType {
  id: number;
  name: string;
}

const Home: NextPage = () => {
  const [stateStored, setStateStored] = useSessionStorage('state', []);
  const [inputStored, setInputStored] = useSessionStorage('input', '');
  const [result, setResult] = useSessionStorage('result', '');

  return (
    <div className="bg-white dark:bg-gray-900 flex text-gray-900 dark:text-white w-full min-h-screen justify-center flex-col">
      <Head>
        <title>Your turn</title>
        <meta
          name="description"
          content="Randomly choose a person or a thing out of a group"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-10 flex-col w-full justify-center items-center flex">
        <h1 className="hocus:underline text-4xl m-0 text-center mb-10">
          Whose turn is it?
        </h1>
        <NameForm
          setStateStored={setStateStored}
          stateStored={stateStored}
          inputStored={inputStored}
          setInputStored={setInputStored}
        />
        <RunButton items={stateStored} setResult={setResult} />
        <p className="mt-5 text-fuchsia-400">{result}</p>
      </main>
      <footer className="w-full border-t-2 flex justify-center items-center flex-col mb-3">
        <a
          href="https://lena.codes"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3"
        >
          Powered by @lena_codes
        </a>
      </footer>
    </div>
  );
};

export default Home;
