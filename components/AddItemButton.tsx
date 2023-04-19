import { useState } from 'react';
import { Gear, gear } from '../library/gear';

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
    const [
      quantityInput,
      productInput,
      priceInput,
      weightInput,
      descriptionInput,
    ] = [
      (document.getElementById('quantity') as HTMLInputElement).valueAsNumber,
      (document.getElementById('product') as HTMLInputElement).value,
      (document.getElementById('price') as HTMLInputElement).value,
      (document.getElementById('weight') as HTMLInputElement).value,
      (document.getElementById('description') as HTMLInputElement).value,
    ];

    const categorySelectElement = document.getElementById(
      'category',
    ) as HTMLInputElement;
    const categorySelect = categorySelectElement
      ? categorySelectElement.value
      : '';

    if (categorySelect === 'gear') {
      const newGear = new Gear(
        quantityInput,
        productInput,
        priceInput,
        weightInput,
        descriptionInput,
      );
      gear.push(newGear);
      console.log(gear);
    } else if (categorySelect === 'food') {
      console.log('do food shit');
    } else {
      console.log('this category does not have logic yet');
    }
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
                id='product'
                placeholder='Item Name'
                className='m-1 border border-grey-400 px-2 py-2 w-full rounded-lg'
              ></input>
              <input
                type='string'
                name='price'
                id='price'
                placeholder='Item Price'
                className='m-1 border border-grey-400 px-2 py-2 w-full rounded-lg'
              ></input>
              <input
                type='number'
                name='weight'
                id='weight'
                placeholder='Item Weight'
                className='m-1 border border-grey-400 px-2 py-2 w-full rounded-lg'
                required
              ></input>
              <input
                type='number'
                name='quantity'
                id='quantity'
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
              <select className='m-1' name='category' id='category'>
                <option value='gear'>Gear</option>
                <option value='weapon'>Weapon</option>
                <option value='potion'>Potion</option>
                <option value='food'>Food</option>
              </select>
              <div className='m-2 flex gap-2'>
                <button type='submit'>Submit</button>
                <button type='button' onClick={handleClick}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
