import React from "react";
import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={item.attributes.img.data.attributes.url} // Use the Cloudinary URL directly
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
