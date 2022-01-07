import { api, String, securityHeader } from "@airtasker/spot";

@api({ name: "SmartHalo API" })
class Api {
    @securityHeader
    "x-consumer-token": String;
}

import "./endpoints/auth";
import "./endpoints/rides";
import "./endpoints/user";
