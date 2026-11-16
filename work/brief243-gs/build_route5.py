"""Build docs/production/programme/maths-a11-route-inputs-5.json (brief 243, g01 to g06 and s01 to s11).

Run from the repo root: python -I work/brief243-gs/build_route5.py
Reads the outline, the crosswalk and the read-only site clone (no changes to the clone).
"""
import hashlib
import json
import re
import subprocess
from pathlib import Path

ROOT = Path('.').resolve()
CLONE = Path('C:/Users/kygs/teaching-app-fix')
SITE = CLONE / 'subjects/maths-advanced/year11'
OUT = ROOT / 'docs/production/programme/maths-a11-route-inputs-5.json'

outline = json.loads((ROOT / 'docs/production/programme/maths-a11-course-outline.json').read_text(encoding='utf-8'))
cw = json.loads((ROOT / 'docs/production/programme/syllabus/maths-advanced-2024-y11-crosswalk.json').read_text(encoding='utf-8'))
points = {}
for fa in cw['focusAreas']:
    for p in fa['contentPoints']:
        points[p['id']] = (p, fa['sourceUrl'])
videos = {v['id']: v for v in outline['videos']}
head = subprocess.run(['git', '-C', str(CLONE), 'rev-parse', 'HEAD'], capture_output=True, text=True).stdout.strip()
head_date = subprocess.run(['git', '-C', str(CLONE), 'log', '-1', '--format=%cd', '--date=iso'], capture_output=True, text=True).stdout.strip()
REPO = 'kyleajames33-beep/Teaching-APP'


def lesson(path, examples):
    raw = (SITE / path).read_bytes()
    ids = []
    for s in re.findall(r'data-step-id="([^"]+)"', raw.decode('utf-8')):
        if s not in ids:
            ids.append(s)
    return {
        'path': f'{REPO}@{head[:8]}:subjects/maths-advanced/year11/{path}',
        'url': f'https://hscscience.com.au/subjects/maths-advanced/year11/{path}',
        'sectionIds': ids,
        'sectionSelector': 'data-step-id',
        'exampleIds': examples,
        'sha256': hashlib.sha256(raw).hexdigest(),
    }


REC = ('Keep the focused boundary and the site\'s exact worked-example numbers. Partial or missing site coverage needs '
       'original teaching. Old module labels are not the route. Claude chooses final splits and length.')

E = lambda src, text: {'source': src, 'text': text}

