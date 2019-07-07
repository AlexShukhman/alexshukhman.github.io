''' 
Builder for Experience HTML
'''
# ----- Local Imports -----
import importlib
common = importlib.import_module('src.python.common')


# ----- Local Helpers -----
# Build HTML from JSON
def build(fType, fName, j):
    t = "experience"
    html = f"<hr><script>i.{t} = {str(len(j))};</script><p class='iconHeader'>"+t.capitalize() +"</p><div class='iconCont'>"
    for i in range(len(j)):
        html += f"<img class='icon iconImg' id='{t}Icon{str(i)}' alt='{j[i]['name']}' src='{j[i]['logo']}' onclick='updateTag(\"{t}\", {str(i)});'>"
    html += "</div><div>"
    for i in range(len(j)):
        html += f'<div class="modal" id="{t}View{str(i)}">'
        # Content
        html += f"<p class='{t}Name'><a href='{j[i]['website']}'>{j[i]['name']}</a></p>"
        # /Content
        html += "</div>"
    html += f"</div><script>updateTag('{t}', -1);</script>"
    return fType, fName, html


# ----- Run -----
def run(fType, j):
    # Start Build
    args = common.initialize(fType, j)

    # Build
    args = build(*args)

    # End Build
    common.complete(*args)