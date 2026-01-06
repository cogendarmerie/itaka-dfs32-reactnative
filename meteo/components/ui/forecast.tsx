import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";

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

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const jour = date.toLocaleDateString('fr-FR', { weekday: 'short' });
    const heure = date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    return { jour, heure };
};

export function Forecast({ forecast } : { forecast: ForecastItem }) {
    const { jour, heure } = formatDate(forecast.dt_txt);
    return (
        <ThemedView style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 }}>
            <ThemedText>{`${jour} ${heure}`}</ThemedText>
            <ThemedText>{Math.round(forecast.main.temp)}°C</ThemedText>
            <ThemedText>{forecast.weather[0].description}</ThemedText>
        </ThemedView>
    );
}