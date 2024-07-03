import React from "react";
import "./ViewMenuComp.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";

const ViewMenuComp = () => {
  const adminToken = localStorage.getItem("adminToken");
  const handleDelete = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/menu/${id}`, {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    window.location.reload();
  };
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    ingredients: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    window.location.reload();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("price", formData.price);
    form.append("ingredients", formData.ingredients);
    form.append("category", formData.category);

    if (formData.image) {
      form.append("image", formData.image);
    }

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/menu", form, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${adminToken}`,
        },
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const [showTable, setShowTable] = useState(false);
  const handleTable = () => {
    setShowTable(!showTable);
  };
  const [menuItems, setMenuItems] = useState();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/menu", {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      })
      .then((res) => {
        setMenuItems(res.data);
      })
      .catch((err) => console.log(err));
  }, [adminToken]);
  return (
    <>
      <div className="viewMenuWrapper">
        <h2>Add Menu Items</h2>
        <form
          encType="multipart/form-data"
          method="POST"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="row">
            <label htmlFor="name">Item Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label htmlFor="price">Item Price</label>
            <input
              type="number"
              id="price"
              min="1"
              step="0.01"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label htmlFor="ingredients">Item Ingredients</label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <label htmlFor="category">Item Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option>Select Category</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Main Dishes">Main Dishes</option>
              <option value="Desserts">Desserts</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>
          <div className="row">
            <label htmlFor="image">Item Image</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div className="row">
            <button type="submit">Add Item</button>
          </div>
        </form>
        <h2>View Menu Items</h2>
        <div className="responsiveTable">
          <table>
            <thead>
              <tr>
                <th>Item ID</th>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Item Ingredients</th>
                <th>Item Category</th>
                <th>Item Image</th>
                <th colSpan={2}>Actions</th>
                <th onClick={handleTable} className="arrow">
                  {showTable ? <FaArrowDown /> : <FaArrowUp />}
                </th>
              </tr>
            </thead>
            <tbody style={showTable ? { display: "none" } : { display: "" }}>
              {menuItems?.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>$ {item.price}</td>
                  <td>{item.ingredients}</td>
                  <td>{item.category}</td>
                  <td>
                    <img
                      src={`http://127.0.0.1:8000/${item.image}`}
                      alt={item.name}
                    />
                  </td>
                  <td>
                    <Link to={`/admin-panel/edit-menu-item/${item.id}`}>
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewMenuComp;
