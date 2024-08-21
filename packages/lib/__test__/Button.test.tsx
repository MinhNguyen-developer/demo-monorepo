/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import Button from "../Button";
import { render, screen } from "test-utils";

it("hello", () => {
  render(<Button role="button">Test</Button>);

  expect(screen.getByRole("button")).toBeInTheDocument();
});

it("renders correctly", () => {
  const component = renderer.create(<Button>Button</Button>);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
