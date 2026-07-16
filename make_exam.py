import re

with open('exam2.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Update Titles
html = re.sub(r'<title>.*?</title>', '<title>Midterm Progress Exam — Units 1 to 4 | C1 Advanced</title>', html)
html = re.sub(r'<h1>.*?</h1>', '<h1>Midterm Progress Exam</h1>', html)
html = re.sub(r'<p>Units 1 &amp; 2 Review</p>', '<p>Units 1 to 4 Comprehensive Review</p>', html)

# Update the header logo
html = html.replace('English B1 Course', 'Advanced English C1')

# Replace the sections with placeholders for now, then I can inject C1 content.
# Since it is faster to just write the new file directly, let's just create a completely new file.
