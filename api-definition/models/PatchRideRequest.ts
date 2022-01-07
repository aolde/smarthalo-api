import { Double, Float, Number, String } from "@airtasker/spot";
import { FitnessIntegrations } from "./PastRide";

export interface PatchRideRequest {
    data: {
        average_speed: Double;
        calories: Float;
        co2: Double;
        distance: Float;
        duration: Number;
        elevation: Double;
        end: String;
        integration: FitnessIntegrations;
        start: String;
    };
}
