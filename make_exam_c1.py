import re

with open('exam2.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Update Titles
html = re.sub(r'<title>.*?</title>', '<title>Midterm Progress Exam — Units 1 to 4 | C1 Advanced</title>', html)
html = re.sub(r'<h1>.*?</h1>', '<h1>Midterm Progress Exam</h1>', html)
html = html.replace('Units 1 &amp; 2 Review', 'Units 1 to 4 Comprehensive Review')
html = html.replace('English B1 Course', 'Advanced English C1')

# The C1 Exam content
c1_content = """
        <div class="exam-section">
            <span class="sec-label sec-indigo">?? PART 1: LISTENING COMPREHENSION</span>
            <p style="color:var(--muted); font-size:0.95rem; margin-bottom:1.5rem">Listen to the audio about cognitive bias and new media, then answer the questions below.</p>
            
            <div class="player-bar" style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 50px; display: flex; align-items: center; gap: 15px; border: 1px solid var(--border); margin-bottom: 20px;">
                <button class="play-btn" style="width: 45px; height: 45px; border-radius: 50%; font-size: 1.2rem; background: var(--accent-indigo); color: white; border: none; cursor: pointer;" onclick="playAudio('Welcome to today\\'s discussion on media consumption. We live in an era where algorithms curate our reality, creating echo chambers that confirm our preexisting beliefs. This confirmation bias drives us up the wall when we encounter opposing views, making constructive dialogue almost impossible. Furthermore, deepfakes and the spread of misinformation have left many media literacy experts at their wits\\' end, struggling to find solutions that preserve free speech while protecting the public from manipulation.')">?</button>
                <div style="flex-grow: 1;">
                    <div style="height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; position: relative; overflow: hidden;">
                        <div style="position: absolute; top: 0; left: 0; height: 100%; width: 0%; background: var(--accent-teal); transition: width 0.1s linear;" id="audio-progress"></div>
                    </div>
                </div>
                <span style="font-size: 0.85rem; color: var(--muted); font-family: monospace;" id="audio-time">0:00</span>
            </div>

            <div class="quiz-item" style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid var(--border); margin-bottom: 15px;">
                <p class="quiz-q" style="font-weight: 600; margin-bottom: 15px; color: var(--text);">1. According to the speaker, what do algorithms create?</p>
                <div class="opts" style="display: flex; flex-direction: column; gap: 10px;">
                    <button class="opt-btn" onclick="checkAns(this, false)">A) A perfect representation of reality.</button>
                    <button class="opt-btn" onclick="checkAns(this, true)">B) Echo chambers that confirm preexisting beliefs.</button>
                    <button class="opt-btn" onclick="checkAns(this, false)">C) Solutions to preserve free speech.</button>
                </div>
            </div>

            <div class="quiz-item" style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid var(--border); margin-bottom: 15px;">
                <p class="quiz-q" style="font-weight: 600; margin-bottom: 15px; color: var(--text);">2. How do media literacy experts feel about deepfakes and misinformation?</p>
                <div class="opts" style="display: flex; flex-direction: column; gap: 10px;">
                    <button class="opt-btn" onclick="checkAns(this, false)">A) They believe it is a minor issue.</button>
                    <button class="opt-btn" onclick="checkAns(this, false)">B) They are excited about the new technology.</button>
                    <button class="opt-btn" onclick="checkAns(this, true)">C) They are at their wits' end trying to find solutions.</button>
                </div>
            </div>
        </div>

        <div class="exam-section">
            <span class="sec-label sec-gold">?? PART 2: USE OF ENGLISH & VOCABULARY</span>
            <p style="color:var(--muted); font-size:0.95rem; margin-bottom:1.5rem">Select the most appropriate advanced grammar structure or idiom to complete each sentence.</p>

            <div class="quiz-item" style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid var(--border); margin-bottom: 15px;">
                <p class="quiz-q" style="font-weight: 600; margin-bottom: 15px; color: var(--text);">3. Never before ______ such an intricate ethical dilemma regarding genetic modification.</p>
                <div class="opts" style="display: flex; flex-wrap: wrap; gap: 10px;">
                    <button class="opt-btn" onclick="checkAns(this, false)">A) society has faced</button>
                    <button class="opt-btn" onclick="checkAns(this, true)">B) has society faced</button>
                    <button class="opt-btn" onclick="checkAns(this, false)">C) society faced</button>
                </div>
            </div>

            <div class="quiz-item" style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid var(--border); margin-bottom: 15px;">
                <p class="quiz-q" style="font-weight: 600; margin-bottom: 15px; color: var(--text);">4. Had the researchers known about the side effects, they ______ the clinical trials immediately.</p>
                <div class="opts" style="display: flex; flex-wrap: wrap; gap: 10px;">
                    <button class="opt-btn" onclick="checkAns(this, false)">A) would stop</button>
                    <button class="opt-btn" onclick="checkAns(this, false)">B) will have stopped</button>
                    <button class="opt-btn" onclick="checkAns(this, true)">C) would have stopped</button>
                </div>
            </div>

            <div class="quiz-item" style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid var(--border); margin-bottom: 15px;">
                <p class="quiz-q" style="font-weight: 600; margin-bottom: 15px; color: var(--text);">5. Dealing with that automated customer service bot completely drove me ______.</p>
                <div class="opts" style="display: flex; flex-wrap: wrap; gap: 10px;">
                    <button class="opt-btn" onclick="checkAns(this, false)">A) to my wits' end</button>
                    <button class="opt-btn" onclick="checkAns(this, true)">B) up the wall</button>
                    <button class="opt-btn" onclick="checkAns(this, false)">C) the runaround</button>
                </div>
            </div>
            
            <div class="quiz-item" style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid var(--border); margin-bottom: 15px;">
                <p class="quiz-q" style="font-weight: 600; margin-bottom: 15px; color: var(--text);">6. The constant barrage of sensationalist headlines is a blatant attempt to appeal to the audience's ______.</p>
                <div class="opts" style="display: flex; flex-wrap: wrap; gap: 10px;">
                    <button class="opt-btn" onclick="checkAns(this, false)">A) ethos</button>
                    <button class="opt-btn" onclick="checkAns(this, true)">B) pathos</button>
                    <button class="opt-btn" onclick="checkAns(this, false)">C) logos</button>
                </div>
            </div>
        </div>

        <div class="exam-section">
            <span class="sec-label sec-purple">?? PART 3: READING & CRITICAL THINKING</span>
            <p style="color:var(--muted); font-size:0.95rem; margin-bottom:1.5rem">Read the excerpt below and answer the comprehension questions.</p>
            
            <div class="ebox" style="background: rgba(255,255,255,0.02); padding: 20px; border-left: 4px solid var(--accent-purple); border-radius: 8px; margin-bottom: 20px; color: var(--text); line-height: 1.8;">
                "The Dunning-Kruger effect is a cognitive bias in which people with limited competence in a particular domain overestimate their abilities. Some researchers suggest this stems from a dual burden: not only do these individuals make erroneous conclusions and unfortunate choices, but their incompetence robs them of the metacognitive ability to realize it. Conversely, highly competent individuals may erroneously assume that tasks easy for them are equally easy for others."
            </div>

            <div class="quiz-item" style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 12px; border: 1px solid var(--border); margin-bottom: 15px;">
                <p class="quiz-q" style="font-weight: 600; margin-bottom: 15px; color: var(--text);">7. What is the 'dual burden' mentioned in the text?</p>
                <div class="opts" style="display: flex; flex-direction: column; gap: 10px;">
                    <button class="opt-btn" onclick="checkAns(this, false)">A) Making bad choices and suffering the consequences.</button>
                    <button class="opt-btn" onclick="checkAns(this, true)">B) Being incompetent and lacking the awareness to recognize it.</button>
                    <button class="opt-btn" onclick="checkAns(this, false)">C) Assuming things are easy for everyone and being proven wrong.</button>
                </div>
            </div>
        </div>

        <div class="exam-section">
            <span class="sec-label" style="background: rgba(236, 72, 153, 0.4); border: 1px solid #ec4899;">?? PART 4: WRITING TASK</span>
            <p style="color:var(--muted); font-size:0.95rem; margin-bottom:1.5rem">Write a well-structured C1-level response (150-200 words) addressing the prompt below. Focus on rhetoric, advanced vocabulary, and cohesive devices.</p>

            <div class="ebox" style="background: rgba(255,255,255,0.02); padding: 20px; border-left: 4px solid #ec4899; border-radius: 8px; margin-bottom: 20px; color: var(--text);">
                <strong>Prompt:</strong> Evaluate the ethical implications of using algorithms to curate news feeds. Does the personalization of content inherently lead to societal polarization? Support your argument with examples.
            </div>

            <textarea class="write-area" placeholder="Draft your essay here... (This will be reviewed by your teacher)" style="width: 100%; min-height: 200px; background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 12px; padding: 15px; color: var(--text); font-family: inherit; font-size: 0.95rem; resize: vertical;"></textarea>
            
            <button class="submit-btn" style="margin-top: 15px; background: linear-gradient(135deg, #6366f1, #ec4899); color: white; border: none; padding: 12px 25px; border-radius: 50px; font-weight: 600; cursor: pointer; transition: transform 0.2s;" onclick="alert('Writing task submitted for teacher review!')">Submit Essay</button>
        </div>
"""

# Extract everything before the first exam-section
header_match = re.search(r'(<div class="exam-banner">.*?</div>\s*</div>\s*<div class="container">)', html, re.DOTALL)
header = html[:header_match.end()] if header_match else html.split('<div class="exam-section">')[0]

# Extract everything after the last exam-section
footer_match = re.search(r'(<!-- --- Protection Overlay --- -->.*)', html, re.DOTALL)
footer = footer_match.group(1) if footer_match else html.split('</main>')[-1]

# Combine
final_html = header + "\n" + c1_content + "\n        </div>\n    </main>\n" + footer

with open('exam2.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

print("Created exam2.html with C1 content!")
