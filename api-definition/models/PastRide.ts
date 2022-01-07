import { Float, Int32, String } from "@airtasker/spot";

export interface PastRide {
    averageSpeed?: Float;
    calories?: Float;
    co2?: Float;
    createdAt: String; // required
    distance?: Float;
    duration?: Int32;
    elevation?: Float;
    end: String; // required
    integration?: FitnessIntegrations;
    hasDeleteRequest?: boolean;
    hasStravaUploadRequest?: boolean;
    hasUpdateRequest?: boolean;
    id?: Int32;
    stamp: String; // required, primary key
    start: String; // required
    updatedAt: String; // required
    user_id?: Int32;
}

export interface FitnessIntegrations {
    strava_id: String;
}
