'''
Common Helpers
'''
# ----- Local Imports -----


# ----- Common Helpers -----
# Initialize
def initialize(fType, j):
    print(f'Starting to build {fType}.html with {len(j)} entries!')
    return fType, f'./public/html/{fType}.html', j

# Complete build
def complete(fType, fName, html):
    with open(fName, 'w') as htmlFile:
        htmlFile.write(html)
    print(f'Completed build for {fType}.html!')