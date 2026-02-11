import Link from 'next/link';
import blogs from '../data/blogs.json';
import ScrollAnimations from '../components/ScrollAnimations';

// Metadata for SEO
export const metadata = {
    title: 'Intel Archive | Archish Patel',
    description: 'Full archive of technical writings, thoughts, and war stories.',
};

export default function BlogPage({ searchParams }) {
    const postsPerPage = 6;
    // Handle page query param, default to 1 if missing or invalid
    const currentPage = Number(searchParams?.page) || 1;

    // Calculate total pages
    const totalPosts = blogs.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    // Ensure strict bounds for page number
    const validPage = Math.max(1, Math.min(currentPage, totalPages > 0 ? totalPages : 1));

    // Slice posts for current view
    const indexOfLastPost = validPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <main>
            <ScrollAnimations />

            {/* HEADER */}
            <section className="hero" style={{ minHeight: '50vh', paddingBottom: 0 }}>
                <div className="hero-bg-layer"></div>
                <div className="hero-content" style={{ height: 'auto', paddingTop: '100px' }}>
                    <span className="hero-label">ARCHIVES</span>
                    <h1 className="hero-title" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}>
                        INTEL<br />LOGS
                    </h1>
                    <div style={{ marginTop: '2rem' }}>
                        <Link href="/" className="cta-btn cta-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                            <span>← RETURN TO BASE</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* BLOG LIST */}
            <section className="writing" style={{ paddingTop: '4rem' }}>
                <div className="writing-grid">
                    {currentPosts.length > 0 ? (
                        currentPosts.map((blog) => (
                            <a
                                key={blog.id}
                                href={blog.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="writing-card"
                            >
                                <div className="writing-info">
                                    <div className="writing-platform">{blog.platform}</div>
                                    <h3 className="writing-title">{blog.title}</h3>
                                    <p className="writing-excerpt">{blog.description}</p>
                                    <div className="writing-tags">
                                        {blog.tags.map((tag) => (
                                            <span key={tag} className="writing-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <span className="contact-link" style={{ margin: 0, fontSize: '2rem' }}>🡪</span>
                            </a>
                        ))
                    ) : (
                        <div style={{ textAlign: 'center', padding: '4rem' }}>
                            <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem' }}>NO INTEL FOUND.</p>
                        </div>
                    )}
                </div>

                {/* PAGINATION CONTROLS */}
                {totalPages > 1 && (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '2rem',
                        marginTop: '4rem',
                        paddingBottom: '4rem'
                    }}>
                        {/* PREV BUTTON */}
                        {validPage > 1 ? (
                            <Link href={`/blog?page=${validPage - 1}`} className="cta-btn cta-secondary">
                                <span>PREV</span>
                            </Link>
                        ) : (
                            <div className="cta-btn cta-secondary" style={{ opacity: 0.3, cursor: 'not-allowed' }}>
                                <span>PREV</span>
                            </div>
                        )}

                        <span style={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'var(--text-dim)',
                            fontSize: '1.2rem'
                        }}>
                            PAGE {validPage} OF {totalPages}
                        </span>

                        {/* NEXT BUTTON */}
                        {validPage < totalPages ? (
                            <Link href={`/blog?page=${validPage + 1}`} className="cta-btn cta-secondary">
                                <span>NEXT</span>
                            </Link>
                        ) : (
                            <div className="cta-btn cta-secondary" style={{ opacity: 0.3, cursor: 'not-allowed' }}>
                                <span>NEXT</span>
                            </div>
                        )}
                    </div>
                )}
            </section>

            <footer>
                <p>© 2026 Archish Patel // NO SURVIVORS.</p>
            </footer>
        </main>
    );
}
