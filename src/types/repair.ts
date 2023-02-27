export type TechnicalService = {
  id: number,
  numberTS: number,
  period: number,
  date: string,
  status: boolean,
}

export type TechnicalServices = TechnicalService[]

export type Repair = {
  id: number,
  numberR: number,
  date: string,
  price: number
}

export type Repairs = Repair[]
