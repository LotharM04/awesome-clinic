import React, { useContext } from "react";
import { AppContext } from "../context/context";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import { clerkAvator } from "../configs/appData";
import { SharedElement } from "react-navigation-shared-element";
import {
  DURATION,
  COLORS,
  SPACING,
  height,
  width,
} from "../assets/styles/theme";
import * as Animatable from "react-native-animatable";
import AppointmentCard from "../components/AppointmentCard";

const ITEM_HEIGHT = height * 0.18;

export default function Dashboard({ navigation }) {
  const { appointments, profile } = useContext(AppContext);

  const onViewPress = (item) => {
    navigation.navigate("Appointment", { item });
  };

  const randomDigit = () => {
    return Math.floor(Math.random() * Math.floor(2));
  };

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
        />
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
          <Text style={[styles.menuheading, { textAlign: "center" }]}>
            HOME
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

      <Animatable.View animation="fadeIn" delay={DURATION + 1 * 200}>
        <View style={{ margin: SPACING, height: ITEM_HEIGHT }}>
          <View style={{ flex: 1, padding: SPACING + 10 }}>
            <View
              style={[
                StyleSheet.absoluteFillObject,
                {
                  backgroundColor: "white",
                  borderRadius: 16,
                },
              ]}
            />

            <Image
              source={clerkAvator[1].avator}
              style={styles.welcomeAvator}
            />

            <Text
              style={styles.welcomeHeading}
            >{`"Welcome back \n${profile.firstname}"`}</Text>

            <Pressable
              onPress={() => navigation.navigate("Profile", { profile })}
              style={{
                alignItems: "flex-end",
                paddingRight: SPACING,
              }}
            >
              {({ pressed }) => (
                <Text style={{ textAlign: "left", fontSize: 15 }}>
                  View profile{" "}
                  <SimpleLineIcons name="arrow-right" size={10} color="black" />
                </Text>
              )}
            </Pressable>
          </View>
        </View>

        <View style={styles.menuContainer}>
          <View
            style={[
              styles.box,
              {
                flexBasis: "auto",
                flexShrink: 0,
                flexGrow: 3,
              },
            ]}
          >
            <Text style={[styles.subheading, { textAlign: "left" }]}>
              Appointments Summary
            </Text>
          </View>
          <View
            style={[
              styles.box,
              {
                flexBasis: "auto",
                flexShrink: 0,
                flexGrow: 1,
                marginTop: 7,
              },
            ]}
          >
            <Pressable
              onPress={() => navigation.navigate("Appointments")}
              style={{
                alignItems: "flex-end",
                paddingRight: SPACING,
              }}
            >
              {({ pressed }) => (
                <Text style={{ textAlign: "left", fontSize: 15 }}>
                  more{" "}
                  <SimpleLineIcons name="arrow-right" size={10} color="black" />
                </Text>
              )}
            </Pressable>
          </View>
        </View>
      </Animatable.View>

      <FlatList
        data={appointments.slice(0, 3)}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ padding: SPACING }}
        renderItem={({ item, index }) => {
          return (
            <AppointmentCard
              navigation={navigation}
              item={item}
              index={index}
              testID={"appointment-card"}
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
  menuheading: {
    fontSize: 24,
    fontWeight: "700",
  },
  subheading: {
    paddingBottom: SPACING,
    paddingLeft: SPACING,
    fontSize: 24,
    fontWeight: "700",
  },
  welcomeHeading: {
    padding: SPACING,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "right",
  },
  avator: {
    width: ITEM_HEIGHT * 0.6,
    height: ITEM_HEIGHT * 0.6,
    borderRadius: ITEM_HEIGHT * 0.3,
    resizeMode: "contain",
    position: "absolute",
    marginVertical: SPACING,
    right: SPACING,
    backgroundColor: COLORS.secondary,
  },
  avatorShadow: {
    width: ITEM_HEIGHT * 0.6,
    height: ITEM_HEIGHT * 0.6,
    borderRadius: 4,
    resizeMode: "contain",
    position: "absolute",
    marginVertical: SPACING,
    right: SPACING,
    backgroundColor: "transparent",
  },
  welcomeAvator: {
    width: ITEM_HEIGHT * 1.1,
    height: ITEM_HEIGHT * 1.1,
    resizeMode: "contain",
    position: "absolute",
    bottom: 0,
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
    paddingBottom: SPACING,
  },
  box: {
    flex: 1,
    height: 50,
    width: 70,
  },
});
