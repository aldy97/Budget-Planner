import React from "react";
import { mount } from "enzyme";
import TypeInput from "../../components/TypeInput";
import { findTestWrapper } from "../../utils/findTestWrapper";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { UPDATE_RECORD_TYPE, UpdateType } from "../../actions/ModalAction";

const mockStore = configureStore([]);

describe("TypeInput", () => {
  let wrapper;
  let store;

  let expenseBox;
  let incomeBox;

  beforeEach(() => {
    store = mockStore();

    store.dispatch = jest.fn();

    wrapper = mount(
      <Provider store={store}>
        <TypeInput></TypeInput>
      </Provider>
    );

    expenseBox = findTestWrapper(wrapper, "expense");
    incomeBox = findTestWrapper(wrapper, "income");
  });

  it("can be rendered", () => {
    expect(wrapper.length).toBe(1);
  });

  it("has expense box checked and income box unchecked as default", () => {
    expect(expenseBox.at(0).prop("checked")).toBeTruthy;
    expect(incomeBox.at(0).prop("checked")).not.toBeTruthy;
  });

  it("after expense is clicked, it becomes unchecked and income is now checked", () => {
    expenseBox.at(0).simulate("click");
    expect(expenseBox.at(0).prop("checked")).toBeFalsy;
    expect(incomeBox.at(0).prop("checked")).toBeTruthy;
  });

  it("disptach action to the reducer after being clicked", () => {
    expenseBox.at(0).simulate("click");
    expect(store.dispatch).toBeCalledTimes(1);
  });

  it("can disptach action to the store", () => {
    const action: UpdateType = {
      type: UPDATE_RECORD_TYPE,
      recordType: "expense",
    };
    store.dispatch(action);
    expect(store.getActions()).toMatchSnapshot();
  });
});
