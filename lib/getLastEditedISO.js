import fs from 'fs';
import { execSync } from 'child_process';

function lastEditedFromGit(absPath) {
  try {
    const iso = execSync(`git log -1 --format=%cI --follow -- "${absPath}"`, {encoding: 'utf8'}).trim();
    if (iso) return iso;
  } catch {
    // .git not available
    return null;
  }
}

export default function getLastEditedISO(absPath) {
  const fromGit = lastEditedFromGit(absPath);
  if (fromGit) {
    return fromGit;
  } else {
    return null;
  }
}
