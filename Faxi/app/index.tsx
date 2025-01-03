import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import PhoneInput, { ICountry } from "react-native-international-phone-number";
import { router } from "expo-router";

export default function Index() {
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>();
  const [inputPhoneNumber, setInputPhoneNumber] = useState("");
  function handleInputValue(phoneNumber: string) {
    setInputPhoneNumber(phoneNumber);
  }

  function handleSelectedCountry(country: ICountry | null) {
    setSelectedCountry(country);
  }
  return (
    <View style={styles.main}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../components/images/item1.png")}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Используйте свой аккаунт Uber, чтобы продолжить
          </Text>
        </View>
        <View style={{ width: "100%" }}>
          <PhoneInput
            value={inputPhoneNumber}
            onChangePhoneNumber={handleInputValue}
            selectedCountry={selectedCountry}
            onChangeSelectedCountry={handleSelectedCountry}
            defaultCountry="RU"
            placeholder="Номер телефона"
            showOnly={["RU", "KZ", "BY", "UA"]}
            onEndEditing={() => router.push({ pathname: "./Verify" })}
            language="ru"
          />
        </View>
        <Text style={styles.annotation}>
          Продолжая, вы соглашаетесь получать звонки, сообщения WhatsApp или
          SMS, в том числе автоматические, от Uber и ее аффилированных лиц на
          указанный номер.
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: "5%",
  },
  imageContainer: {
    width: "99%",
    maxHeight: "63%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderWidth: 3,
    borderRadius: 25,
  },
  textContainer: {
    paddingTop: "5%",
    width: "100%",
  },
  text: {
    fontWeight: "900",
    fontSize: 28,
    textAlign: "justify",
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: "5%",
    justifyContent: "space-evenly",
  },
  annotation: { fontSize: 12, alignSelf: "flex-start" },
});
