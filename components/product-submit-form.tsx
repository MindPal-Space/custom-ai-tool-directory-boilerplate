"use client"

import { submitProduct } from "@/app/actions"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Switch } from "./ui/switch"
import { Textarea } from "./ui/textarea"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export const formSchema = z.object({
  productUrl: z.string().url(),
  logoUrl: z.string().url(),
  name: z.string()
    .min(2, {
      message: "Product name must be at least 2 characters.",
    })
    .max(40, {
      message: "Product name must be no more than 40 characters.",
    })
  ,
  tagline: z.string()
    .min(20, {
      message: "Product tagline must be at least 20 characters.",
    })
    .max(60, {
      message: "Product tagline must be no more than 60 characters.",
    })
  ,
  desc: z.string()
    .min(100, {
      message: "Product description must be at least 100 characters.",
    })
  ,
  contactEmail: z.string().email(),
  isLookingForFunding: z.boolean(),
})

export function ProductSubmitForm() {

  const router = useRouter();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "isLookingForFunding": false,
    }
  })

  const formFieldList = [
    {
      name: "productUrl",
      label: "Product URL",
      type: "text",
    },
    {
      name: "logoUrl",
      label: "Product logo URL",
      type: "text",
    },
    {
      name: "name",
      label: "Product name",
      type: "text",
    },
    {
      name: "tagline",
      label: "Product tagline",
      type: "long_text",
    },
    {
      name: "desc",
      label: "Product description",
      type: "long_text",
    },
    {
      name: "contactEmail",
      label: "Contact email",
      type: "text",
    },
    {
      name: "isLookingForFunding",
      label: "Are you looking for funding?",
      type: "boolean",
    },
  ]

  const [ isSubmitting, setIsSubmitting ] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    const data = await submitProduct(values);
    if (data) {
      toast(`🥳 Your product ${data.name} has been successfully submitted! We will get in touch with you shortly.`);
    } else {
      toast(`Something went wrong. Please try again later.`);
    } 
    setIsSubmitting(false);
    router.refresh();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
        {formFieldList.map((item, idx) => (
          <FormField
            key={idx}
            control={form.control}
            name={item.name as "productUrl" | "logoUrl" | "name" | "tagline" | "desc" | "contactEmail" | "isLookingForFunding"}
            render={({ field }) => {
              switch (item.type) {
                case "boolean":
                  return (
                    <FormItem>
                      <div className="flex flex-row items-center gap-2 justify-between">
                        <FormLabel>{item.label}</FormLabel>
                        <FormControl>
                          <Switch
                            checked={field.value as boolean}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )
                case "long_text": 
                  return (
                    <FormItem>
                      <FormLabel>{item.label}</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Type here..." {...field} value={field.value as string} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )
                default:
                  return (
                    <FormItem>
                      <FormLabel>{item.label}</FormLabel>
                      <FormControl>
                        <Input placeholder="Type here..." {...field} value={field.value as string} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )
              }
            }}
          />
        ))}
        <Button type="submit" disabled={isSubmitting} className="flex items-center gap-2">
          Submit 
          {isSubmitting && <span className="w-4 h-4">{Icons.spinner}</span>}
        </Button>
      </form>
    </Form>
  )
}
