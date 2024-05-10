import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Message from "@/src/components/Message/Message";

const mockStore = configureStore([]);

describe("Message component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      instructorOption: {
        showMessage: true,
        message: "Test message"
      }
    });
  });

  test("renders with message when showMessage is true", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Message />
      </Provider>
    );
    expect(getByText("Test message")).toBeInTheDocument();
  });
});
