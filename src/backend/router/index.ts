import * as trpc from "@trpc/server";
import { z } from "zod";
import { fetchOption } from "@/services/rapidapi";

export const appRouter = trpc.router().query("get-default-weather", {
  async resolve() {
    const weather = await fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=Santiago`,
      fetchOption
    );
    return weather.json();
  },
});

// export type definition of API
export type AppRouter = typeof appRouter;
