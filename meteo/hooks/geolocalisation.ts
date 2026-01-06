import * as Location from 'expo-location';
import { useState, useEffect } from 'react';

export function useGeolocalisation() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        (async() => {
            // Demnder à l'utilisateur la permission
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setErrorMsg('Permission refusée');
                return;
            }

            // Récupérer la position
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    return { location, errorMsg };
}