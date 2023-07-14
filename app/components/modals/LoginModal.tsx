"use client";

import useRegistrationModal from "@/app/hooks/useRegistrrationModals";
import React from "react";

import { signIn } from "next-auth/react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import useLoginModals from "@/app/hooks/useLoginModals";

const LoginModal = () => {
  const registerModal = useRegistrationModal();
  const loginModal = useLoginModals();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("not inside register");
    console.log({ data });
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("logged in");
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4 ">
      <Heading title="Welcome back" subtitle="Login to your account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        errors={errors}
        required
        register={register}
      />
      {/* <Input
        id="name"
        label="Name"
        disabled={isLoading}
        errors={errors}
        required
        register={register}
      /> */}
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        errors={errors}
        required
        register={register}
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-4">
      <hr />
      <Button
        label="Continue with Google"
        icon={FcGoogle}
        outline
        onClick={() => {}}
      />
      <Button
        label="Continue with Github"
        icon={AiFillGithub}
        outline
        onClick={() => {}}
      />
      <div className="mt-4 font-light text-center text-neutral-500">
        <div className="flex items-center justify-center gap-2">
          <div>Already have an account?</div>
          <div
            onClick={loginModal.onClose}
            className="cursor-pointer text-neutral-800 hover:underline "
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    ></Modal>
  );
};

export default LoginModal;
