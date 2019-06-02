#!/usr/bin/env python
'''
Welcome to my personal website!

As I was building this website, I realized that I wanted to handle updates scalably. To me, that meant having a sort of IMS (information management system) which I could easily update as I updated my resume. This is the software that builds the site's parts after they are updated.

Recommended Environment:
* Python 3 -- Anaconda: https://www.anaconda.com/download/
'''

with open('./public/html/title.html', 'w') as f:
    f.write('hello!')