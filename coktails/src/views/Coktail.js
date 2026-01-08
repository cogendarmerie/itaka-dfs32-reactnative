import { Image, ScrollView, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { getCoktail } from "../infrastructure/api";

export default function Coktail({ route, navigation }) {
    const { id } = route.params;

    const [coktail, setCoktail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchCoktail = async () => {
        try {
            setIsLoading(true);

            const data = await getCoktail(id);
            
            if (!data) {
                throw new Error("Coktail not found");
            }

            setCoktail(data);
        } catch (error) {
            console.error("Failed to fetch coktail:", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchCoktail();
    }, [id]);

    if (isLoading) {
        return <Loader isLoading={isLoading} />;
    }

    return <SafeAreaProvider>
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Header>{coktail?.strDrink}</Header>
                    <Image source={{ uri: coktail?.strDrinkThumb }} style={{ width: '100%', height: 250 }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>;
}