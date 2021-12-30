import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { NameForm } from '../components/name-form';
import { useSessionStorage } from '../hooks/useSessionStorage';
import { RunButton } from '../components/button/run-button';
import { Footer } from '../components/footer';
import { Card } from '../components/card/card';
import dynamic from 'next/dynamic';
import { TurnCard } from '../components/card/turn-card';

const DynamicComponentWithNoSSR = dynamic(
  () => import('@themesberg/flowbite'),
  { ssr: false }
);

export interface ItemType {
  id: number;
  name: string;
}

const Home: NextPage = () => {
  const [stateStored, setStateStored] = useSessionStorage('state', []);
  const [inputStored, setInputStored] = useSessionStorage('input', '');
  const [result, setResult] = useSessionStorage('result', '');

  return (
    <div className="bg-white dark:bg-gray-900 flex text-gray-900 dark:text-white w-full min-h-screen justify-between flex-col">
      <Head>
        <title>Your turn</title>
        <meta
          name="description"
          content="Randomly choose a person or a thing out of a group"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-10 w-full flex flex-col max-w-4xl">
        <div className="flex flex-col mb-5">
          <TurnCard
            stateStored={stateStored}
            setResult={setResult}
            result={result}
          />
        </div>
        <div className="flex flex-col">
          <NameForm
            setStateStored={setStateStored}
            stateStored={stateStored}
            inputStored={inputStored}
            setInputStored={setInputStored}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
