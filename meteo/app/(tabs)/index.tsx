import { KeyboardAvoidingView, Platform, StyleSheet, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useGeolocalisation } from '@/hooks/geolocalisation';
import { useMeteo } from '@/hooks/useMeteo';
import { usePrevisions } from '@/hooks/usePrevisions';
import { Forecast } from '@/components/ui/forecast';
export default function HomeScreen() {
  const { location, errorMsg } = useGeolocalisation();
  const { meteoData, loading, error } = useMeteo(
    location?.coords.latitude ?? null,
    location?.coords.longitude ?? null
  );
  const { forecastData, loading: loadingForecast, error: errorForecast } = usePrevisions(
    location?.coords.latitude ?? null,
    location?.coords.longitude ?? null
  );


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Météo</ThemedText>
        
        {errorMsg ? (
          <ThemedText>Erreur de géolocalisation : {errorMsg}</ThemedText>
        ) : !location ? (
          <ThemedView>
            <ActivityIndicator size="large" color="#fff" />
            <ThemedText>Chargement de la position...</ThemedText>
          </ThemedView>
        ) : loading ? (
          <ThemedView>
            <ActivityIndicator size="large" color="#fff" />
            <ThemedText>Chargement de la météo...</ThemedText>
          </ThemedView>
        ) : error ? (
          <ThemedText>Erreur météo : {error}</ThemedText>
        ) : meteoData ? (
          <>
            <ThemedView style={styles.meteoContainer}>
              <ThemedText type="subtitle">{meteoData.name}</ThemedText>
              <ThemedText type="title" style={styles.temperature}>
                {Math.round(meteoData.main.temp)}°C
              </ThemedText>
              <ThemedText style={styles.description}>
                {meteoData.weather[0].description}
              </ThemedText>
              <ThemedView style={styles.details}>
                <ThemedText>Ressenti : {Math.round(meteoData.main.feels_like)}°C</ThemedText>
                <ThemedText>Humidité : {meteoData.main.humidity}%</ThemedText>
                <ThemedText>Vent : {Math.round(meteoData.wind.speed * 3.6)} km/h</ThemedText>
              </ThemedView>
            </ThemedView>
            <ThemedView style={styles.forecastWrapper}>
              <ThemedView>
                <FlatList
                  data={forecastData?.list ?? []} 
                  keyExtractor={(item) => item.dt.toString()}
                  renderItem={({ item }) => <Forecast forecast={item} />}
                />
              </ThemedView>
            </ThemedView>
          </>
        ) : null}
      </ThemedView>
    </KeyboardAvoidingView>
  );
}

  
const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    marginTop: 48,
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    padding: 14
  },
  meteoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  temperature: {
    fontSize: 64,
    lineHeight: 64,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 20,
    textTransform: 'capitalize',
    marginTop: 8,
  },
  details: {
    marginTop: 20,
    gap: 8,
    alignItems: 'center',
  },
  forecastWrapper: {
    marginTop: 48,
  }
});
