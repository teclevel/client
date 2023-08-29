import { RadioButtons } from './types/radio-button';

export const MAIN_ROUTE = '/';
export const ADMIN_ROUTE = '/admin';
export const LOGIN_ROUTE = '/login';
export const REGISTRATION_ROUTE = '/registration';
export const TABLE_SPM_ROUTE = '/table-spm';
export const EQUIPMENT_ROUTE = '/equipment';
export const REPAIR_LIST_ROUTE = '/repair-list';
export const NOT_FOUND = '*';

export const DEVICE_TYPE = [
  'тепловое',
  'электромеханическое'
];

export const NUMBER_WORD= 'inventoryNumber';
export const ID= 'id';

export const SPM_PERIODS = [
  { value: 1, name: '1/неделю' },
  { value: 4, name: '1/месяц' },
  { value: 12, name: '1/квартал' },
  { value: 26, name: '1/полгода' },
  { value: 52, name: '1/год' },
];

export const Repair = {
  NOT_REPAIR: '0',
  REPAIR: '1',
  DONE_REPAIR: '2'
};

export const radioButtons: RadioButtons = [
  { idR: '1', value: Repair.NOT_REPAIR, name: 'colorSell', color: 'transparent', label: 'снять' },
  { idR: '2', value: Repair.REPAIR, name: 'colorSell', color: 'red', label: 'проставить' },
  { idR: '3', value: Repair.DONE_REPAIR, name: 'colorSell', color: 'blue', label: 'завершить' },
];

export const MainMenus = [
  { name: 'Список оборудования', path: EQUIPMENT_ROUTE },
  { name: 'График ППР', path: TABLE_SPM_ROUTE },
  { name: 'Ремонты', path: REPAIR_LIST_ROUTE },
];

export const headersTable = [
  {
    header: 'ID',
    accessorKey: 'id',
    // отключаем сортировку и фильтрацию
    enableSorting: false,
    enableColumnFilter: false
  },
  {
    header: 'Инв. номер',
    accessorKey: 'inventoryNumber'
  },
  {
    header: 'Сер. номер',
    accessorKey: 'serialNumber'
  },
  {
    header: 'Описание',
    accessorKey: 'description'
  },
  {
    header: 'Название',
    accessorKey: 'name'
  },
  {
    header: 'Объект',
    accessorKey: 'object'
  },
  {
    header: 'Место',
    accessorKey: 'placeIn'
  },
]
