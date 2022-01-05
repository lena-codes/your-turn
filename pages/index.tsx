import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { NameForm } from '../components/name-form';
import { Footer } from '../components/footer';
import dynamic from 'next/dynamic';
import { TurnCard } from '../components/card/turn-card';
import { useAppSelector } from '../hooks/redux-helper';

dynamic(() => import('@themesberg/flowbite'), { ssr: false });

const Home: NextPage = () => {
  const result: string = useAppSelector((state) => state.result);
  const names = useAppSelector((state) => state.names);

  return (
    <div className="flex text-gray-900 dark:text-white w-full min-h-screen justify-between flex-col bg-blue-400 bg-repeat bg-i-like-food">
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
          <TurnCard result={result} names={names} />
        </div>
        <div className="flex flex-col">
          <NameForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
