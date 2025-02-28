declare interface DataResponse<T> {
  code: number;
  message?: string;
  data: T;
}

interface IMessage{
  id: number;
  // 如果data还包含其他属性，继续在这里添加
}

interface IPagination {
  page: number;
  size: number;
  total: number;
}

interface DataResponsePage<T> {
  code: number;
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
  code: number;
  data: {
    category?: T;
    style?: T;
    space?: T;
  };
  message: string;
}
