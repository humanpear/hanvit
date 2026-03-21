"use client";

import { Button } from "@/components/ui/admin/button";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type SignIn = {
  email: string;
  password: string;
};

function SignIn() {
  const { register, handleSubmit } = useForm<SignIn>();
  const supabase = createClient();
  const router = useRouter();

  const onValid = async (formData: SignIn) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      if (error.message === "invalid login credentials") {
        toast.error("이메일 또는 비밀번호가 일치하지 않습니다.", {
          position: "top-center",
        });
      } else {
        toast.error("로그인에 실패했습니다", { position: "top-center" });
      }

      return;
    }

    router.push("/admin/estimate");
    router.refresh();
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4 bg-white">
      <form
        onSubmit={handleSubmit(onValid)}
        className="w-full max-w-sm space-y-6 rounded-2xl border p-8 shadow-lg"
      >
        <h1 className="text-center text-2xl font-semibold tracking-tight">
          관리자 페이지 로그인
        </h1>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            이메일
          </label>
          <input
            id="email"
            {...register("email", { required: true })}
            type="email"
            className="w-full rounded-lg border px-3 py-2 text-sm"
            autoComplete="email"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium">
            비밀번호
          </label>
          <input
            id="password"
            {...register("password", { required: true })}
            type="password"
            className="w-full rounded-lg border px-3 py-2 text-sm"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full rounded-lg border py-2 text-sm font-medium"
        >
          로그인
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
