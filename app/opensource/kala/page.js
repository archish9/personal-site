import styles from './page.module.css';

const problems = [
    {
        problem: 'Every page looks slightly different',
        solution: "Holds the project's design system as data and checks code against it",
    },
    {
        problem: 'Generic, template-ish output',
        solution: 'Bootstraps a coherent, opinionated design direction with solved colour maths',
    },
    {
        problem: 'Only the happy path exists',
        solution: 'Names the states a screen must handle, then checks they exist',
    },
    {
        problem: 'Advice that ignores the project',
        solution: "Grounds every playbook in this project's real scales and bans",
    },
];

const designs = [
    { title: 'LŪMEN // ÍNDEX', src: '/designs/design-1/index.html' },
    { title: 'SynapseX — One Network', src: '/designs/design-2/index.html' },
];

export const metadata = {
    title: 'kala (कला)',
    description:
        'An MCP server that helps coding agents build production-grade frontend — work that reads as though an experienced designer made it, rather than a template filled in.',
    alternates: {
        canonical: 'https://iamnoob.in/opensource/kala',
    },
    openGraph: {
        title: 'kala (कला) — Archish Patel',
        description:
            'An MCP server that helps coding agents build production-grade frontend — work that reads as though an experienced designer made it, rather than a template filled in.',
        url: 'https://iamnoob.in/opensource/kala',
    },
};

export default function KalaPage() {
    return (
        <>
            {/* PAGE INTRO */}
            <div className={styles.pageIntro}>
                <h1 className={styles.pageTitle}>kala (कला)</h1>
                <p className={styles.pageSubtitle}>
                    &ldquo;An MCP server that helps coding agents build production-grade
                    frontend.&rdquo;
                </p>
            </div>

            <div className={styles.divider} role="separator" />

            {/* INTRO */}
            <section className={styles.essay} aria-label="About kala">
                <p>
                    kala helps coding agents build <strong>production-grade frontend</strong> —
                    work that reads as though an experienced designer made it, rather than a
                    template filled in. It does four things a coding agent cannot do reliably on
                    its own:
                </p>
            </section>

            {/* PROBLEM / SOLUTION TABLE */}
            <section className={styles.tableSection} aria-label="What kala does">
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Problem</th>
                                <th>What kala does</th>
                            </tr>
                        </thead>
                        <tbody>
                            {problems.map((row) => (
                                <tr key={row.problem}>
                                    <td>{row.problem}</td>
                                    <td>{row.solution}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* COMPATIBILITY */}
            <section className={styles.essay} aria-label="Compatibility">
                <p>
                    It works across <strong>React, Vue, Svelte, and plain HTML</strong> — one
                    rule, written once, fires identically in all four — and can render a running
                    page to catch what source analysis structurally cannot.
                </p>
            </section>

            {/* INSTALL */}
            <section className={styles.installSection} aria-label="Install">
                <h2 className={styles.sectionTitle}>Install</h2>
                <p className={styles.installNote}>
                    Claude Code — the plugin carries the server, the companion skill, the{' '}
                    <code>/kala</code> command, and the restricted subagent in one install:
                </p>
                <pre className={styles.codeBlock}>
                    <code>
                        /plugin marketplace add archish9/Kala{'\n'}
                        /plugin install kala@kala-marketplace
                    </code>
                </pre>
                <a
                    href="https://github.com/archish9/Kala"
                    className={styles.githubButton}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on GitHub &#8599;
                </a>
            </section>

            {/* DESIGN SHOWCASE */}
            <section className={styles.showcaseSection} aria-label="Designs built with kala">
                <h2 className={styles.sectionTitle}>Built with kala</h2>
                <div className={styles.showcaseGrid}>
                    {designs.map((design) => (
                        <div className={styles.showcaseCard} key={design.src}>
                            <div className={styles.showcaseHeader}>
                                <span className={styles.showcaseTitle}>{design.title}</span>
                                <a
                                    href={design.src}
                                    className={styles.showcaseLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Open in new tab &#8599;
                                </a>
                            </div>
                            <div className={styles.iframeWrap}>
                                <iframe
                                    src={design.src}
                                    title={design.title}
                                    className={styles.iframe}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
