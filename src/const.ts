export const DEVICE_TYPE = [
  'тепловое',
  'электромеханическое'
];

export const SPM_PERIODS = [
  { value: 1, name: '1/неделю' },
  { value: 4, name: '1/месяц' },
  { value: 12, name: '1/квартал' },
  { value: 26, name: '1/полгода' },
  { value: 52, name: '1/год' },
];

export type RadioButton = {
  [propertyName: string]: string
}

export type RadioButtons = RadioButton[]

export const Repair = {
  NOT_REPAIR: '0',
  REPAIR: '1',
  DONE_REPAIR: '2'
}

export const radioButtons:RadioButtons = [
  { idR: '1', value: Repair.NOT_REPAIR, name: 'colorSell', color: 'transparent', label: 'снять' },
  { idR: '2', value: Repair.REPAIR, name: 'colorSell', color: 'red', label: 'проставить' },
  { idR: '3', value: Repair.DONE_REPAIR, name: 'colorSell', color: 'blue', label: 'завершить' },
];
