import { Link } from "react-router-dom";
import "./BlogsPage.css";
import { useLogo } from "../../context/ApiProvider";
import { Settings } from "../../api";

function Logo({ size = "md" }) {
  const { logo } = useLogo();
  return (
    <div className={`logo--${size}`} style={{ margin: "0px" }}>
      <Link to="/" className=" d-flex align-items-center">
        <img
          alt=""
          className="img-fluid"
          style={{
            height: Settings.logo_height,
            width: Settings.logo_width,
          }}
          src={logo}
        />
      </Link>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <Logo size="md" />
    </nav>
  );
}

function BreadcrumbBar() {
  return (
    <div className="breadcrumb-bar">
      <a href="#" className="breadcrumb-link">
        <span className="breadcrumb-icon">&#8249;</span>
        Blogs
      </a>
    </div>
  );
}

function BlogContent() {
  return (
    <main className="content">
      <p className="empty-message">No blog posts found.</p>
    </main>
  );
}

function Footer() {
  return (
    <footer className="blog-footer">
      <Logo size="lg" />
    </footer>
  );
}

export default function BlogsPage() {
  return (
    <div className="blog-page">
      <Navbar />
      <BreadcrumbBar />
      <BlogContent />
      <Footer />
    </div>
  );
}
