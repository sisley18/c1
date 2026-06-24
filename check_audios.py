# check_audios.py
import re
import pathlib
import requests
import sys

# Path to the JavaScript data file
DATA_JS = pathlib.Path(r"c:/Ceci/Projects/proyectos conjuntos/C1 COURSE/js/data_everyday.js")

if not DATA_JS.is_file():
    print(f"Data file not found: {DATA_JS}")
    sys.exit(1)

js_text = DATA_JS.read_text(encoding="utf-8")

# Extract vocab words
vocab_words = re.findall(r"\{\s*word\s*:\s*\"([^\"]+)\"", js_text)
# Extract idioms
idiom_words = re.findall(r"idiom\s*:\s*\"([^\"]+)\"", js_text)
# Extract listening transcripts (may contain escaped quotes, so a simple regex works for this file)
listening_transcripts = re.findall(r"listening\s*:\s*\{[^}]*transcript\s*:\s*\"([^\"]+)\"", js_text, re.DOTALL)

texts = set(vocab_words + idiom_words + listening_transcripts)

base_url = "https://dict.youdao.com/dictvoice?audio={}&type=2"
failed = []
for txt in texts:
    if not txt:
        continue
    url = base_url.format(requests.utils.quote(txt))
    try:
        resp = requests.head(url, timeout=5)
        if resp.status_code != 200:
            failed.append((txt, url, resp.status_code))
    except Exception as e:
        failed.append((txt, url, str(e)))

if failed:
    print("Audio check failed for the following items:")
    for txt, url, issue in failed:
        print(f"- Text: {txt}\n  URL: {url}\n  Issue: {issue}\n")
    sys.exit(1)
else:
    print("All audio URLs returned 200 OK.")
