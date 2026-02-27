"use client";

import Link from "next/link";

const featuredTools = [
  {
    id: 1,
    name: "ChatGPT",
    description: "Advanced AI chatbot for conversations",
    category: "AI Chatbot",
    url: "https://chat.openai.com",
    icon: "🤖"
  },
  {
    id: 2,
    name: "Midjourney",
    description: "AI-powered image generation",
    category: "Image Generation",
    url: "https://www.midjourney.com",
    icon: "🎨"
  },
  {
    id: 3,
    name: "GitHub Copilot",
    description: "AI pair programmer",
    category: "Development",
    url: "https://github.com/features/copilot",
    icon: "💻"
  }
];

export default function FeaturedTools() {
  const handleVisit = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="featured-tools">
      <div className="container">
        <h2 className="section-title">Featured AI Tools</h2>
        <div className="featured-grid">
          {featuredTools.map((tool) => (
            <div key={tool.id} className="featured-card">
              <div className="featured-icon">{tool.icon}</div>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              <span className="featured-category">{tool.category}</span>
              <button
                onClick={() => handleVisit(tool.url)}
                className="btn btn-visit"
              >
                Try Now
              </button>
            </div>
          ))}
        </div>
        <div className="featured-footer">
          <Link href="/tools" className="btn btn-primary">
            View All Tools
          </Link>
        </div>
      </div>
    </section>
  );
}