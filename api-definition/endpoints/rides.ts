import {
    endpoint,
    body,
    headers,
    String,
    request,
    Number,
    response,
    queryParams,
    pathParams,
} from "@airtasker/spot";
import { AccessTokenHeader } from "../models/AccessTokenHeader";
import { CloudRide } from "../models/CloudRide";

import { PastRide } from "../models/PastRide";
import { PatchRideRequest } from "../models/PatchRideRequest";
import { RideMarker } from "../models/RideMarker";
import { RideUploadPayload } from "../models/RideUploadPayload";

/** Get user rides */
@endpoint({
    method: "GET",
    path: "/api/v1/users/rides",
    tags: ["Rides"],
})
class GetUserRides {
    @request
    request(@headers headers: AccessTokenHeader) {}

    @response({ status: 200 })
    response(@body body: PastRide[]) {}
}

/** Upload user rides */
@endpoint({
    method: "POST",
    path: "/api/v1/users/rides/sync",
    tags: ["Rides"],
})
class UploadUserRides {
    @request
    request(
        @headers headers: AccessTokenHeader,
        @body body: RideUploadPayload[]
    ) {}

    @response({ status: 200 })
    response(@body body: RideMarker[][]) {}
}

/** Delete ride by ID */
@endpoint({
    method: "DELETE",
    path: "/api/v2/rides/:ride_id",
    tags: ["Rides"],
})
class DeleteRide {
    @request
    request(
        @headers headers: AccessTokenHeader,
        @pathParams
        pathParams: {
            ride_id: Number;
        }
    ) {}

    @response({ status: 200 })
    response(@body body: boolean) {}
}

/** Get ride by ID */
@endpoint({
    method: "GET",
    path: "/v2/users/me/rides/:ride_id",
    tags: ["Rides"],
})
class GetRide {
    @request
    request(
        @queryParams queryParams: { include: String },
        @headers headers: AccessTokenHeader,
        @pathParams
        pathParams: {
            ride_id: Number;
        }
    ) {}

    @response({ status: 200 })
    response(@body body: CloudRide) {}
}

/** Update ride by ID */
@endpoint({
    method: "PATCH",
    path: "/v2/users/me/rides/:ride_id",
    tags: ["Rides"],
})
class UpdateRide {
    @request
    request(
        @body body: PatchRideRequest,
        @headers headers: AccessTokenHeader,
        @pathParams
        pathParams: {
            ride_id: Number;
        }
    ) {}

    @response({ status: 200 })
    response(@body body: CloudRide) {}
}
