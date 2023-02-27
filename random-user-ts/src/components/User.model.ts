interface UserObjectKeys {
  [key: string]: string;
}

export interface User extends UserObjectKeys {
  email: string;
  phone: string;
  name: string;
  location: string;
  password: string;
  picture: string;
  dob: string;
}
