export enum FilterTypes {
  AlphaNorm,
  AlpahaRev,
  Status,
  None,
}

export type loginFieldsTypes = {
  email: string;
  password: string;
};

export type searchInput = {
  anItem: string;
};

export type ShowType = {
  show_id: string;
  show_name: string;
  user_id: string;
  watch_status: boolean;
  date_added: Date;
  list_id: string;
};
