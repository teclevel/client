type ColorSellProps = {
  color: string,
  cb: any
}

function ColorSell({ color, cb }: ColorSellProps): JSX.Element {
  switch (color) {
    case '1':
      return <button onClick={cb} style={{ backgroundColor: 'red' }}></button>
    case '2':
      return <button onClick={cb} style={{ backgroundColor: 'blue' }}></button>
    default:
      return <button onClick={cb}></button>
  }
}

export default ColorSell;
