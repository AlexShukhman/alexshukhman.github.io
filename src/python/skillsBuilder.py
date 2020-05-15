''' 
Builder for Skills HTML
'''
# ----- Local Imports -----
import importlib
common = importlib.import_module('src.python.common')


# ----- Local Helpers -----
# Build HTML from JSON
def build(fType, fName, j):
    t = "skills"
    html = f"<script>i.{t} = {str(len(j))};</script><p class='iconHeader'>"+t.capitalize() +"</p><div class='iconCont'>"
    for i in range(len(j)):
        html += f"<img class='icon iconImg' id='{t}Icon{str(i)}' alt='{j[i]['name']}' src='{j[i]['img']}' onclick='updateTag(\"{t}\", {str(i)});'>"
    html += "</div><div>"
    for i in range(len(j)):
        html += f'<div class="modal" id="{t}View{str(i)}">'
        # Content
        html += f"<p class='{t}Name'>{j[i]['name']}</p>"
        for e in ['expert', 'fluent', 'semi', 'learning']:
            if e in j[i].keys():
                html += f"<div class='{t}List'>"
                html += f"<p class='{t}Header {e}'>{e.capitalize()}</p>"
                for skill in j[i][e]:
                    html += f"<br><p class={t}body>{skill}</p>"
                html += "</div>"
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