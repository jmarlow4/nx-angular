/**
 * Interface for the 'Todo' data
 */
export enum Color {
  RED = 'red',
  ORANGE = 'orange',
  YELLOW = 'yellow',
  GREEN = 'green',
  BLUE = 'blue',
  INDIGO = 'indigo',
  VIOLET = 'violet',
  PINK = 'pink',
}

export interface Todo {
  id?: number;
  text: string;
  created_at?: Date;
  userId?: string;
  color: Color | null;
}
