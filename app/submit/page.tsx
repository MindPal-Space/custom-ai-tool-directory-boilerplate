"use client";

import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useRouter } from "next/navigation";
import { ProductSubmitForm } from "@/components/product-submit-form";

export default function SubmitPage () {

  const router = useRouter();

  const handleOnOpenChange = (value: boolean) => {
    if (!value) {
      router.push("/");
    }
  }

  return (
    <Sheet open={true} onOpenChange={handleOnOpenChange}>
      <SheetContent className="overflow-hidden overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Are you a Viet maker? Submit your product to get featured!</SheetTitle>
          <SheetDescription>
            <ProductSubmitForm />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}