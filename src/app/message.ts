export interface Message {
  time: string;
  role:string;
  entities:object;
  intent:object;
  intent_ranking:object;
  text:string;
}
