import type {Grant} from './grants';

const base = {checked:'2026-10-04',deadline:'',audience:'faculty' as const};

export const additionalGrants:Grant[] = [
  {
    ...base,id:'amazon-agentic-ai',title:'AWS Agentic AI',agency:'Amazon',code:'Research Awards · Fall 2026',support:'Research award',
    summary:'Research on reliable agents, memory and retrieval, verification, and AI for science.',
    tags:['Machine learning','LLM alignment','RAG','AI evaluation'],collections:['industry','ml','compute'],
    deadline:'2026-11-04T23:59',deadlineTimezone:'America/Los_Angeles',deadlineType:'fixed',
    deadlineNote:'November 4, 2026, 11:59 pm Pacific Time. Decisions expected February 2027.',
    url:'https://www.amazon.science/research-awards/call-for-proposals/aws-agentic-ai-call-for-proposals-fall-2026',
    relatedSources:[{label:'Amazon Research Awards program rules',url:'https://www.amazon.science/research-awards/program-rules'}],
    amount:'Funds no more than US$70,000 on average; AWS credits no more than US$50,000 on average',
    eligibility:'Full-time faculty at accredited institutions or permanent researchers at eligible nonprofit organizations; full program and conflict rules apply. One proposal per PI per call period across Amazon tracks. Gifts carry no administrative overhead.',
    reason:'Matches RAG, LLM auditing, conformal prediction, uncertainty quantification, and scientific ML when framed around agent reliability or evaluation.',
    nextStep:'Choose this OR the multilingual evaluation track for Fall 2026. Build a focused agent-reliability proposal and confirm GSU gift and overhead requirements.'
  },
  {
    ...base,id:'nvidia-academic',title:'NVIDIA Academic Grant Program',agency:'NVIDIA',code:'AI training & model development',support:'Compute',audience:'both',studentAccess:'check',
    summary:'GPU resources for research using NVIDIA models and software. The program is currently not accepting new applications.',
    tags:['Machine learning','GPU','LLM alignment','AI evaluation'],collections:['industry','compute','ml','students'],
    deadlineType:'pending',deadlineNote:'The official program page states that new applications are not being accepted. Await a reopening announcement; retained call PDFs do not establish an open cycle.',
    url:'https://www.nvidia.com/en-us/industries/higher-education-research/academic-grant-program/',
    relatedSources:[{label:'AI training & model development call (PDF)',url:'https://dam-cdn.nvd.orangelogic.com/AssetLink/hx500218c2rk5ipilbh7773ulte46akp.pdf'}],
    amount:'Listed AI training track: up to 30,000 H100 80GB GPU hours; next-cycle terms unconfirmed',
    eligibility:'Full-time faculty at accredited PhD-granting institutions worldwide. Students and postdocs participate through a faculty PI. Extensive NVIDIA software and/or model use is required. Recheck all allocation and submission limits when intake reopens.',
    reason:'A compute route for statistical machine learning, model reliability benchmarks, LLM auditing, and data-efficient training.',
    nextStep:'Watch for reopening and prepare a GPU-hour budget and NVIDIA software plan. For current work, compare NAIRR, ACCESS and AMD instead of assuming this call is open.'
  },
  {
    ...base,id:'google-trc',title:'TPU Research Cloud',agency:'Google',code:'TRC',support:'Compute',audience:'both',studentAccess:'check',
    summary:'Temporary Cloud TPU access for approved research projects.',
    tags:['Machine learning','Scientific computing','Cloud'],collections:['industry','compute','ml','students'],
    deadlineType:'rolling',deadlineNote:'Expressions of interest are accepted; invitations are issued on a rolling basis.',
    url:'https://sites.research.google/trc/faq/',amount:'Approved TPU quota at no charge; VM, storage, and other cloud charges are separate',
    eligibility:'Anyone may express interest; approval, availability, and terms apply. Recipients share research outcomes and feedback. This is TPU access, not unrestricted cloud credits.',
    reason:'Suitable for scalable statistical learning and deep-learning experiments that can run efficiently on TPUs.',
    nextStep:'Check TPU compatibility, estimate training needs and non-TPU costs, and describe the research outputs you plan to share.'
  },
  {
    ...base,id:'anthropic-researcher',title:'External Researcher Access Program',agency:'Anthropic',code:'AI safety & alignment',support:'Compute',audience:'both',studentAccess:'check',
    summary:'Claude API credits for high-priority AI safety and alignment research.',
    tags:['LLM alignment','AI evaluation','Uncertainty quantification'],collections:['industry','compute','ml','students'],
    deadlineType:'rolling',deadlineNote:'Applications are reviewed on the first Monday of each month; this is a review schedule, not a guaranteed award date.',
    url:'https://support.claude.com/en/articles/9125743-what-is-the-external-researcher-access-program',
    amount:'Normally US$1,000 in API credits; larger requests may be considered',
    eligibility:'The proposal must address a relevant AI safety or alignment question. Standard model access, supported-region rules, and usage policies apply. Credits are for the API, not the Claude web app or prerelease models.',
    reason:'A focused fit for LLM alignment, auditing, calibration, conformal prediction, and safety evaluations.',
    nextStep:'State the safety hypothesis, evaluation method, and API budget. Teams should coordinate their request around a shared Console organization.'
  },
  {
    ...base,id:'anthropic-science',title:'AI for Science Program',agency:'Anthropic',code:'Life sciences research',support:'Compute',
    summary:'Claude API support for projects that accelerate scientific discovery, with a life-sciences emphasis.',
    tags:['Biomedical','Drug discovery','Neuroscience','Machine learning'],collections:['industry','compute','ml'],
    deadlineType:'rolling',deadlineNote:'The linked application describes monthly reviews. No fixed closing date or award amount is published here.',
    url:'https://www.anthropic.com/news/ai-for-science-program',amount:'API credits; amount determined by the program',
    eligibility:'Describe a substantive scientific problem and how AI advances it. Research qualifications, scientific impact, account requirements, and program terms must be checked in the application.',
    reason:'Relevant to your biomedical, neuroscience, and drug-discovery work when the proposal targets a concrete scientific outcome.',
    nextStep:'Develop a life-sciences use case with domain collaborators, a measurable scientific outcome, and an estimated API workload.'
  },
  {
    ...base,id:'azure-research',title:'Azure Research Credits',agency:'Microsoft',code:'Academic research inquiry',support:'Compute',
    summary:'An academic contact route for cloud research workloads, tools, and proofs of concept.',
    tags:['Machine learning','Cloud','Research software'],collections:['industry','compute','ml'],
    deadlineType:'unknown',deadlineNote:'Contact-based inquiry; no current competitive deadline or guaranteed award is listed.',
    url:'https://www.microsoft.com/en-us/azure-academic-research/default.aspx',amount:'Credit amount and services require confirmation',
    eligibility:'Institutional and project eligibility must be confirmed with Microsoft. Credits, accelerator quotas, and permitted workloads depend on the offer.',
    reason:'An additional route for statistical machine learning benchmarks and scalable research tools.',
    nextStep:'Coordinate with GSU research IT or its Microsoft academic contact; request credit terms, GPU availability, expiration dates, and a cost estimate.'
  },
  {
    ...base,id:'taiwan-nstc-short-visit',title:'Short-term Visiting Experts',agency:'NSTC',code:'Taiwan · host-sponsored visit',support:'Research visit',taiwanRoute:'host',
    summary:'A Taiwan institution invites an overseas scholar for research exchange, lectures, or technical consultation.',
    tags:['Statistics','Machine learning','Taiwan','Research collaboration'],collections:['taiwan'],
    deadlineType:'rolling',deadlineNote:'The Taiwan host applies at least six weeks before the funded visit. Normally up to seven days, exceptionally up to one month.',
    url:'https://law.nstc.gov.tw/LawContent.aspx?id=FL036542',amount:'Travel and daily honorarium support, subject to official caps and approval',
    eligibility:'An eligible Taiwan institution submits the application. Overseas experts may be invited; a Taiwan appointment is not a prerequisite for the visitor. Physical visits require at least two public lectures under the rules.',
    reason:'A practical route to connect your statistics and statistical machine learning research with Taiwan collaborators.',
    nextStep:'Find a Taiwan host in mathematics, statistics, or AI; agree on visit dates and two public talks, then have the host apply at least six weeks before the visit.'
  },
  {
    ...base,id:'taiwan-nstc-visiting-faculty',title:'Visiting Science & Technology Personnel',agency:'NSTC',code:'Visiting assistant professor route',support:'Research visit',taiwanRoute:'host',
    summary:'A Taiwan institution hosts an overseas researcher for a sustained research or teaching appointment.',
    tags:['Statistics','Machine learning','Taiwan','Research collaboration'],collections:['taiwan'],
    deadlineType:'unknown',deadlineNote:'Coordinate the host application and review schedule. Visits are normally 3–12 months; no fixed submission deadline is verified here.',
    url:'https://law.nstc.gov.tw/LawContent.aspx?id=FL031557',amount:'Approved research / teaching remuneration and round-trip economy airfare',
    eligibility:'An eligible Taiwan host applies. Visiting assistant professors need appropriate academic credentials and research publications; overseas personnel generally need at least one continuous year at an overseas institution. A funded Taiwan appointment and its duties are required during the visit.',
    reason:'A longer collaboration route for functional data, inference, experimental design, or statistical machine learning. Your current GSU role is relevant, but the host must verify all criteria.',
    nextStep:'Discuss a 3–12 month host appointment and verify the overseas-employment rule. Arrange any needed GSU leave before committing to a visit.'
  },
  {
    ...base,id:'taiwan-ncts-pairs',title:'Research in Pairs',agency:'NCTS',code:'Taiwan · mathematical sciences',support:'Research visit',taiwanRoute:'visit',
    summary:'Two to four mathematicians collaborate in residence at NCTS for two to eight weeks.',
    tags:['Statistics','Scientific computing','Probability','Taiwan'],collections:['taiwan'],
    deadlineType:'unknown',deadlineNote:'Calls are announced in April, July, and November. Exact next deadline unconfirmed; applying at least three months before the visit is recommended.',
    url:'https://ncts.ntu.edu.tw/upload/downloadfs9260109415316843.pdf',
    relatedSources:[{label:'NCTS application routes',url:'https://ncts.ntu.edu.tw/apply.php'}],
    amount:'Visiting financial support; round-trip airfare is excluded',
    eligibility:'A group of 2–4 researchers, not all from the same institution, proposes a 2–8 week research visit. Probability, analysis, scientific computing, and interdisciplinary mathematics are among the priority areas. A prior Taiwan appointment is not specified.',
    reason:'A focused collaboration opportunity for mathematical statistics, dependence modeling, or the foundations of statistical machine learning.',
    nextStep:'Form a cross-institution group and prepare a research plan of at most ten pages, participant CVs, and a cover letter; confirm the current call and visit budget.'
  },
  {
    ...base,id:'taiwan-nchc-compute',title:'NCHC / TWCC Research Computing',agency:'NCHC',code:'Taiwan · account and project inquiry',support:'Compute',taiwanRoute:'account',
    summary:'Taiwan research-computing services with project, account, and pricing requirements.',
    tags:['Machine learning','Scientific computing','GPU','Taiwan'],collections:['taiwan','compute','ml'],
    deadlineType:'unknown',deadlineNote:'Service-access inquiry, not a verified open grant. Confirm the current account and project route with NCHC.',
    url:'https://iservice.nchc.org.tw/nchc_service/nchc_service_qa.php?target=57',
    amount:'Paid or project-subsidized access, subject to approval; no free allocation assumed',
    eligibility:'ROC citizenship alone does not establish academic pricing or a free allocation. The new-researcher free-quota program is suspended. Overseas access requires the approved foreign-IP process; account and project eligibility need confirmation.',
    reason:'A possible compute route with Taiwan collaborators for simulations and statistical machine learning, after comparing pricing and access with GSU and US resources.',
    nextStep:'Ask NCHC whether a GSU researcher or a Taiwan collaborator can register the project, and confirm resource prices, project eligibility, and overseas access.'
  }
];
