#!/usr/bin/env python3
import json
import io
import re
from pathlib import Path

TITLE_RE = re.compile('title\s*=\s*\"(.*)\"')

journey_dir = Path(__file__).parent.parent / 'content' / 'journey'
mapping = {}
for file_ in journey_dir.glob('*.md'):
    with io.open(str(file_), encoding='utf-8') as fp:
        for line in fp:
            mo = TITLE_RE.match(line)
            if mo:
                mapping[file_.stem] = {
                    "title": mo.group(1)
                }
                break
with io.open('data/journeys.json', 'w', encoding='utf-8') as fp:
    json.dump(mapping, fp)
