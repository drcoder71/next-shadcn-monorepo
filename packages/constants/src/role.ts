export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MODERATOR: "moderator",
} as const;

export type IRole = (typeof ROLES)[keyof typeof ROLES];
