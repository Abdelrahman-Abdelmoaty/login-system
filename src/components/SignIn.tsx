"use client";
import { LoginSchemaType, loginSchema } from "@/lib/types-schemas";
import Input from "./Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useUsersContext } from "./Context";
import { cn } from "@/lib/utils";

export default function SignIn() {
  const methods = useForm({ resolver: yupResolver(loginSchema) });

  const users = useUsersContext();

  const onSubmit = async (data: LoginSchemaType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const user = users.filter(
      (user) =>
        (user.email === data.emailOrUsername ||
          user.username === data.emailOrUsername) &&
        user.password === data.password,
    );
    if (user) {
      alert("Login Success");
      open("/thank-you");
    } else {
      alert("Login Failed");
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
