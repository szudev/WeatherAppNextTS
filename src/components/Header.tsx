import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { MapPin, Sun, Moon } from "phosphor-react";
import useGetCurrentTheme from "../hooks/useTheme";
import CustomTooltip from "../common";

function Header() {
  const [dateNow, setDateNow] = useState("");
  const { toggleTheme, themeChecker, isMounted } = useGetCurrentTheme();

  useEffect(() => {
    setDateNow(new Date().toLocaleDateString());
  }, []);

  if (!isMounted) return null;

  return (
    <section className={"flex justify-between items-center mr-8 ml-8  mt-4"}>
      <div className={"flex flex-col"}>
        <span>Fecha: {dateNow}</span>
        <p>Hora local: 20:43</p>
      </div>
      <div className={"flex gap-2"}>
        <CustomTooltip message="Geolocation">
          <button onClick={(): void => console.log("Map clicked")}>
            <MapPin size={"24"} weight={"bold"} />
          </button>
        </CustomTooltip>
        <CustomTooltip message="Theme">
          <button type="button" onClick={toggleTheme}>
            {themeChecker() ? (
              <Sun size={"24"} weight={"bold"} />
            ) : (
              <Moon size={"24"} weight={"bold"} />
            )}
          </button>
        </CustomTooltip>
      </div>
    </section>
  );
}

export default Header;
