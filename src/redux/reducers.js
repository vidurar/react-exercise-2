import sampleData from "../data/restaurants";
import { combineReducers } from "redux";

const restaurants = (state = sampleData.restaurants, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const user = (state = "Jane Smith", action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const neighborhood = (state = sampleData.neighborhood, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const appReducers = combineReducers({
  restaurants,
  neighborhood,
  user
});

export default appReducers;
