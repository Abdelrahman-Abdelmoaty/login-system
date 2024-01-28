"use client";
import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import { SignupSchemaType, signupSchema } from "@/lib/types-schemas";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SignUp() {
  const methods = useForm({ resolver: yupResolver(signupSchema) });

  const onSubmit = async (data: SignupSchemaType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      const response = await fetch(
        "https://65b6a5cada3a3c16ab010722.mockapi.io/users",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        },
      );
      alert("Register Success");
      open("/thank-you", "_self");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-[18px]"
      >
        <span className="hidden text-[30px] font-medium md:block">Sign up</span>
        <Input name="email" placeholder="Enter Email" />
        <Input name="username" placeholder="Create Username" />
        <Input name="contactNumber" placeholder="Contact Number" />
        <Input name="password" placeholder="Password" type="password" />
        <Input
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
        />
        <button className="rounded-[9px] bg-[#4D47C3] py-[18px] font-medium text-white transition hover:opacity-90 hover:shadow-xl">
          Register
        </button>
      </form>
    </FormProvider>
  );
}
