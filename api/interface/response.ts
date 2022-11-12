interface Response<data> {
    status:  string;
    message: string;
    data:    data;
}

export interface axiosResponse<data> {
    data: Response<data>;
}
