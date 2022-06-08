declare global {
  namespace NodeJS {
    interface ProcessEnv {
      RAPIDAPI_WEATHER_API_KEY: string;
      RAPIDAPI_WEATHER_API_HOST: string;
      NODE_ENV: "development" | "production";
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
