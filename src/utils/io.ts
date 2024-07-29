import { API_URL } from '../const/api';
import io from 'socket.io-client';

export const connectWebsocket = (name: string) =>
  io(API_URL as string, {
    query: {
      user: name,
    },
  });
