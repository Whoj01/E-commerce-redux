import UserActionTypes from "./action-types";

export function loginUser(payload) {
  return {
    type: UserActionTypes.LOGIN,
    payload
  }
}

export function logoutUser() {
  return {
    type: UserActionTypes.LOGIN
  }
}