import { useState } from 'react';

interface FormPopUpProps {
  onSubmit: (data: any) => void;
}

export default function AddItemButton({ onSubmit }: FormPopUpProps) {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm(!showForm);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('the submit is being handled!');
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className='class="middle none center rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"'
      >
        Add an Item
      </button>
      {showForm && (
        <div className='fixed insert-0 z-50 flex items-center justify-center'>
          <div className='bg-white w-1/2 rounded-lg shadow-lg p-8'>
            <div className='bold flex justify-center m-4'>New Item Form</div>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Item Name'
                className='m-1 border border-grey-400 px-2 py-2 w-full rounded-lg'
              ></input>
              <input
                type='number'
                name='weight'
                id='weight'
                placeholder='Item Weight'
                className='m-1 border border-grey-400 px-2 py-2 w-full rounded-lg'
              ></input>
              <input
                type='number'
                name='stock'
                id='stock'
                placeholder='Average Quantity'
                className='m-1 border border-grey-400 px-2 py-2 w-full rounded-lg'
              ></input>
              <input
                type='text'
                name='description'
                id='description'
                placeholder='Item Description'
                className='m-1 border border-grey-400 px-2 py-2 w-full rounded-lg'
              ></input>
              <button type='submit'>Submit</button>
              <button type='button' onClick={handleClick}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
