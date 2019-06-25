''' 
Builder for Intro HTML
'''
# ----- Local Imports -----
import importlib
common = importlib.import_module('src.python.common')


# ----- Local Helpers -----
# Build HTML from JSON
def build(fType, fName, j):
    html = f"<table><tr><td><img src={j['img']}></td>"

    html += f"<td>{j['intro']}</td></tr></table>"

    return fType, fName, html


# ----- Run -----
def run(fType, j):
    # Start Build
    args = common.initialize(fType, j)

    # Build
    args = build(*args)

    # End Build
    common.complete(*args)