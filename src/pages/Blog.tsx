import React from "react";
import Container from "../components/Container";

const blogPosts = [
  {
    title: "The Future of AI in Pharmaceutical Research",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing drug discovery and development.",
    date: "March 15, 2024",
    category: "AI & Research",
  },
  {
    title: "Maximizing Field Force Efficiency with AI",
    excerpt:
      "Learn how AI-powered insights can transform your pharmaceutical sales operations.",
    date: "March 10, 2024",
    category: "Field Operations",
  },
  {
    title: "Data Security in Healthcare AI",
    excerpt:
      "Best practices for maintaining data security while leveraging AI in healthcare.",
    date: "March 5, 2024",
    category: "Security",
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
                      className="w-full h-full object-cover md:rounded-l-xl"
                      src="https://sdmntpreastus.oaiusercontent.com/files/00000000-e420-61f9-9918-d2411f63d9e4/raw?se=2025-05-16T13%3A26%3A10Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=31bc9c1a-c7e0-460a-8671-bf4a3c419305&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-15T22%3A05%3A10Z&ske=2025-05-16T22%3A05%3A10Z&sks=b&skv=2024-08-04&sig=bXFcxdw7gghI8rCSRrwRtAFg2D4F4pIC8NabbE66wNA%3D"
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
