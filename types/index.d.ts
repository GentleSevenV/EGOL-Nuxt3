declare interface DataResponse<T> {
  code: string;
  message?: string;
  data: T;
}

interface IPagination {
  page: number;
  size: number;
  total: number;
}

interface DataResponsePage<T> {
  code: string;
  data: { list: T; pagination: IPagination };
  message: string;
}
