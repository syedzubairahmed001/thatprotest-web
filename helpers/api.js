import axios from "../axios";

const errorAction = (action) => {
  return "ERROR__" + action.split("__")[1];
};
const successAction = (action) => {
  return "SUCCESS__" + action.split("__")[1];
};

export default (url, data, config) => {
  const { actionType, dispatch, method, passThrough, isMultipart } =
    config || {};
  if (!config || !actionType || !dispatch || !method) {
    return Promise.reject(
      "dispatch or actiontype or method is missing in parameters"
    );
  }
  let d = data ? data : null;
  dispatch({ type: actionType });
  let sendReq = null;
  switch (method.toLowerCase()) {
    case "post":
      sendReq = axios.post;
      break;
    case "get":
      d = null;
      sendReq = axios.get;
      break;
    case "put":
      sendReq = axios.put;
      break;
    default:
      sendReq = axios.get;
  }
//   const accessToken = localStorage.getItem("a-id") || null;
//   const refreshToken = localStorage.getItem("r-id") || null;
//   const currentAccountId = localStorage.getItem("current-acc-id") || null;
//   const currentAccountType = localStorage.getItem("current-acc-type") || null;

//   const axiosConfig = { headers: {} };
//   if (isMultipart) {
//     axiosConfig.headers[
//       "content-type"
//     ] = `multipart/form-data; boundary=${d._boundary}`;
//   }
//   if (accessToken && refreshToken) {
//     axiosConfig.headers["x-access-token"] = accessToken;
//     axiosConfig.headers["x-refresh-token"] = refreshToken;
//   }
//   if (currentAccountId && currentAccountType) {
//     axiosConfig.headers["acc-id"] = currentAccountId;
//     axiosConfig.headers["acc-type"] = currentAccountType;
//   }
  return sendReq(url, d || axiosConfig, d ? axiosConfig : null)
    .then((res) => {
      const data = res.data;
      if (data.error) {
        dispatch({ type: errorAction(actionType), data });
        return Promise.resolve(data);
      }
      const accessToken = res.headers["x-access-token"] || null;
      const refreshToken = res.headers["x-refresh-token"] || null;
      if (accessToken && refreshToken) {
        storeTokens(accessToken, refreshToken);
      }
      dispatch({ type: successAction(actionType), data, passThrough });
      return Promise.resolve(data);
    })
    .catch((err) => {
      console.log(err);
      if (err && err.response && err.response.data) {
        dispatch({
          type: errorAction(actionType),
          data: err.response.data,
          passThrough,
        });
        return Promise.resolve(err.response.data);
      } else {
        dispatch({
          type: errorAction(actionType),
          data: { msg: "Check your internet connection" },
        });
        dispatch({ type: "ERROR__INTERNET" });
        return Promise.reject("Check your internet connection");
      }
    });
};

const storeTokens = (a, r) => {
  localStorage.setItem("a-id", a);
  localStorage.setItem("r-id", r);
};
