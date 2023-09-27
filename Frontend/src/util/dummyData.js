import img1 from '../assets/estate.jpg'
import img2 from '../assets/estate2.jpg'
import img3 from '../assets/estate3.jpg'
import img4 from '../assets/estate4.jpg'

export const properties = [
  {
    img: img1,
    _id: crypto.randomUUID(),
    type: 'beach',
    price: 150000,
    sqmeters: 45.5,
    desc: 'best property here in India',
    beds: 4,
    currentOwner: '63e52a4cc0ca227a26de5161',
    continent: "India"
  },
  {
    img: img2,
    _id: crypto.randomUUID(),
    type: 'mountain',
    price: 250000,
    sqmeters: 56.5,
    desc: 'best property here in Newyork',
    beds: 3,
    currentOwner: '63e52a4cc0ca227a26de5161',
    continent: "North America"
  },
  {
    img: img3,
    _id: crypto.randomUUID(),
    type: 'village',
    price: 500000,
    sqmeters: 125.5,
    desc: 'best property here in London',
    beds: 2,
    currentOwner: '63e52a4cc0ca227a26de5161',
    continent: "Europe"
  },
  {
    img: img4,
    _id: crypto.randomUUID(),
    type: 'mountain',
    price: 175000,
    sqmeters: 85.5,
    desc: 'best property here in India',
    beds: 2,
    currentOwner: '63e52a4cc0ca227a26de5161',
    continent: "India"
  },
]