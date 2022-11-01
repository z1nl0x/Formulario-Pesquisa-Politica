import React, { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
  checkArr: [""],
};

const inputReducerFunc = (state, action) => {
  if (action.type === "INPUT-CHECKBOX") {
    if (action.check && !state.checkArr.includes(action.value)) {
      return {
        isTouched: state.isTouched,
        checkArr: [...state.checkArr, action.value],
      };
    } else {
      return {
        isTouched: state.isTouched,
        checkArr: [...state.checkArr],
      };
    }
  }

  if (action.type === "INPUT") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }

  if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  }

  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
};

const useInput = (validatedValue) => {
  const [inputState, dispatch] = useReducer(
    inputReducerFunc,
    initialInputState
  );

  const valueIsValid = validatedValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const valueChangeHandlerCheckBox = (e) => {
    const isChecked = e.target.checked;

    dispatch({
      type: "INPUT-CHECKBOX",
      value: e.target.value,
      check: isChecked,
    });
  };

  const inputBlurHandler = (e) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    valueChangeHandlerCheckBox,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
