import React from "react";

function Header() {
  return (
    <section className={"flex justify-between items-center"}>
      <div className={"flex flex-col"}>
        <p>Hora local: 18:58</p>
        <span>Fecha: 07/06/2022</span>
      </div>
      <input type={"checkbox"} className={"flex"} />
    </section>
  );
}

export default Header;
