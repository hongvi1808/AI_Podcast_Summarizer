import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 60000,
})

// axiosClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Xử lý lỗi tập trung
//     if (error.response?.status > 400) {
//       console.warn('Unauthorized, redirecting to login...')
//     }
//     return Promise.reject(error)
//   }
// )
export default axiosClient