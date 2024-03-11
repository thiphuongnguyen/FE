"use client";
import { DeleteGallery, ListGalleries, PostGalleries } from "@/app/@admin/components/utils/auth";
import { ButtonModal } from "@/app/@admin/components/component/atoms/Button";
import Notification from "@/app/@admin/components/component/atoms/Notification";
import { UploadImage } from "@/app/@admin/components/component/molecules/UploadImage";
import { ConvertFirebase } from "@/app/@admin/components/utils/firebase";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { HiArchiveBoxXMark } from "react-icons/hi2";

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
  const [dataAllImage, setDataAllImage] = useState();
  const [isReload, setIsReload] = useState(false);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await ListGalleries({ product_id: params.id });
        setDataAllImage(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [isReload]);

  const handleCreate = async (data) => {
    let urlGalery;
    if (selectedFiles) {
      urlGalery = await ConvertFirebase({ images: selectedFiles });
    }

    const dataSend = {
      product_id: params.id,
      gallery_images: urlGalery,
    };

    await PostGalleries(dataSend);
    setSelectedFiles([])
    Notification.success("Add product successfully!");
    setIsReload(!isReload);
  };

  const handleClose = () => {
    router.push("/product");
  };

  const handleDeleteImage = async (image) => {
    await DeleteGallery({ gallery_id: image.gallery_id });
    Notification.success("Delete image successfully!");
    setIsReload(!isReload);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleCreate)}>
        <div className="mx-auto pb-10">
          <p className="text-[#5c677e] font-bold text-xl text-center pb-5">
            Product Galleries
          </p>

          <div className="flex flex-wrap -mx-4">
            {dataAllImage?.map((image, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
              >
                <img
                  src={image.gallery_image}
                  alt={`Image ${index}`}
                  className="w-full h-40 object-cover rounded-md border-[1px] border-solid border-gray  shadow-md"
                />
                <p
                  className="flex justify-center p-2"
                  onClick={() => handleDeleteImage(image)}
                >
                  <HiArchiveBoxXMark className="h-7 cursor-pointer text-red" />
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <UploadImage
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
            />
          </div>

          <div className="flex justify-end mt-5 gap-4">
            <ButtonModal
              title={"Cancel"}
              type={"button"}
              sizeSm={true}
              onClick={() => handleClose()}
              textBlack={true}
              className={"border-black border-[1px] border-solid w-20"}
            />
            <ButtonModal
              title={isNew ? "Add" : "Update"}
              type={"submit"}
              sizeSm={true}
              className={"w-20 bg-blue-500"}
            />
          </div>
        </div>
      </form>
    </>
  );
};
export default GalleryPage;
