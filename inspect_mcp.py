import tarfile
import re

path = 'insforge-mcp-1.2.11.tgz'
with tarfile.open(path, 'r:gz') as tf:
    member = tf.getmember('package/dist/index.js')
    data = tf.extractfile(member).read().decode('utf-8', errors='replace')

for i, line in enumerate(data.splitlines(), start=1):
    if re.search(r'\b(command|option|description|fetch|docs)\b', line, re.I):
        print(f'{i}: {line}')
