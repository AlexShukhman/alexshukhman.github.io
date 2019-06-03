#!/usr/bin/env python
'''
Welcome to my personal website!

As I was building this website, I realized that I wanted to handle updates scalably. To me, that meant having a sort of IMS (information management system) which I could easily update as I updated my resume. This is the software that builds the site's parts after they are updated.

Recommended Environment:
* Python 3 -- Anaconda: https://www.anaconda.com/download/
'''

# ----- Local Imports -----
import json, importlib
from multiprocessing import Pool


# ----- Helpers -----
# Get Files (in dict format)
def getFiles():
    # File names
    files = ['title', 'intro', 'skills', 'experience', 'contact']

    # Grab data
    out = []
    for fileName in files:
        fi = f"./src/json/{fileName}.json"
        with open (fi, 'r') as j:
            out.append((fileName, json.load(j)))
    
    # Return list of tuples
    return out

# Start Build Multiprocess
def buildFiles(files):
    # Make Pool
    pool = Pool(len(files))

    # Run Pool
    pool.map(runBuild, files)

# Build Process Runner
def runBuild(fileInfo):
    # Unpack
    fileType, j = fileInfo

    # Get Module
    desired_module = importlib.import_module(f"src.python.{fileType}Builder")

    # Run Module
    desired_module.run(fileType, j)


# ----- Main -----
def main():
    # Get the Template Files
    files = getFiles()

    # Make and Save the HTML Files
    files = buildFiles(files) # EOF


if __name__ == "__main__":
    main()