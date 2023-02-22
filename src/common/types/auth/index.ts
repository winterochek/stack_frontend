export interface IPropsLogin {
  navigate: (to: string) => void;
  setPassword: (value: string) => void;
  setEmail: (value: string) => void;
}

export interface IPropsRegister {
  navigate: (to: string) => void;
  setPassword: (value: string) => void;
  setRepeatPassword: (value: string) => void;
  setEmail: (value: string) => void;
  setFirstName: (value: string) => void;
  setUsername: (value: string) => void;
}

export interface IAuthState {
  user: IPublicUser;
  isLogged: boolean;
}

interface IPublicUser {
  id: number | null;
  firstName: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  watchlist: [IWatchlist];
}

interface IWatchlist {
  id: number | null;
  name: string;
  assetId: string;
  createdAt: string;
  updatedAt: string;
  user: number | null;
}
