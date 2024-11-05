import SearchInput from "@/components/SearchInput";
import StartupCard from "@/components/StartupCard";
import { StartupCardType } from "@/types/type";
import React from "react";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 33,
      author: { _id: 3, name: "vasanth" },
      _id: 3,
      description: "This is a decription",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
      category: "Animal",
      title: "I am Animal",
    },
    {
      _createdAt: new Date(),
      views: 33,
      author: { _id: 3, name: "vasanth" },
      _id: 3,
      description: "This is a decription",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
      category: "Animal",
      title: "I am Animal",
    },
    {
      _createdAt: new Date(),
      views: 33,
      author: { _id: 3, name: "vasanth" },
      _id: 3,
      description: "This is a decription",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
      category: "Animal",
      title: "I am Animal",
    },
    {
      _createdAt: new Date(),
      views: 33,
      author: { _id: 3, name: "vasanth" },
      _id: 3,
      description: "This is a decription",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
      category: "Animal",
      title: "I am Animal",
    },
    {
      _createdAt: new Date(),
      views: 33,
      author: { _id: 3, name: "vasanth" },
      _id: 3,
      description: "This is a decription",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
      category: "Animal",
      title: "I am Animal",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchInput query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : `All Startups`}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;
