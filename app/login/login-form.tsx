"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { postLoginBody } from "@/orval/gen/endpoints/authentication/authentication.zod";
import { signIn, getSession } from "next-auth/react";
import { LoadingButton } from "@/components/loading-button";

const loginSchema = postLoginBody.extend({
  email: z
    .string()
    .nonempty("Email is required")
    .email({ message: "Invalid email address" }),
  password: z.string().nonempty("Password is required"),
});

type LoginSchema = z.infer<typeof loginSchema>;

export function LoginForm() {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginSchema) {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    console.log(result);

    const session = await getSession();
    console.log(session);
  }

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Login to your account</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              noValidate
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="m@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Password</FormLabel>
                      <a
                        href="#"
                        className="text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <LoadingButton type="submit" className="w-full" loading={false}>
                Login
              </LoadingButton>
            </form>
          </Form>
          <div className="pt-6 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="#" className="underline underline-offset-4">
              Sign up
            </a>
          </div>
        </CardContent>
      </Card>

      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
