import React from "react";
import renderer from "react-test-renderer";
import Appointment from "../pages/Appointment";

test("Appointment page renders correctly", () => {
  const tree = renderer.create(<Appointment />).toJSON();
  expect(tree).toMatchSnapshot();
});
