import { useMutation } from "@tanstack/react-query";
import http from "../lib/http";

export const useCheckBuyer = () => {
  return useMutation((body) => {
    return http.post("/customer/checkBuyer", body);
  });
};

// SELLER APIS

// SIGN UP SELLER
export const useRegisterSeller = () => {
  return useMutation((body) => {
    return http.post("/seller/register", body);
  });
};

//LOG IN SELLER
export const useSellerLogin = () => {
  return useMutation((body) => {
    return http.post("/seller/login", body);
  });
};

//  BUYER APIS

//LOG IN BUYER
export const useLogin = () => {
  return useMutation((body) => {
    return http.post("/customer/login", body);
  });
};

//SIGN UP BUYER
export const useRegisterBuyer = () => {
  return useMutation((body) => {
    return http.post("/customer/register", body);
  });
};
