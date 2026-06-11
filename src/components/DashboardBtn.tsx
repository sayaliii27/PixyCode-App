"use client";
import Link from "next/link";
import { SparklesIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useUserRole } from "../hooks/useUserRole";

function DashboardBtn() {
  const { isCandidate, isLoading } = useUserRole();

  if (isCandidate || isLoading) return null;
  return (
    <Link href={"/dashboard"}>
      <Button
        className="gap-2 font-medium bg-gradient-to-r from-rose-500 to-amber-400 hover:from-rose-600 hover:to-amber-500 text-white border-0 shadow-lg shadow-rose-500/25"
        size={"sm"}
      >
        <SparklesIcon className="size-4" />
        Dashboard
      </Button>
    </Link>
  );
}

export default DashboardBtn;
