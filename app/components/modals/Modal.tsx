"use client";
import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";
import { Reggae_One } from "next/font/google";
import RegisterModal from "./RegisterModal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction: () => void;
  secondaryLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
    // onClose;
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    console.log("heelo");
    if (disabled) {
      return;
    }
    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full h-full mx-auto my-6 mt-48 md:w-4/6 lg:w-3/6 xl:w-2/5 lg:h-auto md:h-auto">
          <div
            className={`translate duration-300 h-full 
            ${showModal ? "translate-y-0" : "translate-y-full"} ${
              showModal ? "opacity-100" : "opacity-0"
            } `}
          >
            <div className="relative flex flex-col w-full h-full bg-white border-0 rounded-lg shadow-lg outline-none translate lg:h-auto md:h-auto focus:outline-none">
              {/* HEADER */}
              <div
                className=" 
                flex 
                items-center 
                p-6
             
                
                rounded-t 
                justify-center 
                relative 
                border-b-[1px]"
              >
                <button
                  onClick={handleClose}
                  className="absolute px-6 transition border-0 hover:opacity-70 left-9"
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold ">{title}</div>
              </div>

              {/* BODY */}
              <div className="relative flex-auto px-6 py-2">{body}</div>

              {/* FOOTER */}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center w-full gap-4 ">
                  {secondaryAction && secondaryLabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryLabel}
                      onClick={handleSecondaryAction}
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
