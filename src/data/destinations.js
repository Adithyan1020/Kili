// Destination + visa-type data for the departure board.
// `desc` and `services` are the site's existing copy (from the old
// Destinations and Services sections). Fields marked PLACEHOLDER are new
// values that must be checked/replaced before going live.

// The three practice areas from the old "Services" section, used as the
// board's visa-type filter. Descriptions are the existing copy.
export const VISA_GROUPS = [
  {
    id: 'all',
    label: 'All',
    desc: 'Three specialised practice areas, each handled by consultants who work exclusively within that region and route.',
  },
  {
    id: 'work',
    label: 'Work permits',
    desc: 'Our primary focus in Europe is securing standard work permits, helping you navigate the requirements for full-time employment and long-term residence.',
  },
  {
    id: 'seasonal',
    label: 'Seasonal & visiting',
    desc: 'For the USA, Canada, UK, and Australia, we specialize in processing visiting visas and facilitating seasonal work programs.',
  },
  {
    id: 'construction',
    label: 'Construction jobs',
    desc: 'In the UAE, we are actively recruiting for large-scale construction projects, handling recruitment, screening, and visa processing.',
  },
];

// PLACEHOLDER: document checklists are generic examples, not verified
// requirements. Replace with the real list for each route.
const DOCS = {
  work: [
    'Valid passport',
    'Job offer from a European employer',
    'Education and work certificates',
    'Police clearance certificate',
    'Passport-size photos',
  ],
  seasonal: [
    'Valid passport',
    'Bank statements (last 6 months)',
    'Proof of job, study or property at home',
    'Job offer (for seasonal work) or travel plan',
    'Passport-size photos',
  ],
  construction: [
    'Valid passport',
    'Trade or experience certificates',
    'Medical fitness certificate',
    'Passport-size photos',
  ],
};

export const DESTINATIONS = [
  {
    code: 'EU', name: 'Europe', group: 'work', visa: 'Work permit',
    time: '8–12 WKS', // PLACEHOLDER
    aliases: ['schengen', 'germany', 'france', 'italy', 'poland', 'eu'],
    desc: 'Our primary focus in Europe is securing standard work permits, helping you navigate the requirements for full-time employment and long-term residence.',
    services: ['Work Permits', 'Employer Contracts', 'Residence Pathways', 'Document Legalisation'],
  },
  {
    code: 'AE', name: 'UAE', group: 'construction', visa: 'Construction jobs',
    time: '3–5 WKS', // PLACEHOLDER
    aliases: ['emirates', 'dubai', 'abu dhabi', 'united arab emirates'],
    desc: 'In the UAE, we are actively recruiting for large-scale construction projects, handling recruitment, screening, and visa processing.',
    services: ['Construction Recruitment', 'Candidate Screening', 'Visa Processing', 'Site Mobilisation'],
  },
  {
    code: 'UK', name: 'United Kingdom', group: 'seasonal', visa: 'Seasonal & visiting',
    time: '3–6 WKS', // PLACEHOLDER
    aliases: ['uk', 'britain', 'england', 'london'],
    desc: 'In the UK, our consultants process visiting visas and seasonal work opportunities across a range of eligible sectors.',
    services: ['Visiting Visas', 'Seasonal Work Programs', 'Sponsor Liaison', 'Compliance Support'],
  },
  {
    code: 'US', name: 'United States', group: 'seasonal', visa: 'Seasonal & visiting',
    time: '4–10 WKS', // PLACEHOLDER
    aliases: ['usa', 'us', 'america'],
    desc: 'For the United States, we specialise in visiting visas and seasonal work programs, helping candidates navigate short-term entry with confidence.',
    services: ['Visiting Visas', 'Seasonal Work Programs', 'Documentation Support', 'Interview Preparation'],
  },
  {
    code: 'CA', name: 'Canada', group: 'seasonal', visa: 'Seasonal & visiting',
    time: '4–8 WKS', // PLACEHOLDER
    aliases: ['ca'],
    desc: 'In Canada, our primary focus is on facilitating Seasonal Work programs and processing Visiting Visas for short-term stays and employment.',
    services: ['Seasonal Work Programs', 'Temporary Permits', 'Compliance Support', 'Visiting Visas', 'Employer Matching'],
  },
  {
    code: 'AU', name: 'Australia', group: 'seasonal', visa: 'Seasonal & visiting',
    time: '3–6 WKS', // PLACEHOLDER
    aliases: ['au', 'aus'],
    desc: 'For Australia, we specialise in visiting visas and seasonal work programs suited to short-term employment and agricultural sectors.',
    services: ['Visiting Visas', 'Seasonal Work Programs', 'Regional Placement', 'Employer Matching'],
  },
].map((d) => ({ ...d, docs: DOCS[d.group] }));
