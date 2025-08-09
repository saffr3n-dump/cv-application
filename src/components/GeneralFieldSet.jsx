import FieldSet from './FieldSet';
import Input from './Input';

export default function GeneralFieldSet({ data, change }) {
  return (
    <FieldSet legend="General Information">
      <Input
        type="text"
        name="name"
        label="Full Name"
        required
        value={data.name}
        onChange={change('name')}
      />
      <Input
        type="email"
        name="email"
        label="Email"
        required
        value={data.email}
        onChange={change('email')}
      />
      <Input
        type="tel"
        name="phone"
        label="Phone Number"
        required
        value={data.phone}
        onChange={change('phone')}
      />
    </FieldSet>
  );
}
