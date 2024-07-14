export type TApiHealth =
  | {
      albumService: boolean;
      gateway: boolean;
    }
  | false;
