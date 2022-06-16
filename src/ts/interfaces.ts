export interface SearchData {
  id?: number;
  name?: string;
  region?: string;
  country?: string;
  lat?: number;
  lon?: number;
  url?: string;
}

export interface HoursForecast {
  time_epoch: number;
  temp_c: string;
  is_day: number;
  condition: string;
  date: string;
}

export interface WeatherData {
  date?: string;
  temp_c?: string;
  current_condition?: string;
  icon_condition?: string;
  humidity?: string;
  gust_kph?: string;
  wind_kph?: string;
  is_day?: number;
  localtime?: string;
  city_name?: string;
  max_temp_c?: string;
  min_temp_c?: string;
  time_epoch?: number;
  hours_forecast?: HoursForecast[];
}
