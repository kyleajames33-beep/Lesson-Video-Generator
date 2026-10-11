"""Fill the C1 and B1 production briefs from Claude's lesson designs (run from repo root)."""
import io, json, hashlib

def sha(p):
    return hashlib.sha256(open(p, 'rb').read()).hexdigest()

def fill(L, design_doc, progression, teaching, design, rows, check):
    p = f'docs/production/claude-pm/lessons/{L}/lesson.production-brief.json'
    b = json.load(io.open(p, encoding='utf8'))
    b['progression'].update(progression)
    b['teaching'].update(teaching)
    b['design'].update(design)
    for ref in ['docs/production/claude-pm/teaching-playbook.md', design_doc]:
        if ref not in b['researchReferences']:
            b['researchReferences'].append(ref)
    for sc in b['scenes']:
        r = rows[sc['sceneId']]
        sc.update({'visualDecision': r[0], 'visualReference': r[1], 'teachingReason': r[2], 'narrationCue': r[3],
                   'motionPurpose': r[4], 'motionRole': r[5], 'onScreenChange': r[6], 'motionTools': r[7], 'holdPurpose': r[8]})
    lr = f'docs/production/claude-pm/checks/{L}-learning-review.md'
    b['studentLearningReview'] = {'status': 'pass', 'reviewer': 'Independent Claude Sonnet student-learning reviewer (AI source review, revision 2 pass)', 'evidence': {'path': lr, 'sha256': sha(lr)}}
    b['scriptReview'] = {'status': 'pass', 'reviewer': 'Codex brief 03 fact check (science, syllabus, copy); findings applied by Claude',
                         'evidence': {'path': check, 'sha256': sha(check)}}
    io.open(p, 'w', encoding='utf8').write(json.dumps(b, ensure_ascii=False, indent=2) + '\n')

