"use client";
import { Footer } from "@/Components/Footer/footer";
import { LoginForm } from "@/Components/Forms/LoginForm";
import { Header } from "@/Components/Header/header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default page;
