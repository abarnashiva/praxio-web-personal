import { redirect } from "next/navigation";
import Home from "./home/page";

export default function Page() {
  redirect("/home");

  return <Home />;
}
