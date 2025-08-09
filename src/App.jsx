import { useState } from 'react';
import Form from './components/Form';
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

  return (
    <>
      <h1>CV Application</h1>
      <Form data={data} setData={setData} />
    </>
  );
}
