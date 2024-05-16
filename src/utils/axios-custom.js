import axios from "axios";

async function axiosCustom(
  endpoint,
  { method = "GET", data, body, ...customConfig } = {}
) {
  const headers = { Accept: "application/json" };
  const config = {
    method,
    data: data || body,
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  return axios(endpoint, config)
    .then(async (response) => {
      const { data: responseData } = response;
      return responseData;
    })
    .catch((e) => {
      if (!e.response)
        return Promise.reject({
          data: { message: "An error occured, please try again" },
        });
      let message;

      const { response } = e;
      const errorRes = {
        ok: response.status,
        custom_message: message,
        data: response.data,
        status: response.status,
      };
      return Promise.reject(errorRes);
    });
}

export default axiosCustom;
