import React from "react";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { wtriteClient } from "@/sanity/lib/write-client";

const view = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id: id });
  await wtriteClient.patch(id).inc({ views: 1 }).commit();
  return (
    <div className="flex justify-end sticky bottom-4 right-4">
      <p className="w-fit bg-pink-200 p-2 font-bold  flex items-center rounded relative after:content-[''] after:w-4 after:h-4 before:bg-[#ef2a69] before:rounded-full before:absolute before:-right-2 before:top-1 before:-translate-y-1/2 after:animate-ping before:content-[''] before:w-4 before:h-4 after:bg-[#ef2a69] after:rounded-full after:absolute after:-right-2 after:top-1 after:-translate-y-1/2 ">
        Views : {totalViews}
      </p>
      *
    </div>
  );
};

export default view;
