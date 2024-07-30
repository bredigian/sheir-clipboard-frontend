import { useEffect, useState } from 'react';

import { Footer } from './sections/footer';
import { FormAddToClipboardSection } from './sections/form-section';
import { connectWebsocket } from './lib/io';
import copy from 'copy-to-clipboard';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function Home() {
  const [items, setItems] = useState<{ value: string }[]>([]);

  const copyToClipboard = (value: string) => {
    copy(value);

    toast.success('Copiado al portapapeles.');
  };

  useEffect(() => {
    const socket = connectWebsocket('user');
    socket.on('add-to-clipboard', async (data: { value: string }) => {
      setItems((prev) => [...prev, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <main className='relative mx-auto flex h-dvh max-w-screen-lg flex-col items-center gap-8 p-8'>
      <FormAddToClipboardSection items={items} />
      <div className='mt-24 flex max-h-full grow flex-wrap content-start items-center justify-center gap-4 overflow-auto'>
        {items.map((item, index) => (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ opacity: 1 }}
            onClick={() => copyToClipboard(item.value)}
            key={item.value + `__${index}` + '__key'}
            className='border-primary text-primary h-fit max-w-screen-sm overflow-hidden rounded-xl border-2 p-2 text-xl duration-200'
          >
            <p className='whitespace-normal break-words'>{item.value}</p>
          </motion.button>
        ))}
      </div>
      <Footer />
    </main>
  );
}
