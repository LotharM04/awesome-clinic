import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { DURATION, COLORS, height } from "../assets/styles/theme";
import { appointments, profile } from "../configs/appData";
import Button from "../components/Button";
import { AppContext } from "../context/context";
import * as Animatable from "react-native-animatable";

const ITEM_HEIGHT = height * 0.18;

export default function Welcome({ navigation }) {
  const { dispatchAppEvent } = useContext(AppContext);

  useEffect(() => {
    dispatchAppEvent("ADD_PROFILE", { profile });
    dispatchAppEvent("ADD_APPOINTMENTS", { appointments });
  });

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={styles.image}>
        <Animatable.View animation="fadeIn" delay={DURATION + 1 * 100}>
          <Image
            source={require("../assets/illustrations/doctors.png")}
            style={styles.imageSVG}
          />
        </Animatable.View>
      </View>
      <View style={{ flex: 2 }}>
        <Animatable.View animation="fadeIn" delay={DURATION + 2 * 100}>
          <Text
            style={{
              color: COLORS.primary,
              textAlign: "center",
              fontSize: 30,
              padding: 10,
              fontWeight: "500",
            }}
          >
            WELCOME
          </Text>
          <Text
            style={{
              color: "black",
              textAlign: "center",
              fontSize: 25,
              padding: 10,
            }}
          >
            Helping you access the appropriate specialist, GP or dentist and
            minimise your out-of-pocket costs, through our extensive network.
          </Text>
        </Animatable.View>
      </View>
      <View style={{ flex: 1 }}>
        <Animatable.View
          animation="fadeInLeft"
          delay={DURATION + 3 * 100}
          style={styles.btn}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Dashboard");
            }}
          >
            <Button color={COLORS.primary} title={"GET STARTED"} />
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  imageSVG: {
    width: ITEM_HEIGHT * 2,
    height: ITEM_HEIGHT * 1.5,
  },
  btn: {
    alignItems: "center",
  },
});
