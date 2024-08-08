import axios, { AxiosRequestConfig } from "axios";

type Props = {
  url: string;
  method: "GET" | "POST" | "DELETE" | "PATCH" | "PUT";
  data?: any;
  token?: string;
  config?: AxiosRequestConfig;
};

export type TErrorResponse = {
  error: number;
  status: number;
  message: string;
  data: any;
};

const callAPI = async ({ method, url, data, token, config }: Props) => {
  try {
    const headers: any = {
      "Content-Type": "application/json",
      ...config?.headers,
    };

    if (token) {
      headers["Authorization"] = token;
    }
    const response = await axios({
      method,
      url: `${process.env.NEXT_PUBLIC_API_URL}${url}`,
      data,
      ...config,
      headers,
    });
    const res = await response.data;
    return res;
  } catch (error: any) {
    return {
      error: 1,
      status: error.status,
      message: error.response?.data.message || "Error",
      data: null,
    } as TErrorResponse;
  }
};

export default callAPI;