DATA = {
    'math-a11-g01': dict(
        lessons=[('graph-transformations/lesson01.sa.html', ['we-trans-1', 'we-trans-2', 'we-trans-3'])],
        entry=[E('math-a11-w15', 'Vertex form y = a(x - h)^2 + k with vertex (h, k).'),
               E('math-a11-w21', 'y = k/x with asymptotes x = 0 and y = 0.'),
               E('math-a11-w31', 'Graphs of y = |x| and y = |ax + b| and their vertex.'),
               E('math-a11-e01', 'Graphs of y = a^x with asymptote y = 0.'),
               E('math-a11-w09', 'Domain and range in interval notation.')],
        prior=['math-a11-t16'],
        start=('A parent graph students already know, y = x^2 with its vertex at the origin (w15), and the question '
               '"does replacing x by x - 3 move it left or right?". The join from t16 is fixed when t16 is designed; '
               'g01 needs nothing from trigonometry.'),
        stop=('Establish with a graphing application that replacing x by x - a in the equation of a graph is a horizontal '
              'translation by a and replacing y by y - b is a vertical translation by b, the sign of a and b giving the '
              'direction; apply it to y = x^2, |x|, 1/x and a^x (vertex, asymptotes and key points move with the graph; '
              'domain and range follow). Reflections are g02, dilations g03, sequences g04.'),
        next='math-a11-g02',
        rec=('Teach the syllabus "replace y by y - b" form beside y = f(x) + b: both translations then share one rule '
             '(a minus sign moves the graph the positive way). Log S11-G01 before reusing site card 06.')),
    'math-a11-g02': dict(
        lessons=[('graph-transformations/lesson02.sa.html', ['we-refl-1', 'we-refl-2', 'we-refl-3'])],
        entry=[E('math-a11-g01', 'Replacing x or y in an equation; images of points under a translation.'),
               E('math-a11-w26', 'Even and odd functions: unchanged by reflection in the y-axis or by a half-turn.'),
               E('math-a11-e01', 'y = k a^(-x) as the reflection of y = k a^x.')],
        prior=['math-a11-g01'],
        start='g01\'s final frame (a point and its translated image); now replace x by -x instead.',
        stop=('Establish with a graphing application that replacing x by -x reflects a graph in the y-axis and replacing '
              'y by -y reflects it in the x-axis; find images of points ((x, y) to (-x, y) and (x, -y)) and the equation '
              'of a reflected graph (every x replaced, in brackets); both together give (x, y) to (-x, -y). Even and odd '
              'tests stay in w26 (referenced, not re-taught).'),
        next='math-a11-g03',
        rec='Teach the syllabus "replace y by -y" form beside y = -f(x). Link to w26 by one frame, not a re-teach.'),
    'math-a11-g03': dict(
        lessons=[('graph-transformations/lesson03.sa.html', ['we-dil-1', 'we-dil-2', 'we-dil-3'])],
        entry=[E('math-a11-g01', 'Replacing x or y in an equation moves every point the same way.'),
               E('math-a11-g02', 'Images of points under a reflection.'),
               E('math-a11-w24', 'x^2 + y^2 = r^2 is the circle of radius r centred at the origin.'),
               E('math-a11-w15', 'y = ax^2 is narrower or wider than y = x^2.')],
        prior=['math-a11-g02'],
        start='g02\'s final frame; a graph and the y-axis held fixed while every point moves away from it.',
        stop=('Describe a horizontal dilation as a stretch from the y-axis and a vertical dilation as a stretch from the '
              'x-axis; establish with a graphing application that replacing x by x/k is a horizontal dilation by factor k '
              'and replacing y by y/l a vertical dilation by factor l, including factors between 0 and 1 (compressions) '
              'and y = f(bx) as factor 1/b; establish that replacing x by x/k and y by y/k together is a dilation by '
              'factor k, an enlargement for k > 1 and a reduction for 0 < k < 1 (the unit circle becomes the circle of '
              'radius k). Combining with translations is g04.'),
        next='math-a11-g04',
        rec=('ci950cc744 (enlargement) has no site teaching; cide27d1f1 needs the factor-against-coefficient link. '
             'Year 12 d02 and d13 already say "scaled horizontally by the factor 1/ln 2": deliver that factor language. '
             'Log S11-G02.')),
    'math-a11-g04': dict(
        lessons=[('graph-transformations/lesson04.sa.html', ['we-ct-1', 'we-ct-2', 'we-ct-3'])],
        entry=[E('math-a11-g01', 'Translations by replacing x by x - a and y by y - b.'),
               E('math-a11-g02', 'Reflections by replacing x by -x and y by -y.'),
               E('math-a11-g03', 'Dilations by replacing x by x/k and y by y/l.'),
               E('math-a11-w27', 'Composite functions: the order usually matters.')],
        prior=['math-a11-g03'],
        start='Two copies of y = x^2 given the same two moves in opposite orders, ending at different vertices.',
        stop=('Recognise that the order of transformations matters (a translation and a dilation along the same axis do '
              'not commute; moves along different axes do); write the function rule after a described sequence of '
              'reflections, dilations and translations (not trigonometric functions), and describe the sequence from a '
              'rule by factoring the inside first (dilate, then translate). This video owns the "determine the function '
              'rule" and "describe which transformations have been applied" parts of cid4fd3807; domain, range, '
              'intercepts, asymptotes and discontinuities are g05.'),
        next='math-a11-g05',
        rec=('Year 12 t01 assumes this video: it reads y = k f(a(x + b)) + c (the 2024 Year 12 form), factors the inside '
             'first and dilates before translating. Prefer that form, or name the site form a f(b(x - h)) + k only '
             'with a warning about the letters. Log S11-G03 and S11-G04 before reusing site cards.')),
    'math-a11-g05': dict(
        lessons=[('graph-transformations/lesson05.sa.html', ['we-sk-1', 'we-sk-2', 'we-sk-3']),
                 ('exponential-and-logarithmic-functions/lesson06.sa.html', ['we-2', 'we-3'])],
        entry=[E('math-a11-g04', 'Writing and reading a sequence of transformations.'),
               E('math-a11-w21', 'Asymptotes of y = k/x.'),
               E('math-a11-e01', 'Asymptote y = 0 of y = a^x.'),
               E('math-a11-e08', 'Asymptote x = 0 and domain x > 0 of y = log_a x.'),
               E('math-a11-w29', 'Discontinuities.'),
               E('math-a11-w09', 'Domain and range.')],
        prior=['math-a11-g04'],
        start='g04\'s final rule, for example y = 3/(x - 2) + 1, with the parent y = 1/x ghosted behind it.',
        stop=('For a transformed function within the course (parabola, cubic, |x|, hyperbola, exponential, logarithm; '
              'not trigonometric), determine the rule and graph, the domain and range, intercepts, asymptotes and '
              'discontinuities, and describe the transformations applied: carry key points and asymptotes from the '
              'parent, then find intercepts by solving (a vertical change moves x-intercepts in a way the parent\'s '
              'intercepts cannot predict). This video owns those parts of cid4fd3807. Circles are g06.'),
        next='math-a11-g06',
        rec=('Uses the log examples that e08 deferred to this strand (exponentials lesson06 we-2 and we-3, drill 3). '
             'Log S11-G05 (a wrong model answer) and S11-G06 before reusing site copy.')),
    'math-a11-g06': dict(
        lessons=[('graph-transformations/lesson07.sa.html', ['we-1', 'we-2', 'we-3'])],
        entry=[E('math-a11-w24', 'x^2 + y^2 = r^2 from Pythagoras; radius as the root of the right side; domain and range of a relation; the equation from a point.'),
               E('math-a11-w15', 'Completing the square.'),
               E('math-a11-g01', 'Replacing x by x - a and y by y - b translates a graph.'),
               E('math-a11-g03', 'x^2 + y^2 = r^2 is the unit circle enlarged by factor r.')],
        prior=['math-a11-g05'],
        start='w24\'s circle x^2 + y^2 = r^2 (not re-derived) and g01\'s rule, applied to both x and y at once.',
        stop=('Use translations to identify the centre (a, b), radius r, domain [a - r, a + r] and range [b - r, b + r] '
              'of (x - a)^2 + (y - b)^2 = r^2; find the centre and radius of x^2 + y^2 + ax + by + c = 0 by completing '
              'both squares; graph circles from their equations and find the equation of a circle from its graph '
              '(centre and radius, or centre and one point). Semicircles stay in w25.'),
        next='math-a11-s01',
        rec=('Builds on w24 without re-deriving the origin circle. The syllabus reuses a and b with two meanings in '
             'ci84f96bc4 and cid118e6e7: in the general form the centre is (-a/2, -b/2). Next is the probability strand.')),
    'math-a11-s01': dict(
        lessons=[('probability-and-data/lesson11.sa.html', ['we-1', 'we-2', 'we-3'])],
        entry=[E('Years 7 to 10', 'Factors, multiples, primes, even and odd numbers.')],
        prior=['math-a11-g06'],
        start='A collection described in words (the even numbers from 1 to 11) and the same collection written in braces.',
        stop=('Define a set and its elements, writing finite and infinite sets in braces ({2, 3, 5, 7}, {0, 2, 4, 6, ...}); '
              'use n(A) or |A| for the number of elements of a finite set; define the empty set (no elements, written '
              'with the empty-set symbol); use A-bar, A\' or A^c for the complement within a stated universal set U; '
              'define a subset. Intersection, union and Venn diagrams are s02.'),
        next='math-a11-s02',
        rec='Show |A| beside n(A) and U for the universal set (the site writes only n(A) and the Greek xi).'),
    'math-a11-s02': dict(
        lessons=[('probability-and-data/lesson12.sa.html', ['we-1', 'we-2', 'we-3'])],
        entry=[E('math-a11-s01', 'Sets, |A|, the universal set, complements and subsets.')],
        prior=['math-a11-s01'],
        start='s01\'s universal set with two sets that share some elements.',
        stop=('Define A intersect B (elements in A and in B) and A union B (elements in A or in B, inclusive or); define '
              'disjoint sets (intersection empty); draw and read two-set Venn diagrams inside a universal set from '
              'practical information, filling the overlap first and checking that the regions add to |U|. The counting '
              'rule as a formula is s03.'),
        next='math-a11-s03',
        rec=REC),
    'math-a11-s03': dict(
        lessons=[('probability-and-data/lesson13.sa.html', ['we-1', 'we-2', 'we-3'])],
        entry=[E('math-a11-s02', 'Venn diagrams with an overlap filled first.')],
        prior=['math-a11-s02'],
        start='Two set totals that add to more than the whole group.',
        stop=('Establish |A ∪ B| = |A| + |B| - |A ∩ B| because adding the totals counts the overlap twice; use it to find '
              'any one of the four quantities, the number in neither (|U| - |A ∪ B|) and the disjoint case. Probability '
              'starts in s04.'),
        next='math-a11-s04',
        rec='Write the rule in the syllabus |A| form (the site uses n(A) only).'),
    'math-a11-s04': dict(
        lessons=[('probability-and-data/lesson01.sa.html', ['we-1', 'we-3'])],
        entry=[E('math-a11-s01', 'Sets, subsets and complements.'), E('math-a11-s02', 'Intersection and union.'),
               E('Years 7 to 10', 'Simple probability as a fraction for equally likely outcomes.')],
        prior=['math-a11-s03'],
        start='s03\'s sets, now filled with the outcomes of an experiment.',
        stop=('Define an experiment or trial (a procedure that can be repeated indefinitely with a well-defined set of '
              'outcomes) and its sample space S; identify an event as a subset of S; for equally likely outcomes, '
              'each outcome has probability 1/|S| and P(A) = |A|/|S|; interpret A-bar as "A does not occur", A ∩ B as '
              '"A and B both occur" and A ∪ B as "A or B occurs", finding each by counting a listed sample space. The '
              'complement and addition rules are s05; arrays and trees s06.'),
        next='math-a11-s05',
        rec=('The site\'s we-1 and we-3 use the addition rule (s05); here use only their sample-space counts. Year 12 s01 '
             'and s02 assume equally likely outcomes, P(A) = favourable / total and listed sample spaces.')),
    'math-a11-s05': dict(
        lessons=[('probability-and-data/lesson02.sa.html', ['we-1']),
                 ('probability-and-data/lesson01.sa.html', ['we-1', 'we-3'])],
        entry=[E('math-a11-s03', 'The counting rule.'), E('math-a11-s04', 'P(A) = |A|/|S| and events as sets.')],
        prior=['math-a11-s04'],
        start='s04\'s sample space drawn as a Venn diagram.',
        stop=('Use Venn diagrams for events in one sample space, including mutually exclusive events (disjoint subsets); '
              'establish P(A-bar) = 1 - P(A) and P(A ∪ B) = P(A) + P(B) - P(A ∩ B) from the counting rules and use '
              'them, including with probabilities not from equally likely outcomes. Multistage events are s06; '
              'conditional probability s07.'),
        next='math-a11-s06',
        rec=('Lesson02\'s multiplication rule, conditional notation and "at least one" items belong to s06 to s08. Year 12 '
             's04 assumes the complement rule.')),
    'math-a11-s06': dict(
        lessons=[('probability-and-data/lesson02.sa.html', ['we-3']),
                 ('probability-and-data/lesson03.sa.html', ['we-2']),
                 ('probability-and-data/lesson01.sa.html', ['we-2'])],
        entry=[E('math-a11-s04', 'Listing a sample space and P(A) = |A|/|S|.'), E('math-a11-s05', 'Complement and addition rules.')],
        prior=['math-a11-s05'],
        start='Two dice rolled together: list the outcomes so that none is missed.',
        stop=('Use arrays (two stages, equally likely: two dice, a die and a coin) and tree diagrams (several stages, with '
              'or without replacement) to determine the outcomes and probabilities of multistage events; multiply along '
              'a branch and add the branches that make the event, justified by counting the ordered outcomes. P(A|B) '
              'notation is s07; the independence test is s08.'),
        next='math-a11-s07',
        rec=('ci1f69f91f is partial on the site (no lesson teaches arrays and trees as a method). Year 12 s02 draws the 6 x 6 '
             'two-dice table as known; deliver it here.')),
    'math-a11-s07': dict(
        lessons=[('probability-and-data/lesson03.sa.html', ['we-1', 'we-2', 'we-3'])],
        entry=[E('math-a11-s05', 'Venn diagrams of events and the addition rule.'), E('math-a11-s06', 'Arrays and tree diagrams.')],
        prior=['math-a11-s06'],
        start='s06\'s two-dice array, with one fact revealed about the roll.',
        stop=('Define P(A|B), the probability that A occurs given that B has already occurred; restrict the sample space '
              'in a Venn diagram, a two-way table, a tree and an array; establish P(A|B) = |A ∩ B|/|B| for equally likely '
              'outcomes and hence P(A|B) = P(A ∩ B)/P(B), provided |B| is not 0; solve practical problems, keeping P(A|B) '
              'and P(B|A) apart. Independence is s08.'),
        next='math-a11-s08',
        rec='The counting form |A ∩ B|/|B| needs original teaching (the site starts from probabilities). Log S11-P01.'),
    'math-a11-s08': dict(
        lessons=[('probability-and-data/lesson04.sa.html', ['we-1', 'we-2', 'we-3'])],
        entry=[E('math-a11-s07', 'P(A|B) = P(A ∩ B)/P(B).'), E('math-a11-s05', 'Mutually exclusive events.')],
        prior=['math-a11-s07'],
        start='Two events where knowing one changes nothing about the other (the die\'s "even" and "greater than 4").',
        stop=('Define independent events (the occurrence of one does not affect the probability of the other); explain '
              'that independence means P(A|B) = P(A) and P(B|A) = P(B) and show algebraically that one implies the '
              'other; prove that independence gives P(A ∩ B) = P(A) x P(B) and the converse; solve practical problems; '
              'contrast with mutually exclusive events. Random variables are s09.'),
        next='math-a11-s09',
        rec='cifa01f762 is missing and ci3243e129 partial on the site: both proofs are original teaching. Log S11-P06.'),
    'math-a11-s09': dict(
        lessons=[('probability-and-data/lesson14.sa.html', ['we-1', 'we-2', 'we-3'])],
        entry=[E('math-a11-s04', 'Experiments, outcomes and P(A).'), E('math-a11-s06', 'The two-dice array.')],
        prior=['math-a11-s08'],
        start='One experiment, two numbers recorded: a count and a measurement.',
        stop=('Define a random variable as a variable whose value is the outcome of a random experiment (X for the '
              'variable, x for a value, P(X = x)); compare discrete random variables (values that can be listed, usually '
              'counted, possibly infinitely many) with continuous ones (any value in an interval, usually measured), '
              'with practical examples of each. Distributions and densities are Year 12 s01 to s06; P(X = x) = 0 for a '
              'continuous variable is Year 12 s04.'),
        next='math-a11-s10',
        rec='Year 12 s01 builds discrete distributions on this definition. Log S11-P02 before reusing card 07.'),
    'math-a11-s10': dict(
        lessons=[('probability-and-data/lesson15.sa.html', ['we-1', 'we-2', 'we-3'])],
        entry=[E('math-a11-s04', 'P(A) for equally likely outcomes.'), E('math-a11-s09', 'Discrete random variables.')],
        prior=['math-a11-s09'],
        start='A spinner spun 40 times and the raw list of results.',
        stop=('Organise a finite dataset in a table or a spreadsheet listing the values, frequency, relative frequency, '
              'cumulative frequency and cumulative relative frequency; use relative frequency to estimate the '
              'probability of results in experiments, with more trials usually giving a more reliable estimate. Graphs '
              'of these columns and the mode and median are s11.'),
        next='math-a11-s11',
        rec='Show the spreadsheet formulas (the syllabus names spreadsheets). Year 12 s01 assumes relative frequency as an estimate.'),
    'math-a11-s11': dict(
        lessons=[('probability-and-data/lesson15.sa.html', ['we-1', 'we-3']),
                 ('probability-and-data/lesson07.sa.html', [])],
        entry=[E('math-a11-s10', 'Frequency, relative frequency and cumulative columns.')],
        prior=['math-a11-s10'],
        start='s10\'s finished spinner table, turned into bars.',
        stop=('Graph frequency, relative frequency and cumulative frequency histograms and polygons of datasets with a '
              'spreadsheet or graphing application, for single values and for grouped data; identify the mode (tallest '
              'bar or modal class) and the median (the value at half the total on the cumulative graph or column) from '
              'the graphs and from tables. Box plots, quartiles and frequency density are not in this boundary.'),
        next='math-a11-p01',
        rec=('ci10643b1a is partial on the site: lesson07 teaches frequency density and box plots (not 2024 Year 11), so only '
             'its frequency polygon and ogive cards are context. Log S11-P03 to S11-P05. After s11 the course moves to the '
             'optional practice p01 to p03, then Year 12 (math-a12-d01); Year 12 s01 and s04 use these histograms.')),
}

