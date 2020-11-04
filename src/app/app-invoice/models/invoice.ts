import { Client } from '../models/client';

export class Invoice {
  _id: string;
  item: string;
  qty: number;
  date: Date;
  due: Date;
  rate: number;
  tax: number;
  invoiceclient: Client;
}
