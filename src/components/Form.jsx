import GeneralFieldSet from './GeneralFieldSet';

export default function Form({ data, setData }) {
  const change = (where) => (e) => {
    const [outer, i, inner] = where.split('.');
    if (i == null) data[outer] = e.target.value;
    else data[outer][i][inner] = e.target.value;
    setData({ ...data });
  };

  return (
    <form>
      <GeneralFieldSet data={data} change={change} />
      <button type="submit">Submit</button>
    </form>
  );
}
