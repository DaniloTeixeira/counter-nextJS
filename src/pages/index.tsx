import { Inter } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const btnStyle = "hover:text-blue-200 hover:border-blue-300 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow";

  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const resetCounter = () => setCounter(0);

  return (
    <main
      className={ `flex min-h-screen flex-col items-center justify-evenly p-24 ${inter.className}` }
    >
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={ 180 }
          height={ 37 }
          priority
        />
      </div>

      <h1 className={ `text-9xl ${counter > 0 ? 'text-blue-200' : counter < 0 ? 'text-red-200' : 'text-white'}` }>{ counter }</h1>

      <div className='flex gap-20 flex-wrap align-center justify-center'>
        <button className="hover:text-red-200 hover:border-red-300 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={ decrement }>
          Decrement
        </button>

        <button className="hover:text-gray-200 hover:border-gray-300 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={ resetCounter }>
          Reset
        </button>

        <button className="hover:text-blue-200 hover:border-blue-300 text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={ increment }>
          Increment
        </button>
      </div>
    </main>
  );
}
