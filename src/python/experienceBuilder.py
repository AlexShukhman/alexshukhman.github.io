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
        html += f"<p class='{t}Title'>{j[i]['position']}</p><br>"
        html += f"<p class='{t}Dates'>{j[i]['start_date']} - {j[i]['end_date'] if j[i]['end_date'] != '' else 'Present'}</p><br>"
        html += f"<p class='{t}Description'>{j[i]['description']}</p>"
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