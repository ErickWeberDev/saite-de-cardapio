import React, { useState } from "react";
import { FaRegCheckSquare, FaRegSquare } from "react-icons/fa";

const ListItens = ({ menuItems, onTotalChange }) => {
  const [selectedItems, setSelectedItems] = useState({});

  const toggleItem = (item, itemKey) => {
    const isSelected = selectedItems[itemKey] || false;

    if (isSelected) {
      // Se o item já estava selecionado, atualiza o estado para removê-lo
      setSelectedItems((prev) => {
        const newSelected = { ...prev };
        delete newSelected[itemKey];
        return newSelected;
      });
      onTotalChange(-item.price);
    } else {
      // Se não estava selecionado, adiciona o item
      setSelectedItems((prev) => ({
        ...prev,
        [itemKey]: true,
      }));
      onTotalChange(item.price);
    }
  };

  return (
    <div>
      {menuItems.map((category, catIndex) => (
        <div key={catIndex} className="categoria" id={category.category}>
          <h2>{category.category}</h2>
          <ul>
            {category.items.map((item, itemIndex) => {
              const itemKey = `${catIndex}-${itemIndex}`;
              const isSelected = selectedItems[itemKey] || false;

              return (
                <li key={itemKey}>
                  <button
                    className={isSelected ? "check" : "no_check"}
                    onClick={() => toggleItem(item, itemKey)}
                  >
                    <p>
                      {item.name}
                      <span className="preco">{` R$${item.price.toFixed(
                        2
                      )}`}</span>
                    </p>
                    {isSelected ? (
                      <FaRegCheckSquare fontSize="17px" />
                    ) : (
                      <FaRegSquare fontSize="17px" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ListItens;
