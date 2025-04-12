"use server";

import { formSchema } from "@/components/product-submit-form";
import { convertToSlug } from "@/lib/utils";
import { prisma } from "@/server/prisma";
import { z } from "zod";

export const submitProduct = async (values: z.infer<typeof formSchema>) => {
  let slug = convertToSlug(values.name);
  let count = 1;
  // Keep trying until a unique slug is found
  while (true) {
    const existingRecord = await prisma.product.findUnique({
      where: {
        slug,
      }
    });
    if (!existingRecord) {
      break; // Exit loop if a unique slug is found
    }
    // If the slug already exists, add an incremental number to make it unique
    slug = `${slug}-${count}`;
    count++;
  }
  return prisma.product.create({
    data: {
      ...values,
      slug,
    }
  })
}