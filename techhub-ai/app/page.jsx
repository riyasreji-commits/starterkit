import Link from "next/link";
import FeaturedTools from "@/components/FeaturedTools";
import "./globals.css";

export default function Home() {
  return (
    <main className="main">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Welcome to TechHub AI</h1>
          <p className="hero-subtitle">
            Discover the best AI tools and tech resources to boost your productivity
          </p>
          <div className="hero-buttons">
            <Link href="/tools" className="btn btn-primary">
              Explore All Tools
            </Link>
            <Link href="/categories" className="btn btn-secondary">
              Browse Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <FeaturedTools />

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <h2 className="section-title">Popular Categories</h2>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">🤖</div>
              <h3>AI Chatbots</h3>
              <p>Intelligent conversation assistants</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🎨</div>
              <h3>Image Generation</h3>
              <p>Create stunning visuals with AI</p>
            </div>
            <div className="category-card">
              <div className="category-icon">📝</div>
              <h3>Writing Assistants</h3>
              <p>Enhance your content creation</p>
            </div>
            <div className="category-card">
              <div className="category-icon">💻</div>
              <h3>Development Tools</h3>
              <p>Code smarter with AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">AI Tools</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Categories</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.8</div>
              <div className="stat-label">User Rating</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}