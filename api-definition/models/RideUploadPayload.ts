import { String, Number, Double, Float, Int32 } from "@airtasker/spot";
import { FitnessIntegrations } from "./PastRide";

export interface RideUploadPayload {
    averageSpeed: Double;
    calories: Int32;
    co2: Double;
    distance: Int32;
    duration: Number;
    elevation: Double;
    end: String;
    integration: FitnessIntegrations;
    markers: RideUploadLocation;
    maxSpeed: Double;
    stamp: Number;
    start: String;
}

export interface RideUploadLocation {
    coords: SHLocation;
    timestamp: Number;
}

export interface SHLocation {
    key: String;
    latitude: Double;
    longitude: Double;
    accuracy?: Float;
    address?: String;
    altitude?: Double;
    description?: String;
    heading?: Float;
    speed?: Float;
    timestamp?: Number;
    title?: String;
    type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

export enum LocationType {
    DEFAULT = 0,
    HOME = 1,
    WORK = 2,
    FAVOURITE = 3,
    BIKE = 4,
    HISTORY = 5,
    SEARCH_RESULT = 6,
    EMPTY_SEPARATOR = 7,
}
