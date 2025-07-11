"use client";
import { X } from "lucide-react";
import { Button } from "../components/ui/button";
import Link from "next/link";

const ResetButton = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };
  return (
    <Button
      className="absolute right-13 bg-black rounded-full p-1 top-1/2 -translate-y-1/2"
      type="reset"
      onClick={reset}
    >
      <Link href={"/"} className=" h-7 w-7 flex items-center justify-center ">
        <X className="  text-white hover:text-[#ef2a69] transition-all duration-300 hover:scale-110 hover:rotate-12 hover:rotate-x-180" />
      </Link>
    </Button>
  );
};

export default ResetButton;
