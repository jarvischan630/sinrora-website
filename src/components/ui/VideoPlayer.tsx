export function VideoPlayer({ url, title }: { url: string; title: string }) {
  // Simple embed for YouTube or custom videos
  const isYouTube = url.includes("youtube.com") || url.includes("youtu.be");
  
  let embedUrl = url;
  if (isYouTube) {
    const videoId = url.includes("v=") ? url.split("v=")[1].split("&")[0] : url.split("youtu.be/")[1];
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  }

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-100">
      {isYouTube ? (
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      ) : (
        <video
          src={url}
          title={title}
          controls
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
}