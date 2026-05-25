"use client";

import { useState } from "react";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Play, Filter, ExternalLink } from "lucide-react";
import Link from "next/link";

const videoCategories = ["All", "Factory Tour", "Product Showcase", "Behind the Scenes", "Client Stories"];

const videos = [
  {
    id: 1,
    title: "Factory Tour: Inside Our Plush Toy Workshop",
    description: "Take a walk through our state-of-the-art manufacturing facility in Guangzhou. See how every plush toy is made with care and precision.",
    category: "Factory Tour",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "8:24",
    type: "long",
  },
  {
    id: 2,
    title: "Custom Plush Toy: From Sketch to Product",
    description: "Watch the complete journey of a custom plush toy — from the initial design sketch to the final packaged product ready for shipping.",
    category: "Product Showcase",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "5:12",
    type: "long",
  },
  {
    id: 3,
    title: "Quick Look: New Anime Plush Collection",
    description: "A fast-paced preview of our latest anime-inspired plush toy line. Perfect for retail and collector markets.",
    category: "Product Showcase",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "1:30",
    type: "short",
  },
  {
    id: 4,
    title: "Quality Control: How We Test Every Plush",
    description: "Our rigorous QC process ensures every plush toy meets international safety standards. See the pull tests, seam checks, and more.",
    category: "Behind the Scenes",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "4:45",
    type: "long",
  },
  {
    id: 5,
    title: "Packing & Shipping: Your Order's Journey",
    description: "From final inspection to container loading — see how we ensure your plush toys arrive safely and on time.",
    category: "Behind the Scenes",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "3:18",
    type: "short",
  },
  {
    id: 6,
    title: "Client Story: European Retailer Partnership",
    description: "Hear how we helped a European toy retailer launch their own plush toy brand with custom designs and reliable supply.",
    category: "Client Stories",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    duration: "6:02",
    type: "long",
  },
];

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

  const filteredVideos = activeCategory === "All"
    ? videos
    : videos.filter((v) => v.category === activeCategory);

  return (
    <main className="min-h-screen">
      <section className="bg-gray-50 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Video & Updates
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              See Our Work <br />
              <span className="text-blue-600">In Action</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Factory tours, product showcases, and behind-the-scenes content. 
              Transparency is at the heart of what we do.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2">
            <Filter size={20} className="text-gray-400 shrink-0" />
            {videoCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {playingVideoId === null && (
            <div className="mb-16">
              <VideoPlayer
                url={videos[0].url}
                title={videos[0].title}
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900">{videos[0].title}</h3>
                <p className="text-gray-600 mt-1">{videos[0].description}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => setPlayingVideoId(video.id)}
              >
                <div className="relative aspect-video bg-gray-100">
                  {playingVideoId === video.id ? (
                    <VideoPlayer url={video.url} title={video.title} />
                  ) : (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-800/5 group-hover:bg-gray-800/10 transition-colors">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play size={28} className="text-white ml-1" fill="white" />
                        </div>
                      </div>
                      <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded font-medium">
                        {video.duration}
                      </span>
                      <span className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full font-medium ${
                        video.type === "short" ? "bg-red-500 text-white" : "bg-gray-800 text-white"
                      }`}>
                        {video.type === "short" ? "Short" : "Video"}
                      </span>
                    </>
                  )}
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-blue-600 mb-1 block">{video.category}</span>
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No videos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow Us on Social Media</h2>
            <p className="text-gray-600 mb-8">
              Stay updated with our latest videos, product launches, and behind-the-scenes content.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                <ExternalLink size={18} /> YouTube
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                <ExternalLink size={18} /> TikTok
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                <ExternalLink size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Want to See More?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Schedule a live virtual factory tour or request product videos tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Schedule a Tour
          </Link>
        </div>
      </section>
    </main>
  );
}
