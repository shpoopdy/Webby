import fs from 'fs';
import { execSync } from 'child_process';

function lastEditedFromGit(absPath) {
  try {
    const iso = execSync(`git log -1 --format=%cI --follow -- "${absPath}"`, {encoding: 'utf8'}).trim();
    return iso || null;
    if (iso) return iso;
  } catch {
    // .git not available
  }
}

export default function getLastEditedISO(absPath) {
  const fromGit = lastEditedFromGit(absPath);
  if (fromGit) return fromGit;

  // Fallback, for local development
  try {
    return fs.statSync(absPath).mtime.toISOString();
  } catch {
    return null;
  }
}
