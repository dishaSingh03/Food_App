import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useContext } from "react";
import CartContext from "../Store/cart-context";
import Search from "../Layout/Search";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const ctx = useContext(CartContext);

  const searchTerm = ctx.searchTerm;
  console.log("ctx", ctx.searchTerm);

  console.log("Dummy", DUMMY_MEALS);

  const filterItems = DUMMY_MEALS.filter((item) =>
    //  console.log(item.name)
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // console.log(filterItems);
  const mealsList = filterItems.map((meals) => (
    <li>
      <MealItem
        id={meals.id}
        Key={meals.id}
        name={meals.name}
        description={meals.description}
        price={meals.price}
      />
    </li>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <Search/>
        <ul>{mealsList }</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
