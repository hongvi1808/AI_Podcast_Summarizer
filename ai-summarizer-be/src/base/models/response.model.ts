export class PaginationItem<T> {
    items: T[];
    total: number;
    page: number;
    limit: number;
    totalPage: number;

    constructor(items: T[], total: number, page: number, limit: number,) {
        this.items = items;
        this.total = total;
        this.page = page;
        this.limit = limit;
        this.totalPage = Math.ceil(total / limit);
    }
}
export class ResSuccess<T> {
  success: boolean;
  data: T | PaginationItem<T>;
  constructor(data: T | PaginationItem<T>) {
    this.success = true;
    this.data = data;
  }
}

export interface ResError {
    success: boolean;
    code: string;
    statusCode: number;
    message: string;
    error: any
    data?: any;
}