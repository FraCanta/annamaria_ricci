import { execFileSync } from "child_process";
import path from "path";

const fallbackDate = "09/05/2026";

function formatDate(dateString) {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return fallbackDate;
  }

  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

export function getLegalPageUpdatedAt(filePath) {
  try {
    const relativePath = path.isAbsolute(filePath)
      ? path.relative(process.cwd(), filePath).replaceAll(path.sep, "/")
      : filePath.replaceAll(path.sep, "/");

    const workingTreeStatus = execFileSync(
      "git",
      ["status", "--porcelain", "--", relativePath],
      {
        cwd: process.cwd(),
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      }
    ).trim();

    if (workingTreeStatus) {
      return formatDate(new Date().toISOString());
    }

    const lastCommitDate = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", relativePath],
      {
        cwd: process.cwd(),
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      }
    ).trim();

    return lastCommitDate ? formatDate(lastCommitDate) : fallbackDate;
  } catch {
    return fallbackDate;
  }
}
