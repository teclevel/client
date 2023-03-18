type MySelectProps = {
  options: any[],
  defaultValue: string,
  value:number,
  changed:any,
}

function MySelect ({ options, defaultValue, value, changed }: MySelectProps): JSX.Element {
  return (
    <select
      value={value}
      onChange={event => changed(event.target.value)}
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
