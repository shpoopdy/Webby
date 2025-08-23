import fs from 'fs';

export default function getLastEditedForFile(absPath) {
  const stats = fs.statSync(absPath);
  return stats.mtime.toISOString(); // last modified time in ISO
}
