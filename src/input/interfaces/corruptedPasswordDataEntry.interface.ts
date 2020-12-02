import { IPasswordPolicyData } from './passwordPolicy.interface';

export interface IPasswordDataEntry {
    policy: IPasswordPolicyData;
    password: string;
}
