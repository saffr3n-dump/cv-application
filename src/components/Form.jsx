import GeneralFieldSet from './GeneralFieldSet';
import EducationFieldSet from './EducationFieldSet';
import PracticeFieldSet from './PracticeFieldSet';
import Education from '../utils/Education';
import Practice from '../utils/Practice';

export default function Form({ data, setData, setEditMode }) {
  const change = (where) => (e) => {
    const [outer, i, inner] = where.split('.');
    if (i == null) data[outer] = e.target.value;
    else data[outer][i][inner] = e.target.value;
    setData({ ...data });
  };

  const remove = (what, at) => () => {
    data[what].splice(at, 1);
    setData({ ...data });
  };

  const add = (what) => () => {
    data[what].push(what === 'education' ? new Education() : new Practice());
    setData({ ...data });
  };

  return (
    <form onSubmit={() => setEditMode(false)}>
      <GeneralFieldSet data={data} change={change} />
      <EducationFieldSet data={data} change={change} remove={remove} add={add} />
      <PracticeFieldSet data={data} change={change} remove={remove} add={add} />
      <button type="submit">Submit</button>
    </form>
  );
}
