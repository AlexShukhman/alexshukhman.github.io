''' 
Builder for Contact HTML
'''
# ----- Local Imports -----
import importlib
common = importlib.import_module('src.python.common')


# ----- Local Helpers -----
# Build HTML from JSON
def build(fType, fName, j):
    html = "<table class='footer'><tr>"

    html += f"<td class='foot_first'>Built with <span id='typeIn_foot'></span></td>" 

    html += f"<td>with {j['server']}</td>"

    html += f"<td>by <a href='mailto:{j['email']}'>Alex</a></td></tr></table>" 

    return fType, fName, html


# ----- Run -----
def run(fType, j):
    # Start Build
    args = common.initialize(fType, j)

    # Build
    args = build(*args)

    # End Build
    common.complete(*args)