import { connectWebsocket } from '../utils/io';
import { useForm } from 'react-hook-form';

type TClipboardItem = { value: string };

type Props = {
  items: TClipboardItem[];
};

export const FormAddToClipboardSection = ({ items }: Props) => {
  const { register, handleSubmit, reset } = useForm<TClipboardItem>();

  const onSubmit = (payload: { value: string }) => {
    const socket = connectWebsocket('user');
    socket.emit('add-to-clipboard', payload, () => socket.disconnect());

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`absolute w-full duration-200 ease-in-out ${items.length > 0 ? 'top-8' : 'top-[50%] -translate-y-8'}`}
    >
      <input
        {...register('value', {
          required: true,
        })}
        autoComplete='off'
        placeholder='Ingresá el texto deseado...'
        className='w-full p-4 text-center text-3xl text-slate-700 outline-none'
      />
      <button type='submit' className='hidden'>
        Submit
      </button>
    </form>
  );
};
