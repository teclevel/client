import { Brands } from "../types/brand";
import { Devices } from "../types/device";
import { Types } from "../types/type";

export const devices: Devices = [
  {
    id: 1,
    inventoryNumber: 12345,
    serialNumber: 12351234,
    description: "посудомойка",
    name: "str1",
    // type: "тепловое",   //тепловое, электромеханический
    // brand: "Winterhalter",
    view: "https://globus-my.sharepoint.com/personal/sg_zajczev_globus_ru/_layouts/15/embed.aspx?UniqueId=4b8bd1f3-05a0-4bee-9612-e25567a2d3e9",
    shield: "https://globus-my.sharepoint.com/personal/sg_zajczev_globus_ru/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR%2FIMG_20221026_095444%2Ejpg&parent=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR",
    images: ["https://globus-my.sharepoint.com/personal/sg_zajczev_globus_ru/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR%2FIMG_20221026_095348%2Ejpg&parent=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR", "https://globus-my.sharepoint.com/personal/sg_zajczev_globus_ru/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR%2FIMG_20221026_095409%2Ejpg&parent=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR"],
    // technicalSpecifications,
    object: "Красногорск",
    placeIn: "Ресторан"
  },
  {
    id: 2,
    inventoryNumber: 2345,
    serialNumber: 2351234,
    description: "посудомойка",
    name: "str2",
    // type: "тепловое",   //тепловое, электромеханический
    // brand: "Winterhalter",
    view: "https://globus-my.sharepoint.com/personal/sg_zajczev_globus_ru/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR%2FIMG_20221026_095348%2Ejpg&parent=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR",
    shield: "https://globus-my.sharepoint.com/personal/sg_zajczev_globus_ru/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR%2FIMG_20221026_095444%2Ejpg&parent=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR",
    images: ["https://globus-my.sharepoint.com/personal/sg_zajczev_globus_ru/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR%2FIMG_20221026_095348%2Ejpg&parent=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR", "https://globus-my.sharepoint.com/personal/sg_zajczev_globus_ru/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR%2FIMG_20221026_095409%2Ejpg&parent=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR"],
    // technicalSpecifications,
    object: "Красногорск",
    placeIn: "Ресторан"
  },
  {
    id: 3,
    inventoryNumber: 24345,
    serialNumber: 23512534,
    description: "посуд",
    name: "Mtr3",
    // type: "тепловое",   //тепловое, электромеханический
    // brand: "Winterhalter",
    view: "https://globus-my.sharepoint.com/personal/sg_zajczev_globus_ru/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR%2FIMG_20221026_095348%2Ejpg&parent=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR",
    shield: "https://globus-my.sharepoint.com/personal/sg_zajczev_globus_ru/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR%2FIMG_20221026_095444%2Ejpg&parent=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR",
    images: ["https://globus-my.sharepoint.com/personal/sg_zajczev_globus_ru/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR%2FIMG_20221026_095348%2Ejpg&parent=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR", "https://globus-my.sharepoint.com/personal/sg_zajczev_globus_ru/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR%2FIMG_20221026_095409%2Ejpg&parent=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR"],
    // technicalSpecifications,
    object: "Одинцово",
    placeIn: "Ресторан"
  },
  {
    id: 4,
    inventoryNumber: 45,
    serialNumber: 12534,
    description: "посуд",
    name: "Mtr4",
    // type: "тепловое",   //тепловое, электромеханический
    // brand: "Winterhalter",
    view: "https://globus-my.sharepoint.com/personal/sg_zajczev_globus_ru/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR%2FIMG_20221026_095348%2Ejpg&parent=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR",
    shield: "https://globus-my.sharepoint.com/personal/sg_zajczev_globus_ru/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR%2FIMG_20221026_095444%2Ejpg&parent=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR",
    images: ["https://globus-my.sharepoint.com/personal/sg_zajczev_globus_ru/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR%2FIMG_20221026_095348%2Ejpg&parent=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR", "https://globus-my.sharepoint.com/personal/sg_zajczev_globus_ru/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR%2FIMG_20221026_095409%2Ejpg&parent=%2Fpersonal%2Fsg_zajczev_globus_ru%2FDocuments%2FГМ%2FСаларьево%2Fпосудомойки%2Fпосудомойка%20STR"],
    // technicalSpecifications,
    object: "Саларьево",
    placeIn: "кулинария"
  }
]

export const types: Types = [
  { id: 1, name: 'электромеханическое' },
  { id: 2, name: 'тепловое' },
  { id: 3, name: 'другое' }
]

export const brands: Brands = [
  { id: 1, name: 'winterhalter' },
  { id: 2, name: 'kromo' },
  { id: 3, name: 'rational' }
]
