import { axiosInstance } from './axios';

export const Get = <Response>(path: String) => {
  const promise = new Promise<Response>((resolve, reject) => {
    axiosInstance.get<Response, Response>(`${path}`).then(
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
