export interface TodoItem {
  id: number;
  name: string;
  description: string;
  completed: boolean;
  favourite: boolean;
  expirationDate: Date;
}