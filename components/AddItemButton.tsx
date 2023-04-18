import { useState } from 'react';

export default function AddItemButton() {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm(!showForm);
  }

  function handleSubmit() {
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
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Item Name'
              ></input>
              <label>Weight</label>
              <input
                type='number'
                name='weight'
                id='weight'
                placeholder='Item Weight'
              ></input>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
