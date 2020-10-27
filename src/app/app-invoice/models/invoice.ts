export class Invoice {
  _id: string;
  item: string;
  qty: number;
  date: Date;
  due: Date;
  rate: number;
  tax: number;
  invoiceclient: string;
}

export class InvoicePaginationRsp {
  docs: Invoice[];
  total: number;
  pages: number;
  page: number;
  limit: number;
}
