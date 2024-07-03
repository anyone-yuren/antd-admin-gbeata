import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig, AxiosInstance } from 'axios';
import { RequestOptions, Result } from '../types/axios';

export interface CreateAxiosOptions extends AxiosRequestConfig {
  authenticationScheme?: string;
  transform?: AxiosTransform;
  requestOptions?: RequestOptions;
}

export abstract class AxiosTransform {
  /**
   * @description: 请求前处理配置
   */
  beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig;

  /**
   * @description: 请求拦截器错误处理
   */
  requestInterceptorsCatch?: (error: any) => void;

  /**
   * @description: 响应拦截器处理
   */
  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

  /**
   * @description: 请求失败处理
   */
  requestCatchHook?: (e: Error, options: RequestOptions) => Promise<any>;

  /**
   * @description: 处理响应数据
   */
  transformResponseHook?: (res: AxiosResponse<Result>, options: RequestOptions) => any;
  /**
   * @description: 请求之前的拦截器
   */
  requestInterceptors?: (config: InternalAxiosRequestConfig, options: CreateAxiosOptions) => InternalAxiosRequestConfig;
  /**
   * @description: 请求之后的拦截器错误处理
   */
  responseInterceptorsCatch?: (axiosInstance: AxiosInstance, error: Error) => void;
}
