import { AxiosInstance, AxiosResponse } from 'axios';
import axiosInstance from "./index.ts";

type BaseServiceProps = {
    instance?: AxiosInstance;
    version?: string;
    module?: string;
}

class BaseService {
    protected axios: AxiosInstance;
    protected module: string;

    constructor({ instance = axiosInstance, module = '' }: BaseServiceProps = {}) {
        this.axios = instance;
        this.module = module;
    }

    public getUrl(url: string) {
        return `/${this.module}/${url}`;
    }

    public async get<T>(url: string, params?: Record<string, unknown>): Promise<AxiosResponse<T>> {
        return await this.axios.get<T>(this.getUrl(url), { params });
    }

    public async post<T>(url: string, params?: Record<string, unknown>): Promise<AxiosResponse<T>> {
        return await this.axios.post<T>(this.getUrl(url), params);
    }

    public async put<T>(url: string, params?: Record<string, unknown>): Promise<AxiosResponse<T>> {
        return await this.axios.put<T>(this.getUrl(url), params);
    }

    public async delete<T>(url: string, params?: Record<string, unknown>): Promise<AxiosResponse<T>> {
        return await this.axios.delete<T>(this.getUrl(url), { data: params });
    }
}

export default BaseService;
