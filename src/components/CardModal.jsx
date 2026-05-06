import React, { useState } from "react";

import passive from "../../public/outrasImagens/rendaPassiva.png";
import sell from "../../public/outrasImagens/sellContracts.png";
import estoque from "../../public/outrasImagens/estoque.png";
import component from "../../public/outrasImagens/component.png";
import licencaImg from "../../public/outrasImagens/licença.png";

const getImageUrl = (nome) => `/imagens/${nome}.png`;

// 🎨 SETORES (igual original)
const setores = {
  agricultura: { cor1: "#003816", cor2: "#1A5E2A", cor3: "#0C9123", cor4: "#4CAF50" },
  tecnologia: { cor1: "#A64B00", cor2: "#D45A00", cor3: "#FF6F00", cor4: "#FF8C42" },
  industria: { cor1: "#1A1A1A", cor2: "#4D4D4D", cor3: "#808080", cor4: "#B3B3B3" },
  comercio: { cor1: "#660000", cor2: "#A31919", cor3: "#E60000", cor4: "#FF4D4D" },
  imobiliario: { cor1: "#000066", cor2: "#1A1A8C", cor3: "#3333CC", cor4: "#6666FF" },
  energia: { cor1: "#665200", cor2: "#A37F19", cor3: "#E6B800", cor4: "#FFD966" },
};

const CardModalBase = ({
  nome,
  custo,
  categoria,
  setor = "agricultura",
  quantidadeInicial = 0,
  saldo,
  setSaldo,
  liberado = true,
}) => {
  const [quantidade, setQuantidade] = useState(quantidadeInicial);

  const setorInfo = setores[setor];

  // 🎯 Categoria
  const isProducao = categoria === "producao";
  const isVenda = categoria === "venda";
  const isEstoque = categoria === "estoque";
  const isPassiva = categoria === "passiva";

  const getIconCategoria = () => {
    if (isProducao) return component;
    if (isVenda) return sell;
    if (isEstoque) return estoque;
    return passive;
  };

  // 🌈 GRADIENTE ORIGINAL (recuperado)
  const getGradient = () => {
    if (isProducao)
      return `radial-gradient(circle at 2% 50%, ${setorInfo.cor1}99 0%, ${setorInfo.cor4} 40%, ${setorInfo.cor3} 70%, ${setorInfo.cor2} 100%)`;

    if (isVenda)
      return `radial-gradient(circle at 100% 0%, ${setorInfo.cor1}11 0%, ${setorInfo.cor4} 30%, ${setorInfo.cor3} 60%, ${setorInfo.cor2} 100%)`;

    if (isEstoque)
      return `linear-gradient(190deg, ${setorInfo.cor2} 0%, ${setorInfo.cor4} 40%, ${setorInfo.cor3} 70%, ${setorInfo.cor1} 100%)`;

    return `linear-gradient(135deg, ${setorInfo.cor4} 0%, ${setorInfo.cor2} 50%, ${setorInfo.cor1} 100%)`;
  };

  // 🧱 BORDA ORIGINAL
  const getBorda = () => {
    if (isProducao)
      return {
        border: `2px solid ${setorInfo.cor1}55`,
        boxShadow: `0 0 0 1px ${setorInfo.cor3}88`,
        borderRadius: "25px 10px 25px 10px",
      };

    if (isEstoque)
      return {
        border: `2px solid ${setorInfo.cor2}`,
        boxShadow: `0 0 0 3px ${setorInfo.cor3}88`,
        borderRadius: "20px",
      };

    if (isVenda)
      return {
        border: `1.5px solid ${setorInfo.cor3}`,
        borderRadius: "20px",
      };

    return {
      border: `1px solid ${setorInfo.cor3}55`,
      boxShadow: `0 0 0 1px ${setorInfo.cor1}88`,
      borderRadius: "20px",
    };
  };

  // 💰 Compra
  const podeComprar = saldo >= custo && liberado;

  const comprar = () => {
    if (!podeComprar) return;
    setSaldo((prev) => prev - custo);
    setQuantidade((q) => q + 1);
  };

  return (
    <div
      className="w-[220px] h-[320px] flex flex-col items-center justify-center shadow-lg relative"
      style={{ background: getGradient(), ...getBorda() }}
    >
      {/* 🔒 LICENÇA */}
      {!liberado && (
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-10 rounded-2xl">
          <img src={licencaImg} className="w-8 mb-2" />
          <span className="text-white text-xs">Licença necessária</span>
        </div>
      )}

      {/* 🏷 BADGE CATEGORIA */}
      <div className="absolute bottom-0 right-0 w-[45px] h-[45px] flex items-center justify-center rounded-tl-2xl">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: setorInfo.cor3 }}
        />
        <img src={getIconCategoria()} className="w-5 z-10" />
      </div>

      {/* 🔝 HEADER */}
      <div className="w-[90%] h-[20%] flex items-center justify-center mt-2">
        <h1 className="text-white text-[12px] font-bold text-center">
          {nome}
        </h1>
      </div>

      {/* 🔵 INSÍGNIA CENTRAL */}
      <div className="flex flex-col items-center justify-center flex-1">
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: `conic-gradient(${setorInfo.cor4}, ${setorInfo.cor3}, ${setorInfo.cor2}, ${setorInfo.cor4})`,
            padding: 4,
            boxShadow: `0 0 15px ${setorInfo.cor4}55`,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${setorInfo.cor3}, ${setorInfo.cor1})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `2px solid ${setorInfo.cor2}`,
            }}
          >
            <img
              src={getImageUrl(nome)}
              style={{
                width: "55%",
                objectFit: "contain",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,.6))",
              }}
            />
          </div>
        </div>
      </div>

      {/* 🔻 FOOTER */}
      <div className="w-[90%] mb-2 flex gap-2">
        <div className="bg-black/30 px-2 py-1 rounded text-white text-sm font-bold">
          {quantidade}
        </div>

        <button
          onClick={comprar}
          disabled={!podeComprar}
          className={`flex-1 py-1 rounded text-sm font-bold ${
            podeComprar ? "bg-purple-600" : "bg-gray-500"
          }`}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export const CardModal = React.memo(CardModalBase);