"use client";
import { LoginSchemaType, User, loginSchema } from "@/lib/types-schemas";
import Input from "./Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useUsersContext } from "./Context";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function SignIn() {
  const methods = useForm({ resolver: yupResolver(loginSchema) });
  const [error, setError] = useState(false);
  const users = useUsersContext();

  const onSubmit = async (data: LoginSchemaType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const user = users.find(
      (user) =>
        (user.email === data.emailOrUsername ||
          user.username === data.emailOrUsername) &&
        user.password === data.password,
    );

    if (user) {
      alert("Login Success");
      open("/thank-you", "_self");
    } else {
      setError(true);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-10"
      >
        <span className="hidden text-[30px] font-medium md:block">Sign in</span>
        <Input name="emailOrUsername" placeholder="Enter email or user name" />
        <Input name="password" placeholder="Password" type="password" />
        {error && (
          <span className="text-sm font-medium text-[#F87171]">
            Invalid username or password
          </span>
        )}
        <button
          className={cn(
            "rounded-[9px] bg-[#4D47C3] py-[18px] font-medium text-white transition hover:opacity-90 hover:shadow-xl",
          )}
          disabled={methods.formState.isSubmitting}
        >
          Login
        </button>
      </form>
    </FormProvider>
  );
}
