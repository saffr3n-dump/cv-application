import FieldSet from './FieldSet';
import Input from './Input';

export default function PracticeFieldSet({ data, change, remove, add }) {
  return (
    <FieldSet legend="Practical Experience">
      {data.practice.map((obj, i) => (
        <FieldSet key={i} legend={`Practice ${i + 1}`}>
          <Input
            type="text"
            name={`company-${i}`}
            label="Company Name"
            required
            value={obj.company}
            onChange={change(`practice.${i}.company`)}
          />
          <Input
            type="text"
            name={`position-${i}`}
            label="Position Title"
            required
            value={obj.position}
            onChange={change(`practice.${i}.position`)}
          />
          <label htmlFor={`description-${i}`}>
            Main Responsibilities
            <textarea
              name={`description-${i}`}
              id={`description-${i}`}
              required
              value={obj.description}
              onChange={change(`practice.${i}.description`)}
            />
          </label>
          <Input
            type="date"
            name={`work-start-${i}`}
            label="Start of Practice"
            required
            value={obj.start}
            onChange={change(`practice.${i}.start`)}
          />
          <Input
            type="date"
            name={`work-end-${i}`}
            label="End of Practice"
            value={obj.end}
            onChange={change(`practice.${i}.end`)}
          />
          <button type="button" onClick={remove('practice', i)}>
            Remove
          </button>
        </FieldSet>
      ))}
      <button type="button" onClick={add('practice')}>
        Add
      </button>
    </FieldSet>
  );
}
