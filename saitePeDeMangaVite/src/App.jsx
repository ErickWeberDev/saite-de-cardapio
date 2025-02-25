import React, { useState } from "react";
import menuItems from "../data/menuItens.js";
import ListAtalho from "./components/ListAtalho";
import ListItens from "./components/ListItens.jsx";
import ValorTotal from "./components/ValorTotal.jsx";

const App = () => {
  // Estado para armazenar o valor total
  const [total, setTotal] = useState(0);

  // Função que atualiza o total (soma ou subtrai)
  const handleTotalChange = (amount) => {
    setTotal((prevTotal) => prevTotal + amount);
  };

  return (
    <div>
      <header>
        <h1>Pe De Manga</h1>
        <ListAtalho menuItems={menuItems} />
      </header>

      <main>
        {/* Passa a função de atualização para o ListItens */}
        <ListItens menuItems={menuItems} onTotalChange={handleTotalChange} />
      </main>

      <footer>
        {/* Passa o valor total atualizado para o componente ValorTotal */}
        <ValorTotal total={total} />
      </footer>
    </div>
  );
};

export default App;
