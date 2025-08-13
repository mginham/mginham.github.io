import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../styles/prose.css';

// Grab every .md under src/readmes as a raw string at build time
const READMES = import.meta.glob('../readmes/*.md', { 
    query: '?raw',
    import: 'default',
    eager: true
});

export default function ProjectReadme({ projectId }) {
    const key = `../readmes/${projectId}.md`;
    const content = READMES[key];

    if (!content) {
        return (
            <div className="mt-8 rounded-md border border-gray-200 p-4 text-sm text-gray-600">
                README not available for this project.
            </div>
        );
    }

    return (
        <article className="mt-8 prose max-w-none leading-7">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
    );
}