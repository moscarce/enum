import React from "react";
import { render } from "@testing-library/react";
import Page from "../../../../app/workspace/programs/page"; // Import the Page component

describe("Page component", () => {
  test("renders text 'Programs'", () => {
    const { getByText } = render(<Page />);
    const programsElement = getByText("Programs");
    expect(programsElement).toBeInTheDocument();
  });
});
