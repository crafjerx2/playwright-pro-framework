import { faker } from "@faker-js/faker";

interface UserData {
  username: string;
  email: string;
  role: string;
}

export class userBuilder {
  private user: UserData;

  constructor() {
    this.user = {
      username: faker.internet.username(),
      email: faker.internet.email(),
      role: "stand_user",
    };
  }

  withAdminRole() {
    this.user.role = "admin";
    return this;
  }
  withCustomEmail(email: string) {
    this.user.email = email;
    return this;
  }
  build(): UserData {
    return this.user;
  }
}
