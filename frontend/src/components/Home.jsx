import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <div className="logo">
          <h1 className="text-2xl font-bold">AI Lawyer</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/services" className="hover:text-gray-400">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-gray-400">Pricing</Link></li>
            <li><Link to="/blog" className="hover:text-gray-400">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
            <li><Link to="/signup" className="hover:text-gray-400">Sign Up</Link></li>
            <li><Link to="/login" className="hover:text-gray-400">Log In</Link></li>
            <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
            <li><Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section bg-blue-600 text-white p-12 flex items-center justify-between">
        <div className="hero-content max-w-lg">
          <h2 className="text-4xl font-bold mb-4">AI-Powered Legal Assistance</h2>
          <p className="mb-6">
            AI Lawyer streamlines legal work for individuals and professionals, providing quick and efficient legal document drafting, contract reviews, and research.
          </p>
          <div className="hero-buttons space-x-4">
            <Link to="/signup" className="btn-primary bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-100">Try for Free</Link>
            <Link to="/services" className="btn-secondary border border-white py-2 px-4 rounded hover:bg-white hover:text-blue-600">Explore Services</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/400" alt="AI Legal Solutions" className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section p-10 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-8">Our Services</h3>
        <div className="services grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="service-item bg-white p-6 rounded shadow-md">
            <h4 className="text-xl font-semibold mb-4">Legal Document Drafting</h4>
            <p>Generate accurate legal documents in minutes using AI technology.</p>
          </div>
          <div className="service-item bg-white p-6 rounded shadow-md">
            <h4 className="text-xl font-semibold mb-4">Contract Reviews</h4>
            <p>Get contracts analyzed for risks, errors, and compliance in seconds.</p>
          </div>
          <div className="service-item bg-white p-6 rounded shadow-md">
            <h4 className="text-xl font-semibold mb-4">Legal Research</h4>
            <p>Automated research tools for quick, reliable, and cost-effective legal insights.</p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases-section p-10 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-8">Who Can Benefit?</h3>
        <div className="use-cases grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="use-case-item bg-gray-100 p-6 rounded shadow-md">
            <h4 className="text-xl font-semibold mb-4">For Lawyers and Law Firms</h4>
            <p>Enhance productivity and reduce workload by automating legal tasks like drafting and research.</p>
          </div>
          <div className="use-case-item bg-gray-100 p-6 rounded shadow-md">
            <h4 className="text-xl font-semibold mb-4">For Students and Consumers</h4>
            <p>Access AI-powered legal assistance for case studies, legal advice, and more.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section p-10 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-8">Advanced Features</h3>
        <div className="features grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="feature-item bg-white p-6 rounded shadow-md">
            <h4 className="text-xl font-semibold mb-4">Document Analysis</h4>
            <p>AI-powered analysis ensures accurate, fast, and comprehensive document reviews.</p>
          </div>
          <div className="feature-item bg-white p-6 rounded shadow-md">
            <h4 className="text-xl font-semibold mb-4">Drafting Tools</h4>
            <p>Create, edit, and finalize legal documents with ease using AI-assisted drafting tools.</p>
          </div>
          <div className="feature-item bg-white p-6 rounded shadow-md">
            <h4 className="text-xl font-semibold mb-4">Automated Research</h4>
            <p>Conduct in-depth legal research and get precise results in minutes, saving time and effort.</p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section p-10 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-8">Latest from Our Blog</h3>
        <div className="blog grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="blog-item bg-gray-100 p-6 rounded shadow-md">
            <h4 className="text-xl font-semibold mb-4">The Future of Legal Tech</h4>
            <p>Explore how AI is transforming the legal industry for both professionals and consumers.</p>
          </div>
          <div className="blog-item bg-gray-100 p-6 rounded shadow-md">
            <h4 className="text-xl font-semibold mb-4">AI in Legal Research</h4>
            <p>Learn how AI is making legal research faster and more accurate than ever before.</p>
          </div>
          <div className="blog-item bg-gray-100 p-6 rounded shadow-md">
            <h4 className="text-xl font-semibold mb-4">Cost Savings with AI</h4>
            <p>Find out how AI-powered tools can save legal professionals time and money.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section p-10 bg-blue-600 text-white text-center">
        <h3 className="text-3xl font-semibold mb-8">What Our Clients Say</h3>
        <div className="testimonials grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="testimonial-item bg-blue-700 p-6 rounded shadow-md">
            <p>“AI Lawyer has transformed our law firm’s workflow, saving us time and improving accuracy in document drafting.”</p>
            <p className="font-bold mt-4">– Law Firm Partner</p>
          </div>
          <div className="testimonial-item bg-blue-700 p-6 rounded shadow-md">
            <p>“As a law student, AI Lawyer’s research tools have been invaluable in completing my case studies quickly and efficiently.”</p>
            <p className="font-bold mt-4">– Law Student</p>
          </div>
        </div>
      </section>

      {/* Pricing and Free Trial Section */}
      <section className="pricing-section p-10 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-8">Pricing & Free Trial</h3>
        <p className="mb-6">Choose from our affordable subscription options or sign up for a free trial to get started.</p>
        <Link to="/signup" className="btn-primary bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">Start Your Free Trial</Link>
      </section>

      {/* FAQ Section */}
      <section className="faq-section p-10 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h3>
        <div className="faqs grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="faq-item bg-white p-6 rounded shadow-md">
            <h4 className="text-xl font-semibold mb-4">How does AI Lawyer work?</h4>
            <p>AI Lawyer uses advanced machine learning to provide legal document analysis, drafting, and research tools.</p>
          </div>
          <div className="faq-item bg-white p-6 rounded shadow-md">
            <h4 className="text-xl font-semibold mb-4">Is my data secure?</h4>
            <p>Yes, we use state-of-the-art encryption to ensure all your data is protected and kept confidential.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section p-10 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-8">Contact Us</h3>
        <p>If you have any questions, feel free to reach us at:</p>
        <p className="mt-4">Email: support@ailawyer.pro</p>
        <p>Phone: (123) 456-7890</p>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white p-6 text-center">
        <div className="footer-content">
          <p>&copy; 2024 AI Lawyer. All rights reserved.</p>
          <ul className="footer-links flex justify-center space-x-4 mt-4">
            <li><Link to="/terms" className="hover:text-gray-400">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-gray-400">Privacy Policy</Link></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
