import { Fragment } from 'react';
import Section from './Section';
import Table from './Table';

export default function Info({ data, setEditMode }) {
  return (
    <>
      <Section heading="General Information">
        <Table>
          <tr>
            <th>Full Name</th>
            <td>{data.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{data.email}</td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td>{data.phone}</td>
          </tr>
        </Table>
      </Section>

      <Section heading="Educational Experience">
        <Table>
          {data.education.map((obj, i) => (
            <Fragment key={i}>
              <tr>
                <th rowSpan={4}>Education {i + 1}</th>
                <th>School Name</th>
                <td>{obj.school}</td>
              </tr>
              <tr>
                <th>Title of Study</th>
                <td>{obj.study}</td>
              </tr>
              <tr>
                <th>Start of Study</th>
                <td>{obj.start}</td>
              </tr>
              <tr>
                <th>End of Study</th>
                <td>{obj.end}</td>
              </tr>
            </Fragment>
          ))}
        </Table>
      </Section>

      <Section heading="Practical Experience">
        <Table>
          {data.practice.map((obj, i) => (
            <Fragment key={i}>
              <tr>
                <th rowSpan={5}>Practice {i + 1}</th>
                <th>Company Name</th>
                <td>{obj.company}</td>
              </tr>
              <tr>
                <th>Position Title</th>
                <td>{obj.position}</td>
              </tr>
              <tr>
                <th>Main Responsibilities</th>
                <td>{obj.description}</td>
              </tr>
              <tr>
                <th>Start of Practice</th>
                <td>{obj.start}</td>
              </tr>
              <tr>
                <th>End of Practice</th>
                <td>{obj.end}</td>
              </tr>
            </Fragment>
          ))}
        </Table>
      </Section>

      <button type="button" onClick={() => setEditMode(true)}>
        Edit
      </button>
    </>
  );
}
