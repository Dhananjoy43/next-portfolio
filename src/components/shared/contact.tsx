"use client";

import * as z from "zod";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/aceternity/input";
import { Section } from "./section";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heading } from "@/components/typography/heading";
import { Send } from "lucide-react";

const MessageSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be minimum 3 characters long!" })
    .max(50, { message: "Name can be maximum 50 characters long!" }),
  email: z.string().email({ message: "Email is required" }),
  subject: z.string().min(10, {
    message: "Subject must be at least 10 character long",
  }),
  message: z.string().min(100, {
    message: "Message must be at least 100 character long",
  }),
});

export function Contact() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof MessageSchema>>({
    resolver: zodResolver(MessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const handleMessage = async (values: z.infer<typeof MessageSchema>) => {
    const { name, email, message, subject } = values;
    setError("");
    setSuccess("");

    startTransition(async () => {
      //    await sendEmail({ name, email, subject, message });
      // await sendEmail(values).then((data) => {
      //     setError(data.error);
      //     setSuccess(data.success);
      // });
    });
  };

  return (
    <Section className="mt-16 flex w-full flex-col">
      <Heading>Contact me</Heading>
      <div className="my-6 flex w-full flex-col items-center justify-center gap-6 xl:flex-row">
        <Image
          src={"/images/about.svg"}
          width={500}
          height={500}
          alt="Contact"
        />
        <Form {...form}>
          <form
            className="flex w-full flex-col items-start justify-center gap-4"
            onSubmit={form.handleSubmit(handleMessage)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="John Doe"
                      disabled={isPending}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Example@gmail.com"
                      disabled={isPending}
                      type="email"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Subject of your message..."
                      disabled={isPending}
                      type="text"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      rows={5}
                      placeholder="Type your message..."
                      disabled={isPending}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="rounded-[2rem] bg-gradient-to-br from-purple-500 to-purple-600 text-base font-medium text-white"
              type="submit"
              disabled={isPending}
            >
              Message <Send size={16} className="ml-1" />
            </Button>
          </form>
        </Form>
      </div>
      <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
    </Section>
  );
}
