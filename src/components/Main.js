import React from "react";
import Card from "./Card";
import greekSalad from "../assets/Salad.jpg";
import lasagna from "../assets/Lasagna.jpg";
import LemonDessert from "../assets/LemonDessert.jpg";

const specialsData = [
  {
    img: greekSalad,
    title: "Greek Salad",
    price: 8.99,
    description:
      "A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives,feta cheese and a handful of mint leaves for a fresh finishing touch.",
  },
  {
    img: lasagna,
    title: "Lasagna",
    price: 11.99,
    description:
      "Rich and creamy whole-wheat pasta dish filled layer by layer with refreshingly fresh onions and garlic, lathered in a succulent sauce and topped with imported, premium quality mozzarella.",
  },
  {
    img: LemonDessert,
    title: "Lemon Dessert",
    price: 5.0,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Main() {
  const specialsCards = specialsData.map((item) => {
    return (
      <Card
        key={item.title}
        image={item.img}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    );
  });

  return (
    <main>
      <section className="specials">
        <div className="top">
          <h1>Weekly specials!</h1>
          <button>Online Menu</button>
        </div>
        <div className="cards">{specialsCards}</div>
      </section>
      <br></br>
    </main>
  );
}

export default Main;
