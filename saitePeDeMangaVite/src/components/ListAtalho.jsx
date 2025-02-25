import React from "react";

const ListAtalho = ({ menuItems }) => {
  return (
    <div>
      {menuItems.map((category, index) => (
        <a key={index} href={`#${category.category}`}>
          {category.category}
        </a>
      ))}
    </div>
  );
};

export default ListAtalho;
