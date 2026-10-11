"""Build lesson.json and lesson.production-brief.json for C2 and B2a (run from repo root).

Scene ids are assigned in design order. Quoted lines ("> ...") are the narration with
**bold** cue markers stripped. The scriptReview stays pending until the Codex fact
check evidence file exists (checks/<lesson>-check.md).
"""
import io, re, json, os, sys, hashlib

HOLD_FRAMES = 1050  # same response hold as C1 and B1
NOTES_LINE = 'Here are the key notes. Pause the video if you need more time to copy them.'
D = 'docs/production/claude-pm/'
E = 'explain'


def sha(p):
    return hashlib.sha256(open(p, 'rb').read()).hexdigest()


C2_ROWS = {
    'hook': ['new', 'Painted hot sealed flask (or coded flask) with equation chip and stopwatch', 'Poses the puzzle of a reactant-only start before any mechanism', 'split / join / sealed',
             'Equation arrows light in turn and the stopper seals the flask',
             E, 'Heading writes on; the stopper presses in on "sealed"; the equation chip writes on at "split" with the blue forward arrow lit and the amber reverse arrow lights at "join"; the stopwatch starts at 0',
             ['HandText write-on', 'DrawPath equation chip', 'CameraStage push'], 'Brief look at the sealed flask'],
    'start': ['new', 'Coded flask with 20 navy particles, rate bars and first table row', 'Establishes the starting stage: forward rate at its highest, reverse rate zero, with the cause for each', 'concentration / forward / reverse / fifty / zero',
              'Navy particles split while the forward bar grows and the reverse bar stays empty',
              E, 'Camera zooms into 20 navy particles; the forward bar grows to 50 on "fifty" as some particles split into violet and green; the reverse bar stays empty with a pen ring on "zero"; the first table row writes in',
              ['lens zoom', 'particle split arcs', 'NumberTicker rate bars', 'ScribbleCircle'], 'Hold the first table row and the empty reverse bar'],
    'forward-falls': ['adjust', 'Same flask at stage 1 with the earlier row ghosted and the gap column added', 'Shows why the forward rate falls and the reverse rate starts, and links the rates to the net change', 'forty / started / meets / forward is still bigger than reverse / keeps falling',
                      'Forward bar shrinks to 40, a violet and a green particle join into navy as the reverse bar rises to 8, and the net arrow shortens',
                      E, 'Forward bar shrinks to 40 on "forty"; a violet and a green particle drift together and merge on "meets" while the reverse bar rises to 8; a pen bracket spans the bar difference on "forward is still bigger"; the gap column and the net arrow shrink from 50 to 32 on "keeps falling"',
                      ['particle merge', 'NumberTicker rate bars', 'pen bracket', 'table column reveal'], 'Hold the two rows side by side'],
    'closing-in': ['adjust', 'Same flask at stage 2 with only the last two table rows in full', 'Shows the gap between the rates shrinking while the reactant still falls', 'thirty-five / seventeen / gap',
                   'Rate bars close to 35 and 17 and the net arrow shrinks to 18',
                   E, 'Rate bars move to 35 and 17; a pen bracket spans the gap on "gap" and the net arrow shrinks to 18; the "closer" table row writes in while earlier rows ghost; splits become rarer and joins more frequent',
                   ['NumberTicker rate bars', 'pen bracket', 'particle events', 'table row reveal'], 'Hold the closer row'],
    'equal': ['adjust', 'Same flask at equilibrium plus the painted colourless and pale yellow-green flask pair', 'Shows equal rates giving steady concentrations while both reactions continue, with a visible colour clue', 'equal / thirty / yellow-green',
              'Rate bars lock together, the net arrow vanishes, and the flask plate crossfades to pale yellow-green and then stops darkening',
              E, 'Bars lock at 30 with a teal "equal" bracket on "equal" and "net change 0" replaces the net arrow; the equilibrium row writes with a teal highlight; split and join events keep running with a "still happening both ways" tag; on "yellow-green" the colourless flask plate crossfades to the pale plate and a swatch strip fills then stops',
              ['bar lock', 'teal bracket', 'plate crossfade', 'swatch fill'], 'Hold the equal bars while the colour stops changing'],
    'graphs': ['new', 'Two aligned coded graphs: concentration against time above and rate against time below', 'Lets the learner read the whole journey in both graph types and corrects the reaction-stops idea', 'falls / rises / level / not zero',
               'Four curves draw live and the rate curves merge into one flat line at 30',
               E, 'Board slides to two stacked graphs; the PCl5 curve draws on "falls" and the PCl3 and Cl2 curves rise together; forward and reverse rate curves draw on "falls" and "rises" and merge; a teal dashed line marks the equal point; a pen traces the flat line down to 30 and a crossed "the reaction stops" bubble appears',
               ['DrawPath curves', 'graph slide layout', 'dashed marker', 'Mark cross', 'pen trace'], 'Hold the finished graphs'],
    'towns-aid': ['adjust', 'C1 two-towns traffic doodle, swap diagram and memory aid', 'Gives a mental picture for rates meeting, and a memory aid that works for either start', 'left / back / faster rate falls',
                  'Blue traffic thins while amber traffic builds until both lanes match, then the swap diagram flips and the aid writes on',
                  E, 'Cars all drive right at first; blue traffic thins on "left" as amber cars build on "back" until both lanes match; the swap diagram flips the faster and slower labels on "the other way round"; the aid writes on with falls, rises and level underlined',
                  ['path traffic dots', 'swap diagram flip', 'HandText write-on', 'ScribbleUnderline'], 'Hold the aid on screen to read'],
    'attempt': ['new', 'Coded products-only flask with 20 violet and 20 green particles and three numbered questions', 'Unseen transfer to a products-only start with all conditions visible', 'Pause',
                'Countdown ring runs through the answer-free thinking hold',
                E, 'Products-only flask and the three numbered questions appear as named; the equation chip stays for reference; the countdown ring starts after the narration',
                ['Countdown ring', 'Enter reveals'], 'Quiet answer-free thinking hold with countdown'],
    'feedback': ['adjust', 'Same flask run in reverse, taller rate axis, ghosted first run and small rate-time graph', 'Explains the products-start answer, shows the same final mixture and names the likely wrong answers', 'forward / rises / same mixture / falls / still going',
                 'Violet and green merge into navy at a high reverse rate, the counts settle on 12, 8 and 8, and the small graph draws the swapped curves',
                 E, 'Forward bar empty with a pen ring on "forward"; the navy count climbs from 0 on "rises" and settles on 12, 8 and 8 on "same mixture"; a small rate graph draws reverse falling and forward rising with the first run ghosted on "falls"; wrong-answer chips appear crossed as each is named',
                 ['particle merge', 'NumberTicker counts', 'DrawPath rate graph', 'ScribbleCircle', 'Mark cross'], 'Settle on the matching flat level'],
    'memory': ['new', 'Five-step story with small rate-bar icons and a final flask', 'Gives the reusable order of events for any how-does-it-reach-equilibrium question and hands off to disturbances', 'start / falls / rises / equal / disturb',
               'Five story steps write on one by one and the final flask shakes at "disturb"',
               E, 'Five steps write on in turn with rate-bar icons; the steady-state flask shakes slightly on "disturb" and a next-lesson chip appears',
               ['HandText write-on', 'rate-bar icons', 'flask shake'], 'Hold the five steps to read'],
    'key-notes': ['new', 'Key notes card with the memory aid in large writing', 'Essentials to copy into books', 'key notes',
                  'Notes appear then stay still for copying',
                  'hold', 'Five notes and the aid appear and lock', ['Enter reveals'], 'Quiet copy hold with pause invitation'],
}

