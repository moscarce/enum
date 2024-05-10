import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InviteInstructorButton from "@/src/components/shared/InviteInstructorButton/InviteInstructorButton";

describe("InviteInstructorButton component", () => {
  test("renders button with correct text", () => {
    const { getByText } = render(<InviteInstructorButton router={{ push: jest.fn() }} />);
    const inviteButton = getByText("Invite Instructors");
    expect(inviteButton).toBeInTheDocument();
  });

  test("invokes router push function on button click", () => {
    const mockRouter = { push: jest.fn() };
    const { getByText } = render(<InviteInstructorButton router={mockRouter} />);
    const inviteButton = getByText("Invite Instructors");
    fireEvent.click(inviteButton);
    expect(mockRouter.push).toHaveBeenCalledWith("/workspace/instructors/invite-instructor");
  });
});
