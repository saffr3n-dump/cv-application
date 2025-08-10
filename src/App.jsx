import { useState } from 'react';
import Form from './components/Form';
import Info from './components/Info';
import Education from './utils/Education';
import Practice from './utils/Practice';

export default function App() {
  const [editMode, setEditMode] = useState(true);
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
      {editMode ? (
        <Form data={data} setData={setData} setEditMode={setEditMode} />
      ) : (
        <Info data={data} setEditMode={setEditMode} />
      )}
    </>
  );
}
