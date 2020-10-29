import axios from "axios";

export const getAllTravelPackages = async () => {
  try {
    const allTravelPackages = await axios.get("/gettravelpackages");
    return allTravelPackages;
  } catch (e) {
    return e;
  }
};

export const getTravelPackageByID = async (tripID) => {
  try {
    const travelPackageByName = await axios.get(`/gettravelpackage/${tripID}`);
    return travelPackageByName;
  } catch (e) {
    return e;
  }
};

export const getAllCustomers = async () => {
  try {
    const getAllCustomers = await axios.get(`/getcustomers`);
    return getAllCustomers;
  } catch (e) {
    return e;
  }
};

export const postTravelPackage = async (booking) => {
  try {
    const postTravelPackage = await axios.post(`/postbooking`).then((res) => {
      console.log("res:", res);
      console.log("res.data:", res.data);
    });
    return postTravelPackage;
  } catch (e) {
    return e;
  }
};
