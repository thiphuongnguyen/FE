"use client";
import React, { useEffect, useState, useCallback } from "react";
import "../../styles/atoms.css";

export const InputQuantity = ({ quantity, setQuantity, maxQuantity }) => {
  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="input_quantity">
      <button type="button" onClick={handleDecrement}>
        -
      </button>
      <input type="number" value={quantity} readOnly max={10} />
      <button type="button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export const InputForm = ({
  register,
  placeholder,
  type,
  className,
  autoComplete,
  disabled,
}) => {
  return (
    <input
      type={type}
      {...register}
      placeholder={placeholder}
      className={`w-full h-12 border border-gray-300 border-solid rounded-lg p-3 pl-[20px] text-base  ${
        disabled ? "text-opacity-80" : "text-opacity-100"
      } + ${className} `}
      style={{ "--tw-ring-color": "rgba(0,0,0,0.6)" }}
      autoComplete={autoComplete}
      disabled={disabled}
    />
  );
};

export const InputModal = ({
  register,
  placeholder,
  type,
  className,
  autoComplete,
  disabled,
  label,
  required,
}) => {
  return (
    <>
      <p className="text-[#5c677e] font-medium text-sm pb-2">
        {label} {required && <span className="text-[#ff0f0f]">*</span>}
      </p>
      <input
        type={type}
        {...register}
        placeholder={placeholder}
        className={`box-border w-full p-2 border border-[#DEE1EB] border-solid rounded bg-white text-gray text-base font-normal leading-6  ${
          disabled ? "text-opacity-80" : "text-opacity-100"
        } + ${className} `}
        style={{ "--tw-ring-color": "rgba(0,0,0,0.6)" }}
        autoComplete={autoComplete}
        disabled={disabled}
      />
    </>
  );
};

export const InputFormAdmin = ({
  register,
  placeholder,
  type,
  className,
  autoComplete,
  disabled,
  label,
  required,
  errors,
  name,
}) => {
  return (
    <div className="w-full">
      <p className="text-[#3f4657] font-medium text-sm pb-2">
        {label} {required && <span className="text-[#ff0f0f]">*</span>}
      </p>
      <input
        type={type}
        {...register}
        placeholder={placeholder}
        className={`w-full h-12 border border-stone-400 border-solid rounded-sm p-1 pl-[20px] text-base shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300  ${
          disabled ? "text-opacity-80" : "text-opacity-100"
        } + ${className} `}
        style={{ "--tw-ring-color": "rgba(0,0,0,0.2)" }}
        autoComplete={autoComplete}
        disabled={disabled}
      />
      {required && name && errors[name] && errors[name].type === "required" && (
        <p className="text-red text-xs italic">{errors[name].message}</p>
      )}
    </div>
  );
};

export const TextAreaBlack = ({
  register,
  placeholder,
  type,
  className,
  autoComplete,
}) => {
  return (
    <textarea
      type={type}
      {...register}
      placeholder={placeholder}
      className={`w-full border rounded-sm p-3 + ${className}`}
      style={{ "--tw-ring-color": "rgba(0,0,0,0.6)" }}
    ></textarea>
  );
};
