import { useEffect, useState } from 'react';

import { API_URL } from '../const/api';

type TResponse = { message: string; ip: string };

export const Footer = () => {
  const [ip, setIp] = useState<string | Error>('');

  const getIpAddress = async () => {
    try {
      const res = await fetch(API_URL, {
        method: 'GET',
      });
      const result: TResponse = await res.json();
      const { ip } = result;

      setIp(ip);
    } catch (error) {
      setIp(new Error('Ocurrió un error al obtener la información.'));

      throw new Error('Ocurrió un error al obtener la información.');
    }
  };

  useEffect(() => {
    getIpAddress();
  }, []);

  return (
    <footer className='flex w-full items-center justify-center gap-4'>
      {ip instanceof Error ? (
        <small>{ip.message}</small>
      ) : (
        <div className='flex items-center gap-1 text-slate-700'>
          <span>Ejecutando en</span>
          <a
            href={`http://${ip}:5173`}
            target='_blank'
            className='hover:underline'
          >
            {ip}:5173
          </a>
        </div>
      )}
    </footer>
  );
};
