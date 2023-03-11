import React from 'react';

type MySelectProps = {
  options: any[],
  defaultValue: string,
  value:number,
  onChange:any,
}

const MySelect = ({ options, defaultValue, value, onChange }: MySelectProps): JSX.Element => {
  return (
    <select
      value={value}
      onChange={event => onChange(event.target.value)}
    >
      <option disabled value="">{defaultValue}</option>
      {options.map(option =>
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      )}
    </select>
  );
};

export default MySelect;
