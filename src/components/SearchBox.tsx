import React, { useState } from "react";
import { fetcher } from "../services/fetcher";
import { SearchData } from "../ts/interfaces";

function SearchBox() {
  return (
    <section className={"m-4"}>
      <input
        type={"text"}
        placeholder={"Busca alguna ciudad"}
        className={"p-3 rounded-md border"}
      />
    </section>
  );
}

export default SearchBox;
