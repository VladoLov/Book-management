"use client";
import AuthForm from "@/components/authForm";
import { signUp } from "@/lib/actions/auth";
import { signUpSchema } from "@/lib/validations";

import React from "react";

export default function page() {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signUpSchema}
      defaultValues={{
        email: "",
        password: "",
        fullName: "",
        universityId: 0,
        universityCard: "",
      }}
      onSubmit={signUp}
    />
  );
}
