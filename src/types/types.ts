export type User = {
  username: string;
  password: string;
};
export type UserToken = {
  accessToken: string;
  refreshToken: string;
};
export type FiltersArray = {
  id: number;
  elem: string;
};
export type InputProductApi = {
  limit: number;
  skip: number;
  filter?: string;
  search?: string;
};
