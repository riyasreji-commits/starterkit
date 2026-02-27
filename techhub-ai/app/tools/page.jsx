"use client";

import { useState } from "react";
import Link from "next/link";
import "../globals.css";

// Sample tools data
const toolsData = [
  {
    id: 1,
    name: "ChatGPT",
    description: "Advanced AI chatbot for conversations, coding, and creative tasks",
    category: "AI Chatbot",
    url: "https://chat.openai.com",
    icon: "🤖",
    rating: 4.9,
    visits: "100M+",
    featured: true
  },
  {
    id: 2,
    name: "Midjourney",
    description: "AI-powered image generation from text descriptions",
    category: "Image Generation",
    url: "https://www.midjourney.com",
    icon: "🎨",
    rating: 4.8,
    visits: "50M+",
    featured: true
  },
  {
    id: 3,
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write better code",
    category: "Development",
    url: "https://github.com/features/copilot",
    icon: "💻",
    rating: 4.7,
    visits: "30M+",
    featured: true
  },
  {
    id: 4,
    name: "Grammarly",
    description: "AI writing assistant for error-free content",
    category: "Writing",
    url: "https://www.grammarly.com",
    icon: "✍️",
    rating: 4.8,
    visits: "80M+",
    featured: false
  },
  {
    id: 5,
    name: "Canva AI",
    description: "AI-powered design tools for stunning visuals",
    category: "Design",
    url: "https://www.canva.com",
    icon: "🎯",
    rating: 4.7,
    visits: "200M+",
    featured: false
  },
  {
    id: 6,
    name: "Jasper AI",
    description: "AI content generation for marketing and blogging",
    category: "Writing",
    url: "https://www.jasper.ai",
    icon: "📝",
    rating: 4.6,
    visits: "20M+",
    featured: false
  },
  {
    id: 7,
    name: "Runway ML",
    description: "AI creative tools for video and image editing",
    category: "Video/Audio",
    url: "https://runwayml.com",
    icon: "🎬",
    rating: 4.5,
    visits: "10M+",
    featured: false
  },
  {
    id: 8,
    name: "Copy.ai",
    description: "AI copywriting tool for marketing content",
    category: "Writing",
    url: "https://www.copy.ai",
    icon: "📋",
    rating: 4.4,
    visits: "15M+",
    featured: false
  }
];

export default function Tools() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(toolsData.map(tool => tool.category))];

  const filteredTools = toolsData.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleVisitWebsite = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="tools-page">
      <div className="container">
        {/* Header */}
        <div className="tools-header">
          <h1 className="page-title">AI Tools & Resources</h1>
          <p className="page-description">
            Discover the best AI tools to supercharge your workflow
          </p>
        </div>

        {/* Search and Filter */}
        <div className="tools-filter">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="tools-grid">
          {filteredTools.map((tool) => (
            <div key={tool.id} className={`tool-card ${tool.featured ? "featured" : ""}`}>
              {tool.featured && <span className="featured-badge">Featured</span>}
              <div className="tool-icon">{tool.icon}</div>
              <div className="tool-content">
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-description">{tool.description}</p>
                <div className="tool-meta">
                  <span className="tool-category">{tool.category}</span>
                  <span className="tool-rating">⭐ {tool.rating}</span>
                </div>
                <div className="tool-footer">
                  <span className="tool-visits">{tool.visits} visits</span>
                  <button
                    onClick={() => handleVisitWebsite(tool.url)}
                    className="btn btn-visit"
                  >
                    Visit Website →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="no-results">
            <p>No tools found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}