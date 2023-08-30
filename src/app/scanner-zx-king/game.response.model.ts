export interface ItemData {
  id: string;
  name: string;
  pointPrice: number;
  createdAt: string;
}

export interface ApiResponse {
  statusCode: number;
  message: string;
  data: ItemData;
}
