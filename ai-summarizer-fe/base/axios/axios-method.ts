import { AxiosRequestConfig } from "axios"
import { DataResponse } from "../models/response.model"
import axiosClient from "./client"
import { showAlertError } from "@/components/config/sweetalert"

type Method = 'get' | 'post' | 'put' | 'delete'

interface RequestOptions extends AxiosRequestConfig {
  isLoading?: boolean,
}


async function request<T = any>(
  method: Method,
  url: string,
  data: any = null,
  options: RequestOptions = {}
): Promise<T> {
  const { params, headers } = options

  const config = {
    method,
    url,
    data,
    params,
    headers: {
      ...headers,
    },
  }

  const res: DataResponse<T> = (await axiosClient.request<DataResponse<T>>(config)).data
  if (!res.success) showAlertError(res.message)
  return res.data
}

// Các method tiện dụng
const api = {
  get: <T= any>(url: string, options?: RequestOptions) => request<T>('get', url, null, options),
  post: <T = any>(url: string, data: any, options?: RequestOptions) => request<T>('post', url, data, options),
  put: <T = any>(url: string, data: any, options?: RequestOptions) => request<T>('put', url, data, options),
  delete: <T = any>(url: string, options?: RequestOptions) => request<T>('delete', url, null, options),
}

export default api
