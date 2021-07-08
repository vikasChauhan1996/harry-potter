import axios from "axios";

export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const FETCH_STUDENTS = "FETCH_STUDENTS";
export const FETCH_STAFF = 'FETCH_STAFF'

export const getCharactersList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://hp-api.herokuapp.com/api/characters");
    dispatch({ type: FETCH_CHARACTERS, payload: res.data });
  };
};

export const getStudentsList = () => {
  return async (dispatch) => {
    const res = await axios.get(
      "http://hp-api.herokuapp.com/api/characters/students"
    );
    dispatch({ type: FETCH_STUDENTS, payload: res.data });
  };
};

export const getStaffList = () => {
  return async (dispatch) => {
    const res = await axios.get(
      "http://hp-api.herokuapp.com/api/characters/staff"
    );
    dispatch({ type: FETCH_STAFF, payload: res.data });
  };
};


