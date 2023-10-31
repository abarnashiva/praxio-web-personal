import { redirect } from "next/navigation";

export default function Page() {
  redirect("/home");

  return <p>No text</p>;
}
