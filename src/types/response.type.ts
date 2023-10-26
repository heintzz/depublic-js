export type ResponseSingleType<DataTypes> = {
  success: boolean;
  status: string;
  message: string;
  data: DataTypes;
  errors: boolean;
};

export type ResponseType<DataTypes> = {
  success: boolean;
  message: string;
  data: {
    items: Array<DataTypes>;
  };
  errors: boolean;
};

export interface User {
  username: string;
  isLogin: boolean;
}

export interface Response {
  state: User;
}
