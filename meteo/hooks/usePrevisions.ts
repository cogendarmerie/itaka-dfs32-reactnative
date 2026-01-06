import { useState, useEffect } from 'react';

interface ForecastItem {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    temp_kf: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  visibility: number;
  pop: number;
  rain: {
    '3h': number;
  }
  sys: {
    pod: string;
  };
}

interface ForecastData {
  list: ForecastItem[];
  city: {
    id: number;
    name: string;
    country: string;
    coord: {
        lat: number;
        lon: number;
    }
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

export function usePrevisions(latitude: number | null, longitude: number | null) {
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!latitude || !longitude) {
      return;
    }

    const fetchForecast = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=fr`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Erreur API: ${response.status}`);
        }

        const data = await response.json();
        setForecastData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [latitude, longitude]);

  return { forecastData, loading, error };
}