import { hola } from '../../assets/proof';
import umbnbApi from '../api/umbnbApi';

export const getHouses = async (page=0, size=5) => {
  const resp = await umbnbApi.get(
    `/house?page=${page}&size=${size}`
  )
  // console.log(resp.data.data.content)
  const houses = resp.data.data.content

  const results = []
  
    houses.map((house) => {
      const home = {
        id: house.id,
        Owner: house.owner.name,
        name: house.name,
        address: house.address,
        province: house.province,
        rooms_number: house.roomsNumber,
        persons_number: house.personsNumber,
        image: require('../../assets/house1.jpeg'),
        review: house.review,
        price: house.price,
        interiors: [
          require('../../assets/interior1.jpeg'),
          require('../../assets/interior2.jpeg'),
          require('../../assets/interior3.jpeg'),
        ]
      }
      results.push(home)

    })

    return results

}



const houses = [
    {
      id: '1',
      Owner: 'Raul',
      name: 'House 1',
      address: 'East Side Cedar Cottage Toronto',
      rooms_number: 4,
      persons_number: 8,
      image: require('../../assets/house1.jpeg'),
      review: 10,
      price: 500,
      interiors: [
        require('../../assets/interior1.jpeg'),
        require('../../assets/interior2.jpeg'),
        require('../../assets/interior3.jpeg'),
      ],
    },
    {
      id: '2',
      Owner: 'Raul2',
      name: 'House 2',
      address: 'East Side Cedar Cottage Toronto',
      rooms_number: 4,
      persons_number: 8,
      image: require('../../assets/house1.jpeg'),
      review: 10,
      price: 5000,
      interiors: [
        require('../../assets/interior1.jpeg'),
        require('../../assets/interior2.jpeg'),
        require('../../assets/interior3.jpeg'),
      ],
    },
    {
        id: '3',
        Owner: 'Raul3',
        name: 'House 3',
        address: 'East Side Cedar Cottage Toronto',
        rooms_number: 4,
        persons_number: 8,
        image: require('../../assets/house1.jpeg'),
        review: 10,
        price: 40,
        interiors: [
          require('../../assets/interior1.jpeg'),
          require('../../assets/interior2.jpeg'),
          require('../../assets/interior3.jpeg'),
        ],
    },
    {
      id: '4',
      Owner: 'Raul4',
      name: 'House 4',
      address: 'East Side Cedar Cottage Toronto',
      rooms_number: 4,
      persons_number: 8,
      image: require('../../assets/house1.jpeg'),
      review: 10,
      price: 24,
      interiors: [
        require('../../assets/interior1.jpeg'),
        require('../../assets/interior2.jpeg'),
        require('../../assets/interior3.jpeg'),
      ],
    },
  ];
  
  export default houses;