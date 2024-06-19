import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditMenuComp = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [menu, setMenu] = useState({
    name: "",
    price: "",
    ingredients: "",
    category: "",
    image: null,
  });

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/menu/${id}`)
      .then((res) => {
        setMenu(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="viewMenuWrapper">
      <form encType="multipart/form-data" method="PUT" onSubmit={handleSubmit}>
        <img
          src={`http://127.0.0.1:8000/${menu.image}`}
          alt={menu.name}
          width={306}
          height={230}
        />
        <div className="row">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={menu.name}
            onChange={(e) => setMenu({ ...menu, name: e.target.value })}
          />
        </div>
        <div className="row">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={menu.price}
            onChange={(e) => setMenu({ ...menu, price: e.target.value })}
          />
        </div>
        <div className="row">
          <label>Ingredients</label>
          <textarea
            type="text"
            name="ingredients"
            value={menu.ingredients}
            onChange={(e) => setMenu({ ...menu, ingredients: e.target.value })}
          />
        </div>
        <div className="row">
          <label>Category</label>
          <select
            name="category"
            value={menu.category}
            onChange={(e) => setMenu({ ...menu, category: e.target.value })}
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Main Dishes">Main Dishes</option>
            <option value="Desserts">Desserts</option>
            <option value="Drinks">Drinks</option>
          </select>
        </div>
        <div className="row">
          <label>Image</label>
          <input
            type="file"
            name="image"
            onChange={(e) => setMenu({ ...menu, image: e.target.files[0] })}
          />
        </div>
        <div className="row">
          <button type="submit" onClick={handleUpdate}>
            Update Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMenuComp;
