import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import { ActivityIndicator, View, StyleSheet } from "react-native"

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Nunito: require("../assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Black": require("../assets/fonts/Nunito-Black.ttf"),
  })

  useEffect(() => {
    SplashScreen.preventAutoHideAsync() // Prevent auto-hide until fonts are loaded
  }, [])

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync() 
    }
  }, [loaded, error])

  if (error) {
    console.error("Error loading fonts:", error)
    return null 
  }

  if (!loaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    )
  }

  return(
    <Stack
      screenOptions={{
        headerShown: false
      }}
    />
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
