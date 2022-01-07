import {
    endpoint,
    body,
    String,
    Date,
    request,
    response,
} from "@airtasker/spot";
import { SHUser } from "../models/User";

@endpoint({
    method: "POST",
    path: "/auth/local/login",
    tags: ["Auth"],
})
/** Authenticate user */
class Login {
    @request
    request(@body body: { email: String; password: String }) {}

    @response({ status: 200 })
    response(@body body: UserResponse) {}
}

interface UserResponse {
    access_jwt: String;
    refresh_jwt: String;
    user: SHUser;
}

@endpoint({
    method: "POST",
    path: "/auth/local/refresh_tokens",
    tags: ["Auth"],
})
/** Refresh token */
class RefreshToken {
    @request
    request(@body body: { refresh_jwt: String }) {}

    @response({ status: 200 })
    response(@body body: { access_jwt: String; refresh_jwt: String }) {}
}

@endpoint({
    method: "POST",
    path: "/auth/local/signup",
    tags: ["Auth"],
})
/** Signup a new user */
class Signup {
    @request
    request(@body body: SignupRequest) {}

    @response({ status: 200 })
    response(@body body: UserResponse) {}
}

interface SignupRequest {
    dateOfBirth: Date;
    email: String;
    firstName: String;
    lastName: String;
    password: String;
}

@endpoint({
    method: "POST",
    path: "/auth/local/checkEmail",
    tags: ["Auth"],
})
/** Check email */
class CheckEmail {
    @request
    request(@body body: { email: String }) {}

    @response({ status: 200 })
    response(@body body: String) {}
}

@endpoint({
    method: "POST",
    path: "/auth/forgot",
    tags: ["Auth"],
})
/** Forgot password */
class ForgotPassword {
    @request
    request(@body body: { email: String }) {}

    @response({ status: 200 })
    response(@body body: String) {}
}