B2A_ROWS = {
    'hook': ['new', 'Painted coral spawning plate and harbour seal with pup plate', 'Sets a striking contrast to motivate the question', 'millions of tiny eggs / harbour seal / a single egg / a single pup',
             'Egg cloud swells over the coral, then a push-through shows the seal with one dot for one egg',
             E, 'Egg cloud swells over the reef on "millions of tiny eggs"; push-through to the seal plate on "harbour seal"; one egg dot on "a single egg" and a scribble circle round the pup on "a single pup"; heading writes on',
             ['particle cloud', 'CameraStage push-through', 'ScribbleCircle', 'HandText write-on'], 'Brief look at the seal and pup'],
    'meeting': ['new', 'Coded sperm, egg and zygote strips on a plain board', 'Introduces fertilisation, the zygote and the meeting problem, reusing B1 wording', 'one set of chromosomes / half of the instructions / joins / zygote / two main ways',
                'Gamete strips fill half an instruction bar each and complete inside one zygote cell when the sperm joins',
                E, 'Each gamete shows one chromosome strip on "one set of chromosomes"; the strips fill halves of an instruction bar on "half of the instructions"; the sperm travels in and the bar completes inside one cell labelled "zygote" on "joins"; pin, short path and drying droplet doodles draw on the three problems; the board splits into two columns on "two main ways"',
                ['gamete travel', 'bar fill', 'HandText write-on', 'DrawPath doodles', 'column split'], 'Hold the empty two-column board'],
    'external-where': ['adjust', 'Droplet and swimming sperm icons, then coral, frog pond and salmon plates in turn', 'Shows what external fertilisation is and why water is needed', 'water matters for two reasons / sea / pond / gravel',
                       'Two reason icons draw, then three animal plates appear one at a time with place chips collecting on a rail',
                       E, 'A droplet and a swimming sperm draw on "two reasons"; the coral spawn cloud appears on "sea", the frog pond plate on "pond", and salmon eggs and a sperm trail in the gravel on "gravel"; place chips collect on the rail',
                       ['DrawPath icons', 'plate reveal', 'particle trail', 'rail chips'], 'Hold the three place chips'],
    'external-timing': ['adjust', 'Coral, salmon and frog plates again with moon, scent-wave and calendar doodles', 'Shows how external fertilisers get gametes into the same place and time', 'same few nights / scent / same place / clasps / right over the eggs',
                        'The coral cloud crowds into one patch, a scent wave guides salmon to one gravel bed, and the frog pair is pushed in on for the clasp',
                        E, 'A moon chip and the cloud crowding into one patch on "same few nights"; a scent wave from the river mouth and fish converging on one bed on "scent" and "same place"; the camera pushes to the clasping frogs on "clasps" and the sperm trail lands on the spawn on "right over the eggs"',
                        ['scent wave draw', 'fish converge', 'CameraStage push', 'particle trail'], 'Hold the frog pair with the sperm on the spawn'],
    'odds': ['new', 'Coded field of hundreds of gamete dots over water with current and fish silhouettes', 'Shows two separate kinds of loss and why huge numbers answer them', 'sweep / eat / spread so thin / four thousand to fourteen thousand / a few still make it',
             'Dots shear away, fish remove dots, the few pairs become eggs and most of those fade, leaving a handful circled',
             E, 'Dots shear sideways on "sweep"; fish silhouettes remove dots on "eat"; dots fade apart on "spread so thin"; the egg count chip ticks on at the number; only a handful stay lit and are circled on "a few still make it"; the rule line writes on',
             ['particle field', 'fish silhouettes', 'NumberTicker counter', 'ScribbleCircle', 'HandText write-on'], 'Hold the rule line'],
    'internal': ['adjust', 'Painted bearded dragon cut-away on dry sand beside the dimmed dot field from the odds scene', 'Shows how internal fertilisation protects gametes so far fewer eggs are needed', 'inside the female\'s body / short distance / far fewer eggs / plenty of sperm / sharks / find each other',
                 'A sperm path draws inside the female while the dot field dims, then a male silhouette and two approaching animals show what stays costly',
                 E, 'A sperm path draws inside the female and ends at the egg on "inside the female\'s body", with a circle on "short distance"; the earlier dot field dims with a "far fewer eggs" chip; a sperm cloud stays beside a male on "plenty of sperm"; a shark icon pops on "sharks"; two silhouettes meet on "find each other"',
                 ['DrawPath sperm path', 'ScribbleCircle', 'plate dim', 'icon pop'], 'Hold the split-screen comparison'],
    'trap': ['new', 'Hen cut-away plate, then a coded location grid with hen, seal and frog crops', 'Corrects the idea that egg laying means external fertilisation', 'inside the hen / before the shell forms / hen / seal / frog',
             'A sperm travels up the oviduct, the shell draws on after it, and a grid fills row by row with the hen row circled',
             E, 'A sperm travels to the yolk on "inside the hen" and the shell draws on after it on "before the shell forms"; the two-column grid writes on and the hen, seal and frog rows fill as each is named; the hen row is circled in amber',
             ['particle travel', 'DrawPath shell', 'table row reveal', 'ScribbleCircle'], 'Hold the completed grid'],
    'numbers-care': ['new', 'Coded cause strip, seesaw balance with salmon and seal plates, buried-egg doodle', 'Explains the trade-off between egg number and parental investment and its limits', 'limited supply / thousands of eggs / single pup / parental investment / some reptiles',
                     'A fixed energy bar splits between eggs and care, and the seesaw tilts from the salmon side to the seal side',
                     E, 'The cause strip draws phrase by phrase; the energy bar draws on "limited supply"; the salmon side fills with egg dots on "thousands of eggs" and a crossed parent icon appears; the seal side fills with one pup on "single pup"; the seesaw tilts on "or"; a buried-egg doodle labelled "trend, not a rule" appears on "some reptiles"',
                     ['DrawPath bars', 'seesaw tilt', 'icon pop', 'Mark cross'], 'Hold the tilted seesaw'],
    'worked-explain': ['new', 'Question card and a chain of four written answer cards with salmon and seal icons', 'Models how to build a linked explain answer one sentence at a time', 'explain / cause / effect / contrast / link',
                       'Four answer cards land in turn, the word because is circled on three of them and earlier cards shrink to the top rail',
                       E, 'The question card writes on with "explain" underlined; the cause, effect, contrast and link cards land on their cue words; "because" is circled on the first three and the linking word underlined in a second colour; earlier cards shrink to the rail',
                       ['HandText write-on', 'card slide-in', 'ScribbleCircle', 'ScribbleUnderline', 'chip shrink'], 'Hold the four cards to read'],
    'bad-year': ['new', 'Two rows: a coded seal colony and a coded cod population with a dense egg cloud', 'Shows that few young per adult means slow recovery from equal losses', 'storm year / survive / how many young each adult adds / rebuilds slowly / rebuild faster',
                 'Nine in ten young are slashed in both rows, the adults stay lit, and the cod refill dial fills quickly while the seal dial creeps',
                 E, 'Red slashes remove nine in ten young in both rows on "storm year" while the adults stay lit on "survive"; "adds next year" chips show about 1 for seals and millions for cod; the seal refill dial creeps on "rebuilds slowly" and the cod dial fills on "rebuild faster"',
                 ['slash marks', 'refill dials', 'NumberTicker chips', 'particle cloud'], 'Hold the two dials'],
    'attempt': ['new', 'Three painted vignettes: desert lizard, sea turtle nest, and oysters beside a dugong with calf', 'Unseen transfer with every condition visible, including that the adults survive in both populations', 'Pause',
                'Countdown ring runs through the answer-free thinking hold',
                E, 'Three numbered vignettes appear as each situation is named; the storm and surviving-adults conditions stay on the board; the countdown ring starts after the narration',
                ['Countdown ring', 'Enter reveals'], 'Quiet answer-free thinking hold with countdown'],
    'feedback': ['adjust', 'Same three vignettes with verdict stamps, sperm paths and the seesaw and refill dials', 'Explains each answer and names the lays-eggs, beach and lost-eggs slips', 'internal / inside the female / dugong / oysters',
                 'Each vignette gets a verdict stamp and reason card, with a sperm path inside the lizard and turtle and the slow dugong dial against the fast oyster dial',
                 E, 'The lizard gets an "internal" stamp with a sperm path inside; the turtle shows a sperm path inside her and an "inside, before the eggs were laid" stamp; the dugong dial creeps while the oyster dial fills; amber doodles mark each trap',
                 ['stamp pop', 'DrawPath sperm path', 'refill dials', 'ScribbleUnderline'], 'Settle on all three verdicts'],
    'memory': ['new', 'Aid written large with wave, dot cloud, animal pair and shield icons and the hen', 'Gives a reusable summary aid and hands off to plants, fungi and microbes', 'External / Internal / where they meet / Next',
               'The aid writes on in two halves with icons, then the trap line and the next chip appear',
               E, 'The "External" half writes on with a wave and dot cloud, then the "Internal" half with the pair and shield; the trap line writes on beside the hen; the next-lesson chip appears',
               ['HandText write-on', 'icon pop', 'ScribbleUnderline'], 'Hold the aid'],
    'key-notes': ['new', 'Key notes card with the memory aid in large writing', 'Essentials to copy into books', 'key notes',
                  'Notes appear then stay still for copying',
                  'hold', 'Five notes appear and lock', ['Enter reveals'], 'Quiet copy hold with pause invitation'],
}