E = 'explain'
fill('c1', 'docs/production/claude-pm/lessons/chem-m5-c01.md',
 {'prerequisiteKnowledge': 'Reversible and irreversible reactions; particles are always moving; rate means how much changes per second (Year 11).',
  'startsWith': 'A sealed bottle of soda water that looks completely still.',
  'stopsAfter': 'Classifying systems as static, dynamic or neither and explaining why dynamic equilibrium needs a closed system.',
  'nextLesson': 'C2: how a reaction reaches equilibrium, rates changing over time.'},
 {'task': 'Classify static, dynamic or neither, and explain the closed-system requirement.',
  'causalExplanation': 'Opposing processes continue at equal rates so amounts stay constant; static means both rates are zero because the reaction finished; opening the system loses the returning half of the exchange.',
  'conversationalApproach': 'Concrete sealed drink and campfire, two-towns traffic analogy, teacher-led three-question classification.',
  'openingDecision': 'Has everything stopped in a still-looking sealed bottle?',
  'understandingCheck': 'Classify a saturated salt jar, a cooling coffee and burned magnesium with reasons.',
  'curriculumScope': 'Model static and dynamic equilibrium and analyse the differences between open and closed systems (CH12-12). Rate graphs deferred to C2.'},
 {'renderer': 'src/explainer/ExplainerVideo.tsx',
  'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, painted plates with coded molecule views.',
  'transitionPlan': 'Lens zoom from bottle to molecules; crossfade sealed to open bottle pair; campfire burning to ash crossfade; scene crossfades with settle.'},
 {'hook': ['new', 'c1 sparkling bottle sealed plate', 'Sets a concrete puzzle before any terms', 'stopped', 'Camera push builds curiosity on the still bottle', E, 'Slow push in on the sealed bottle; heading writes on at "stopped"', ['CameraStage push', 'HandText write-on'], 'Brief look at the still bottle'],
  'look-inside': ['new', 'Explainer lens over the bottle surface with coded CO2 molecules', 'Shows both processes happening at once', 'escape / dissolve / exactly the same rate', 'Molecules cross the surface in both directions while counters match', E, 'Lens zooms in; molecules arc up on "escape" and down on "dissolve"; two equal live counters', ['lens zoom', 'particle arcs', 'NumberTicker counters'], 'Counters hold equal for comparison'],
  'dynamic-name': ['new', 'Two-towns traffic doodle and molecule view', 'Gives the term after the cause and a precise analogy', 'dynamic equilibrium / same size', 'Cars flow both ways at equal rate between unequal towns', E, 'Term writes on with meanings; traffic doodle animates; aid writes on and is underlined', ['HandText write-on', 'path traffic dots', 'ScribbleUnderline'], 'Hold the aid "Equal rates, not equal amounts" to read'],
  'static': ['new', 'c1 campfire burning and ash pair', 'Contrasts a finished irreversible reaction with dynamic exchange', 'ash / zero / static equilibrium', 'Fire burns down to ash and both rate gauges drop to zero', E, 'Crossfade burning to ash on "ash"; two gauges fall to 0 on "zero"; cross on "slow"', ['plate crossfade', 'gauge needles', 'Mark cross'], 'Hold the ash with both gauges at zero'],
  'open-vs-closed': ['adjust', 'c1 bottle sealed and open pair plus molecule lens', 'Shows why an open system cannot reach equilibrium', 'cap off / flat / closed system / open system', 'Returning molecules thin out while escaping ones leave the frame', E, 'Bottle crossfades to open; escaping arcs leave frame; counters diverge; boundary line breaks', ['plate crossfade', 'particle arcs', 'NumberTicker counters', 'DrawPath boundary'], 'Hold diverging counters briefly'],
  'worked-classify': ['new', 'Hand-drawn decision flowchart with iodine flask, ash and evaporating beaker plates', 'Teacher models the three-question classification on site examples', 'reversible / closed / staying constant / dynamic / static / neither', 'A pen traces each case through the flowchart to a stamped verdict', E, 'Flowchart diamonds build on each question; each case gets a traced path and verdict stamp', ['DrawPath flowchart', 'pen trace', 'stamp pop'], 'Short settle after each verdict'],
  'worked-more': ['adjust', 'Same flowchart with campfire ash and evaporating beaker plates', 'Applies the ordered questions to a static case and a neither case', 'static / neither', 'Ash traces straight to STATIC; beaker fails at Closed and lands on NEITHER', E, 'First case shrinks to a chip; ash and beaker paths trace in turn with verdict stamps', ['pen trace', 'stamp pop', 'chip shrink'], 'Settle on both verdicts'],
  'attempt': ['new', 'Salt jar, hot coffee and burned magnesium plates with small flowchart', 'Unseen transfer decision with all conditions visible', 'Pause', 'Countdown ring runs through the quiet hold', E, 'Three numbered vignettes appear as named; countdown ring starts after narration', ['Countdown ring', 'Enter reveals'], 'Quiet answer-free thinking hold with countdown'],
  'feedback': ['adjust', 'Same attempt board with flowchart', 'Explains each verdict and names the still-looks-stopped trap', 'dynamic / neither / static', 'Each vignette gets its flowchart trace and verdict; salt pile zoom shows ions leaving and rejoining', E, 'Verdict stamps in turn; small zoom into the salt pile with ions exchanging', ['pen trace', 'stamp pop', 'lens zoom', 'particle arcs'], 'Settle on all three verdicts'],
  'memory': ['new', 'Decision rule with icons', 'Gives a reusable decision rule and the key aid', 'rule lines and next', 'Three rule lines write on with icons', E, 'Rule lines write on in turn; aid repeated; next-lesson chip', ['HandText write-on', 'ScribbleUnderline'], 'Hold the rule to read'],
  'key-notes': ['new', 'Key notes card', 'Essentials to copy into books', 'key notes', 'Notes appear then stay still for copying', 'hold', 'Four notes appear and lock', ['Enter reveals'], 'Quiet copy hold with pause invitation']},
 'docs/production/claude-pm/checks/c1-check.md')

