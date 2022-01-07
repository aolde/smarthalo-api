import { String, Date, Double, Int32 } from "@airtasker/spot";

export interface SHUser {
    authLevel?: String;
    created_at?: String;
    dateOfBirth?: Date;
    deviceId?: String;
    deviceVersion?: String;
    devicePass?: String;
    distanceMetric?: boolean;
    email: String; // required
    firstName: String; // required
    gender?: 0 | 1 | 2 | 3;
    height?: Double;
    heightMetric?: boolean;
    id?: Int32;
    isConfirmed?: boolean;
    key: String; // required
    language?: String;
    lastName: String; // required
    password?: String;
    picture?: String;
    weight?: Double;
    weightMetric?: boolean;
}

export const enum Gender {
    GENDER_MAN = 0,
    GENDER_NOT_DISCLOSED = 3,
    GENDER_TRANS_OTHER = 2,
    GENDER_WOMAN = 1,
}