LESSONS = {
    'c2': {
        'design': D + 'lessons/chem-m5-c02.md',
        'meta': {'title': 'How reversible reactions approach equilibrium', 'subtitle': 'How does a flask that starts with only reactant end up unchanging?', 'subject': 'Chemistry', 'yearLevel': 12, 'module': 5, 'lesson': 2,
                 'lessonIntent': 'Explain how forward and reverse rates change from a reactant-only start until they are equal, so the concentrations stop changing, and read concentration-time and rate-time graphs.'},
        'ids': ['hook', 'start', 'forward-falls', 'closing-in', 'equal', 'graphs', 'towns-aid', 'attempt', 'feedback', 'memory', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'C1: reversible reactions run both ways; dynamic equilibrium means equal non-zero rates in a closed system; equal rates do not mean equal amounts. Rate means how much changes per second, and more particles available means more events per second.',
            'startsWith': 'A sealed, steadily heated flask filled with only phosphorus pentachloride.',
            'stopsAfter': 'Explaining how forward and reverse rates change from a reactant-only start until they are equal and the concentrations stop changing, and reading both graph types.',
            'nextLesson': 'C3: what a flask already at equilibrium does when it is disturbed.'},
        'teaching': {
            'task': 'Explain how a reaction that starts with only reactant reaches equilibrium, and predict the pattern for a products-only start.',
            'causalExplanation': 'Each reactant molecule has the same chance of splitting each second, so fewer molecules means a falling forward rate; products cannot rejoin until they exist and meet more often as they build up, so the reverse rate rises; the concentration of each substance is the net result of the two rates, so equal rates give steady concentrations while both reactions keep running.',
            'conversationalApproach': 'One sealed phosphorus pentachloride flask followed stage by stage with made-up rate numbers, a colour clue, the C1 two-towns traffic picture, and a products-only start for the learner to predict.',
            'openingDecision': 'How does a flask that starts with only reactant end up as a mixture that never changes?',
            'understandingCheck': 'Predict the rates and concentrations for a flask that starts with only phosphorus trichloride and chlorine, and say whether the reactions are still going at equilibrium.',
            'curriculumScope': 'Describe how the rates of forward and reverse reactions change over time until equilibrium is reached, using collision-theory reasoning and concentration and rate graphs (CH12-12). K, Le Chatelier, catalysts and activation energy are deferred to later lessons.'},
        'design_block': {
            'renderer': 'src/explainer/ExplainerVideo.tsx',
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, coded flask with 20 particles, rate bars and live graphs, with a painted flask pair for the colour evidence. Colour key: PCl5 navy, PCl3 violet, Cl2 green, forward blue, reverse amber, equal teal.',
            'transitionPlan': 'Stopper presses in and the camera pushes into the flask; the board slides from flask and table to the two-panel graph layout; the colourless flask plate crossfades to the pale yellow-green plate; the towns doodle replaces the flask; scene crossfades with settle.'},
        'rows': C2_ROWS,
    },
    'b2a': {
        'design': D + 'lessons/bio-m5-b02a.md',
        'meta': {'title': 'Reproduction in animals', 'subtitle': 'Why does where fertilisation happens change egg numbers and care?', 'subject': 'Biology', 'yearLevel': 12, 'module': 5, 'lesson': 2,
                 'lessonIntent': 'Describe external and internal fertilisation with named animals and explain how fertilisation type links to egg number and parental investment.'},
        'ids': ['hook', 'meeting', 'external-where', 'external-timing', 'odds', 'internal', 'trap', 'numbers-care', 'worked-explain', 'bad-year', 'attempt', 'feedback', 'memory', 'key-notes'],
        'progression': {
            'prerequisiteKnowledge': 'B1: gametes (sperm and egg) join in sexual reproduction; a gamete carries one set of chromosomes and two gametes make a full two sets; offspring must survive for a species to continue.',
            'startsWith': 'Coral spawning millions of eggs on the Great Barrier Reef, against a harbour seal with one egg and one pup.',
            'stopsAfter': 'Describing external and internal fertilisation with named animals, explaining which conditions favour each, and linking fertilisation type to egg number and parental investment in a short answer.',
            'nextLesson': 'B2b: how plants, fungi and microbes reproduce.'},
        'teaching': {
            'task': 'Explain why external fertilisers release far more eggs than internal fertilisers and relate this to parental investment.',
            'causalExplanation': 'Gametes must meet, and in open water they are scattered, eaten and spread thin so huge egg numbers offset the loss; internal fertilisation protects the gametes so far fewer eggs are needed; a parent has limited energy, so many eggs with little care trades off against few young with more care.',
            'conversationalApproach': 'Contrasting real animals (coral, salmon, frog, seal, hen), a trap about where fertilisation versus development happens, and an exam answer built on screen one sentence at a time.',
            'openingDecision': 'Why would one animal release millions of eggs while another gets by with one?',
            'understandingCheck': 'Decide the fertilisation type for a desert lizard and a sea turtle, and judge which of oysters and dugongs recovers more slowly from a storm that kills nine in ten young.',
            'curriculumScope': 'Describe the mechanisms of reproduction in animals, comparing external and internal fertilisation and their link to egg number and parental investment (BIO12-12, Module 5). Meiosis, haploid and diploid, pregnancy and plants are deferred to later lessons.'},
        'design_block': {
            'renderer': 'src/explainer/ExplainerVideo.tsx',
            'visualSystem': 'Explainer engine: warm paper stage, handwritten Caveat headings, amber doodle layer, painted animal plates with coded gamete fields, seesaw balance and answer cards.',
            'transitionPlan': 'Push-through from the coral plate to the seal plate; the board splits into outside and inside columns; plates change one animal at a time; the dot field dims as the internal fertilisation view arrives; scene crossfades with settle.'},
        'rows': B2A_ROWS,
    },
}


