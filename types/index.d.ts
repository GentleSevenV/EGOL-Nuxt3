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

interface IDict {
  id: number;
  name: string;
  orderNum: number;
  parentId: number | null;
  typeId: number;
  value: number;
}

interface DataResponsePageDict<T> {
  code: string;
  data: {
    category?: T;
    style?: T;
    space?: T;
  };
  message: string;
}
