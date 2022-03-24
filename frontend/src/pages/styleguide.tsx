import { NextPage } from 'next';
import { Fa500Px, FaAdjust, FaDatabase, FaDashcube } from 'react-icons/fa';

interface Props {}

const foo: NextPage<Props> = () => {
  return (
    <div className="text-white">
      <h1 className="text-2xl">Styleguide</h1>
      <div className="mt-4 flex flex-col gap-16">
        {/* Surfaces */}
        <div className="flex flex-col gap-6">
          <h2 className="uppercase text-white">Surfaces</h2>
          <div className="h-52 w-full border-2 border-background-400 bg-background-800"></div>
          <div className="h-52 w-full border-2 border-background-400 bg-background-900"></div>
        </div>
        {/* Buttons */}
        <div>
          <h2 className="uppercase text-white">Button</h2>
          <div className="mt-4 flex gap-2">
            <button className="rounded-lg border-2 border-emerald-300 px-4 uppercase tracking-widest text-white hover:bg-emerald-400 hover:font-bold hover:text-black hover:text-opacity-80">
              Create
            </button>
            <button className="rounded-lg bg-violet-700 px-4 uppercase tracking-wider text-white transition-all hover:bg-violet-500 focus:ring-2 focus:ring-violet-300">
              Edit
            </button>
            <button className=" px-4 uppercase tracking-wider text-violet-400  underline-offset-2 transition-all hover:font-bold hover:text-violet-500">
              Edit
            </button>
          </div>
        </div>
        <div>
          <h2>Alerts</h2>
          <div className="mt-4 flex flex-col">
            <div className="flex h-10 items-center bg-rose-500 px-4">
              <p className="uppercase tracking-wide text-white text-opacity-80">ERROR</p>
            </div>
            <div className="flex h-10 items-center bg-emerald-700 px-4">
              <p className="uppercase tracking-wide text-emerald-200">Success</p>
            </div>
            <div className="flex h-10 items-center bg-emerald-800 px-4">
              <p className="uppercase tracking-wide text-emerald-200">Success</p>
            </div>
            <div className="flex h-10 items-center bg-amber-500 px-4">
              <p className="uppercase tracking-wide text-amber-200">Warning</p>
            </div>
          </div>
        </div>
        <div>
          <h2>Data Points</h2>
          <div className="mt-4">
            <div className="flex gap-8 bg-background-800 p-4">
              <div>
                <p className="font-bold uppercase tracking-wider text-violet-300">Some data</p>
                <div className="inline-flex items-center gap-2">
                  <Fa500Px />
                  <p className="text-white text-opacity-30">No entry yet</p>
                  <button className=" px-4 uppercase tracking-wider text-violet-400  underline-offset-2 transition-all hover:font-bold hover:text-violet-500">
                    Add
                  </button>
                </div>
              </div>
              <div>
                <p className="font-bold uppercase tracking-wider text-violet-300">Some data</p>
                <div className="inline-flex items-center gap-2">
                  <FaDashcube />
                  <p>5000</p>
                </div>
              </div>
              <div>
                <p className="font-bold uppercase tracking-wider text-violet-300">Some data</p>
                <div className="inline-flex items-center gap-2">
                  <FaDatabase />
                  <p>5000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Text</h2>
          <div className="mt-4 flex gap-6">
            <div className="p-4">
              <p className="text-white">Opacity 100</p>
              <p className="text-white text-opacity-80">Opacity 80</p>
              <p className="text-white text-opacity-60">Opacity 60</p>
              <p className="text-white text-opacity-40">Opacity 40</p>
              <p className="text-white text-opacity-20">Opacity 20</p>
            </div>
            <div className="bg-background-900 p-4">
              <p className="text-white">Opacity 100</p>
              <p className="text-white text-opacity-80">Opacity 80</p>
              <p className="text-white text-opacity-60">Opacity 60</p>
              <p className="text-white text-opacity-40">Opacity 40</p>
              <p className="text-white text-opacity-20">Opacity 20</p>
            </div>
            <div className="bg-background-800 p-4">
              <p className="text-white">Opacity 100</p>
              <p className="text-white text-opacity-80">Opacity 80</p>
              <p className="text-white text-opacity-60">Opacity 60</p>
              <p className="text-white text-opacity-40">Opacity 40</p>
              <p className="text-white text-opacity-20">Opacity 20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default foo;
