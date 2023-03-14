// import { DEVICE_TYPE } from "../const"


/* type TechnicalSpecifications=  {
  voltage: number, //вольт
  power: number, //кВт
  other: string
} */


type Place={
  object: string,
  place: string
}

export type Device ={
  id: number,
  inventoryNumber: number,
  serialNumber: string|number,
  description: string,
  name: string,//модель
  type: string,  //миксер, печь
  brand: string,
  view:string,
  shield: string,
  images: string[],
 // technicalSpecifications:TechnicalSpecifications,
  place: Place,
}

export type Devices= Device[];