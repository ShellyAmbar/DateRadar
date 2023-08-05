export interface ITextInputStatus {
  status: EnumITextInputStatus;
  activeStyle: any;
}

export enum EnumITextInputStatus {
  Idle = "idle",
  Focus = "focus",
  Error = "error",
  Disable = "disable",
}
