"use client";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { GetNewsDetail } from "../../utils/auth";
import { AuthContext } from "../contexts/AuthContext";

export const NewsDetail = () => {
  const { setBreadcrumb } = useContext(AuthContext);
  useEffect(() => {
    setBreadcrumb("News");
  }, []);

  const params = useParams();
  const [dataNews, setDataNews] = useState();

  useEffect(() => {
    const fetch = async () => {
      const data = await GetNewsDetail({ news_id: params.id });
      setDataNews(data);
    };

    fetch();
  }, []);
  return (
    <>
      <p className="text-2xl font-bold py-5">
        <center>{dataNews?.news_name}</center>
      </p>
      <div dangerouslySetInnerHTML={{ __html: dataNews?.news_content }}></div>
    </>
  );
};