fill('b1', 'docs/production/claude-pm/lessons/bio-m5-b01.md',
 {'prerequisiteKnowledge': 'Cells contain DNA; DNA carries inherited information (Year 11 Biology). Chromosomes, genes and alleles get plain meanings in the lesson.',
  'startsWith': 'Every Cavendish banana plant is a clone, and TR4 is spreading.',
  'stopsAfter': 'Explaining how sexual and asexual reproduction support continuity and judging which suits stable or changing conditions.',
  'nextLesson': 'B2: how animals bring sperm and egg together.'},
 {'task': 'Explain how each reproduction method supports continuity and choose between them for given conditions.',
  'causalExplanation': 'Continuity needs DNA passed on and offspring that survive to reproduce; asexual copying is fast but clones share weaknesses; gamete fusion creates new allele combinations so some individuals may survive change.',
  'conversationalApproach': 'Real Cavendish and TR4 story, strawberry mechanisms, building an HSC compare answer on screen.',
  'openingDecision': 'Why would sharing one set of DNA be risky for bananas?',
  'understandingCheck': 'Choose a strategy for a stable pond, a lone island plant and a crop facing new disease, with reasons.',
  'curriculumScope': 'Explain the mechanisms of reproduction that ensure continuity of a species by analysing sexual and asexual methods (BIO12-12, Module 5 IQ1).'},
 {'renderer': 'src/explainer/ExplainerVideo.tsx',
  'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, painted botanical plates with coded cell animations.',
  'transitionPlan': 'Banana bunch duplicates to clones then cuts to plantation; generation chain pans; montage panels slide in; scene crossfades with settle.'},
 {'hook': ['new', 'b1 Cavendish bunch and TR4 plantation plates', 'A real high-stakes case gives a reason to care', 'clone / TR4', 'Bunch duplicates into identical clones, then the diseased plantation appears', E, 'Bunch duplicates on "clone"; plantation and country chip appear on "TR4"; heading writes on', ['plate duplicate', 'CameraStage push', 'HandText write-on'], 'Brief look at the plantation'],
  'continuity': ['new', 'Strawberry runner plates arranged as a generation chain', 'Shows continuity as a chain of reproduction and survival', 'reproduce / DNA / survive', 'Chain extends generation by generation with a DNA line; one branch fades', E, 'Chain draws left to right; DNA line runs through; a failed branch fades on "survive"', ['DrawPath chain', 'DNA line draw', 'branch fade'], 'Hold the continuity statement'],
  'asexual': ['adjust', 'Strawberry runner plate plus coded bacterium fission and yeast budding', 'Shows one parent copying itself in three organisms', 'runner / splits / bud / mutation', 'Runner draws on, bacterium divides, yeast buds, one DNA mark changes', E, 'Three panels animate on their cue words; tiny DNA change highlights on "mutation"', ['path draw-on', 'coded cell division', 'coded budding', 'ScribbleCircle'], 'Settle on the three panels'],
  'gametes': ['new', 'Strawberry flower for context, then schematic gametes and chromosome-set icons', 'Explains gamete joining and one set plus one set before alleles', 'join / chromosomes / one set / two sets', 'Two gametes travel and join; one set plus one set combines into two sets', E, 'Gametes meet on "join"; chromosome-set icons combine on "two sets"', ['particle travel', 'set icons merge', 'HandText write-on'], 'Hold the two-sets result'],
  'variation': ['adjust', 'Allele beads, gamete mixes, varied seedlings plate', 'Explains why siblings differ: different gamete mixes plus chance', 'mix / chance / variation', 'Gametes show different bead mixes, a random pick, then seedlings reveal with their own patterns', E, 'Bead mixes appear on "mix"; random pick shuffle on "chance"; seedlings wipe in; variation definition writes on', ['bead reveal', 'shuffle pick', 'plate wipe reveal', 'HandText write-on'], 'Hold the varied seedlings and definition'],
  'trade-off': ['new', 'Clone row with disease and varied seedlings plates, plantation plate', 'Links variation to survival when conditions change', 'conditions / change / survive / Cavendish', 'Clone row all affected while some varied seedlings stay healthy', E, 'Split board stable versus change; disease spreads across clones; survivors highlight; aid writes on', ['split board', 'disease spread tint', 'ScribbleCircle survivors', 'HandText write-on'], 'Hold the aid to read'],
  'worked-compare': ['new', 'Coded criteria table', 'Models how to structure a compare answer', 'compare / criteria / Variation / Speed / Partners / similarity', 'Table rows fill on each criterion as spoken', E, 'Command verb underlined; rows fill on cue words; link row highlights', ['table row reveal', 'ScribbleUnderline', 'MarginNote'], 'Hold the completed table to read'],
  'attempt': ['new', 'Stable pond, lone island plant and diseased crop plates', 'Unseen decision applying the trade-off', 'Pause', 'Countdown ring runs through the quiet hold', E, 'Three numbered vignettes appear as named; countdown after narration', ['Countdown ring', 'Enter reveals'], 'Quiet answer-free thinking hold with countdown'],
  'feedback': ['adjust', 'Same attempt board', 'Explains each choice and the clone-weakness trap', 'asexual / asexual / variation / bananas', 'Verdict stamps and reason cards appear per case; plantation thumbnail returns', E, 'Verdict stamp and reason card for each vignette; banana thumbnail on "bananas"', ['stamp pop', 'Enter reveals', 'plate thumbnail'], 'Settle on all verdicts'],
  'memory': ['new', 'Aid with runner and flower icons', 'Reusable summary and handoff', 'fast and stable / slow and varied / next', 'Aid writes on with icons and condition symbols', E, 'Aid writes on; icons pop; next chip', ['HandText write-on', 'ScribbleUnderline'], 'Hold the aid'],
  'key-notes': ['new', 'Key notes card', 'Essentials to copy into books', 'key notes', 'Notes appear then stay still for copying', 'hold', 'Four notes appear and lock', ['Enter reveals'], 'Quiet copy hold with pause invitation']},
 'docs/production/claude-pm/checks/b1-check.md')
print('filled')
