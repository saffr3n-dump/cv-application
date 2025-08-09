import { useState } from 'react';
import Education from './utils/Education';
import Practice from './utils/Practice';

export default function App() {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    education: [new Education()],
    practice: [new Practice()],
  });

  return <h1>CV Application</h1>;
}
