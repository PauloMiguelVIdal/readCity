import { useState } from "react";
import file from "./base.md?raw";

export default function GameLogic() {
  const data = parseFrontmatter(file);

  const paginas = data.paginas_lidas || 0;
  const pontosGanhos = calcularPontos(paginas);

  const [pontos, setPontos] = useState(pontosGanhos);

  return (
    <div className="p-4 text-white">
      <h1 className="text-xl font-bold">📖 Leitura do Dia</h1>

      <p>Páginas lidasssess: {paginas}</p>
      <p>Pontos ganhos: {pontosGanhos}</p>

      <hr className="my-2" />

      <h2 className="text-lg">💰 Pontos disponíveis: {pontos}</h2>
    </div>
  );
}