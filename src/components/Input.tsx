import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

export default function Input({
  className,
  name = "",
  ...props
}: React.HTMLProps<HTMLInputElement>) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <input
        {...register(name)}
        type="text"
        className={cn(
          "w-full rounded-lg bg-[#F0EFFF] px-[26px] py-5 text-[15px] leading-normal text-[#4D47C3] placeholder:text-[#A7A3FF]",
          className,
        )}
        {...props}
      />
      <p className="mt-1 text-xs leading-normal text-red-500">
        {errors[name] && errors[name]?.message?.toString()}
      </p>
    </div>
  );
}
