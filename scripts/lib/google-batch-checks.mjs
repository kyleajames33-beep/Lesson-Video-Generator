const units = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' ');
const tens = 'zero ten twenty thirty forty fifty sixty seventy eighty ninety'.split(' ');

function integerWords(n) {
  if (n < 20) return [units[n]];
  if (n < 100) return [tens[Math.floor(n / 10)], ...(n % 10 ? integerWords(n % 10) : [])];
  const large = [[1e12, 'trillion'], [1e9, 'billion'], [1e6, 'million'], [1000, 'thousand'], [100, 'hundred']];
  const [base, word] = large.find(([base]) => n >= base);
  return [...integerWords(Math.floor(n / base)), word, ...(n % base ? integerWords(n % base) : [])];
}

const numberWords = new Set([...units, ...tens, 'hundred', 'thousand', 'million', 'billion', 'trillion']);
function tokenize(text) {
  // Root, 19 Nov: a recogniser writes "$2,000" for spoken "two thousand dollars", so a $ prefix reads as a trailing "dollars".
  return (text.toLowerCase().replace(/[’‘]/g, "'").match(/-?\$?\d[\d,]*(?:\.\d+)?%?|[a-z]+(?:'[a-z]+)?/g) ?? []).flatMap(token => {
    if (!/^-?\$?\d/.test(token)) return [token];
    const [whole, decimal] = token.replace(/[,%$-]/g, '').split('.');
    return [...(token.startsWith('-') ? ['minus'] : []), ...integerWords(Number(whole)),
      ...(decimal ? ['point', ...Array.from(decimal, d => units[Number(d)])] : []),
      ...(token.endsWith('%') ? ['per', 'cent'] : []), ...(token.includes('$') ? ['dollars'] : [])];
  }).filter((word, i, arr) => word !== 'and' || !(['hundred', 'thousand', 'million', 'billion'].includes(arr[i - 1]) && numberWords.has(arr[i + 1])));
}

// Deliberately narrow recognition variants. Do not infer equivalence for other edits.
const variants = [
  [['cos'], ['cause']], [["here's"], ["he's"]], [['powers'], ['pounds']],
  [['decibels'], ['decibles']], [['lawnmower'], ['lawn', 'mower']],
  [["lawnmower's"], ['lawn', "mower's"]], [['litre'], ['liter']],
  [['litres'], ['liters']], [['metre'], ['meter']], [['metres'], ['meters']],
  [['nought'], ['naught']], [['ay'], ['a']], [['per', 'cent'], ['percent']],
  [['modelling'], ['modeling']], [['modelled'], ['modeled']],
  [['centimetres'], ['cm']], [['centimetre'], ['cm']], [['millimetres'], ['mm']], [['r', 'f'], ['rf']],
  ...['hundred','thousand','million','billion'].map(scale=>[['a',scale],['one',scale]]),
  [['twelve', 'hundred'], ['one', 'thousand', 'two', 'hundred']],
  ...Object.entries({axis:'access',axes:'access',sine:'sign',sines:'signs',sin:'sign',
    secant:'second',log:'lock',logs:'locks',ratio:'radio',annuity:'annuities',vertex:'vortex'})
    .map(([expected,heard])=>[[expected],[heard]]),
  // Punctuation (including the period in "tan.") is stripped by tokenize.
];
const begins = (input, i, words) => words.every((w, j) => input[i + j] === w);

function numericWords(tokens) {
  // Keep the number sequence, including decimal points, signs and percentage units.
  const result = [];
  const numeric = i => numberWords.has(tokens[i]);
  for (let i=0;i<tokens.length;i++) {
    const word=tokens[i];
    if (word==='nought'||word==='naught') { result.push('zero');continue; }
    if (word==='twelve'&&tokens[i+1]==='hundred') {
      result.push('one','thousand','two','hundred');i++;continue;
    }
    if (word==='a'&&['hundred','thousand','million','billion','trillion'].includes(tokens[i+1])) {
      result.push('one');continue;
    }
    if (numeric(i)||(word==='minus'&&numeric(i+1))||(word==='point'&&numeric(i-1)&&numeric(i+1))) {
      // Root, 19 Nov: mark a break when other words separated this number from the previous one.
      if (numeric(i) && result.length && result.at(-1) !== '|' && i > 0 && !numeric(i-1) && !['minus','point','a'].includes(tokens[i-1])) result.push('|');
      result.push(word);
    } else if (word==='percent'&&numeric(i-1)) result.push('per','cent');
    else if (word==='per'&&tokens[i+1]==='cent'&&numeric(i-1)) {
      result.push('per','cent');i++;
    }
  }
  return result;
}

// Root, 19 Nov: compare numbers by value, not by word sequence. Each run of number words gets its standard
// reading ("one hundred fifty two" = 152) and its grouped reading ("one fifty two" = 152, "nineteen eighty" = 1980),
// so the recogniser writing 152 for a spoken "one fifty two" is not a mismatch. Markers (point, minus, per cent) must match.
const unitVal = Object.fromEntries(units.map((w, i) => [w, i]));
const tensVal = Object.fromEntries(tens.map((w, i) => [w, i * 10]).filter(([w]) => w !== 'zero'));
const scaleVal = {hundred: 100, thousand: 1e3, million: 1e6, billion: 1e9, trillion: 1e12};
function standardValue(run) {
  let total = 0, current = 0;
  for (const w of run) {
    if (w in unitVal) current += unitVal[w];
    else if (w in tensVal) current += tensVal[w];
    else if (w === 'hundred') current = (current || 1) * 100;
    else if (w in scaleVal) { total += (current || 1) * scaleVal[w]; current = 0; }
  }
  return total + current;
}
function groupedValue(run) {
  if (run.some(w => w in scaleVal)) return null;
  // A tens word (twenty to ninety) may take one following unit (one to nine) into its group; every other word starts a group.
  const groups = [];
  let open = false;
  for (const w of run) {
    if (w in tensVal) { groups.push(tensVal[w]); open = true; }
    else if (open && unitVal[w] >= 1 && unitVal[w] <= 9) { groups[groups.length - 1] += unitVal[w]; open = false; }
    else { groups.push(unitVal[w]); open = false; }
  }
  return groups.length > 1 ? Number(groups.map(String).join('')) : null;
}
function numberRuns(words) {
  const out = []; let run = [];
  const flush = () => { if (run.length) { const v = new Set([standardValue(run)]); const g = groupedValue(run); if (g !== null) v.add(g); out.push(v); } run = []; };
  for (const w of words) {
    if (w in unitVal || w in tensVal || w in scaleVal) run.push(w);
    else { flush(); out.push(w); }
  }
  flush();
  return out;
}
function numbersMatchByValue(expected, heard) {
  const a = numberRuns(expected), b = numberRuns(heard);
  if (a.length !== b.length) return false;
  return a.every((x, i) => typeof x === 'string' ? x === b[i] : typeof b[i] !== 'string' && [...x].some(v => b[i].has(v)));
}

export function compareGoogleWords(expected, heard) {
  const want=tokenize(expected),got=tokenize(heard),allowed=[],mismatches=[];
  const costs=Array.from({length:want.length+1},()=>new Uint32Array(got.length+1));
  const moves=(i,j)=>{
    const options=[];
    if(i<want.length&&j<got.length) {
      if(want[i]===got[j])options.push([1,1,0,false]);
      for(const [a,b] of variants)if(begins(want,i,a)&&begins(got,j,b))options.push([a.length,b.length,0,true]);
      options.push([1,1,1,false]);
    }
    if(i<want.length)options.push([1,0,1,false]);
    if(j<got.length)options.push([0,1,1,false]);
    return options;
  };
  for(let i=want.length;i>=0;i--)for(let j=got.length;j>=0;j--){
    if(i===want.length&&j===got.length)continue;
    costs[i][j]=Math.min(...moves(i,j).map(([a,b,cost])=>cost+costs[i+a][j+b]));
  }
  let i=0,j=0;
  while(i<want.length||j<got.length){
    const [a,b,cost,variant]=moves(i,j).find(([x,y,c])=>c+costs[i+x][j+y]===costs[i][j]);
    const detail={expected:want.slice(i,i+a).join(' '),recognised:got.slice(j,j+b).join(' '),wordIndex:i};
    if(variant)allowed.push(detail);
    if(cost)mismatches.push(detail);
    i+=a;j+=b;
  }
  const expectedNumbers=numericWords(want),heardNumbers=numericWords(got);
  const numbersMatch=numbersMatchByValue(expectedNumbers,heardNumbers);
  // Root, 19 Nov: the recogniser sometimes hears this voice's "here" as "year" or "hear". The pause line is still
  // counted as spoken; the word difference stays in the mismatches, so the take goes to the review list.
  const pauseCount=tokens=>tokens.filter((_,i)=>['pause',"paul's",'pauls','paws','pores','pours'].includes(tokens[i])&&['here','year','hear'].includes(tokens[i+1])&&tokens[i+2]==='to'&&tokens[i+3]==='answer').length;
  const pausePresent=pauseCount(got)>=pauseCount(want);
  return {pass:!mismatches.length&&numbersMatch&&pausePresent,allowed,mismatches,numbersMatch,pausePresent,
    ...(!numbersMatch?{expectedNumbers,heardNumbers}:{})};
}

export const riskyGoogleScene = text => text.length > 900 || /\bPause here to answer\./i.test(text);
export function planGoogleBatches(scenes, missing) {
  const groups = [];
  let block = [];
  const flush = () => { if (block.length) groups.push(block); block = []; };
  for (const scene of scenes) {
    if (!missing.has(scene.id)) { flush(); continue; }
    if (scene.forceSingle || riskyGoogleScene(scene.text)) { flush(); groups.push([scene]); continue; }
    block.push(scene);
    if (block.length === 3) flush();
  }
  flush();
  return groups;
}
