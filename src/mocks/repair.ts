import { Repairs, TechnicalServices } from "../types/repair"

export const technicalServices: TechnicalServices = [
  {
    id: 1,
    numberTS: 1,
    period: 30,
    date: "12.02.23",
    status: true,
  },
  {
    id: 1,
    numberTS: 2,
    period: 30,
    date: "15.03.23",
    status: false,
  }
]

export const repairs: Repairs = [
  {
    id: 2,
    numberR: 1,
    date: '10.01.23',
    price: 12300,
  },
  {
    id: 2,
    numberR: 2,
    date: '12.02.23',
    price: 123500,
  }
]