import { Message } from "./message";

export interface Chat{
  creation_date:string;
  name:string;
  messages:Array<Message>;
}
