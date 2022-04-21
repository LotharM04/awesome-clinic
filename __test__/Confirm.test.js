import React from "react";
import renderer from "react-test-renderer";
import Confirm from "../pages/Confirm";

test("Confirm page renders correctly", () => {
  const tree = renderer.create(<Confirm />).toJSON();
  expect(tree).toMatchSnapshot();
});
