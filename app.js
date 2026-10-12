(() => {
  'use strict';

  const translations = {
    'duvodio — business simulation': 'duvodio · business simulation',
    'Pochopit': 'Understand',
    'Simulovat': 'Simulate',
    'Proč ne AI?': 'Why not just AI?',
    'Hodnota': 'Value',
    'Vyzkoušet demo ↗': 'Try the demo ↗',
    'Vyzkoušet živé demo ↗': 'Try the live demo ↗',
    'Kontaktovat nás': 'Get in touch',
    'Business simulation & decision intelligence': 'Business simulation & decision intelligence',
    'Pochopte svůj business.': 'Understand your business.',
    'Simulujte jeho budoucnost.': 'Simulate its future.',
    'Duvodio vám pomůže pochopit, jak se váš business skutečně\n             chová — a simulovat, co se stane, když něco změníte.': 'Duvodio helps you understand how your business actually behaves — and simulate what might happen when you change something.',
    'Prozkoumat simulaci ↓': 'Explore the simulation ↓',
    'Z vašich skutečných dat vytváříme model, se kterým lze experimentovat.': 'We build a model from your business data that you can experiment with.',
    'simulace': 'simulation',
    'Co když změníme počet leadů z vybraného zdroje?': 'What if we change the number of leads from a selected source?',
    'Změna počtu leadů:': 'Change in leads:',
    'Ilustrativní scénář · výchozí hodnota': 'Illustrative scenario · baseline',
    'Výchozí počet kontraktů': 'Baseline contracts',
    'Modelový výsledek': 'Illustrative result',
    'Ilustrativní změna výsledku': 'Illustrative change in outcome',
    'Pouze ukázkový výpočet, nikoli výstup predikčního modelu Duvodia.': 'Example calculation only — not an output from Duvodio’s forecasting model.',
    'Nejdřív musíte pochopit,': 'First, you need to understand',
    'jak váš business funguje.': 'how your business works.',
    'Čísla sama o sobě nestačí. Důležitý je vztah mezi vstupy,\n             jednotlivými kroky procesu, časem a výsledkem.': 'Numbers alone are not enough. What matters is how inputs, process stages, timing and outcomes relate to each other.',
    'Co se skutečně děje?': 'What is actually happening?',
    'Duvodio pracuje s historickým vývojem vašeho businessu,\n               ne s obecným benchmarkem.': 'Duvodio works with your business history, not a generic benchmark.',
    'Jak spolu věci souvisí?': 'How are things connected?',
    'Sleduje průchod funnelu, konverze, rychlost a změny\n               v jednotlivých částech systému.': 'It tracks funnel progression, conversion, timing and changes across the system.',
    'Co by se mělo stát?': 'What should happen?',
    'Z dosavadního chování vzniká očekávání budoucího výsledku.': 'Past behaviour provides a basis for expectations about future outcomes.',
    'Co se změnilo?': 'What has changed?',
    'Když realita uteče od očekávání, Duvodio hledá,\n               kde a jak změna vznikla.': 'When reality diverges from expectations, Duvodio helps identify where and how the change emerged.',
    'Od popisu k rozhodnutí': 'From description to decision',
    'Většina analytiky vám řekne,': 'Most analytics tells you',
    'co se stalo.': 'what happened.',
    'Duvodio jde o krok dál.': 'Duvodio goes one step further.',
    'Když pochopíte, jak se váš business chová,\n             můžete měnit jeho předpoklady a sledovat,\n             jaký dopad to může mít na budoucí výsledek.': 'Once you understand how your business behaves, you can change assumptions and explore their potential impact on future outcomes.',
    'Co kdybychom něco změnili?': 'What if we changed something?',
    'Tady začíná nejzajímavější část Duvodia. Místo dalšího reportu můžete experimentovat s budoucností.\n            Níže uvedené scénáře jsou ilustrativní příklady, nikoli vypočtené výsledky vašeho modelu.': 'This is where Duvodio gets interesting. Instead of another report, you can experiment with the future. The scenarios below are illustrative examples, not calculated outputs from your model.',
    'Změňte předpoklad.': 'Change an assumption.',
    'Vyberte část businessu, kterou chcete změnit,\n               a podívejte se, jak se změna může přenést\n               do výsledku v čase.': 'Choose a business driver to change and explore how its impact could flow through to outcomes over time.',
    'Více vstupů do funnelu': 'More inputs into the funnel',
    'Pokles výkonu mezi fázemi': 'Lower conversion between stages',
    'Rychlejší průchod funnelu': 'Faster funnel progression',
    'Simulace rizikového scénáře': 'Risk scenario illustration',
    'Příklad': 'Example',
    'možný dopad': 'potential impact',
    'kontraktů': 'contracts',
    'kontraktů v období': 'contracts in period',
    'Proč nestačí hodit data do AI?': 'Why not just put your data into AI?',
    'Protože odpověď není totéž jako model businessu.': 'Because an answer is not the same as a model of your business.',
    'Obecná AI': 'General-purpose AI',
    'Umí pracovat s vašimi daty.': 'It can work with your data.',
    'Dokáže najít vzory, shrnout výsledky, vysvětlit\n               čísla nebo navrhnout hypotézu.': 'It can find patterns, summarize results, explain numbers or suggest a hypothesis.',
    '„Co vidíte v datech?“': '“What do you see in the data?”',
    '„Konverze tohoto zdroje klesla a počet leadů se změnil.“': '“Conversion for this source fell and lead volume changed.”',
    'Buduje model toho, jak se váš business chová.': 'It models how your business behaves.',
    'Pracuje s časem, návazností funnelu, historickým\n               chováním, očekáváním a nejistotou budoucího výsledku.': 'It accounts for timing, funnel dependencies, historical behaviour, expectations and uncertainty in future outcomes.',
    '„Co když to změníme?“': '“What if we change it?”',
    '„Tato změna má očekávaný dopad X, projeví se za Y\n               a realistický rozsah je Z.“': '“This change has an estimated impact, a time lag and a plausible range of outcomes.”',
    'Z dat vzniká prostor pro experiment.': 'Data create room for experimentation.',
    'Duvodio propojuje pochopení současnosti\n             se simulací budoucnosti.': 'Duvodio connects understanding the present with exploring the future.',
    'Data': 'Data',
    'co se stalo': 'what happened',
    'Model': 'Model',
    'jak business funguje': 'how the business works',
    'Simulace': 'Simulation',
    'co když něco změníme': 'what if we change something',
    'Rozhodujte se dřív,': 'Make decisions before',
    'než změnu provedete.': 'you make the change.',
    'Duvodio vám nedává jistotu budoucnosti.\n             Dává vám strukturovanější způsob, jak o ní přemýšlet.': 'Duvodio cannot guarantee the future. It gives you a more structured way to reason about it.',
    'Pochopíte svůj business': 'Understand your business',
    'Uvidíte, co se může stát': 'Explore what could happen',
    'Porovnáte scénáře': 'Compare scenarios',
    'Rozhodnete se s větším kontextem': 'Make decisions with more context',
    'Pochopte svůj business.': 'Understand your business.',
    'Simulujte svůj business dřív,': 'Simulate your business before',
    'než změníte realitu.': 'you change reality.',
    'Přestaňte se jen dívat na to, co se stalo.\n             Zjistěte, co se může stát, když změníte\n             některý z klíčových předpokladů.': 'Go beyond looking at what happened. Explore what could happen when you change a key assumption.',
    '© 2026 duvodio · Pochopte svůj business. Simulujte jeho budoucnost.': '© 2026 Duvodio · Understand your business. Simulate its future.'
  };

  // Translate individual text nodes so markup, layout and controls remain intact.
  function translateTextNodes(root, language) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (parent && ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (language === 'cs') {
        if (node.__duvodioOriginal !== undefined) node.nodeValue = node.__duvodioOriginal;
        return;
      }
      if (node.__duvodioOriginal === undefined) node.__duvodioOriginal = node.nodeValue;
      const original = node.__duvodioOriginal;
      const trimmed = original.trim();
      const replacement = translations[trimmed];
      if (replacement) {
        const leading = original.match(/^\s*/)[0];
        const trailing = original.match(/\s*$/)[0];
        node.nodeValue = leading + replacement + trailing;
      }
    });
  }

  const langButtons = [...document.querySelectorAll('[data-lang]')];
  function setLanguage(language) {
    translateTextNodes(document.body, language);
    document.documentElement.lang = language;
    document.title = language === 'en'
      ? 'Duvodio — Understand your business. Simulate its future.'
      : 'Duvodio — Pochopte svůj business. Simulujte jeho budoucnost.';
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = language === 'en'
      ? 'Duvodio helps businesses understand how they behave and explore the impact of changes before making them in the real world.'
      : 'Duvodio pomáhá firmám pochopit, jak se jejich business chová, a simulovat dopad změn dříve, než je provedou v realitě.';
    langButtons.forEach(button => {
      const active = button.dataset.lang === language;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    updateSimulation(language);
  }
  langButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));

  const slider = document.getElementById('lead-change');
  const baseline = 1006;
  // Illustrative assumption only: a 50% lead increase maps to an 8% outcome increase.
  // This is intentionally not represented as Duvodio's real predictive model.
  function updateSimulation(language = document.documentElement.lang) {
    if (!slider) return;
    const change = Number(slider.value);
    const impactPct = change * 0.16;
    const result = Math.round(baseline * (1 + impactPct / 100));
    const delta = result - baseline;
    const fmt = value => new Intl.NumberFormat(language === 'en' ? 'en-US' : 'cs-CZ', { maximumFractionDigits: 0 }).format(value);
    const signed = value => `${value > 0 ? '+' : ''}${fmt(value)}`;
    const changeLabel = document.getElementById('lead-change-value');
    const baselineEl = document.getElementById('baseline-contracts');
    const resultEl = document.getElementById('simulated-contracts');
    const impactEl = document.getElementById('impact-value');
    if (changeLabel) changeLabel.textContent = `${change > 0 ? '+' : ''}${change} %`;
    if (baselineEl) baselineEl.textContent = fmt(baseline);
    if (resultEl) resultEl.textContent = fmt(result);
    if (impactEl) {
      impactEl.textContent = language === 'en'
        ? `${signed(delta)} contracts (${signed(Number(impactPct.toFixed(1)))}%)`
        : `${signed(delta)} kontraktů (${signed(Number(impactPct.toFixed(1)))} %)`;
    }
  }
  if (slider) slider.addEventListener('input', () => updateSimulation());

  // Add contact CTA where the original page already had a final demo CTA.
  document.querySelectorAll('[data-demo-link]').forEach(link => {
    link.addEventListener('click', () => {
      // The demo is hosted separately; open it in a new tab as declared in the link.
    });
  });

  setLanguage('cs');
})();
