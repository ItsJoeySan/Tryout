import { signIn } from "@/app/auth";

export const SignIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <form
      className="flex justify-center items-center h-screen gap-4"
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit">{children}</button>
    </form>
  );
};
