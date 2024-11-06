import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import markdown from "markdown-it";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) return notFound();

  const {
    _createdAt,
    title,
    _id: postId,
    description,
    image,
    author: {
      _id: authorId,
      image: authorImage,
      name: authorName,
      username: authorUserName,
    },
    category,
    pitch,
  } = post;

  const parsedContent = markdown().render(pitch || "");

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag">{formatDate(_createdAt)}</p>
        <h1 className="heading">{title}</h1>
        <p className="sub-heading !max-w-5xl">{description}</p>
      </section>

      <section className="section_container">
        <Image
          src={image}
          alt="image post"
          height={100}
          width={100}
          className="w-full rounded-xl h-auto"
        />

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${authorId}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={authorImage}
                alt="author image"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />

              <div>
                <p className="text-20-medium">{authorName}</p>
                <p className="text-16-medium !text-black-300">{`@${authorUserName}`}</p>
              </div>
            </Link>
            <p className="category-tag">{category}</p>
          </div>
          <h3 className="text-30-bold">Startup Details</h3>
          {parsedContent ? (
            <article
              dangerouslySetInnerHTML={{ __html: parsedContent }}
              className="prose max-w-4xl font-work-sans break-all"
            />
          ) : (
            <p className="no-result">No details provided</p>
          )}
        </div>
        <hr className="divider" />
        {/* {editor picks section} */}
      </section>
      <Suspense fallback={<Skeleton className="view_skeleton" />}>
        <View id={postId} />
      </Suspense>
    </>
  );
};

export default page;
