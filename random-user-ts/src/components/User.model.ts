interface UserObjectKeys {
  [key: string]: string | number | Date | undefined;
}

export interface User extends UserObjectKeys {
  email?: string;
  phone?: string;
  name?: string;
  location?: string;
  password?: string;
  picture?: string;
  dob?: Date;
}
