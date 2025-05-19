import React from "react";
import Container from "../components/Container";

const blogPosts = [
  {
    title: "The Future of AI in Pharmaceutical Research",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing drug discovery and development.",
    date: "March 15, 2024",
    category: "AI & Research",
    image:
      "https://imgs.search.brave.com/I_vm_TZDR6qi6_xsbahQ-F1Z20BAWztlKAUMy852mzU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by93b3JraW5nLWJp/b3RlY2hub2xvZ3kt/dGhleS1hcmUtdXNp/bmctYWktZnV0dXJp/c3RpYy1tZXRob2Qt/bGFib3JhdG9yeS1y/ZXNlYXJjaGluZy13/aXRoLWFpXzU1MTg4/MC01NDYyLmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDA",
  },
  {
    title: "Maximizing Field Force Efficiency with AI",
    excerpt:
      "Learn how AI-powered insights can transform your pharmaceutical sales operations.",
    date: "March 10, 2024",
    category: "Field Operations",
    image:
      "https://imgs.search.brave.com/zkFDN_pxJAqrs8Mm-IshMLTzEzj57qwq2V7fuW_gvX8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXh0cmlhLmNvbS9o/cy1mcy9odWJmcy9B/SS1GRkUlMjBNaWNy/b3NpdGUvQUktRW5h/YmxlZC1GRkUuanBn/P3dpZHRoPTg2MCZo/ZWlnaHQ9NTQwJm5h/bWU9QUktRW5hYmxl/ZC1GRkUuanBn",
  },
  {
    title: "Data Security in Healthcare AI",
    excerpt:
      "Best practices for maintaining data security while leveraging AI in healthcare.",
    date: "March 5, 2024",
    category: "Security",
    image:
      "https://imgs.search.brave.com/joY7zhumRppFPFh4m0ZCg-Yn5QmgOHoh5iGdwBwdgh4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/MzIwMTI1YWNlNTM2/YjZhZDE0OGVjYTMv/NjcwZDAyNDk0MzQw/YzNlMzJlMThjOTVl/X0ElMjBkb2N0b3In/cyUyMGhhbmQlMjBz/aG93aW5nJTIwdGhl/JTIwdmlzdWFsJTIw/cmVwcmVzZW50YXRp/b24lMjBvZiUyMGN5/YmVyc2VjdXJpdHkl/MjBzeW1ib2wud2Vi/cA",
  },
];

const Blog: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
              Latest Insights
            </h1>
            <p className="text-lg text-gray-600 text-center mb-12">
              Stay updated with the latest trends and insights in pharmaceutical
              AI and data analytics.
            </p>

            <div className="grid gap-10">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row"
                >
                  {/* Image on the left */}
                  <div className="md:w-1/3 w-full h-64 md:h-auto">
                    <img
                      className="w-full h-full object-cover md:rounded-l-xl bg-white"
                      src={post.image || "https://via.placeholder.com/300"}
                      alt={post.title}
                    />
                  </div>

                  {/* Content on the right */}
                  <div className="p-6 md:p-8 md:w-2/3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm text-gray-500">
                          {post.date}
                        </span>
                        <span className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-6">{post.excerpt}</p>
                    </div>
                    <a
                      href="#"
                      className="text-blue-600 font-medium hover:text-blue-700 transition-colors mt-2"
                    >
                      Read More →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Blog;
