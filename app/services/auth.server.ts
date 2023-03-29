import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { googleStrategy } from "./google-strategy.server";

export type User = {
  username: string;
  email: string;
  photo?: string;
};

export let authenticator = new Authenticator<User>(sessionStorage);

authenticator.use(googleStrategy);
