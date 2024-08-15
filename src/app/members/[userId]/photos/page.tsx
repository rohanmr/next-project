import { getMemberPhotosByUserId } from "@/app/actions/memberActions";
import { CardHeader, Divider, CardBody, Image } from "@nextui-org/react";
import React from "react";

export default async function PhotosPage({
  params,
}: {
  params: { userId: string };
}) {
  const photos = await getMemberPhotosByUserId(params.userId);
  return (
    <>
      <CardHeader className="text-2xl text-secondary font-semibold">
        Photos
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="grid grid-cols-5 gap-3">
          {photos &&
            photos.map((photos) => (
              <div key={photos.id}>
                <Image
                  width={300}
                  height={200}
                  src={photos.url}
                  alt="Member Image"
                  isZoomed
                  className="object-cover aspect-square"
                />
              </div>
            ))}
        </div>
      </CardBody>
    </>
  );
}
