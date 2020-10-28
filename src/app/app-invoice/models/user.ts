export interface User {
  _id: string;
  email: string;
  password: string;
}
// export class User {
//   _id: string;
//   email: string;
//   password: string;
// }

export interface LoginResponse {
  success: boolean;
  token: string
}
export interface SignupRsp {
  success: boolean;
  message: string;
}

