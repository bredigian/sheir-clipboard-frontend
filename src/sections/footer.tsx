import { useEffect, useState } from 'react';

import { API_URL } from '../const/api';
import { Switch } from '../components/ui/switch';
import { useTheme } from '../hooks/use-theme';

type TResponse = { message: string; ip: string };

export const Footer = () => {
  const { theme, handleChangeTheme } = useTheme();

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
        <div className='text-primary flex items-center gap-1'>
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
      <label className='flex cursor-pointer items-center gap-2'>
        Modo Dark
        <Switch defaultChecked={theme === 'dark'} onClick={handleChangeTheme} />
      </label>
    </footer>
  );
};
