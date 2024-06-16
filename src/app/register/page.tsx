"use client";
import { Footer } from "@/Components/Footer/footer";
import { RegisterForm } from "@/Components/Forms/RegisterForm";
import { Header } from "@/Components/Header/header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default page;
