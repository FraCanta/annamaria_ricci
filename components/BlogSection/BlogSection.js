import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../layout/Button";

function BlogSection() {
  // Placeholder per i dati (mock)
  const posts = [
    {
      id: 1,
      title: "La Partecipazione delle donne alla vita politica e istituzionale",
      date: "18/04/2025",
      readingTime: "3 min",
      image: "/assets/blog_annamaria1.jpg",
      category: "Politica",
    },
    {
      id: 2,
      title: "Parità di genere nel mondo del lavoro: a che punto siamo?",
      date: "17/04/2025",
      readingTime: "2 min",
      image: "/assets/blog_annamaria2a.jpg",
      category: "Lavoro",
    },
    {
      id: 3,
      title: "Crescita personale: come sviluppare nuove competenze",
      date: "16/04/2025",
      readingTime: "4 min",
      image: "/assets/blog_annamaria3a.jpg",
      category: "Formazione",
    },
    {
      id: 4,
      title: "Benessere e lavoro: trovare equilibrio nella quotidianità",
      date: "15/04/2025",
      readingTime: "3 min",
      image: "/assets/blog_annamaria4a.jpg",
      category: "Benessere",
    },
  ];

  return (
    <section className="lg:my-20 py-10 px-2 lg:px-4 w-full flex flex-col gap-6 min-h-screen">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-6 gap-6">
        <div className="flex flex-col gap-6 lg:max-w-[60%]">
          <h2 className="font-abhaya font-bold text-[35px] md:text-[48px] 2xl:text-[58px] leading-none text-gray100 ">
            Semi di cambiamento, <br />
            tracce di crescita
          </h2>
        </div>
        <Button href="/">Leggi le altre notizie</Button>
      </div>

      {/* Primo post grande */}
      <Link
        href={"/"}
        className="flex flex-col lg:flex-row gap-6 bg-gray80/30 h-[450px] md:h-[600px] hover:border hover:border-gray100 hover:rounded-lg transition-all duration-500 hover:p-2"
      >
        <div className="relative w-full h-full">
          <Image
            src={posts[0].image}
            alt={posts[0].title}
            fill
            className="w-full aspect-video h-full object-cover transition-all duration-500"
          />
        </div>

        <div className="flex flex-col gap-8 justify-between p-4 lg:p-[60px] lg:w-[60%]">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase font-medium tracking-wide bg-purple100 text-white py-1 px-3 rounded-full w-fit">
              {posts[0].category}
            </p>

            <h3 className="font-abhaya font-bold text-[28px] lg:text-[48px] 2xl:text-[58px] leading-none text-gray100 ">
              {posts[0].title}
            </h3>
          </div>

          <div className="flex gap-6 items-center">
            <p className="text-sm text-gray100 flex items-center gap-2 bg-gray80 py-2 px-3 rounded-full">
              <Icon icon="clarity:date-line" width="15" height="15" />{" "}
              {posts[0].date}
            </p>
            <p className="text-sm text-gray100 flex items-center gap-2 bg-gray80 py-2 px-3 rounded-full">
              {" "}
              <Icon
                icon="material-symbols:timer-outline-rounded"
                width="15"
                height="15"
              />{" "}
              {posts[0].readingTime}
            </p>
          </div>
        </div>
      </Link>

      {/* Altri 3 post in colonne */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        {posts.slice(1).map((post) => (
          <Link
            href={"/"}
            key={post.id}
            className="flex flex-col bg-gray80/30 hover:border hover:border-gray100 hover:rounded-lg transition-all duration-500 hover:p-2"
          >
            <div className="relative w-full h-[200px] md:h-[300px]  aspect-square">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-[20px] flex flex-col justify-between min-h-[150px] gap-6">
              <div className="flex flex-col gap-4">
                <p className="text-xs uppercase font-medium tracking-wide bg-purple100 text-white py-1 px-3 rounded-full w-fit">
                  {post.category}
                </p>

                <h3 className="font-abhaya font-bold text-[25px] leading-none text-gray100 ">
                  {post.title}
                </h3>
              </div>

              <div className="flex gap-6 items-center">
                <p className="text-sm text-gray100 flex items-center gap-2 bg-gray80 py-2 px-3 rounded-full">
                  <Icon icon="clarity:date-line" width="15" height="15" />{" "}
                  {post.date}
                </p>
                <p className="text-sm text-gray100 flex items-center gap-2 bg-gray80 py-2 px-3 rounded-full">
                  {" "}
                  <Icon
                    icon="material-symbols:timer-outline-rounded"
                    width="15"
                    height="15"
                  />{" "}
                  {post.readingTime}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
