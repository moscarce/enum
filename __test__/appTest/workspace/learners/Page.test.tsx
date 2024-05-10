import React from "react";
import { render } from "@testing-library/react";
import Learners from "../../../../app/workspace/learners/page";

describe("Learners component", () => {
  test("renders learners text", () => {
    const { getByText } = render(<Learners />);
    const learnersElement = getByText("Learners");
    expect(learnersElement).toBeInTheDocument();
  });
});
