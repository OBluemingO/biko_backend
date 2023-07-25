import { Authenticator } from "../libs"

export interface IContainer {
  health: string
  logger: string
  lib: {
    authenticator: Authenticator 
  }
}