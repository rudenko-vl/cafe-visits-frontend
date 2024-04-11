import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://cafe-visits-backend.vercel.app/";
// axios.defaults.baseURL = "http://localhost:5000/";

const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const unsetToken = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const regUser = createAsyncThunk(
  "/auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/register", credentials);
      console.log(data);
      setToken(data.token);
      return data;
    } catch (error) {
      alert("Registration error, please try again");
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/login", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      alert("Authorization error, please try again");
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/auth/logout");
      unsetToken();
    } catch (error) {
      alert("Error, please try again!");
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/me",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return rejectWithValue();
    }
    setToken(persistedToken);
    try {
      const { data } = await axios.get("/auth/me");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getPerson = async (personId) => {
  const response = await axios.get(`/employes/${personId}`);
  const data = response.data;
  return data;
};
