import React, { useContext } from "react";
import { AppContext } from "../context/context";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { SharedElement } from "react-navigation-shared-element";
import { COLORS, SPACING, height, width } from "../assets/styles/theme";
import AppointmentCard from "../components/AppointmentCard";

const ITEM_HEIGHT = height * 0.18;

export default function Appointments({ navigation }) {
  const { appointments } = useContext(AppContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menuContainer}>
        <View
          style={[
            styles.box,
            {
              flexBasis: "auto",
              flexShrink: 0,
              flexGrow: 1,
            },
          ]}
        >
          <Entypo
            name="chevron-left"
            size={30}
            style={{ alignItems: "flex-start", marginLeft: SPACING }}
            color={"black"}
            onPress={() => {
              navigation.navigate("Dashboard");
            }}
          />
        </View>
        <View
          style={[
            styles.boxheading,
            {
              flexBasis: "auto",
              flexShrink: 0,
              flexGrow: 2,
            },
          ]}
        >
          <Text style={[styles.menuheading, { textAlign: "center" }]}>
            APPOINTMENTS
          </Text>
        </View>
        <View
          style={[
            styles.box,
            {
              flexBasis: "auto",
              flexShrink: 0,
              flexGrow: 1,
            },
          ]}
        >
          <Pressable
            onPress={() => {}}
            style={{ alignItems: "flex-end", marginRight: SPACING }}
          >
            {({ pressed }) => (
              <Feather name="menu" size={30} style={{}} color="black" />
            )}
          </Pressable>
        </View>
      </View>
      <FlatList
        data={appointments}
        style={{ marginTop: SPACING }}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ padding: SPACING }}
        renderItem={({ item, index }) => {
          return (
            <AppointmentCard
              navigation={navigation}
              item={item}
              index={index}
            />
          );
        }}
      />
      <SharedElement id={`general.bg`}>
        <View style={styles.bg} />
      </SharedElement>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
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
  bg: {
    position: "absolute",
    backgroundColor: "white",
    width,
    height,
    transform: [{ translateY: height }],
    borderRadius: 32,
    padding: SPACING + 20,
    paddingTop: SPACING,
  },
  menuContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 20,
    height: 50,
    padding: SPACING * 0.5,
  },
  box: {
    flex: 1,
    height: 50,
    width: 10,
  },
  boxheading: {
    flex: 3,
    height: 50,
    width: 100,
  },
  menuheading: {
    fontSize: 24,
    fontWeight: "700",
  },
});