entries = []
for vid, d in DATA.items():
    v = videos[vid]
    acts = []
    for cid in v['syllabusActionIds']:
        p, url = points[cid]
        acts.append({'id': cid, 'text': p['text'], 'sourceHtml': p['sourceHtml'], 'sourceUrl': url,
                     'siteCoverage': p['status'], 'siteGap': p['gapOrNote']})
    ls = [lesson(path, ex) for path, ex in d['lessons']]
    entries.append({
        'id': vid, 'playlistOrder': v['playlistOrder'], 'mainLearnerQuestion': v['mainLearnerQuestion'],
        'syllabusActionIds': v['syllabusActionIds'], 'syllabusActions': acts,
        'sourceLesson': ls[0], 'sourceLessons': ls,
        'entryKnowledge': d['entry'], 'prerequisiteVideos': d['prior'],
        'startBoundary': d['start'], 'stopBoundary': d['stop'], 'nextHandoff': d['next'],
        'recommendation': REC + ' ' + d['rec'] if d['rec'] != REC else REC,
        'preDesignPack': f'docs/production/claude-pm/pre-design/maths-a11/{vid}.md',
        'status': 'research-input-for-Claude-not-approved-route',
    })

doc = {
    'schemaVersion': 1,
    'date': '2026-11-17',
    'brief': 243,
    'purpose': 'Research route inputs for Claude, not a canonical route or teaching approval',
    'syllabus': 'Mathematics Advanced 11-12 (2024), Year 11',
    'identifierPolicy': 'Exact CMS codenames; official sourceHtml preserves mathematical layout',
    'officialEvidence': {'source': 'Crosswalk of the seven NSW Curriculum Year 11 focus-area pages, read 16 November 2026',
                         'year11Points': 201,
                         'crosswalk': 'docs/production/programme/syllabus/maths-advanced-2024-y11-crosswalk.json'},
    'siteSource': {'repo': REPO, 'commit': head, 'commitDate': head_date,
                   'note': ('Paths are repo paths at this commit, read from the read-only local clone '
                            'C:/Users/kygs/teaching-app-fix at the same commit (not modified). SHA256 values recomputed '
                            'from the clone and match the crosswalk inventory.')},
    'recommendations': [
        'Run g01 to g06 in outline order after the trigonometry strand, then s01 to s11. Probability needs nothing from the other strands except fractions and listing, so s01 to s11 can be designed in parallel with any strand.',
        'Joins: g01 opens on a parent graph from w15 (its join from t16 is fixed when t16 is designed); g02 to g06 each open on the previous final frame; s01 follows g06 in the playlist but starts a new topic, so its opening does not depend on g06.',
        'Shared point cid4fd3807: g04 owns the function rule after a described sequence and describing the transformations; g05 owns domain, range, intercepts, asymptotes and discontinuities of the result.',
        'Year 12 entry knowledge delivered here: g01 to g04 (translations, reflections, dilations and their order, read as y = k f(a(x + b)) + c with the inside factored first; Year 12 t01, d02, d13); s04 (sample spaces, P(A) = |A|/|S|), s05 (complement rule, Year 12 s04), s06 (the two-dice array, Year 12 s02), s09 (random variables, Year 12 s01), s10 (relative frequency, Year 12 s01) and s11 (histograms, Year 12 s01 and s04).',
        'Possible splits if drafts run long: g05 (polynomials and |x| apart from hyperbolas, exponentials and logs), s07 (counting form and Venn restriction apart from two-way tables and trees), s08 (the two proofs apart from practical problems). Possible merge: s02 with s03.',
        'Thirteen site findings are logged as S11-G01 to S11-G06 and S11-P01 to S11-P07 in section 8 of site-corrections-maths-a11.md (three of them minor); notation differences and content gaps are listed there too.',
    ],
    'part': 5,
    'covers': 'math-a11-g01 to math-a11-g06 (Graph transformations) and math-a11-s01 to math-a11-s11 (Probability and data)',
    'subjects': {'Mathematics Advanced': {'year': 11, 'entries': entries}},
}
OUT.write_text(json.dumps(doc, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print('wrote', OUT, len(entries), 'entries; clone HEAD', head)
for e in entries:
    print(e['id'], [l['sha256'][:12] for l in e['sourceLessons']])
