import { body, endpoint, headers, request, response } from "@airtasker/spot";
import { AccessTokenHeader } from "../models/AccessTokenHeader";
import { SHUser } from "../models/User";
import { UserEmailRequest } from "../models/UserEmailRequest";
import { UserUpdateRequest } from "../models/UserUpdateRequest";

/** Get User */
@endpoint({
    method: "GET",
    path: "/api/v1/users/whoami",
    tags: ["User"],
})
class GetUser {
    @request
    request(@headers headers: AccessTokenHeader) {}

    @response({ status: 200 })
    response(@body body: SHUser) {}
}

/** Send Confirm */
@endpoint({
    method: "POST",
    path: "/api/v1/users/sendConfirm",
    tags: ["User"],
})
class SendConfirm {
    @request
    request(
        @headers headers: AccessTokenHeader,
        @body body: UserEmailRequest
    ) {}

    @response({ status: 200 })
    response(@body body: string) {}
}

/** Update User */
@endpoint({
    method: "POST",
    path: "/api/v1/users/update",
    tags: ["User"],
})
class UpdateUser {
    @request
    request(
        @headers headers: AccessTokenHeader,
        @body body: UserUpdateRequest
    ) {}

    @response({ status: 200 })
    response(@body body: string) {}
}
