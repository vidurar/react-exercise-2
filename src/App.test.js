import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import data from "./data/restaurants.json";

import App from "./App";

const mockStore = configureStore([]);

describe("Deliveroo restaurant list page", () => {
  let store;
  let rendered;

  beforeEach(() => {
    store = mockStore({
      restaurants: data.restaurants,
      neighborhood: data.neighborhood,
      user: "Jane Smith"
    });
    rendered = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  it("should render app without crashing", () => {
    expect(rendered.queryByText("Jane Smith")).toBeInTheDocument();
  });

  it("should render the correct location label", () => {
    expect(rendered.queryByText("Location")).toBeInTheDocument();
    expect(rendered.queryByText(data.neighborhood)).toBeInTheDocument();
  });

  it("should render change location button", () => {
    expect(rendered.queryByText("Change location")).toBeInTheDocument();
  });

  it("should render the correct amount of restaurants available", () => {
    expect(
      rendered.queryByText(`${data.restaurants.length} restaurants`)
    ).toBeInTheDocument();
  });

  it("should render restaurant details with correct formatting", () => {
    expect(rendered.getByText("Burrito Kitchen")).toBeInTheDocument();
    expect(
      rendered.getByText("Mexican · Burritos · Halal · ££")
    ).toBeInTheDocument();
  });
});
