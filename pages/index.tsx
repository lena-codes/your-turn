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
    <div className="text-gray-900 dark:text-white w-full bg-blue-400 bg-repeat bg-i-like-food flex flex-col min-h-full">
      <Head>
        <title>Your turn</title>
        <meta
          name="description"
          content="Randomly choose a person or a thing out of a group"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full max-w-4xl p-10 flex flex-col flex-auto">
        <div className="flex flex-col mb-5">
          <TurnCard result={result} names={names} />
        </div>
        <NameForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
