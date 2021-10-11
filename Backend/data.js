import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Cory', 
      email: 'garton67@yahoo.com', 
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John', 
      email: 'user@example.com', 
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },

  ],
  products: [
    {
      _id: "1",
      name: "rosted Eth",
      category: "Arabica",
      image: "/image/P1.jpg",
      price: 43,
      rating: 4.5,
      numReviews: 24,
      description: "organic Coffee",
    },

    {
      _id: "2",
      name: "rosted Eth",
      category: "Excelsa",
      image: "/image/P2.jpeg",
      price: 31,
      rating: 4.5,
      numReviews: 10,
      description: "organic Coffee",
    },

    {
      _id: "3",
      name: "rosted Eth",
      category: "Robusta",
      image: "/image/P3.png",
      price: 48,
      rating: 4.5,
      numReviews: 15,
      description: "organic Coffee",
    },
  ],
};

export default data;
