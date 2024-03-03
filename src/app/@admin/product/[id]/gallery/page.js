"use client";
import { ButtonModal } from "@/app/@admin/config/components/atoms/Button";
import Notification from "@/app/@admin/config/components/atoms/Notification";
import { UploadImage } from "@/app/@admin/config/components/molecules/UploadImage";
import { ConvertFirebase } from "@/app/@admin/config/utils/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const GalleryPage = ({ isNew = true }) => {
  const {
    register,
    handleSubmit,
    reset,
    methods,
    control,
    formState: { errors },
  } = useForm();

  const [selectedFiles, setSelectedFiles] = useState([]);
  const router = useRouter();

  const handleCreate = async (data) => {
    let urlGalery;
    if (selectedFiles) {
      urlGalery = await ConvertFirebase({ images: selectedFiles });
    }

    // await PostProduct(dataSend);
    Notification.success("Add product successfully!");
    handleClose();
  };
  const handleUpdate = async (data) => {};

  const handleClose = () => {
    router.push("/product");
  };

  return (
    <>
      <form onSubmit={handleSubmit(isNew ? handleCreate : handleUpdate)}>
        <div className="mx-auto pb-10">
          <div className="p-10 rounded-lg bg-slate-300 mt-10">
            <p className="text-[#5c677e] font-bold text-xl text-center pb-5">
              Product Galleries
            </p>
            <UploadImage
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
            />

            <div className="flex justify-end mt-5 gap-4">
              <ButtonModal
                title={"Cancel"}
                type={"button"}
                sizeSm={true}
                onClick={() => handleClose()}
                textBlack={true}
                className={"border-black border-[1px] border-solid bg-slate-300 w-20"}
              />
              <ButtonModal
                title={isNew ? "Add" : "Update"}
                type={"submit"}
                sizeSm={true}
                className={"w-20 bg-blue-500"}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default GalleryPage;
