import model from "./model";

export interface SignupRequest {
  dateOfBirth: Date;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userExists = async (email: string): Promise<boolean> => {
  if (!EMAIL_REGEX.test(email)) {
    return false;
  }

  try {
    return await model.exists({ email });
  } catch (error) {
    throw error;
  }
};

const signup = async (request: SignupRequest): Promise<any> => {
  if (!EMAIL_REGEX.test(request.email)) {
    throw new Error('Invalid email format');
  }

  try {
    return await model.create(request);
  } catch (error) {
    throw error;
  }
};

export default { userExists, signup }