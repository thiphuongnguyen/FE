"use client";
import { useState } from "react";
import { CustomEditor } from "../../config/components/molecules/FormEditor";
import { useForm } from "react-hook-form";
import {
  InputForm,
  InputFormAdmin,
  InputModal,
} from "../../config/components/atoms/Input";
import { ButtonModal } from "../../config/components/atoms/Button";

const NewsOperations = ({ isNew = true }) => {
  const [content, setContent] = useState();
  const {
    register,
    handleSubmit,
    reset,
    methods,
    control,
    formState: { errors },
  } = useForm();

  const handleCreate = async (data) => {
    console.log(data);
  };

  const handleUpdate = async (data) => {};

  return (
    <div className="pr-10 mt-2">
      <form onSubmit={handleSubmit(isNew ? handleCreate : handleUpdate)}>
        <p className="uppercase text-center mb-5 font-bold border-b-2 pb-4">
          {isNew ? "Create" : "Update"} News
        </p>

        <div className="flex gap-5">
          <InputFormAdmin
            register={register("news_name", {
              required: "News name cannot be left blank",
            })}
            type="text"
            placeholder={"news name"}
            label={"News Name"}
            required={true}
            errors={errors}
            name={"news_name"}
          />

          <InputFormAdmin
            register={register("news_content")}
            type="text"
            placeholder={"news content"}
            label={"News Content"}
          />
        </div>

        <CustomEditor content={content} setContent={setContent} />

        <div className="flex justify-end mt-5 gap-4">
          <ButtonModal
            title={"Cancel"}
            type={"button"}
            sizeSm={true}
            // onClick={() => handleCloseModal()}
            textBlack={true}
            className={"border-black border-[1px] bg-slate-300 w-20"}
          />
          <ButtonModal
            title={isNew ? "Create" : "Update"}
            type={"submit"}
            sizeSm={true}
            className={"w-20 bg-blue-500"}
          />
        </div>
      </form>
    </div>
  );
};
export default NewsOperations;
