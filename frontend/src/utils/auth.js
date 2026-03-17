import { userAuthInformationStore } from "../store/auth";
import axios from "./axios";
import { jwtDecode } from "jwt-decode";
import Cookie from "js-cookie";

// ---------------- LOGIN -----------------
export const login = async (email, password) => {
  try {
    const { data, status } = await axios.post("user/token/", {
      email,
      password,
    });
    if (status === 200) {
      setAuthUser(data.access, data.refresh);
     return { data, error: null };
    }

   
  } catch (error) {
    return {
      data: null,
      error:
        error?.response?.data?.detail ||
        error?.response?.data?.email?.[0] ||
        "Something went wrong, please try again.",
    };
  }
};

// ------------- REGISTER -----------------
//register a new user and logged in them
export const register = async (full_name, email, password, password2) => {
  // const { showAlert } = useAlert();
  try {
    const { data } = await axios.post("user/register/", {
      full_name,
      email,
      password,
      password2,
    });

    await login(email, password);
    // showAlert("Congratulations, your account is ready");
    return { data, error: null };
  } catch (error) {
    return {
      data: null,
      error:
        error?.response?.data?.email?.[0] ||
        error?.response?.data?.password?.[0] ||
        error?.response?.data?.password2?.[0] ||
        error?.response?.data?.detail ||
        "Something went wrong, please try again.",
    };
  }
};

// ----------- LOGOUT -----------------
//logout a user
//remove access and refresh token from Cookies, remove data from Store state
export const logout = () => {
  Cookie.remove("access_token");
  Cookie.remove("refresh_token");
  userAuthInformationStore.getState().setUser(null);
};

// -------------- SET-USER ----------------------
export const setUser = async () => {
  try {
    const access_token = Cookie.get("access_token");
    const refresh_token = Cookie.get("refresh_token");

    // No tokens = not logged in, set user to null and abort
    if (!access_token || !refresh_token) {
      console.log("No tokens found, user not logged in");
      userAuthInformationStore.getState().setUser(null);
      return;
    }

    let access = access_token;
    let refresh = refresh_token;

    // Check if access token has expired
    if (isAccessTokenExpierd(access)) {
      const response = await getRefreshedToken();
      access = response.access;
      refresh = response.refresh;
    }

    // Save tokens and update store with fresh user data
    setAuthUser(access, refresh);
    
    const res = await axios.get("user/profile/update/", {
      headers: { Authorization: `Bearer ${access}` }
    });

    userAuthInformationStore.getState().setUser({
      ...userAuthInformationStore.getState().userData,
      image: res.data.image,
      initials: res.data.initials,
      full_name: res.data.full_name,
    });

  } catch (error) {
    console.error("Error setting user:", error);
    // If something goes wrong, reset the user
    userAuthInformationStore.getState().setUser(null);
  }
};

// ----------- SET-AUTHENTICATED-USER -------------
//save tokens in cookies and update user in store
export const setAuthUser = (access_token, refresh_token) => {
  Cookie.set("access_token", access_token, {
    expires: 1,
    secure: true,
  });

  Cookie.set("refresh_token", refresh_token, {
    expires: 7,
    secure: true,
  });

  //decoding user data else null
  const user = jwtDecode(access_token) ?? null;

  if (user) {
    userAuthInformationStore.getState().setUser(user);
  } else {
    userAuthInformationStore.getState().setLoading(false);
  }
};

// ------------- USE REFRESH TOKEN TO GET A NEW ACCESS TOKEN (WHEN EXPIRED) ------------------
export const getRefreshedToken = async () => {
  const refresh_token = Cookie.get("refresh_token");
  const response = await axios.post("user/token/refresh/", {
    refresh: refresh_token,
  });
  return response.data;
};

//------------ CHECKING IF ACCESS TOKEN HAS EXPIERED ------
export const isAccessTokenExpierd = (access_token) => {
  try {
    const decodedToken = jwtDecode(access_token);
    return decodedToken.exp < Date.now() / 1000;
  } catch (error) {
    console.log(error);

    return true;
  }
};
