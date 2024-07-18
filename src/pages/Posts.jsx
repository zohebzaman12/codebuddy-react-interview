import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://codebuddy.review/posts")
      .then((response) => response.json())
      .then((result) => setPosts(result.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-7 text-4xl font-bold">Posts</h1>
      <Link to="/" className="mb-4 flex items-center text-blue-600 hover:underline">
        <Icon icon="mdi:arrow-left" className="mr-2" />
        Back to Home
      </Link>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="rounded border p-4 shadow-sm">
            <div className="mb-4 flex items-center space-x-4">
              <img src={post.avatar} alt={post.firstName} className="h-12 w-12 rounded-full" />
              <div>
                <h2 className="text-xl font-semibold">
                  {post.firstName} {post.lastName}
                </h2>
                <h3>{post.id}</h3>
              </div>
            </div>
            <img
              src={post.image}
              alt={post.writeup}
              className="mb-4 h-48 w-full rounded object-cover"
            />
            <p>{post.writeup}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
