import Adapters, { TypeORMUserModel } from "next-auth/adapters"
import { EntitySchemaColumnOptions } from 'typeorm'

export default class User extends (<any>Adapters.TypeORM.Models.User.model) {
  role: string
  constructor(
    name: string,
    email: string,
    image: string,
    emailVerified: Date | undefined,
  ) {
    super(name, email, image, emailVerified);
    if (!this.role) this.role = "User";

  }
}

type UserSchema = {
  name: string;
  target: typeof TypeORMUserModel;
  columns: {
    role?: {
      type: "varchar";
      nullable: boolean;
    };
    name?: EntitySchemaColumnOptions;
    email?: EntitySchemaColumnOptions;
    image?: EntitySchemaColumnOptions;
    emailVerified?: EntitySchemaColumnOptions;
  };
};

export const UserSchema: UserSchema = {
  name: "User",
  target: User,
  columns: {
    ...Adapters.TypeORM.Models.User.schema.columns,
    role: {
      type: "varchar",
      nullable: true,
    },
  },
};



