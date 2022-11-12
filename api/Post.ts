import { axiosInstance } from './axios';

export const Post = <Response, Body>(path: String, body: Body) => {
  const promise = new Promise<Response>((resolve, reject) => {
    axiosInstance.post<Response, Response>(`${path}`).then(
      result => {
        resolve(result);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return promise;
};
