import { trpc } from "@/utils/trpc";
import React from "react";
import { Heart, MapPin } from "phosphor-react";
import CustomTooltip from "@/common/tooltip";

export default function WeatherLocation() {
  const response = trpc.useQuery(["get-default-weather"]);
  if (response.isLoading) return null;
  console.log(response.data);
  return (
    <section className={"flex flex-col m-4 items-center gap-4"}>
      <div className="text-7xl">{response.data?.location?.name}</div>
      <div className="text-3xl">{response.data?.location?.country}</div>
      <div className="flex gap-1">
        <CustomTooltip message="Guardar ubicación">
          <button className="flex hover:bg-hover-light-color p-2 rounded-md dark:hover:bg-hover-dark-color">
            <Heart size={"24"} weight={"bold"} />
          </button>
        </CustomTooltip>
        <CustomTooltip message="Establecer ubicación como predeterminada">
          <button className="flex gap-1 hover:bg-hover-light-color p-2 rounded-md dark:hover:bg-hover-dark-color">
            <MapPin size={"24"} weight={"bold"} />
          </button>
        </CustomTooltip>
      </div>
    </section>
  );
}
