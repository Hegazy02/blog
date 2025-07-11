import React from "react";

const Albums = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Network response was not ok");
  const albums = await response.json();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-items-center min-h-screen ">
      {albums.map((album: any) => (
        <div
          key={album.id}
          className="bg-white shadow-md rounded-lg p-4 mb-4 transition duration-300 ease-in-out hover:scale-105"
        >
          <h3 className="text-lg font-semibold mb-2">{album.title}</h3>
          <p className="text-gray-600">Album ID: {album.id}</p>
        </div>
      ))}
    </div>
  );
};
    
export default Albums;
