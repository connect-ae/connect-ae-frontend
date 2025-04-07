import axios from "axios";
import { BASE_URL } from "../config/constant";
import {
  PACKAGES_ENDPOINT,
  PORTFOLIO_ENDPOINT,
  SERVICES_ENDPOINT,
  ORDERS_ENDPOINT,
  CONTACT_ENDPOINT,
} from "./endpoints";
import { ParamValue } from "next/dist/server/request/params";

// API call to fetch services
export const fetchServices = async () => {
  const response = await axios.get(`${BASE_URL}/${SERVICES_ENDPOINT}`);
  return response.data;
};

// API call to fetch a specific service by ID
export const findServiceById = async (id: ParamValue) => {
  const response = await axios.get(`${BASE_URL}/${SERVICES_ENDPOINT}/${id}`);
  return response.data;
};

// API call to fetch portfolio
export const fetchPortfolio = async () => {
  const response = await axios.get(`${BASE_URL}/${PORTFOLIO_ENDPOINT}`);
  return response.data;
};

// API call to fetch a specific portfolio by ID
export const findPortfolioById = async (id: ParamValue) => {
  const response = await axios.get(`${BASE_URL}/${PORTFOLIO_ENDPOINT}/${id}`);
  return response.data;
};

// API call to fetch packages
export const fetchPackages = async () => {
  const response = await axios.get(`${BASE_URL}/${PACKAGES_ENDPOINT}`);
  return response.data;
};

// ✅ New API call to create an order
export const createOrder = async (orderData: any) => {
  const response = await axios.post(
    `${BASE_URL}/${ORDERS_ENDPOINT}`,
    orderData
  );
  return response.data;
};

export const createContactRequest = async (formData: any) => {
  const response = await axios.post(
    `${BASE_URL}/${CONTACT_ENDPOINT}`,
    formData
  );
  return response.data;
};
