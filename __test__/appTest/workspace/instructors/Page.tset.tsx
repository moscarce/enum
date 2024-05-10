import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Instructors from "../../../../app/workspace/instructors/page";

// Mocking the store
const mockStore = configureStore([]);

describe("Instructors component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      instructorState: [], // Initial state with no instructors
      instructorOption: { showOptions: false }, // Assuming showOptions is false initially
      email: null // Assuming no email initially
    });
  });

  test("renders NoInstructor component when no instructors available", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Instructors />
      </Provider>
    );
    const noInstructorComponent = getByTestId("no-instructor");
    expect(noInstructorComponent).toBeInTheDocument();
  });

  test("renders AvailableInstructors component when instructors are available", () => {
    store = mockStore({
      instructorState: [
        {
          name: "John Doe",
          email: "john@example.com",
          course: "Math",
          status: "Active",
          dateAdded: "2024-05-10",
          lastActivity: "2024-05-10"
        }
      ],
      instructorOption: { showOptions: false }, 
      email: null
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <Instructors />
      </Provider>
    );
    const availableInstructorsComponent = getByTestId("available-instructors");
    expect(availableInstructorsComponent).toBeInTheDocument();
  });
});
