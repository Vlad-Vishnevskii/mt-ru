import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.tsx';

if (import.meta.env.DEV) {
  const { worker } = await import('./mocks/browser');
  await worker.start();
}

createRoot(document.getElementById('root')!).render(<App />);
