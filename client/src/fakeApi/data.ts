import phoneImg from "../images/phoneJpeg.jpg";
import tvImg from "../images/tvJpeg.jpg";
import refImg from "../images/refrigeratorJpeg.jpg";
import {TGoods, TProduct} from "../types";

export const mockData: Array<TProduct> = [
    {
        id: "001",
        type: "smartphones",
        manufacturer: "Apple",
        name: "IPhone",
        price: 540,
        image: phoneImg,
        inStock: 10
    },
    {
        id: "002",
        type: "smartphones",
        manufacturer: "Samsung",
        name: "Galaxy",
        price: 550,
        image: phoneImg,
        inStock: 15
    },
    {
        id: "003",
        type: "smartphones",
        manufacturer: "Asus",
        name: "ZenFone",
        price: 350,
        image: phoneImg,
        inStock: 20
    },
    {
        id: "004",
        type: "smartphones",
        manufacturer: "Honor",
        name: "Prime",
        price: 330,
        image: phoneImg,
        inStock: 25
    },
    {
        id: "005",
        type: "smartphones",
        manufacturer: "Huawei",
        name: "Y5",
        price: 270,
        image: phoneImg,
        inStock: 25
    },
    {
        id: "006",
        type: "smartphones",
        manufacturer: "Poco",
        name: "M3",
        price: 360,
        image: phoneImg,
        inStock: 30
    },
    {
        id: "007",
        type: "smartphones",
        manufacturer: "realme",
        name: "C11",
        price: 440,
        image: phoneImg,
        inStock: 35
    },
    {
        id: "008",
        type: "smartphones",
        manufacturer: "Xiaomi",
        name: "Redmi 9",
        price: 220,
        image: phoneImg,
        inStock: 40
    },
    {
        id: "009",
        type: "televisions",
        manufacturer: "DEXP",
        name: "H32F7000K",
        price: 530,
        image: tvImg,
        inStock: 45
    },
    {
        id: "010",
        type: "televisions",
        manufacturer: "iFFALCON",
        name: "55K61",
        price: 770,
        image: tvImg,
        inStock: 50
    },
    {
        id: "011",
        type: "televisions",
        manufacturer: "LG",
        name: "65UP75006LF",
        price: 1100,
        image: tvImg,
        inStock: 10
    },
    {
        id: "012",
        type: "televisions",
        manufacturer: "Philips",
        name: "50PUS8505",
        price: 1000,
        image: tvImg,
        inStock: 10
    },
    {
        id: "013",
        type: "televisions",
        manufacturer: "Samsung",
        name: "UE50TU7002UXRU",
        price: 2300,
        image: tvImg,
        inStock: 10
    },
    {
        id: "014",
        type: "televisions",
        manufacturer: "TCL",
        name: "50P725",
        price: 880,
        image: tvImg,
        inStock: 10
    },
    {
        id: "015",
        type: "televisions",
        manufacturer: "Xiaomi",
        name: "MI TV P3 43",
        price: 2250,
        image: tvImg,
        inStock: 10
    },
    {
        id: "016",
        type: "refrigerators",
        manufacturer: "ATLANT",
        name: "XM 6021",
        price: 832,
        image: refImg,
        inStock: 10
    },
    {
        id: "017",
        type: "refrigerators",
        manufacturer: "BEKO",
        name: "CNKDN6335",
        price: 756,
        image: refImg,
        inStock: 10
    },
    {
        id: "018",
        type: "refrigerators",
        manufacturer: "Bosch",
        name: "Serie 2 VitaFresh",
        price: 1125,
        image: refImg,
        inStock: 10
    },
    {
        id: "019",
        type: "refrigerators",
        manufacturer: "DEXP",
        name: "SBS510M",
        price: 1525,
        image: refImg,
        inStock: 10
    },
    {
        id: "020",
        type: "refrigerators",
        manufacturer: "Indesit",
        name: "ITD 4180W",
        price: 1320,
        image: refImg,
        inStock: 10
    },
    {
        id: "021",
        type: "refrigerators",
        manufacturer: "LG",
        name: "GA-B459CLWL",
        price: 1429,
        image: refImg,
        inStock: 10
    },
    {
        id: "022",
        type: "refrigerators",
        manufacturer: "Samsung",
        name: "RB36T63F",
        price: 1729,
        image: refImg,
        inStock: 10
    },
]

export const goods: Array<TGoods> = [
    {id: "001", type: "smartphones", name: "Смартфоны"},
    {id: "002", type: "televisions", name: "Телевизоры"},
    {id: "003", type: "refrigerators", name: "Холодильники"},
]