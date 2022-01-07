import { Double, Float, Int32, Number, String } from "@airtasker/spot";
import { FitnessIntegrations } from "./PastRide";

export interface CloudRide {
    data: {
        average_speed: Float;
        calories: Float;
        co2: Float;
        created_at: String;
        distance: Float;
        duration: Int32;
        elevation: Float;
        end: String;
        integration: FitnessIntegrations;
        id: Int32;
        markers: CloudMarker[];
        significant_markers: CloudSignificantMarker[];
        stamp: String;
        start: String;
        type: String;
        updated_at: String;
    };
}

export interface CloudMarker {
    accuracy: Float;
    altitude: Double;
    heading: Float;
    latitude: Double;
    longitude: Double;
    speed: Float;
    timestamp: Number;
}

export interface CloudSignificantMarker {
    latitude: Double;
    longitude: Double;
}
