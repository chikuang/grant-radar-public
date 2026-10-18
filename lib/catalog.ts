import type {Grant} from './grants';

// Public program facts only. Never copy an individual’s profile, research-fit notes or tracked items here.
export const publicCatalog:Grant[] = [
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "faculty",
    "support": "Grant",
    "id": "nsf-statistics",
    "title": "Statistics",
    "agency": "NSF",
    "code": "NSF 26-520",
    "summary": "Statistical theory and methods, with applications across the sciences.",
    "tags": [
      "Statistics",
      "Functional data",
      "Experimental design"
    ],
    "collections": [
      "ml"
    ],
    "deadlineType": "rolling",
    "deadlineNote": "Accepted at any time. Set a personal submission target.",
    "url": "https://www.nsf.gov/funding/opportunities/mps-mathsci-mps-mathematical-sciences-research-programs/nsf26-520/solicitation",
    "amount": "Budget depends on project scope",
    "eligibility": "US higher education institutions submit on behalf of faculty. No PI-specific or proposal-count limits listed in this solicitation. Institutional approval and proposal requirements apply.",
    "reason": "",
    "institutionCountry": "US"
  },
  {
    "checked": "2026-10-18",
    "deadline": "2027-07-28",
    "audience": "faculty",
    "support": "Grant",
    "id": "nsf-career",
    "title": "Faculty Early Career Development",
    "agency": "NSF",
    "code": "CAREER · NSF 22-586",
    "summary": "A five-year integrated research and education program.",
    "tags": [
      "Early career",
      "Research",
      "Education"
    ],
    "collections": [
      "ml"
    ],
    "deadlineType": "date",
    "deadlineNote": "July 28, 2027, 5 pm in the submitting institution’s local time. Confirm its time zone and internal deadline before tracking.",
    "url": "https://www.nsf.gov/funding/opportunities/career-faculty-early-career-development-program",
    "amount": "Minimum US$400,000 over 5 years",
    "eligibility": "Doctorate, untenured, at least 50% tenure-track assistant professor, and no prior CAREER award at the deadline. Check lifetime submission limits; one proposal per year, no co-PI. US citizenship is not required.",
    "reason": "",
    "institutionCountry": "US"
  },
  {
    "checked": "2026-10-18",
    "deadline": "2026-10-16",
    "audience": "faculty",
    "support": "Grant",
    "id": "nih-r21",
    "title": "Exploratory / Developmental Research",
    "agency": "NIH",
    "code": "Parent R21 · October 2026 round",
    "summary": "Exploratory biomedical methods addressing a defined health question.",
    "tags": [
      "Biomedical",
      "Neuroscience",
      "Machine learning"
    ],
    "collections": [
      "ml"
    ],
    "deadlineType": "date",
    "deadlineNote": "The October 16, 2026 new-application round is closed. The separately listed next new-application date is February 16, 2027. November 16, 2026 is for eligible resubmissions/revisions, not new applications.",
    "url": "https://grants.nih.gov/grants/guide/pa-files/PA-25-304.html",
    "amount": "Up to US$275,000 direct costs over 2 years",
    "eligibility": "Must fit a participating NIH institute. Clinical trials are not allowed. Confirm institute participation, registrations, and application type.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "faculty",
    "support": "Grant",
    "id": "nsf-mfai",
    "title": "Mathematical Foundations of AI",
    "agency": "NSF",
    "code": "MFAI · previous NSF 24-569",
    "summary": "Mathematical and statistical foundations for reliable AI.",
    "tags": [
      "Machine learning",
      "Uncertainty quantification",
      "Statistics"
    ],
    "collections": [
      "ml"
    ],
    "deadlineType": "pending",
    "deadlineNote": "Awaiting a new NSF publication; no upcoming deadline confirmed.",
    "url": "https://www.nsf.gov/funding/opportunities/mfai-mathematical-foundations-artificial-intelligence",
    "amount": "Awaiting new solicitation",
    "eligibility": "Recheck applicant, team, and budget conditions when a new solicitation appears.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "faculty",
    "support": "Grant",
    "id": "nsf-sch",
    "title": "Smart Health & Biomedical Research",
    "agency": "NSF / NIH",
    "code": "SCH · previous NSF 25-542",
    "summary": "Interdisciplinary AI and data science for biomedical challenges.",
    "tags": [
      "Biomedical",
      "Machine learning",
      "Neuroscience"
    ],
    "collections": [
      "ml"
    ],
    "deadlineType": "pending",
    "deadlineNote": "Awaiting a new NSF publication; no upcoming deadline confirmed.",
    "url": "https://www.nsf.gov/funding/opportunities/sch-smart-health-biomedical-research-era-artificial-intelligence",
    "amount": "Awaiting new solicitation",
    "eligibility": "Substantive health problem and interdisciplinary approach needed. Recheck the new team and PI rules.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "2026-11-04T23:59",
    "audience": "faculty",
    "support": "Research award",
    "id": "amazon-ai-evaluation",
    "title": "Multilingual & Contextual AI Evaluation",
    "agency": "Amazon",
    "code": "Research Awards · Fall 2026",
    "summary": "Evaluate multilingual AI, cultural context, and underrepresented languages.",
    "tags": [
      "Machine learning",
      "LLM alignment",
      "AI evaluation"
    ],
    "collections": [
      "industry",
      "ml",
      "compute"
    ],
    "deadlineTimezone": "America/Los_Angeles",
    "deadlineType": "fixed",
    "deadlineNote": "November 4, 2026, 11:59 pm Pacific Time; decisions expected February 2027.",
    "url": "https://www.amazon.science/research-awards/call-for-proposals/multilingual-and-contextual-ai-evaluation-call-for-proposals-fall-2026",
    "amount": "Funds and AWS credits; each no more than US$50,000 on average",
    "eligibility": "Full-time faculty or eligible permanent nonprofit researchers; check all Amazon program and conflict rules. One proposal per PI per call period across Amazon tracks. One-time gifts with no administrative overhead. Address relevant communities and public evaluation tools or datasets.",
    "relatedSources": [
      {
        "label": "Amazon Research Awards program rules",
        "url": "https://www.amazon.science/research-awards/program-rules"
      }
    ],
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "both",
    "support": "Compute",
    "id": "access-compute",
    "title": "ACCESS Research Computing",
    "agency": "NSF ACCESS",
    "code": "Explore / Discover / Accelerate",
    "studentAccess": "international",
    "summary": "National CPU, GPU, storage, and other research computing allocations.",
    "tags": [
      "Machine learning",
      "Scientific computing",
      "GPU"
    ],
    "collections": [
      "compute",
      "ml",
      "students"
    ],
    "deadlineType": "rolling",
    "deadlineNote": "Explore, Discover, and Accelerate accept requests at any time. Maximize uses separate rounds.",
    "url": "https://allocations.access-ci.org/project-types",
    "amount": "Explore: up to 400,000 credits; Discover: 1.5 million; Accelerate: 3 million",
    "eligibility": "US-based institutional researchers may apply using institutional email. Graduate students can lead Explore/Discover with advisor support; undergraduates need a faculty PI. Resource-specific restrictions apply.",
    "reason": "",
    "institutionCountry": "US"
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "both",
    "support": "Compute",
    "id": "aws-credits",
    "title": "AWS Cloud Credit for Research",
    "agency": "AWS",
    "code": "Research promotional credits",
    "studentAccess": "international",
    "summary": "Cloud credits for research proofs of concept, tools, and workloads.",
    "tags": [
      "Machine learning",
      "Cloud",
      "Research software"
    ],
    "collections": [
      "industry",
      "compute",
      "ml",
      "students"
    ],
    "deadlineType": "rolling",
    "deadlineNote": "Rolling; typical evaluation takes 90–120 days.",
    "url": "https://aws.amazon.com/government-education/research-and-technical-computing/cloud-credit-for-research/",
    "amount": "Students: up to US$5,000 credits; faculty/staff have no published cap, subject to review",
    "eligibility": "Full-time faculty/research staff and graduate, postgraduate, or PhD students at accredited institutions. Check project, service, and expiration terms.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "both",
    "support": "Compute",
    "id": "google-cloud",
    "title": "Google Cloud Research Credits",
    "agency": "Google",
    "code": "Cloud for research",
    "summary": "An application route for research credits and AI computing.",
    "tags": [
      "Machine learning",
      "Cloud",
      "GPU"
    ],
    "collections": [
      "industry",
      "compute",
      "ml",
      "students"
    ],
    "deadlineType": "unknown",
    "deadlineNote": "Credit application linked; no fixed deadline listed. Check current intake.",
    "url": "https://cloud.google.com/edu/researchers",
    "amount": "Apply for US$5,000 in research credits",
    "eligibility": "Faculty, postdoctoral and nonprofit researchers, and PhD students may apply. Institution, supported-country and service conditions apply; approval and accelerator availability are not guaranteed.",
    "reason": "",
    "studentAccess": "check"
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "both",
    "support": "Compute",
    "id": "alliance-compute",
    "title": "Digital Research Alliance of Canada",
    "agency": "Alliance",
    "code": "Research computing access",
    "studentAccess": "check",
    "canadianAppointment": true,
    "summary": "Canadian computing through eligible PIs or sponsored collaborators.",
    "tags": [
      "Machine learning",
      "Scientific computing",
      "Canada"
    ],
    "collections": [
      "compute",
      "canada",
      "students"
    ],
    "deadlineType": "unknown",
    "deadlineNote": "Account and allocation routes differ; confirm current intake with the Alliance.",
    "url": "https://ccdb.alliancecan.ca/agreements/access_policy_2022/user_display",
    "amount": "Compute access; eligible academic PIs may apply without charge",
    "eligibility": "Academic PI access requires an eligible Canadian appointment. A qualifying PI may sponsor collaborators and students. Canadian citizenship alone is insufficient.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "2026-11-02T20:00",
    "audience": "faculty",
    "support": "Grant",
    "id": "nserc-discovery",
    "title": "NSERC Discovery Grants",
    "agency": "NSERC",
    "code": "2027 competition",
    "canadianAppointment": true,
    "summary": "Long-term research programs including statistics and statistical learning.",
    "tags": [
      "Statistics",
      "Canada",
      "Machine learning"
    ],
    "collections": [
      "canada",
      "ml"
    ],
    "deadlineTimezone": "America/Toronto",
    "deadlineType": "fixed",
    "deadlineNote": "Full application: November 2, 2026, 8 pm Eastern. Mandatory NOI closed August 4, 2026; this round is not a new entry point.",
    "url": "https://nserc-crsng.canada.ca/en/funding-opportunity/discovery-grants-program-individual",
    "amount": "Normally up to five years; budget assessed by review",
    "eligibility": "Requires eligible Canadian affiliation and NSERC individual eligibility. Citizenship without an eligible Canadian appointment is insufficient. Confirm a timely NOI before treating this cycle as actionable.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "2026-10-30",
    "audience": "students",
    "support": "Fellowship",
    "id": "nvidia-fellowship",
    "title": "NVIDIA Graduate Fellowship",
    "agency": "NVIDIA",
    "code": "2027–2028 fellowship",
    "studentAccess": "international",
    "summary": "Doctoral AI and accelerated-computing research with a summer internship.",
    "tags": [
      "PhD",
      "Machine learning",
      "GPU"
    ],
    "collections": [
      "industry",
      "students",
      "ml"
    ],
    "deadlineType": "date",
    "deadlineNote": "October 30, 2026, including letters. Confirm cutoff time in the portal.",
    "url": "https://research.nvidia.com/graduate-fellowships",
    "amount": "Up to US$60,000, administered by the university",
    "eligibility": "International PhD students may apply. Normally complete the first PhD year, remain full-time during the award, and complete an eligible in-person summer internship. Related fields must explain the NVIDIA research connection.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "2026-10-23T20:00",
    "audience": "students",
    "support": "Fellowship",
    "id": "nsf-grfp",
    "title": "Graduate Research Fellowship — Mathematical Sciences",
    "agency": "NSF",
    "code": "GRFP · NSF 26-526",
    "studentAccess": "us",
    "summary": "Early graduate research support. The October 16 reference-letter deadline has passed; remaining applications require timely letters.",
    "tags": [
      "Graduate",
      "Statistics",
      "Machine learning"
    ],
    "collections": [
      "students",
      "ml"
    ],
    "deadlineTimezone": "America/New_York",
    "deadlineType": "fixed",
    "deadlineNote": "Reference letters closed October 16, 2026, 8 pm Eastern. Confirm required letters were received on time before proceeding. Mathematical Sciences applications: October 23, 8 pm Eastern; CISE: October 20, 8 pm Eastern. This is not a fresh entry point without timely letters.",
    "url": "https://www.nsf.gov/funding/opportunities/grfp-nsf-graduate-research-fellowship-program/nsf26-526/solicitation",
    "amount": "US$37,000 annual stipend + US$16,000 institutional allowance; 3 years of support",
    "eligibility": "US citizens, nationals or permanent residents only. Graduate applicants must be in the first year of their first graduate degree with less than one academic year completed; second-year graduate students are ineligible. Graduate applicants may apply once. Separate rules cover undergraduates and joint bachelor’s/master’s students; check field and prior-application restrictions.",
    "reason": "",
    "institutionCountry": "US"
  },
  {
    "checked": "2026-10-18",
    "deadline": "2026-10-19T20:00",
    "audience": "students",
    "support": "Scholarship",
    "id": "canada-doctoral",
    "title": "Canada Graduate Research Scholarship — Doctoral",
    "agency": "NSERC",
    "code": "CGRS D",
    "studentAccess": "canada",
    "summary": "Doctoral support with a limited pathway for study outside Canada.",
    "tags": [
      "PhD",
      "Canada",
      "Statistics",
      "Machine learning"
    ],
    "collections": [
      "students",
      "canada",
      "ml"
    ],
    "deadlineTimezone": "America/Toronto",
    "deadlineType": "fixed",
    "deadlineNote": "Direct agency route: October 17 moves to Monday, October 19, 2026, 8 pm Eastern under the published weekend rule. Institutional deadlines are earlier; confirm your route.",
    "url": "https://nserc-crsng.canada.ca/en/funding-opportunity/canada-graduate-research-scholarship-doctoral-program",
    "amount": "CAD$40,000 per year for 36 months",
    "eligibility": "For study outside Canada: qualifying Canadian citizenship/PR/protected status AND a prior Canadian degree. At most 36 months of PhD study by year-end; additional award/application limits apply. International students in Canada have a separate pathway.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "students",
    "support": "Fellowship",
    "id": "google-phd",
    "title": "Google PhD Fellowship",
    "agency": "Google",
    "code": "Next cycle watchlist",
    "studentAccess": "check",
    "summary": "Doctoral recognition across computing and related fields.",
    "tags": [
      "PhD",
      "Machine learning",
      "AI"
    ],
    "collections": [
      "industry",
      "students",
      "ml"
    ],
    "deadlineType": "pending",
    "deadlineNote": "2026 applications closed. No verified next-cycle deadline listed here.",
    "url": "https://research.google/programs-and-events/phd-fellowship/",
    "amount": "Region-specific fellowship terms",
    "eligibility": "Check the next regional call and institutional nomination process. Nomination and student-stage rules vary; do not assume direct applications are accepted.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "2026-11-04T23:59",
    "audience": "faculty",
    "id": "amazon-agentic-ai",
    "title": "AWS Agentic AI",
    "agency": "Amazon",
    "code": "Research Awards · Fall 2026",
    "support": "Research award",
    "summary": "Research on reliable agents, memory and retrieval, verification, and AI for science.",
    "tags": [
      "Machine learning",
      "LLM alignment",
      "RAG",
      "AI evaluation"
    ],
    "collections": [
      "industry",
      "ml",
      "compute"
    ],
    "deadlineTimezone": "America/Los_Angeles",
    "deadlineType": "fixed",
    "deadlineNote": "November 4, 2026, 11:59 pm Pacific Time. Decisions expected February 2027.",
    "url": "https://www.amazon.science/research-awards/call-for-proposals/aws-agentic-ai-call-for-proposals-fall-2026",
    "relatedSources": [
      {
        "label": "Amazon Research Awards program rules",
        "url": "https://www.amazon.science/research-awards/program-rules"
      }
    ],
    "amount": "Funds no more than US$70,000 on average; AWS credits no more than US$50,000 on average",
    "eligibility": "Full-time faculty at accredited institutions or permanent researchers at eligible nonprofit organizations; full program and conflict rules apply. One proposal per PI per call period across Amazon tracks. Gifts carry no administrative overhead.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "both",
    "id": "nvidia-academic",
    "title": "NVIDIA Academic Grant Program",
    "agency": "NVIDIA",
    "code": "AI training & model development",
    "support": "Compute",
    "studentAccess": "check",
    "summary": "GPU resources for research using NVIDIA models and software. The program is currently not accepting new applications.",
    "tags": [
      "Machine learning",
      "GPU",
      "LLM alignment",
      "AI evaluation"
    ],
    "collections": [
      "industry",
      "compute",
      "ml",
      "students"
    ],
    "deadlineType": "pending",
    "deadlineNote": "The official program page states that new applications are not being accepted. Await a reopening announcement; retained call PDFs do not establish an open cycle.",
    "url": "https://www.nvidia.com/en-us/industries/higher-education-research/academic-grant-program/",
    "relatedSources": [
      {
        "label": "AI training & model development call (PDF)",
        "url": "https://dam-cdn.nvd.orangelogic.com/AssetLink/hx500218c2rk5ipilbh7773ulte46akp.pdf"
      }
    ],
    "amount": "Listed AI training track: up to 30,000 H100 80GB GPU hours; next-cycle terms unconfirmed",
    "eligibility": "Full-time faculty at accredited PhD-granting institutions worldwide. Students and postdocs participate through a faculty PI. Extensive NVIDIA software and/or model use is required. Recheck all allocation and submission limits when intake reopens.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "both",
    "id": "google-trc",
    "title": "TPU Research Cloud",
    "agency": "Google",
    "code": "TRC",
    "support": "Compute",
    "studentAccess": "check",
    "summary": "Temporary Cloud TPU access for approved research projects.",
    "tags": [
      "Machine learning",
      "Scientific computing",
      "Cloud"
    ],
    "collections": [
      "industry",
      "compute",
      "ml",
      "students"
    ],
    "deadlineType": "rolling",
    "deadlineNote": "Expressions of interest are accepted; invitations are issued on a rolling basis.",
    "url": "https://sites.research.google/trc/faq/",
    "amount": "Approved TPU quota at no charge; VM, storage, and other cloud charges are separate",
    "eligibility": "Anyone may express interest; approval, availability and terms apply. Recipients share research outcomes and feedback. TPU quota does not support Vertex AI workflows. VM, storage and other cloud charges are separate.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "both",
    "id": "anthropic-researcher",
    "title": "External Researcher Access Program",
    "agency": "Anthropic",
    "code": "AI safety & alignment",
    "support": "Compute",
    "studentAccess": "check",
    "summary": "Claude API credits for high-priority AI safety and alignment research.",
    "tags": [
      "LLM alignment",
      "AI evaluation",
      "Uncertainty quantification"
    ],
    "collections": [
      "industry",
      "compute",
      "ml",
      "students"
    ],
    "deadlineType": "rolling",
    "deadlineNote": "Applications are reviewed on the first Monday of each month; this is a review schedule, not a guaranteed award date.",
    "url": "https://support.claude.com/en/articles/9125743-what-is-the-external-researcher-access-program",
    "amount": "Normally US$1,000 in API credits; larger requests may be considered",
    "eligibility": "The proposal must address a relevant AI safety or alignment question. Standard model access, supported-region rules, and usage policies apply. Credits are for the API, not the Claude web app or prerelease models.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "faculty",
    "id": "anthropic-science",
    "title": "AI for Science Program",
    "agency": "Anthropic",
    "code": "Natural sciences & mathematics",
    "support": "Compute",
    "summary": "Claude API support for discovery in natural sciences and mathematics, with a life-sciences emphasis.",
    "tags": [
      "Mathematics",
      "Statistics",
      "Biomedical",
      "Drug discovery",
      "Neuroscience",
      "Machine learning"
    ],
    "collections": [
      "industry",
      "compute",
      "ml"
    ],
    "deadlineType": "rolling",
    "deadlineNote": "The linked application describes monthly reviews. No fixed closing date or award amount is published here.",
    "url": "https://www.anthropic.com/news/ai-for-science-program",
    "amount": "API credits; amount determined by the program",
    "eligibility": "Researchers at qualified nonprofit academic or research institutions must explain a substantive natural-science or mathematics question and how AI advances it. Scientific impact, account and program conditions apply.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "faculty",
    "id": "azure-research",
    "title": "Azure Research Credits",
    "agency": "Microsoft",
    "code": "Academic research inquiry",
    "support": "Compute",
    "summary": "An academic contact route for cloud research workloads, tools, and proofs of concept.",
    "tags": [
      "Machine learning",
      "Cloud",
      "Research software"
    ],
    "collections": [
      "industry",
      "compute",
      "ml"
    ],
    "deadlineType": "unknown",
    "deadlineNote": "Contact-based inquiry; no current competitive deadline or guaranteed award is listed.",
    "url": "https://www.microsoft.com/en-us/azure-academic-research/default.aspx",
    "amount": "Credit amount and services require confirmation",
    "eligibility": "Institutional and project eligibility must be confirmed with Microsoft. Credits, accelerator quotas, and permitted workloads depend on the offer.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "faculty",
    "id": "taiwan-nstc-short-visit",
    "title": "Short-term Visiting Experts",
    "agency": "NSTC",
    "code": "Taiwan · host-sponsored visit",
    "support": "Research visit",
    "taiwanRoute": "host",
    "summary": "A Taiwan institution invites an overseas scholar for research exchange, lectures, or technical consultation.",
    "tags": [
      "Statistics",
      "Machine learning",
      "Taiwan",
      "Research collaboration"
    ],
    "collections": [
      "taiwan"
    ],
    "deadlineType": "rolling",
    "deadlineNote": "The Taiwan host applies at least six weeks before the funded visit. Normally up to seven days, exceptionally up to one month.",
    "url": "https://law.nstc.gov.tw/LawContent.aspx?id=FL036542",
    "amount": "Travel and daily honorarium support, subject to official caps and approval",
    "eligibility": "An eligible Taiwan institution submits the application. Overseas experts may be invited; a Taiwan appointment is not a prerequisite for the visitor. Physical visits require at least two public lectures under the rules.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "faculty",
    "id": "taiwan-nstc-visiting-faculty",
    "title": "Visiting Science & Technology Personnel",
    "agency": "NSTC",
    "code": "Visiting assistant professor route",
    "support": "Research visit",
    "taiwanRoute": "host",
    "summary": "A Taiwan institution hosts an overseas researcher for a sustained research or teaching appointment.",
    "tags": [
      "Statistics",
      "Machine learning",
      "Taiwan",
      "Research collaboration"
    ],
    "collections": [
      "taiwan"
    ],
    "deadlineType": "unknown",
    "deadlineNote": "Coordinate the host application and review schedule. Visits are normally 3–12 months; no fixed submission deadline is verified here.",
    "url": "https://law.nstc.gov.tw/LawContent.aspx?id=FL031557",
    "amount": "Approved research / teaching remuneration and round-trip economy airfare",
    "eligibility": "An eligible Taiwan host applies. Visiting assistant professors need appropriate academic credentials and publications; overseas personnel generally need at least one continuous year at an overseas institution. The funded host appointment must be full-time during the visit.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "faculty",
    "id": "taiwan-ncts-pairs",
    "title": "Research in Pairs",
    "agency": "NCTS",
    "code": "Taiwan · mathematical sciences",
    "support": "Research visit",
    "taiwanRoute": "visit",
    "summary": "Two to four mathematicians collaborate in residence at NCTS for two to eight weeks.",
    "tags": [
      "Statistics",
      "Scientific computing",
      "Probability",
      "Taiwan"
    ],
    "collections": [
      "taiwan"
    ],
    "deadlineType": "unknown",
    "deadlineNote": "Calls are announced in April, August and December. The readable 2026 notice remains the verified source; a newer 2026–27 notice could not be retrieved. Exact next cutoff is unconfirmed. Applying at least three months before the visit is recommended.",
    "url": "https://ncts.ntu.edu.tw/news_detail.php?nid=231",
    "relatedSources": [
      {
        "label": "NCTS application routes",
        "url": "https://ncts.ntu.edu.tw/apply.php"
      }
    ],
    "amount": "Visiting financial support; round-trip airfare is excluded",
    "eligibility": "Groups of 2–4 researchers from different institutions, including at least one affiliated outside Taiwan, propose a 2–8 week visit. Mathematical-science topic and call conditions apply. A prior Taiwan appointment is not specified.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "faculty",
    "id": "taiwan-nchc-compute",
    "title": "NCHC / TWCC Research Computing",
    "agency": "NCHC",
    "code": "Taiwan · account and project inquiry",
    "support": "Compute",
    "taiwanRoute": "account",
    "summary": "Taiwan research-computing services with project, account, and pricing requirements.",
    "tags": [
      "Machine learning",
      "Scientific computing",
      "GPU",
      "Taiwan"
    ],
    "collections": [
      "taiwan",
      "compute",
      "ml"
    ],
    "deadlineType": "unknown",
    "deadlineNote": "Service-access inquiry, not a verified open grant. Confirm the current account and project route with NCHC.",
    "url": "https://iservice.nchc.org.tw/nchc_service/nchc_service_qa.php?target=57",
    "amount": "Paid or project-subsidized access, subject to approval; no free allocation assumed",
    "eligibility": "ROC citizenship alone does not establish academic pricing or a free allocation. The new-researcher free-quota program is suspended. Overseas access requires the approved foreign-IP process; account and project eligibility need confirmation.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "both",
    "support": "Compute",
    "id": "nairr-startup",
    "title": "NAIRR Start-Up Project",
    "agency": "NAIRR",
    "code": "Three-month pilot allocation",
    "studentAccess": "check",
    "summary": "A smaller allocation to test an AI workflow and measure compute needs before a full research request. No company formation is needed.",
    "tags": [
      "Machine learning",
      "GPU",
      "AI evaluation",
      "Scientific computing"
    ],
    "collections": [
      "nairr",
      "compute",
      "ml",
      "students"
    ],
    "deadlineType": "rolling",
    "deadlineNote": "Intake depends on resource capacity. Three-month awards; be ready to start within two weeks of award. The page gives differing 2–3 week review estimates.",
    "url": "https://nairrpilot.org/opportunities/startup-project",
    "relatedSources": [
      {
        "label": "NAIRR eligibility and review FAQ",
        "url": "https://nairrpilot.org/help/faq"
      },
      {
        "label": "Live NAIRR resource catalog",
        "url": "https://submit-nairr.xras.org/resources"
      }
    ],
    "amount": "Up to 2,000 GPU-hours on listed systems; other systems use different allocation units",
    "eligibility": "US-based researchers at US institutions, subject to program rules. Graduate students need an advisor support letter. Use institutional email. Provider-specific rules apply; open, publishable results and public project metadata are expected.",
    "reason": "",
    "institutionCountry": "US"
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "both",
    "support": "Compute",
    "id": "nairr-research",
    "title": "NAIRR Research Resources",
    "agency": "NAIRR",
    "code": "Research allocation · monthly review",
    "studentAccess": "check",
    "summary": "AI computing, cloud, model and platform access from public and industry partners for a full research project.",
    "tags": [
      "Machine learning",
      "LLM alignment",
      "Uncertainty quantification",
      "GPU"
    ],
    "collections": [
      "nairr",
      "compute",
      "industry",
      "ml",
      "students"
    ],
    "deadlineType": "rolling",
    "deadlineNote": "Monthly review; submit by the 15th for a review cycle, not a permanent closing date. FAQ allows up to three months for decisions, longer than the call-page estimate. Awards run 12 months.",
    "url": "https://nairrpilot.org/opportunities/allocations",
    "relatedSources": [
      {
        "label": "NAIRR eligibility and review FAQ",
        "url": "https://nairrpilot.org/help/faq"
      },
      {
        "label": "Live NAIRR resource catalog",
        "url": "https://submit-nairr.xras.org/resources"
      },
      {
        "label": "Proposal preparation instructions",
        "url": "https://nairrpilot.org/nairr-pilot-proposal-instructions"
      }
    ],
    "amount": "Justified resource allocation; no universal cap. Provider capacity determines awards; no cash grant.",
    "eligibility": "US-based institutional researchers and educators; graduate PIs need advisor support. Institutional email, open results and public project metadata are required.",
    "reason": "",
    "institutionCountry": "US"
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "both",
    "support": "Compute",
    "id": "nairr-classroom",
    "title": "NAIRR Classroom Resources",
    "agency": "NAIRR",
    "code": "AI teaching and student computing",
    "studentAccess": "check",
    "summary": "Instructor-requested computing for AI-related courses, independent study, workshops and course development.",
    "tags": [
      "Machine learning",
      "Teaching",
      "GPU",
      "Graduate"
    ],
    "collections": [
      "nairr",
      "compute",
      "ml",
      "students"
    ],
    "deadlineType": "rolling",
    "deadlineNote": "Ongoing review; the FAQ gives a typical decision time of about one month. Apply ahead of the course and confirm provider availability.",
    "url": "https://nairrpilot.org/opportunities/education-call",
    "relatedSources": [
      {
        "label": "NAIRR eligibility and review FAQ",
        "url": "https://nairrpilot.org/help/faq"
      },
      {
        "label": "Live NAIRR resource catalog",
        "url": "https://submit-nairr.xras.org/resources"
      }
    ],
    "amount": "Course-specific compute allocation on participating classroom resources",
    "eligibility": "US-based instructors teaching US-based students in AI-related courses or training. Any discipline may qualify. Non-US-based participants are excluded; individual resource restrictions also apply. Students benefit through the instructor request.",
    "reason": "",
    "institutionCountry": "US"
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "faculty",
    "support": "Compute",
    "id": "nairr-deep-partnerships",
    "title": "NAIRR Deep Partnerships",
    "agency": "NAIRR",
    "code": "Partner-specific research collaborations",
    "summary": "Collaborative research with resource providers using their contributed AI infrastructure and expertise.",
    "tags": [
      "Machine learning",
      "Research collaboration",
      "GPU",
      "AI evaluation"
    ],
    "collections": [
      "nairr",
      "compute",
      "industry",
      "ml"
    ],
    "deadlineType": "unknown",
    "deadlineNote": "Each partner has its own submission window. No single open deadline is confirmed; the portal also links an upcoming LCCF Horizon partnership.",
    "url": "https://nairrpilot.org/opportunities/deep-partnerships",
    "relatedSources": [
      {
        "label": "Live NAIRR resource catalog",
        "url": "https://submit-nairr.xras.org/resources"
      }
    ],
    "amount": "Partner-defined resources and collaboration; project duration at most 12 months",
    "eligibility": "US-based researchers at US institutions, with additional partner requirements. Use institutional email; open results, public project metadata and progress reporting are expected.",
    "reason": "",
    "institutionCountry": "US"
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "both",
    "support": "Compute",
    "id": "openai-researcher",
    "title": "OpenAI Researcher Access Program",
    "agency": "OpenAI",
    "code": "API research credits",
    "studentAccess": "check",
    "summary": "API credits for research on responsible AI, alignment, fairness, robustness and societal impacts.",
    "tags": [
      "LLM alignment",
      "AI evaluation",
      "Uncertainty quantification",
      "Machine learning"
    ],
    "collections": [
      "industry",
      "compute",
      "ml",
      "students"
    ],
    "deadlineType": "rolling",
    "deadlineNote": "Apply year-round. Reviews occur in March, June, September and December; these are review months, not confirmed closing dates.",
    "url": "https://grants.openai.com/prog/openai_researcher_access_program/",
    "relatedSources": [
      {
        "label": "Eligibility and timing FAQ",
        "url": "https://help.openai.com/en/articles/10139500-researcher-access-program-faq"
      }
    ],
    "amount": "Up to US$1,000 in API credits, valid for 12 months",
    "eligibility": "Active affiliation with an academic or research institution, or nonprofit research organization, and residence in an API-supported country. Research priorities and usage/publication policies apply. This is API support, not a ChatGPT subscription.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "both",
    "support": "Compute",
    "id": "cohere-catalyst",
    "title": "Cohere Labs Catalyst Grants",
    "agency": "Cohere",
    "code": "Open science and public-benefit API credits",
    "studentAccess": "check",
    "summary": "Cohere model access for open research, retrieval, model safety, multilingual evaluation and public benefit.",
    "tags": [
      "RAG",
      "LLM alignment",
      "AI evaluation",
      "Machine learning"
    ],
    "collections": [
      "industry",
      "compute",
      "ml",
      "students"
    ],
    "deadlineType": "rolling",
    "deadlineNote": "Official status: open. Applications are considered on a rolling basis.",
    "url": "https://cohere.com/research/grants",
    "amount": "API credits; no standard award amount published",
    "eligibility": "Academic partners and public-impact organizations with open-science or public-benefit projects. AI safety findings require immediate vulnerability disclosure and sharing outputs at least four weeks before publication. Check the current terms.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "both",
    "support": "Compute",
    "id": "huggingface-community",
    "title": "Hugging Face Community GPU Grant",
    "agency": "Hugging Face",
    "code": "GPU hosting for a Space",
    "studentAccess": "check",
    "summary": "Apply for help covering GPU hardware costs for an innovative Hugging Face Space.",
    "tags": [
      "Research software",
      "AI evaluation",
      "Machine learning",
      "GPU"
    ],
    "collections": [
      "industry",
      "compute",
      "ml",
      "students"
    ],
    "deadlineType": "unknown",
    "deadlineNote": "Apply from Space hardware settings. No fixed closing date or review timetable is published in the documentation.",
    "url": "https://huggingface.co/docs/hub/spaces-gpus",
    "amount": "Approved GPU hosting for a specific Space; amount and duration depend on approval",
    "eligibility": "A working public Space and compelling community use case are required. This funds hosted demos, not unrestricted training. Selection and resource availability apply. Check current Spaces creation and billing requirements: a GPU grant is not a blanket subscription-fee waiver.",
    "reason": "",
    "relatedSources": [
      {
        "label": "Spaces creation and billing rules",
        "url": "https://huggingface.co/docs/hub/spaces-overview"
      }
    ]
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "faculty",
    "support": "Compute",
    "id": "amd-ai-hpc",
    "title": "AMD AI & HPC Cluster",
    "agency": "AMD",
    "code": "Quarterly node-hour allocations",
    "summary": "Remote EPYC CPU and Instinct GPU resources for open AI and high-performance computing research.",
    "tags": [
      "Machine learning",
      "Scientific computing",
      "GPU",
      "Research software"
    ],
    "collections": [
      "industry",
      "compute",
      "ml"
    ],
    "deadlineType": "rolling",
    "deadlineNote": "Quarterly batches end February 15, May 15, August 15 and November 15. Current published schedule: Aug 16–Nov 15 requests, Dec 15 decisions, Jan 1 starts. Confirm cutoff time in the member portal.",
    "url": "https://www.amd.com/en/corporate/university-program/ai-hpc-cluster.html",
    "amount": "Competitive node-hour allocation with access for up to one year",
    "eligibility": "Academic research and education teams worldwide; enroll in the AMD University Program. Proposals must fit AMD technology and innovative, impactful open-source research or education. Resource availability limits awards.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "faculty",
    "support": "Compute",
    "id": "amd-hacc",
    "title": "AMD HACC Research Access",
    "agency": "AMD",
    "code": "Heterogeneous Accelerated Compute Clusters",
    "summary": "Remote university-hosted clusters for research in adaptive computing and AI/HPC acceleration.",
    "tags": [
      "Scientific computing",
      "Machine learning",
      "GPU",
      "Research software"
    ],
    "collections": [
      "industry",
      "compute",
      "ml"
    ],
    "deadlineType": "unknown",
    "deadlineNote": "Access-request route is available. No common deadline, quota or award duration is published on the program page.",
    "url": "https://www.amd.com/en/corporate/university-program/aup-hacc.html",
    "amount": "Accepted researchers receive access to participating clusters; resource terms vary",
    "eligibility": "Research must fit adaptive computing, systems, tools or relevant applications. Acceptance and the selected center determine access; confirm the selected host center’s access rules.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "faculty",
    "support": "Compute",
    "id": "amd-donation",
    "title": "AMD Academic Hardware & Software Donations",
    "agency": "AMD",
    "code": "University Program · institutional request",
    "summary": "Hardware and software donations for non-commercial academic research and teaching.",
    "tags": [
      "GPU",
      "Teaching",
      "Machine learning",
      "Research software"
    ],
    "collections": [
      "industry",
      "compute",
      "ml"
    ],
    "deadlineType": "unknown",
    "deadlineNote": "Donation requests are accepted through AUP. AMD aims to respond in 1–2 weeks; no fixed deadline is stated.",
    "url": "https://www.amd.com/en/corporate/university-program/donation-program.html",
    "amount": "Selected hardware and/or software licenses; no standard cash award",
    "eligibility": "Professors or senior staff submit on behalf of their university or research institute after AUP enrollment. Donated items are only for non-commercial academic teaching/research; awards depend on availability.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "faculty",
    "support": "Compute",
    "id": "lambda-research",
    "title": "Lambda Research Grant",
    "agency": "Lambda",
    "code": "Research compute and collaboration inquiry",
    "summary": "A research support route for AI projects, with a linked grant application and examples of supported evaluation and learning research.",
    "tags": [
      "Machine learning",
      "LLM alignment",
      "AI evaluation",
      "GPU"
    ],
    "collections": [
      "industry",
      "compute",
      "ml"
    ],
    "deadlineType": "unknown",
    "deadlineNote": "Official research page links an application. Detailed intake dates, award terms and eligibility are not public on that page; confirm before planning.",
    "url": "https://lambda.ai/research",
    "relatedSources": [
      {
        "label": "Official linked grant application",
        "url": "https://form.typeform.com/to/Wn8YWMIj"
      }
    ],
    "amount": "Compute/research support; amount, GPU allocation and duration require confirmation",
    "eligibility": "Program-specific eligibility and support terms must be confirmed in the application. A published research application link is not confirmation of an available award or guaranteed applicant eligibility.",
    "reason": ""
  },
  {
    "checked": "2026-10-18",
    "deadline": "",
    "audience": "faculty",
    "support": "Compute",
    "id": "oracle-research",
    "title": "Oracle for Research Project Award",
    "agency": "Oracle",
    "code": "OCI research credits",
    "summary": "Cloud credits and technical consultation for impactful computational research.",
    "tags": [
      "Scientific computing",
      "Cloud",
      "Machine learning",
      "Biomedical"
    ],
    "collections": [
      "industry",
      "compute",
      "ml"
    ],
    "deadlineType": "unknown",
    "deadlineNote": "Official application form is available; no fixed closing date or review duration is published there.",
    "url": "https://go.oracle.com/research-project-award?elqCampaignId=314509",
    "amount": "OCI credits sized to the proposal and usage requirements; no fixed award amount",
    "eligibility": "Project acceptance and regional restrictions apply. Oracle assesses research impact, cloud benefit, and PI/institution experience. Institutional signatures or acceptance of cloud agreements are required before activation.",
    "reason": ""
  },
  {
    "id": "google-gemini-academic",
    "title": "Gemini Academic Program",
    "agency": "Google",
    "code": "Research API credits",
    "support": "Compute",
    "audience": "both",
    "studentAccess": "check",
    "summary": "Gemini API credits and higher rate limits for academic AI research.",
    "tags": [
      "Machine learning",
      "AI evaluation",
      "LLM alignment",
      "Scientific discovery",
      "Reasoning"
    ],
    "collections": [
      "industry",
      "compute",
      "ml",
      "students"
    ],
    "deadline": "",
    "deadlineType": "rolling",
    "deadlineNote": "Monthly application reviews; no fixed closing date. The documentation links an application, whose detailed form terms were not independently verified.",
    "url": "https://ai.google.dev/gemini-api/docs/gemini-for-research",
    "relatedSources": [
      {
        "label": "Supported Gemini API locations",
        "url": "https://ai.google.dev/gemini-api/docs/available-regions"
      }
    ],
    "amount": "API credits and higher rate limits; amount determined by review",
    "eligibility": "Academic/research affiliation is required; faculty, research staff and PhD students are included. Supported locations and program terms apply. Review interests include evaluation, safety, reasoning, multimodal learning and scientific discovery.",
    "checked": "2026-10-18",
    "reason": ""
  },
  {
    "id": "access-maximize",
    "title": "Maximize ACCESS Research Computing",
    "agency": "NSF ACCESS",
    "code": "Winter 2026–2027 allocation round",
    "support": "Compute",
    "audience": "both",
    "studentAccess": "check",
    "summary": "Large research-computing allocations for work beyond the smaller ACCESS tiers.",
    "tags": [
      "Scientific computing",
      "Machine learning",
      "GPU",
      "High performance computing"
    ],
    "collections": [
      "compute",
      "ml",
      "students"
    ],
    "deadline": "2027-01-31",
    "deadlineType": "date",
    "deadlineNote": "Opens December 15, 2026; closes January 31, 2027. The next window has not opened. Exact cutoff time and time zone are not published. Awards start April 1, 2027.",
    "url": "https://allocations.access-ci.org/prepare-requests",
    "relatedSources": [
      {
        "label": "ACCESS allocation policy",
        "url": "https://allocations.access-ci.org/allocations-policy"
      }
    ],
    "amount": "Resource allocations, generally for 12 months; no universal maximum",
    "eligibility": "US-based institutional researchers, including postdocs, can lead requests. Graduate students need a qualified PI. Provider restrictions apply. A scientific/resource justification, scaling evidence and CVs are required.",
    "checked": "2026-10-18",
    "reason": "",
    "institutionCountry": "US"
  },
  {
    "id": "anton3-2026",
    "title": "Anton 3 Biomolecular Simulation Allocations",
    "agency": "Pittsburgh Supercomputing Center",
    "code": "2026 call · April 2027 allocations",
    "support": "Compute",
    "audience": "both",
    "studentAccess": "check",
    "summary": "Special-purpose molecular-dynamics computing for prepared biomolecular research projects.",
    "tags": [
      "Biomedical",
      "Drug discovery",
      "Molecular dynamics",
      "Scientific computing"
    ],
    "collections": [
      "compute",
      "students"
    ],
    "deadline": "2026-10-23T23:59",
    "deadlineTimezone": "America/New_York",
    "deadlineType": "fixed",
    "deadlineNote": "October 23, 2026, 11:59 pm EDT. Create the PSC account at least two days earlier (by October 21).",
    "url": "https://www.psc.edu/resources/anton/",
    "relatedSources": [
      {
        "label": "2026 request for proposals",
        "url": "https://www.psc.edu/wp-content/uploads/2026/08/Anton_3_RFP.pdf"
      },
      {
        "label": "PSC allocation portal",
        "url": "https://allocations.psc.edu"
      }
    ],
    "amount": "Up to 9.1 machine-days per PI; noncommercial molecular dynamics",
    "eligibility": "US academic/nonprofit faculty or staff PI; one PI application per round. Students/postdocs participate through a qualified PI; international co-PIs are allowed. Requires a technically feasible biomolecular simulation, not general ML/GPU training. Returning PIs must supply a progress report; data-sharing conditions apply.",
    "checked": "2026-10-18",
    "reason": "",
    "institutionCountry": "US"
  },
  {
    "id": "alliance-rac-2027",
    "title": "Alliance Resource Allocation Competition",
    "agency": "Digital Research Alliance of Canada",
    "code": "2027 RAC",
    "support": "Compute",
    "audience": "both",
    "studentAccess": "check",
    "canadianAppointment": true,
    "summary": "Annual compute, storage and cloud allocations beyond Rapid Access Service resources.",
    "tags": [
      "Scientific computing",
      "Machine learning",
      "GPU",
      "Canada"
    ],
    "collections": [
      "canada",
      "compute",
      "ml",
      "students"
    ],
    "deadline": "2026-11-03T23:59",
    "deadlineTimezone": "America/Toronto",
    "deadlineType": "fixed",
    "deadlineNote": "September 23–November 3, 2026, 11:59 pm EST. Allocations start in early April 2027. Timing verified through UBC ARC; confirm full competition requirements with the Alliance.",
    "url": "https://arc.ubc.ca/news/september-09-2026/digital-research-alliance-canada-resource-allocation-competition-opens-0",
    "relatedSources": [
      {
        "label": "Alliance RAC guide (full guide not independently retrieved)",
        "url": "https://docs.alliancecan.ca/wiki/RAC_application_guide"
      },
      {
        "label": "Alliance access eligibility",
        "url": "https://ccdb.alliancecan.ca/agreements/access_policy_2022/user_display"
      }
    ],
    "amount": "Compute, storage and cloud allocations; assessed by requested resources",
    "eligibility": "An eligible Canadian institutional PI must lead or sponsor the project. Collaborators and students participate through that PI. Canadian citizenship alone does not establish eligibility; verify RAC-specific conditions.",
    "checked": "2026-10-18",
    "reason": ""
  },
  {
    "id": "nserc-alliance-international",
    "title": "Alliance International Collaboration Grants",
    "agency": "NSERC",
    "code": "Reopened 2026 competition",
    "support": "Grant",
    "audience": "faculty",
    "canadianAppointment": true,
    "summary": "Funding for the Canadian side of jointly planned international academic research.",
    "tags": [
      "Statistics",
      "Machine learning",
      "Scientific computing",
      "Canada",
      "Research collaboration"
    ],
    "collections": [
      "canada",
      "ml"
    ],
    "deadline": "2026-11-25T20:00",
    "deadlineTimezone": "America/Toronto",
    "deadlineType": "fixed",
    "deadlineNote": "November 25, 2026, before 8 pm Eastern. Normally apply within 120 days of the international award; transitional cases must contact NSERC. Catalyst grants remain closed indefinitely.",
    "url": "https://nserc-crsng.canada.ca/en/funding-opportunity/alliance-international-collaboration-grants",
    "amount": "CAD$20,000–100,000 annually for up to 3 years, for Canadian activities only",
    "eligibility": "Eligible Canadian applicants/co-applicants need an active peer-reviewed NSERC award as primary applicant. International university faculty need their own national peer-reviewed award, whose original proposal includes the Canadian team and roles. NSERC does not cover international collaborators’ expenses. Each team supplies at least 25% of the combined budget; one application per 12 months.",
    "checked": "2026-10-18",
    "reason": ""
  },
  {
    "id": "nih-r21-feb-2027",
    "title": "Exploratory / Developmental Research — February 2027",
    "agency": "NIH",
    "code": "Parent R21 · PA-25-304 · new applications",
    "summary": "The next published new-application round for exploratory biomedical research; the October 2026 record remains closed.",
    "tags": [
      "Biomedical",
      "Neuroscience",
      "Machine learning"
    ],
    "deadline": "2027-02-16",
    "deadlineType": "date",
    "deadlineNote": "February 16, 2027, 5 pm in the applicant organization’s local time, explicitly listed in the NOFO. Confirm the organization’s time zone and internal routing. Resubmissions use separate dates.",
    "url": "https://grants.nih.gov/grants/guide/pa-files/PA-25-304.html",
    "amount": "Up to US$275,000 direct costs over 2 years",
    "eligibility": "Submit through an eligible organization and fit a participating NIH institute’s mission. Clinical trials are not allowed. Confirm registrations, application type and institutional approvals.",
    "collections": [
      "ml"
    ],
    "audience": "faculty",
    "support": "Grant",
    "checked": "2026-10-18",
    "reason": ""
  },
  {
    "id": "microsoft-quine-fellowship",
    "title": "Quine Research Fellowship",
    "agency": "Microsoft Research",
    "code": "2027 research fellowship",
    "summary": "A 16-week computational-biology fellowship, June 7–September 24, 2027, hosted in Cambridge, Massachusetts.",
    "tags": [
      "Machine learning",
      "Biomedical",
      "Drug discovery",
      "Experimental design",
      "Uncertainty quantification"
    ],
    "deadline": "2026-11-02",
    "deadlineType": "date",
    "deadlineNote": "Applications September 29–November 2, 2026. Exact cutoff time, time zone and participation requirements must be confirmed in the application materials; no cutoff is assumed here.",
    "url": "https://microsoft.github.io/quine/index.html",
    "relatedSources": [
      {
        "label": "Fellowship application portal (sign-in required for details)",
        "url": "https://webportalapp.com/sp/login/msr_quine_research_fellows"
      },
      {
        "label": "Microsoft announcement",
        "url": "https://www.microsoft.com/en-us/research/blog/introducing-quine-an-ai-research-system-designed-for-the-complexity-of-biology/"
      }
    ],
    "amount": "Financial support plus Quine and computing access; amount unpublished; possible experimental support",
    "eligibility": "PhD candidates, postdocs, research scientists, and academic or independent researchers may apply. Selection and written terms govern support. Confirm faculty leave, Cambridge activities and any visa/appointment conditions. Protein/enzyme design, perturbation experiments and early therapeutics are relevant themes.",
    "collections": [
      "industry",
      "ml",
      "compute",
      "students"
    ],
    "audience": "both",
    "studentAccess": "check",
    "support": "Fellowship",
    "checked": "2026-10-18",
    "reason": ""
  },
  {
    "id": "canada-postdoctoral-nserc-2026",
    "title": "Canada Postdoctoral Research Award — NSERC",
    "agency": "NSERC",
    "code": "CPRA · 2026 application round",
    "summary": "Postdoctoral research training for eligible graduating doctoral researchers and postdocs; not funding to complete a degree.",
    "tags": [
      "Postdoctoral",
      "Statistics",
      "Machine learning",
      "Canada"
    ],
    "deadline": "2026-10-19T20:00",
    "deadlineTimezone": "America/Toronto",
    "deadlineType": "fixed",
    "deadlineNote": "NSERC route: October 17 falls on a weekend, so submit before October 19, 2026, 8 pm Eastern. Supporting letters are due too. Other agencies have different deadlines.",
    "url": "https://nserc-crsng.canada.ca/en/funding-opportunity/canada-postdoctoral-research-award-program",
    "relatedSources": [
      {
        "label": "NSERC deadlines and weekend rule",
        "url": "https://nserc-crsng.canada.ca/en/funding/students-and-postdoctoral-researchers/scholarship-and-postdoctoral-award-programs"
      }
    ],
    "amount": "CAD$70,000 per year for 24 months",
    "eligibility": "Doctoral/health-professional degree required by award start, normally completed within three years before September 1, with exceptions. Tenured/tenure-track faculty, including those on leave, are ineligible. Overseas tenure requires qualifying Canadian status AND a Canadian doctoral/health-professional degree. Other nationality, host, previous-award and application-limit rules apply.",
    "collections": [
      "canada",
      "students",
      "ml"
    ],
    "audience": "students",
    "studentAccess": "canada",
    "support": "Fellowship",
    "checked": "2026-10-18",
    "reason": ""
  },
  {
    "id": "nsf-ai-infrastructure-hubs",
    "title": "State and Regional AI Infrastructure Hubs",
    "agency": "NSF",
    "code": "NSF 26-513 · institutional consortium",
    "summary": "Regional AI consortia support research-computing coordination, workforce development, faculty training and AI coursework.",
    "tags": [
      "Machine learning",
      "Scientific computing",
      "AI education",
      "Research infrastructure"
    ],
    "deadline": "2026-11-04",
    "deadlineType": "date",
    "deadlineNote": "November 4, 2026, 5 pm submitting-organization local time. No federal LOI or preliminary proposal is required. One proposal per lead institution: confirm earlier internal selection and authorization before planning a submission.",
    "url": "https://www.nsf.gov/funding/opportunities/us-national-science-foundation-state-regional-artificial/nsf26-513/solicitation",
    "amount": "Typical hub: US$4–12 million over 5 years; consortium funds the computing resources",
    "eligibility": "Eligible US higher-education or research nonprofit organization leads a consortium. One proposal per lead institution and per person as PI/co-PI/senior-key personnel. Requires at least one regional industry/nonprofit partner and documented compute funding. NSF supports coordination/training; this is not an individual GPU allocation.",
    "collections": [
      "compute",
      "ml"
    ],
    "audience": "faculty",
    "support": "Grant",
    "checked": "2026-10-18",
    "reason": "",
    "institutionCountry": "US"
  }
];
