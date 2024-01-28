import * as y from "yup";

export const loginSchema = y.object({
  emailOrUsername: y.string().required("Email or username is required"),
  password: y.string().required("Password is required"),
});

export const signupSchema = y.object({
  username: y.string().required("Username is required"),
  email: y
    .string()
    .email("Email must be a valid email")
    .required("Email is required"),
  contactNumber: y
    .number()
    .typeError("Please provide a valid contact number")
    .required("Contact number is required"),
  password: y
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
      "Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a digit, and a special character.",
    ),
  confirmPassword: y
    .string()
    .required("Confirm password is required")
    .oneOf([y.ref("password")], "Passwords must match"),
});

export type LoginSchemaType = y.InferType<typeof loginSchema>;
export type SignupSchemaType = y.InferType<typeof signupSchema>;

export type User = {
  username: string;
  email: string;
  password: string;
  contactNumber: number;
};
