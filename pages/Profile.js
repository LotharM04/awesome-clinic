import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Octicons, Entypo } from "@expo/vector-icons";
import {
  DURATION,
  COLORS,
  SPACING,
  height,
  width,
} from "../assets/styles/theme";
import * as Animatable from "react-native-animatable";

const ITEM_HEIGHT = height * 0.18;
const TOP_HEADER_HEIGHT = height * 0.3;

export default function Profile({ navigation, route }) {
  const { profile } = route.params;

  return (
    <View style={styles.container}>
      <Entypo
        name="chevron-left"
        size={28}
        style={{
          padding: 12,
          position: "absolute",
          top: SPACING * 2,
          left: SPACING,
          zIndex: 2,
        }}
        color={"black"}
        onPress={() => {
          navigation.goBack();
        }}
      />

      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: COLORS.primary,
            height: TOP_HEADER_HEIGHT + 32,
          },
        ]}
      />

      <Text style={styles.name}>
        {profile.firstname} {profile.lastname}
      </Text>

      <Image source={profile.avator} style={styles.avator} />

      <View style={styles.bg}>
        <Animatable.View animation="fadeInUp" delay={DURATION + 1 * 100}>
          <Text style={styles.heading}>Address</Text>
          <View style={styles.info}>
            <Octicons
              name="primitive-dot"
              size={14}
              style={{ paddingTop: 3 }}
              color={COLORS.primary}
            />
            <Text
              style={styles.text}
            >{`${profile.address.street}, ${profile.address.city}`}</Text>
          </View>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={DURATION + 2 * 100}>
          <Text style={styles.heading}>Email</Text>
          <View style={styles.info}>
            <Octicons
              name="primitive-dot"
              size={14}
              style={{ paddingTop: 3 }}
              color={COLORS.primary}
            />
            <Text style={styles.text}>{profile.email}</Text>
          </View>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={DURATION + 3 * 100}>
          <Text style={styles.heading}>Phone</Text>
          <View style={styles.info}>
            <Octicons
              name="primitive-dot"
              size={14}
              style={{ paddingTop: 3 }}
              color={COLORS.primary}
            />
            <Text style={styles.text}>{profile.phone}</Text>
          </View>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={DURATION + 4 * 100}>
          <Text style={styles.heading}>Member Since</Text>
          <View style={styles.info}>
            <Octicons
              name="primitive-dot"
              size={14}
              style={{ paddingTop: 3 }}
              color={COLORS.primary}
            />
            <Text style={styles.text}>{profile.memberSince}</Text>
          </View>
        </Animatable.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avator: {
    width: ITEM_HEIGHT * 0.7,
    height: ITEM_HEIGHT * 0.7,
    resizeMode: "contain",
    position: "absolute",
    top: TOP_HEADER_HEIGHT - ITEM_HEIGHT * 1.2,
    left: width * 0.36,
    backgroundColor: COLORS.secondary,
    borderRadius: ITEM_HEIGHT * 0.4,
  },
  name: {
    fontWeight: "700",
    fontSize: 22,
    color: "white",
    position: "absolute",
    top: TOP_HEADER_HEIGHT - SPACING * 3,
    left: SPACING + 10,
  },
  bg: {
    position: "absolute",
    backgroundColor: "white",
    width,
    height,
    transform: [{ translateY: TOP_HEADER_HEIGHT }],
    borderRadius: 32,
    padding: SPACING + 20,
    paddingTop: SPACING,
  },
  info: {
    fontWeight: "600",
    fontSize: SPACING,
    paddingTop: SPACING,
    left: 10,
    flexDirection: "row",
  },
  heading: {
    fontWeight: "200",
    fontSize: 24,
    paddingTop: 25,
  },
  btn: {
    top: TOP_HEADER_HEIGHT * 0.2,
  },
  text: {
    paddingLeft: SPACING - 10,
    fontWeight: "600",
    fontSize: SPACING,
  },
});
