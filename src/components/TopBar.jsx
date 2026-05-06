import React from "react";
import GameLogic from "./Parser";

export default function Topbar() {
// const paginas = 23


    return (
        <div className="h-[100px] w-full bg-black ">
            <div className="flex justify-around items-center">
                <div className="text-white">NOME CIDADE</div>
                {/* <div className="text-white">{paginas}</div> */}
                {/* <GameLogic/> */}
            </div>
        </div>
    )
}