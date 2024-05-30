import conf from "../conf/config";
import { Client, Account, ID } from "appwrite";

type CreateUserAccount = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

const appwriteClient = new Client();

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient);

export class AppwriteService {
  async createUserAccount({
    firstname,
    lastname,
    email,
    password,
  }: CreateUserAccount) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        `${firstname} ${lastname}`
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error: any) {
      throw error;
    }
  }

  async login( { email, password }: LoginUserAccount) {
    try {
         return await account.createEmailSession(email, password)
    } catch (error:any) {
      throw error
    }
 }

  async isLoggedIn(): Promise<boolean> {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data);
    } catch (error) {
      return false;
    }
  }

  async getCurrentUser() {
    try {
      return await account.get();
    } catch (error) {
      console.log("getCurrentUser error", error);
    }
    return null;
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      console.log("logout error", error);
    }
  }
}

const appwriteService = new AppwriteService();

export default appwriteService;
