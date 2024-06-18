import React from "react";
import "./MenuComponent.css";
import axios from "axios";
import { useState, useEffect } from "react";

const MenuComponent = () => {
  const [menuItems, setMenuItems] = useState();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/menu")
      .then((res) => {
        setMenuItems(res.data);
        console.log(res.data.filter((el) => el.category === "Breakfast"));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAll = (e) => {
    document.querySelector(".clickedBtn").classList.toggle("clickedBtn");
    e.target.classList.toggle("clickedBtn");
    let drinks = document.getElementsByClassName("Drinks");
    for (let i = 0; i < drinks.length; i++) {
      drinks[i].style.display = "flex";
    }
    let desserts = document.getElementsByClassName("Desserts");
    for (let i = 0; i < desserts.length; i++) {
      desserts[i].style.display = "flex";
    }
    let mainDishes = document.getElementsByClassName("Main Dishes");
    for (let i = 0; i < mainDishes.length; i++) {
      mainDishes[i].style.display = "flex";
    }
    let breakfast = document.getElementsByClassName("Breakfast");
    for (let i = 0; i < breakfast.length; i++) {
      breakfast[i].style.display = "flex";
    }
  };

  const handleBreakfast = (e) => {
    document.querySelector(".clickedBtn").classList.toggle("clickedBtn");
    e.target.classList.toggle("clickedBtn");
    let drinks = document.getElementsByClassName("Drinks");
    for (let i = 0; i < drinks.length; i++) {
      drinks[i].style.display = "none";
    }
    let desserts = document.getElementsByClassName("Desserts");
    for (let i = 0; i < desserts.length; i++) {
      desserts[i].style.display = "none";
    }
    let mainDishes = document.getElementsByClassName("Main Dishes");
    for (let i = 0; i < mainDishes.length; i++) {
      mainDishes[i].style.display = "none";
    }
    let breakfast = document.getElementsByClassName("Breakfast");
    for (let i = 0; i < breakfast.length; i++) {
      breakfast[i].style.display = "flex";
    }
  };

  const handleMainDishes = (e) => {
    document.querySelector(".clickedBtn").classList.toggle("clickedBtn");
    e.target.classList.toggle("clickedBtn");
    let drinks = document.getElementsByClassName("Drinks");
    for (let i = 0; i < drinks.length; i++) {
      drinks[i].style.display = "none";
    }
    let desserts = document.getElementsByClassName("Desserts");
    for (let i = 0; i < desserts.length; i++) {
      desserts[i].style.display = "none";
    }
    let breakfast = document.getElementsByClassName("Breakfast");
    for (let i = 0; i < breakfast.length; i++) {
      breakfast[i].style.display = "none";
    }
    let mainDishes = document.getElementsByClassName("Main Dishes");
    for (let i = 0; i < mainDishes.length; i++) {
      mainDishes[i].style.display = "flex";
    }
  };

  const handleDrinks = (e) => {
    document.querySelector(".clickedBtn").classList.toggle("clickedBtn");
    e.target.classList.toggle("clickedBtn");
    let desserts = document.getElementsByClassName("Desserts");
    for (let i = 0; i < desserts.length; i++) {
      desserts[i].style.display = "none";
    }
    let breakfast = document.getElementsByClassName("Breakfast");
    for (let i = 0; i < breakfast.length; i++) {
      breakfast[i].style.display = "none";
    }
    let mainDishes = document.getElementsByClassName("Main Dishes");
    for (let i = 0; i < mainDishes.length; i++) {
      mainDishes[i].style.display = "none";
    }
    let drinks = document.getElementsByClassName("Drinks");
    for (let i = 0; i < drinks.length; i++) {
      drinks[i].style.display = "flex";
    }
  };

  const handleDesserts = (e) => {
    document.querySelector(".clickedBtn").classList.toggle("clickedBtn");
    e.target.classList.toggle("clickedBtn");
    let drinks = document.getElementsByClassName("Drinks");
    for (let i = 0; i < drinks.length; i++) {
      drinks[i].style.display = "none";
    }
    let breakfast = document.getElementsByClassName("Breakfast");
    for (let i = 0; i < breakfast.length; i++) {
      breakfast[i].style.display = "none";
    }
    let mainDishes = document.getElementsByClassName("Main Dishes");
    for (let i = 0; i < mainDishes.length; i++) {
      mainDishes[i].style.display = "none";
    }
    let desserts = document.getElementsByClassName("Desserts");
    for (let i = 0; i < desserts.length; i++) {
      desserts[i].style.display = "flex";
    }
  };

  return (
    <div className="menuWrapper">
      <div className="menuTitle">
        <h1>Our Menu</h1>
        <p>
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
        <div className="buttonSection">
          <button
            className="menuButton clickedBtn"
            onClick={(e) => handleAll(e)}
          >
            All
          </button>
          <button className="menuButton" onClick={(e) => handleBreakfast(e)}>
            Breakfast
          </button>
          <button className="menuButton" onClick={(e) => handleMainDishes(e)}>
            Main Dishes
          </button>
          <button className="menuButton" onClick={(e) => handleDrinks(e)}>
            Drinks
          </button>
          <button className="menuButton" onClick={(e) => handleDesserts(e)}>
            Desserts
          </button>
        </div>
      </div>
      <div className="menuContainer">
        {menuItems?.map((el) => (
          <div className={`${el.category} menuItem`} key={el.id}>
            <img src={`http://127.0.0.1:8000/${el.image}`} alt="food" />
            <div className="itemInfo">
              <h3>$ {el.price}</h3>
              <h4>{el.name}</h4>
              <p>{el.ingredients}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;