def build(key):
    cfg = LESSONS[key]
    s = io.open(cfg['design'], encoding='utf8').read()
    parts = re.split(r'^### \d+[ab]?\. ', s, flags=re.M)[1:]
    assert len(parts) == len(cfg['ids']), (key, len(parts))
    scenes = []
    for sid, p in zip(cfg['ids'], parts):
        p = re.split(r'^## |^# ', p, flags=re.M)[0]
        quote = ' '.join(l[2:].strip() for l in p.split('\n') if l.startswith('> '))
        quote = re.sub(r'\*\*', '', quote).strip()
        if sid == 'key-notes':
            quote = NOTES_LINE
        assert quote and '—' not in quote and '*' not in quote, (key, sid)
        sc = {'id': sid, 'type': 'concept', 'durationInFrames': 300, 'voiceover': {'text': quote}}
        if sid == 'attempt':
            sc['responseHold'] = {'startFrame': 0, 'endFrame': HOLD_FRAMES}
        scenes.append(sc)
    lesson = {**cfg['meta'], 'fps': 30, 'width': 1920, 'height': 1080, 'introDurationInFrames': 0, 'productionRole': 'production-draft', 'scenes': scenes}
    base = f'{D}lessons/{key}/'
    os.makedirs(base, exist_ok=True)
    lp = base + 'lesson.json'
    io.open(lp, 'w', encoding='utf8', newline='\n').write(json.dumps(lesson, ensure_ascii=False, indent=2) + '\n')

    brief = {'schemaVersion': 4, 'source': {'lessonPath': lp, 'lessonSha256': sha(lp)},
             'progression': {'planPath': 'docs/production/course-progression-plan-2026-10-09.md', **cfg['progression']},
             'researchReferences': ['docs/research/hsc-video-production-standard-2026-10-02.md', 'docs/production/teaching-templates.md', 'docs/animation-planning.md', 'docs/production/motion-design-standard.md', D + 'teaching-playbook.md', cfg['design']],
             'teaching': cfg['teaching'], 'design': cfg['design_block'], 'scenes': []}
    for sid in cfg['ids']:
        r = cfg['rows'][sid]
        brief['scenes'].append({'sceneId': sid, 'visualDecision': r[0], 'visualReference': r[1], 'teachingReason': r[2], 'narrationCue': r[3], 'motionPurpose': r[4],
                                'motionRole': r[5], 'onScreenChange': r[6], 'motionTools': r[7], 'holdPurpose': r[8]})
    lr = f'{D}checks/{key}-learning-review.md'
    chk = f'{D}checks/{key}-check.md'
    brief['studentLearningReview'] = {'status': 'pass', 'reviewer': 'Independent Claude Sonnet student-learning reviewer (AI source review, revision 3 pass)', 'evidence': {'path': lr, 'sha256': sha(lr)}}
    if os.path.exists(chk):
        brief['scriptReview'] = {'status': 'pass', 'reviewer': 'Codex fact check (science, syllabus, copy); findings applied by Claude', 'evidence': {'path': chk, 'sha256': sha(chk)}}
    else:
        brief['scriptReview'] = {'status': 'pending', 'reviewer': '', 'evidence': None}
    brief['voicedPreview'] = {'status': 'pending', 'reviewer': '', 'mode': '', 'inputSnapshotPath': '', 'evidence': None,
                              'studentLearningReview': {'status': 'pending', 'reviewer': '', 'evidence': None},
                              'humanListening': {'status': 'pending', 'reviewer': '', 'mode': 'human-listening', 'evidence': None}}
    brief['limitation'] = 'Pending scaffold, not approval. Fill the teaching and scene decisions before recording; review the exact voiced revision before a full export.'
    io.open(base + 'lesson.production-brief.json', 'w', encoding='utf8', newline='\n').write(json.dumps(brief, ensure_ascii=False, indent=2) + '\n')
    chars = sum(len(x['voiceover']['text']) for x in scenes)
    print(key, [x['id'] for x in scenes], chars, 'chars', sum(len(x['voiceover']['text'].split()) for x in scenes), 'words')


for k in (sys.argv[1:] or LESSONS):
    build(k)
