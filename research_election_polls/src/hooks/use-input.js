import React, { useReducer } from "react";

const initialInputState = {
  value: "",
  checkArr: [],
  isTouched: false,
};

const inputReducerFunc = (state, action) => {
  if (action.type === "CHECKBOX" && !state.checkArr.includes(action.value)) {
    return {
      value: action.value,
      checkArr: [...state.checkArr, action.value],
      isTouched: state.isTouched,
    };
  }

  if (action.type === "CHECKBOX" && state.checkArr.includes(action.value)) {
    return {
      value: action.value,
      checkArr: state.checkArr.filter((e) => e !== action.value),
      isTouched: false,
    };
  }

  if (action.type === "INPUT") {
    return {
      value: action.value,
      checkArr: state.checkArr,
      isTouched: state.isTouched,
    };
  }

  if (action.type === "BLUR") {
    return {
      value: state.value,
      checkArr: state.checkArr,
      isTouched: true,
    };
  }

  if (action.type === "RESET") {
    return { value: "", checkArr: [], isTouched: false };
  }
};

const useInput = (validatedValue) => {
  const [inputState, dispatch] = useReducer(
    inputReducerFunc,
    initialInputState
  );

  const valueIsValid = validatedValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;
  const checkHasError = inputState.checkArr.length < 1 && inputState.isTouched;

  const valueChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const valueChangeHandlerCheckBox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      dispatch({
        type: "CHECKBOX",
        value: value,
      });
    } else {
      dispatch({ type: "CHECKBOX", value: value });
    }
  };

  const inputBlurHandler = (e) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    checkArr: inputState.checkArr,
    isValid: valueIsValid,
    hasError: hasError,
    checkHasError: checkHasError,
    valueChangeHandler,
    valueChangeHandlerCheckBox,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
