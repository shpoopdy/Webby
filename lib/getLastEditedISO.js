import fs from 'fs';
import { execSync } from 'child_process';

function lastEditedFromGit(absPath) {
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${absPath}"`, {encoding: 'utf8'}).trim();
    return iso || null;
  } catch {
    // .git not available
    return null;
  }
}

export function getLastEditedISO(absPath) {
  const fromGit = lastEditedFromGit(absPath);
  if (fromGit) return fromGit;

  // Fallback, for local development
  try {
    return fs.statSync(absPath).mtime.toISOString();
  } catch {
    return null;
  }
}
