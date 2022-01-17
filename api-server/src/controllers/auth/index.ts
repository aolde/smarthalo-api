import { FastifyReply, FastifyRequest } from "fastify";
import UserService, { SignupRequest } from "../../services/user";

export interface SHUser {
  authLevel?: string;
  created_at?: string;
  dateOfBirth?: Date;
  deviceId?: string;
  deviceVersion?: string;
  devicePass?: string;
  distanceMetric?: boolean;
  email: string; // required
  firstName: string; // required
  gender?: 0 | 1 | 2 | 3;
  height?: number;
  heightMetric?: boolean;
  id?: number;
  isConfirmed?: boolean;
  key: string; // required
  language?: string;
  lastName: string; // required
  password?: string;
  picture?: string;
  weight?: number;
  weightMetric?: boolean;
}

interface UserResponse {
  access_jwt: string;
  refresh_jwt: string;
  user: SHUser;
}

const signup = async (
  request: FastifyRequest,
  reply: FastifyReply
): Promise<any> => {
  const data = request.body as SignupRequest;
  if (!data || !data.email || !data.password) {
    return reply.badRequest()
  }

  const exists = await UserService.userExists(data.email);
  if (exists) {
    return reply.badRequest('Already registered')
  }

  try {
    const user = await UserService.signup(data)
    if (user) {
      const response: UserResponse = Object.assign({}, {
        access_jwt: '<access_token>',
        refresh_jwt: '<refresh_token>',
        user
      });
      return reply.send(response);
    } else {
      return null;
    }

  } catch (error) {
    throw error;
  }
};

export default { signup };
