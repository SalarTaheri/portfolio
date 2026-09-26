#!/usr/bin/env bash
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$DIR"

echo "=== Compiling Resume (LaTeX to PDF) ==="

# Build the docker builder image if not present
if ! docker image inspect salar-resume-builder >/dev/null 2>&1; then
  echo "Building salar-resume-builder Docker image..."
  docker build -t salar-resume-builder -f Dockerfile.resume .
fi

echo "Running pdflatex compilation..."
docker run --rm -v "$DIR:/work" -w /work salar-resume-builder pdflatex -interaction=nonstopmode Resume_Salar_Taheri.tex

echo "Updating public/resume.pdf and Resume.pdf..."
cp -f Resume_Salar_Taheri.pdf public/resume.pdf
cp -f Resume_Salar_Taheri.pdf Resume.pdf

# Clean up auxiliary latex files
rm -f Resume_Salar_Taheri.aux Resume_Salar_Taheri.log Resume_Salar_Taheri.out

echo "✅ Resume successfully compiled and synced to public/resume.pdf and Resume.pdf!"
