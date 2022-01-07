import {
    String,
    Double,
    Float,
    Int32,
    Number,
    DateTime,
} from "@airtasker/spot";

export interface RideMarker {
    id: Number;
    latitude: Double;
    longitude: Double;
    accuracy: Float;
    activityConfidence: String;
    activityType: String;
    altitude: Float;
    heading: Double;
    ride_id: Int32;
    speed: Float;
    timestamp: Number;
    updated_at: DateTime;
    created_at: DateTime;
}
