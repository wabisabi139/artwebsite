#!/bin/bash
# ==============================================================================
# rename-images.sh
# Copies original uploaded files into the website's images/ folder under target slot names
# ==============================================================================

set -e

# Ensure target directory exists
mkdir -p images

echo "Copying original uploaded photos to images/..."

# Page 1
cp "Your Body Deserves Your Love (A5).jpg" "images/about-notebook-painting.jpg"

# Page 2
cp "Birds outside a laboratory.JPG" "images/edu-pigeons.jpg"
# Note: edu-hands.jpg and edu-wood-figure.png were not present in the zip upload.
# If you have them locally, uncomment and adjust the filenames:
# cp "edu-hands-original.jpg" "images/edu-hands.jpg"
# cp "edu-wood-figure-original.png" "images/edu-wood-figure.png"

# Page 3
cp "Sample Poster for a Research Conference.png" "images/poster-cancer.png"
cp "You are what you eat (1).png" "images/poster-meal.png"
cp "You are what you eat (2).png" "images/poster-macromolecules.png"
# Note: poster-cloud.png was not present in the zip upload.
# cp "poster-cloud-original.png" "images/poster-cloud.png"

# Page 4
cp "A scream.jpg" "images/art-hands-orange.jpg"
cp "Copy of Bodhisatva Padmapani (1).jpg" "images/art-padmapani.jpg"
cp "Its an upward climb.jpg" "images/art-selfportrait-upward.jpg"

# Seated self-portrait background removal (Volume.jpg contains desk/dotted background)
# To create the transparent cutout using rembg (pip install rembg):
if command -v rembg &> /dev/null; then
    echo "Removing background from Volume.jpg using rembg..."
    rembg i "Volume.jpg" "images/art-selfportrait-seated.png"
else
    echo "rembg not detected. Copying Volume.jpg directly. To remove background, run: rembg i 'Volume.jpg' 'images/art-selfportrait-seated.png'"
    cp "Volume.jpg" "images/art-selfportrait-seated.png"
fi

# Note: art-tote-bag.png was not present in the zip upload.
# cp "art-tote-bag-original.png" "images/art-tote-bag.png"

echo "Done! Images have been placed into images/."
