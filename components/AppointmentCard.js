import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SharedElement } from "react-navigation-shared-element";
import { DURATION, COLORS, SPACING, height } from "../assets/styles/theme";
import Button from "../components/Button";
import * as Animatable from "react-native-animatable";

const ITEM_HEIGHT = height * 0.18;

export default function AppointmentCard({ navigation, index, item }) {
  const onViewPress = (item) => {
    navigation.navigate("Appointment", { item });
  };

  return (
    <Animatable.View
      animation="fadeInLeft"
      delay={DURATION + index * 200}
      data-testid={"appointment-card"}
    >
      <View style={{ marginBottom: SPACING, height: ITEM_HEIGHT }}>
        <View style={{ flex: 1, padding: SPACING + 10 }}>
          <SharedElement
            id={`item.${item.key}.background`}
            style={StyleSheet.absoluteFillObject}
          >
            <View
              style={[
                StyleSheet.absoluteFillObject,
                {
                  backgroundColor: COLORS.primary,
                  borderRadius: 16,
                },
              ]}
            />
          </SharedElement>
          <SharedElement id={`item.${item.key}.name`} style={styles.name}>
            <Text style={styles.name}>{item.name}</Text>
          </SharedElement>
          <Text style={styles.specialty}>
            <AntDesign name="calendar" size={15} color="black" /> {item.date}
          </Text>
          <TouchableOpacity
            onPress={() => {
              onViewPress(item);
            }}
          >
            <Button width={130} color={"black"} />
          </TouchableOpacity>
          <SharedElement id={`item.${item.key}.avator`} style={styles.avator}>
            <Image source={item.avator} style={styles.avator} />
          </SharedElement>
        </View>
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  avator: {
    width: ITEM_HEIGHT * 0.8,
    height: ITEM_HEIGHT * 0.8,
    resizeMode: "contain",
    position: "absolute",
    bottom: 0,
    right: SPACING,
  },
  name: {
    fontWeight: "700",
    fontSize: 19,
    color: "white",
    position: "absolute",
    left: SPACING * 0.8,
    marginTop: SPACING * 0.8,
  },
  specialty: {
    fontSize: 14,
    opacity: 0.7,
    marginTop: SPACING * 1.8,
  },
});
