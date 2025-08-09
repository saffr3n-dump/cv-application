import FieldSet from './FieldSet';
import Input from './Input';

export default function EducationFieldSet({ data, change, remove, add }) {
  return (
    <FieldSet legend="Educational Experience">
      {data.education.map((obj, i) => (
        <FieldSet key={i} legend={`Education ${i + 1}`}>
          <Input
            type="text"
            name={`school-${i}`}
            label="School Name"
            required
            value={obj.school}
            onChange={change(`education.${i}.school`)}
          />
          <Input
            type="text"
            name={`study-${i}`}
            label="Title of Study"
            required
            value={obj.study}
            onChange={change(`education.${i}.study`)}
          />
          <Input
            type="date"
            name={`edu-start-${i}`}
            label="Start of Study"
            required
            value={obj.start}
            onChange={change(`education.${i}.start`)}
          />
          <Input
            type="date"
            name={`edu-end-${i}`}
            label="End of Study"
            value={obj.end}
            onChange={change(`education.${i}.end`)}
          />
          <button type="button" onClick={remove('education', i)}>
            Remove
          </button>
        </FieldSet>
      ))}
      <button type="button" onClick={add('education')}>
        Add
      </button>
    </FieldSet>
  );
}
