import { useState } from 'react';
import AdveturingGear from '@/components/MakeAdventuringGear';
import AddItemButton from '@/components/AddItemButton';

export default function Store() {
  // const [items, setItems] = useState<Array<number>>([]);
  const [randomNum, setRandomNum] = useState(0);

  function handleClick() {
    const numItems = Math.floor(Math.random() * 5) + 1;
    setRandomNum(numItems);
    // the line above is has a arbitrary array so the code isnt broken fyi
    console.log('randomNum: ' + randomNum);
  }

  return (
    // Whole body
    <div className='bg-yellow-50'>
      <div className='flex gap-8 py-10 grid-cols-3'>
        {/* This is inside the header */}
        <button
          onClick={handleClick}
          className='middle none center rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"'
        >
          Generate Medium Store
        </button>
        <div className='text-2xl'>Dungeons and Dragons General Store</div>
        <AddItemButton
          onSubmit={function (data: any): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
      <div className='grid grid-cols-3'>
        {/* This is where all the items will render */}
        {<AdveturingGear numOfItems={randomNum} />}
      </div>
    </div>
  );
}
