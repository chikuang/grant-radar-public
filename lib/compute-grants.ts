import type {Grant} from './grants';

const base = {checked:'2026-10-04',deadline:'',audience:'faculty' as const,support:'Compute' as const};
const nairrFaq = {label:'NAIRR eligibility and review FAQ',url:'https://nairrpilot.org/help/faq'};
const nairrCatalog = {label:'Live NAIRR resource catalog',url:'https://submit-nairr.xras.org/resources'};

export const computeGrants:Grant[] = [
  {
    ...base,id:'nairr-startup',title:'NAIRR Start-Up Project',agency:'NAIRR',code:'Three-month pilot allocation',audience:'both',studentAccess:'check',
    summary:'A smaller allocation to test an AI workflow and measure compute needs before a full research request. No company formation is needed.',
    tags:['Machine learning','GPU','AI evaluation','Scientific computing'],collections:['nairr','compute','ml','students'],
    deadlineType:'rolling',deadlineNote:'Intake depends on resource capacity. Three-month awards; be ready to start within two weeks of award. The page gives differing 2–3 week review estimates.',
    url:'https://nairrpilot.org/opportunities/startup-project',relatedSources:[nairrFaq,nairrCatalog],
    amount:'Up to 2,000 GPU-hours on listed systems; other systems use different allocation units',
    eligibility:'US-based researchers at US institutions, including GSU. Graduate students need an advisor support letter. Use institutional email. Provider-specific rules apply; open, publishable results and public project metadata are expected.',
    reason:'A practical first step for statistical ML simulations, conformal prediction benchmarks, and LLM evaluation before requesting a larger allocation.',
    nextStep:'Use your GSU email and ACCESS ID, select one suitable resource, and prepare a three-month pilot with a GPU-hour estimate. Check current capacity before submitting.'
  },
  {
    ...base,id:'nairr-research',title:'NAIRR Research Resources',agency:'NAIRR',code:'Research allocation · monthly review',audience:'both',studentAccess:'check',
    summary:'AI computing, cloud, model and platform access from public and industry partners for a full research project.',
    tags:['Machine learning','LLM alignment','Uncertainty quantification','GPU'],collections:['nairr','compute','industry','ml','students'],
    deadlineType:'rolling',deadlineNote:'Monthly review; submit by the 15th for a review cycle, not a permanent closing date. FAQ allows up to three months for decisions, longer than the call-page estimate. Awards run 12 months.',
    url:'https://nairrpilot.org/opportunities/allocations',relatedSources:[nairrFaq,nairrCatalog,{label:'Proposal preparation instructions',url:'https://nairrpilot.org/nairr-pilot-proposal-instructions'}],
    amount:'Justified resource allocation; no universal cap. Provider capacity determines awards; no cash grant.',
    eligibility:'US-based institutional researchers and educators; graduate PIs need advisor support. GSU affiliation provides a relevant route, subject to individual provider rules. Institutional email, open results and public project metadata are required.',
    reason:'Strong fit for reliable AI, statistical learning, AI-enabled biomedical discovery, and simulation-based methods.',
    nextStep:'Prepare the three-page research proposal, compute/storage justification and team qualifications. Select current resources in the live catalog; existing peer-reviewed funding is helpful but not mandatory.'
  },
  {
    ...base,id:'nairr-classroom',title:'NAIRR Classroom Resources',agency:'NAIRR',code:'AI teaching and student computing',audience:'both',studentAccess:'check',
    summary:'Instructor-requested computing for AI-related courses, independent study, workshops and course development.',
    tags:['Machine learning','Teaching','GPU','Graduate'],collections:['nairr','compute','ml','students'],
    deadlineType:'rolling',deadlineNote:'Ongoing review; the FAQ gives a typical decision time of about one month. Apply ahead of the course and confirm provider availability.',
    url:'https://nairrpilot.org/opportunities/education-call',relatedSources:[nairrFaq,nairrCatalog],
    amount:'Course-specific compute allocation on participating classroom resources',
    eligibility:'US-based instructors teaching US-based students in AI-related courses or training. Any discipline may qualify. Non-US-based participants are excluded; individual resource restrictions also apply. Students benefit through the instructor request.',
    reason:'Suitable for your statistical ML courses, reproducible computing assignments and supervised student projects.',
    nextStep:'Prepare a course description of at most three pages and lead CV. Specify enrollment, dates, per-student compute, preferred and alternate resource, and instructor/TA technical support.'
  },
  {
    ...base,id:'nairr-deep-partnerships',title:'NAIRR Deep Partnerships',agency:'NAIRR',code:'Partner-specific research collaborations',
    summary:'Collaborative research with resource providers using their contributed AI infrastructure and expertise.',
    tags:['Machine learning','Research collaboration','GPU','AI evaluation'],collections:['nairr','compute','industry','ml'],
    deadlineType:'unknown',deadlineNote:'Each partner has its own submission window. No single open deadline is confirmed; the portal also links an upcoming LCCF Horizon partnership.',
    url:'https://nairrpilot.org/opportunities/deep-partnerships',relatedSources:[nairrCatalog],
    amount:'Partner-defined resources and collaboration; project duration at most 12 months',
    eligibility:'US-based researchers at US institutions, with additional partner requirements. Use institutional email; open results, public project metadata and progress reporting are expected.',
    reason:'Worth monitoring for close collaboration on reliable AI, model evaluation, or scientific ML requiring provider expertise.',
    nextStep:'Check the individual partner call before drafting. Identify mutual research goals and confirm a current submission window, resource availability and collaboration terms.'
  },
  {
    ...base,id:'openai-researcher',title:'OpenAI Researcher Access Program',agency:'OpenAI',code:'API research credits',audience:'both',studentAccess:'check',
    summary:'API credits for research on responsible AI, alignment, fairness, robustness and societal impacts.',
    tags:['LLM alignment','AI evaluation','Uncertainty quantification','Machine learning'],collections:['industry','compute','ml','students'],
    deadlineType:'rolling',deadlineNote:'Apply year-round. Reviews occur in March, June, September and December; these are review months, not confirmed closing dates.',
    url:'https://grants.openai.com/prog/openai_researcher_access_program/',
    relatedSources:[{label:'Eligibility and timing FAQ',url:'https://help.openai.com/en/articles/10139500-researcher-access-program-faq'}],
    amount:'Up to US$1,000 in API credits, valid for 12 months',
    eligibility:'Active affiliation with an academic or research institution, or nonprofit research organization, and residence in an API-supported country. Research priorities and usage/publication policies apply. This is API support, not a ChatGPT subscription.',
    reason:'A focused fit for LLM auditing, uncertainty calibration, conformal evaluation and robustness studies.',
    nextStep:'Prepare the research question, experimental design, institutional affiliation and a token-based API budget. Use the quarterly review timetable to plan the start date.'
  },
  {
    ...base,id:'cohere-catalyst',title:'Cohere Labs Catalyst Grants',agency:'Cohere',code:'Open science and public-benefit API credits',audience:'both',studentAccess:'check',
    summary:'Cohere model access for open research, retrieval, model safety, multilingual evaluation and public benefit.',
    tags:['RAG','LLM alignment','AI evaluation','Machine learning'],collections:['industry','compute','ml','students'],
    deadlineType:'rolling',deadlineNote:'Official status: open. Applications are considered on a rolling basis.',
    url:'https://cohere.com/research/grants',amount:'API credits; no standard award amount published',
    eligibility:'Academic partners and public-impact organizations with open-science or public-benefit projects. AI safety findings require immediate vulnerability disclosure and sharing outputs at least four weeks before publication. Check the current terms.',
    reason:'Especially relevant to RAG reliability, retrieval accuracy, hallucination measurement, values alignment and biomedical language applications.',
    nextStep:'Describe the public research output and API workload. Confirm the publication conditions with your collaborators and GSU before accepting an award.'
  },
  {
    ...base,id:'huggingface-community',title:'Hugging Face Community GPU Grant',agency:'Hugging Face',code:'GPU hosting for a Space',audience:'both',studentAccess:'check',
    summary:'Apply for help covering GPU hardware costs for an innovative Hugging Face Space.',
    tags:['Research software','AI evaluation','Machine learning','GPU'],collections:['industry','compute','ml','students'],
    deadlineType:'unknown',deadlineNote:'Apply from Space hardware settings. No fixed closing date or review timetable is published in the documentation.',
    url:'https://huggingface.co/docs/hub/spaces-gpus',amount:'Approved GPU hosting for a specific Space; amount and duration depend on approval',
    eligibility:'A working Space and a compelling use case are needed. This is support for hosted demos, not an unrestricted training-cluster allocation; selection is discretionary.',
    reason:'Useful for sharing an interactive conformal prediction, LLM auditing or statistical ML demo with students and research users.',
    nextStep:'Create a usable public research demo with documentation, then use the community grant request in its hardware settings and explain the GPU requirement.'
  },
  {
    ...base,id:'amd-ai-hpc',title:'AMD AI & HPC Cluster',agency:'AMD',code:'Quarterly node-hour allocations',
    summary:'Remote EPYC CPU and Instinct GPU resources for open AI and high-performance computing research.',
    tags:['Machine learning','Scientific computing','GPU','Research software'],collections:['industry','compute','ml'],
    deadlineType:'rolling',deadlineNote:'Quarterly batches end February 15, May 15, August 15 and November 15. Current published schedule: Aug 16–Nov 15 requests, Dec 15 decisions, Jan 1 starts. Confirm cutoff time in the member portal.',
    url:'https://www.amd.com/en/corporate/university-program/ai-hpc-cluster.html',
    amount:'Competitive node-hour allocation with access for up to one year',
    eligibility:'Academic research and education teams worldwide; enroll in the AMD University Program. Proposals must fit AMD technology and innovative, impactful open-source research or education. Resource availability limits awards.',
    reason:'An alternative to NVIDIA compute for large statistical simulations, scalable learning and scientific ML that can use ROCm.',
    nextStep:'Enroll in AUP, verify ROCm/software compatibility, benchmark a small workload and justify node-hours. Confirm the quarterly cutoff rather than assuming a midnight deadline.'
  },
  {
    ...base,id:'amd-hacc',title:'AMD HACC Research Access',agency:'AMD',code:'Heterogeneous Accelerated Compute Clusters',
    summary:'Remote university-hosted clusters for research in adaptive computing and AI/HPC acceleration.',
    tags:['Scientific computing','Machine learning','GPU','Research software'],collections:['industry','compute','ml'],
    deadlineType:'unknown',deadlineNote:'Access-request route is available. No common deadline, quota or award duration is published on the program page.',
    url:'https://www.amd.com/en/corporate/university-program/aup-hacc.html',amount:'Accepted researchers receive access to participating clusters; resource terms vary',
    eligibility:'Research must fit adaptive computing, systems, tools or relevant applications. Acceptance and the selected center determine access; GSU is not itself one of the listed host centers.',
    reason:'A conditional fit for accelerating statistical algorithms or ML workloads, particularly with a systems collaborator.',
    nextStep:'Describe the acceleration problem, preferred AMD hardware and software needs. Request access and confirm the center-specific account, quota and eligibility rules.'
  },
  {
    ...base,id:'amd-donation',title:'AMD Academic Hardware & Software Donations',agency:'AMD',code:'University Program · institutional request',
    summary:'Hardware and software donations for non-commercial academic research and teaching.',
    tags:['GPU','Teaching','Machine learning','Research software'],collections:['industry','compute','ml'],
    deadlineType:'unknown',deadlineNote:'Donation requests are accepted through AUP. AMD aims to respond in 1–2 weeks; no fixed deadline is stated.',
    url:'https://www.amd.com/en/corporate/university-program/donation-program.html',amount:'Selected hardware and/or software licenses; no standard cash award',
    eligibility:'Professors or senior staff submit on behalf of their university or research institute after AUP enrollment. Donated items are only for non-commercial academic teaching/research; awards depend on availability.',
    reason:'Potential support for a local statistical ML lab or hands-on accelerated-computing coursework.',
    nextStep:'Coordinate the institutional request with GSU, identify compatible hardware/software and explain the research or teaching need. Confirm facilities and ongoing operating costs.'
  },
  {
    ...base,id:'lambda-research',title:'Lambda Research Grant',agency:'Lambda',code:'Research compute and collaboration inquiry',
    summary:'A research support route for AI projects, with a linked grant application and examples of supported evaluation and learning research.',
    tags:['Machine learning','LLM alignment','AI evaluation','GPU'],collections:['industry','compute','ml'],
    deadlineType:'unknown',deadlineNote:'Official research page links an application. Detailed intake dates, award terms and eligibility are not public on that page; confirm before planning.',
    url:'https://lambda.ai/research',relatedSources:[{label:'Official linked grant application',url:'https://form.typeform.com/to/Wn8YWMIj'}],
    amount:'Compute/research support; amount, GPU allocation and duration require confirmation',
    eligibility:'Program-specific eligibility and support terms must be confirmed in the application. A published research application link is not confirmation of an available award or guaranteed GSU eligibility.',
    reason:'Relevant published examples include interpretability benchmarks and hallucination evaluation, close to your reliable-ML interests.',
    nextStep:'Prepare a concise research plan, code or pilot results, compute budget and intended outputs; first verify current intake and award conditions.'
  },
  {
    ...base,id:'oracle-research',title:'Oracle for Research Project Award',agency:'Oracle',code:'OCI research credits',
    summary:'Cloud credits and technical consultation for impactful computational research.',
    tags:['Scientific computing','Cloud','Machine learning','Biomedical'],collections:['industry','compute','ml'],
    deadlineType:'unknown',deadlineNote:'Official application form is available; no fixed closing date or review duration is published there.',
    url:'https://go.oracle.com/research-project-award?elqCampaignId=314509',amount:'OCI credits sized to the proposal and usage requirements; no fixed award amount',
    eligibility:'Project acceptance and regional restrictions apply. Oracle assesses research impact, cloud benefit, and PI/institution experience. Institutional signatures or acceptance of cloud agreements are required before activation.',
    reason:'Another route for scalable simulations, data-intensive statistical learning and biomedical research pipelines.',
    nextStep:'Develop an OCI workload/cost estimate and impact statement; confirm GPU availability, credit expiry and GSU agreement requirements before accepting.'
  }
];
