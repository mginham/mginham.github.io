import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';

import projects from './src/content/projects.json' assert { type: 'json' };

const OUTPUT_DIR = path.resolve('./src/readmes');

async function fetchReadme(githubUrl, filename) {
    if (!githubUrl) return;
    // Extract owner/repo from URL
    const match = githubUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (!match) {
        console.warn(`Invalid GitHub URL: ${githubUrl}`);
        return;
    }
    const [_, owner, repo] = match;
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/readme`;

    try {
        const res = await fetch(apiUrl, { headers: { Accept: 'application/vnd.github.v3.raw' } });
        if (!res.ok) throw new Error(`Failed to fetch README for ${repo}: ${res.status}`);
        const text = await res.text();
        await fs.writeFile(path.join(OUTPUT_DIR, filename), text);
        console.log(`Saved README for ${repo}`);
    } catch (err) {
        console.error(err);
    }
}

async function main() {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    for (const project of projects) {
        if (!project.github) continue;
        // Filename example: data-pipeline-project.md
        const filename = `${project.id}.md`;
        await fetchReadme(project.github, filename);
    }
}

main();