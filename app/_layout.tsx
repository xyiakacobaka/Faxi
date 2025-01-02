import { Stack } from "expo-router";
import { store } from "../store/store";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <Stack screenOptions={{ headerShown: false }} />
    </Provider>
  );
}
