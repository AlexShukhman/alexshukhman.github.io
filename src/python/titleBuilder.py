''' 
Builder for Title HTML
'''
# ----- Local Imports -----
import importlib
common = importlib.import_module('src.python.common')


# ----- Local Helpers -----
# Build HTML from JSON
def build(fType, fName, j):
    html = ""

    # Hello My Name Is
    if type(j['pre_title']) is list:
        html += f"<h1>{j['pre_title'][0]}</h1><i>{j['pre_title'][1]}</i>"
    else: 
        html += f"<h2>{j['pre_title']}</h2>"

    # Add my name (all caps)
    html += f"<div class='name'><p>{j['title']}</p></div>"

    # Add superpower section
    html += f"</br><i id='extra'>{j['post_title']}</i><p id='typeIn'>&#10003;</p>"

    return fType, fName, html


# ----- Run -----
def run(fType, j):
    # Start Build
    args = common.initialize(fType, j)

    # Build
    args = build(*args)

    # End Build
    common.complete(*args)