import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditMenuComp = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    ingredients: "",
    category: "",
    image: null,
    newImage: null,
  });

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/menu/${id}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    const updatedData = new FormData();
    updatedData.append("name", formData.name);
    updatedData.append("price", formData.price);
    updatedData.append("ingredients", formData.ingredients);
    updatedData.append("category", formData.category);

    if (formData.newImage) {
      updatedData.append("image", formData.newImage);
    }

    for (let [key, value] of updatedData.entries()) {
      console.log(`${key}: ${value}`);
    }

    axios
      .post(`http://127.0.0.1:8000/api/menu/${id}?_method=PUT`, updatedData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          "X-HTTP-Method-Override": "PUT",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setFormData({
        ...formData,
        newImage: e.target.files[0],
      });
    }
  };

  return (
    <div className="viewMenuWrapper">
      <form
        encType="multipart/form-data"
        method="POST"
        onSubmit={(e) => formSubmit(e)}
      >
        {formData.newImage ? (
          <img
            src={URL.createObjectURL(formData.newImage)}
            alt="Preview"
            width={306}
            height={230}
            style={{ objectFit: "cover" }}
          />
        ) : formData.image ? (
          <img
            src={`http://127.0.0.1:8000/${formData.image}`}
            alt={formData.name}
            width={306}
            height={230}
            style={{ objectFit: "cover" }}
          />
        ) : null}
        <div className="row">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="row">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
        </div>
        <div className="row">
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            type="text"
            name="ingredients"
            id="ingredients"
            value={formData.ingredients}
            onChange={(e) =>
              setFormData({ ...formData, ingredients: e.target.value })
            }
          />
        </div>
        <div className="row">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option>Select a Category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Main Dishes">Main Dishes</option>
            <option value="Desserts">Desserts</option>
            <option value="Drinks">Drinks</option>
          </select>
        </div>
        <div className="row">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleImageChange}
          />
        </div>
        <div className="row">
          <button type="submit" onClick={handleSubmit}>
            Update Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMenuComp;
