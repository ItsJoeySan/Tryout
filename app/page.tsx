import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-100 h-screen gap-4">
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </div>
  );
}
