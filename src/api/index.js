import http from "./http-common";

export const getAllTravelPackages = async () => {
  try {
    const allTravelPackages = await http.get("/gettravelpackages");
    return allTravelPackages;
  } catch (e) {
    return e;
  }
};
