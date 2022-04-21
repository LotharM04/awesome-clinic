import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/context";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Octicons, Entypo } from "@expo/vector-icons";
import { SharedElement } from "react-navigation-shared-element";
import {
  DURATION,
  COLORS,
  SPACING,
  height,
  width,
} from "../assets/styles/theme";
import Button from "../components/Button";
import AwesomeAlert from "react-native-awesome-alerts";
import * as Animatable from "react-native-animatable";

const ITEM_HEIGHT = height * 0.18;
const TOP_HEADER_HEIGHT = height * 0.3;

export default function Appointment({ navigation, route }) {
  const [alert, setAlert] = useState(false);
  const { dispatchAppEvent } = useContext(AppContext);
  const { item } = route.params;

  const showAlert = () => {
    setAlert(!alert);
  };

  const confimationOnAlert = (key) => {
    setAlert((alert) => (alert = false));
    dispatchAppEvent("REMOVE_APPOINTMENT", { key });
    navigation.navigate("Confirm");
  };

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

      <SharedElement id={`item.${item.key}.background`}>
        <View
          style={[
            StyleSheet.absoluteFillObject,
            {
              backgroundColor: COLORS.primary,
              height: TOP_HEADER_HEIGHT + 32,
            },
          ]}
        />
      </SharedElement>
      <SharedElement id={`item.${item.key}.name`}>
        <Text style={styles.name}>{item.name}</Text>
      </SharedElement>
      <SharedElement id={`item.${item.key}.avator`}>
        <Image source={item.avator} style={styles.avator} />
      </SharedElement>
      <SharedElement id={`general.bg`}>
        <View style={styles.bg}>
          <Animatable.View animation="fadeInUp" delay={DURATION + 1 * 100}>
            <Text style={styles.heading}>Location</Text>
            <View style={styles.info}>
              <Octicons
                name="primitive-dot"
                size={14}
                style={{ paddingTop: 3 }}
                color={COLORS.primary}
              />
              <Text
                style={styles.text}
              >{`${item.address.street}, ${item.address.city}`}</Text>
            </View>
          </Animatable.View>

          <Animatable.View animation="fadeInUp" delay={DURATION + 2 * 100}>
            <Text style={styles.heading}>Date & Time</Text>
            <View style={styles.info}>
              <Octicons
                name="primitive-dot"
                size={14}
                style={{ paddingTop: 3 }}
                color={COLORS.primary}
              />
              <Text style={styles.text}>{item.date} 2022</Text>
            </View>
          </Animatable.View>

          <Animatable.View animation="fadeInUp" delay={DURATION + 3 * 100}>
            <Text style={styles.heading}>Previous Bookings</Text>
            <View style={styles.info}>
              <Octicons
                name="primitive-dot"
                size={14}
                style={{ paddingTop: 3 }}
                color={COLORS.primary}
              />
              <Text style={styles.text}>{"None"}</Text>
            </View>
          </Animatable.View>

          <Animatable.View animation="fadeInUp" delay={DURATION + 4 * 100}>
            <Text style={styles.heading}>Information</Text>
            <View style={styles.info}>
              <Octicons
                name="primitive-dot"
                size={14}
                style={{ paddingTop: 3 }}
                color={COLORS.primary}
              />
              <Text style={styles.text}>{item.information}</Text>
            </View>

            <View style={styles.info}>
              <Octicons
                name="primitive-dot"
                size={14}
                style={{ paddingTop: 3 }}
                color={COLORS.primary}
              />
              <Text style={styles.text}>
                Consultation Fee: {item.consultationFee}
              </Text>
            </View>
          </Animatable.View>

          <Animatable.View
            animation="fadeInUp"
            delay={DURATION + 5 * 100}
            style={styles.btn}
          >
            <TouchableOpacity
              onPress={() => {
                showAlert();
              }}
            >
              <Button color={COLORS.danger} title={"Delete Appointment"} />
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </SharedElement>
      {alert ? (
        <AwesomeAlert
          show={true}
          showProgress={false}
          title="Delete appointment?"
          message="You are about to delete this appointment. Are you sure?"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, delete it"
          confirmButtonColor="#DD6B55"
          overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          contentContainerStyle={{ padding: 15 }}
          messageStyle={{
            textAlign: "center",
            marginVertical: 10,
            color: "black",
          }}
          titleStyle={{
            textAlign: "center",
            marginVertical: 10,
            color: "black",
          }}
          onCancelPressed={() => {
            showAlert();
          }}
          onConfirmPressed={() => {
            confimationOnAlert(item.key);
          }}
        />
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  avator: {
    width: ITEM_HEIGHT,
    height: ITEM_HEIGHT,
    resizeMode: "contain",
    position: "absolute",
    top: TOP_HEADER_HEIGHT - ITEM_HEIGHT * 0.9,
    right: SPACING,
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

Appointment.sharedElements = (route, otherRoute, showing) => {
  const { item } = route.params;

  return [
    { id: `item.${item.key}.background` },
    { id: `item.${item.key}.name` },
    { id: `item.${item.key}.avator` },
    { id: `general.bg` },
  ];
};
