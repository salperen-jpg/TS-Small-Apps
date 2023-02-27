interface UserObjectKeys {
  [key: number]: string;
}

export interface Person extends UserObjectKeys {
  avatar_url: string;
  login: string;
}
