import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { NameForm } from '../components/name-form';
import { useSessionStorage } from '../hooks/useSessionStorage';
import { RunButton } from '../components/run-button';
import { Footer } from '../components/footer';
import { Card } from '../components/card';
import dynamic from 'next/dynamic';

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
    <div className="bg-white dark:bg-gray-900 flex text-gray-900 dark:text-white w-full min-h-screen justify-center flex-col">
      <Head>
        <title>Your turn</title>
        <meta
          name="description"
          content="Randomly choose a person or a thing out of a group"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-10 w-full flex">
        <div className="flex flex-col w-1/2 p-5">
          <h1 className="hocus:underline text-4xl m-0 text-center mb-10">
            Whose turn is it?
          </h1>
          <NameForm
            setStateStored={setStateStored}
            stateStored={stateStored}
            inputStored={inputStored}
            setInputStored={setInputStored}
          />
        </div>
        <div className="flex flex-col w-1/2 p-2">
          <Card>
            <div className="flex flex-row w-full">
              <div className="w-1/2">
                <p className="mt-5">It&apos;s your turn:</p>
                <p className="mt-5 text-2xl">{result}</p>
              </div>
              <div className="items-end w-1/2">
                <RunButton items={stateStored} setResult={setResult} />
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
