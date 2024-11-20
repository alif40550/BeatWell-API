export type History = {
  userId: number;
  result: number;
};

export type HistoryResponse = {
  id: number;
  userId: number;
  result: string;
  createdAt: Date;
};