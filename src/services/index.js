import axiosCustom from "utils/axios-custom";

export const apis = {
  fetchData: () =>
    axiosCustom(
      "https://gist.githubusercontent.com/dhwissem/5e7c48768af1eb721d9e2e1d874cd9a0/raw/6530e16c5aa203c1a1c41e5fb73595870407cb56/serverResponse.json"
    ),
};
