import {
  ProfileInfo,
  CareerHighlight,
  ExperienceItem,
  AwardItem,
  CompetitionItem,
  CertificationItem,
  SkillCategory,
  EducationItem,
  AcademicReference,
} from '../types';

export const profileData: ProfileInfo = {
  name: 'Md. Jamil Hosen Khandakar',
  shortName: 'Jamil Khandakar',
  tagline: 'Turning ideas into impact through strategic thinking, creative execution, and people-centered leadership.',
  summary:
    'Dynamic Public Administration senior (Cumulative CGPA: 3.65/4.00) with extensive experience in organizational leadership, strategic communication, capacity building, and process optimization. Proven track record of managing cross-functional teams of up to 200+ members, spearheading large-scale promotional campaigns, and executing operational frameworks. Adaptable and result-oriented professional skilled in project management, analytical problem-solving, and digital branding.',
  email: 'jamilkhandakar98@gmail.com',
  phone: '+880 1776914384',
  location: 'University of Rajshahi (Present) | Pirgachha, Rangpur, Bangladesh (Permanent)',
  linkedinUrl: 'https://www.linkedin.com/in/jamil-khandakar',
  cgpa: '3.65 / 4.00',
  university: 'University of Rajshahi',
  degree: 'Bachelor of Public Administration',
  department: 'Department of Public Administration (4th Year, 2nd Semester)',
  focusPills: [
    'Strategic Thinking',
    'Creative Execution',
    'Team Leadership',
    'Project Management',
    'Social Impact',
  ],
  stats: [
    {
      label: '750+',
      value: 'Teams Reached',
      sublabel: 'Outreach & Campus Engagement at Hult Prize RU',
    },
    {
      label: '200+',
      value: 'Members Led',
      sublabel: 'Strategic HR & Operations at RU Business Club',
    },
    {
      label: '450+',
      value: 'Visual Assets',
      sublabel: 'Nationwide Branding & Campaign Direction',
    },
    {
      label: '170+',
      value: 'Trees Planted',
      sublabel: 'Project Pathchinhno Environmental Action',
    },
    {
      label: '3.65',
      value: 'Cumulative CGPA',
      sublabel: 'Bachelor of Public Administration (4th Year)',
    },
  ],
};

export const careerHighlights: CareerHighlight[] = [
  {
    id: 'rubc-vp',
    role: 'Vice President',
    organization: 'Rajshahi University Business Club (RUBC)',
    subOrganization: 'Executive Committee 2026-27 | Resource Management & Planning',
    period: 'Apr 2026 – Present',
    category: 'Executive Leadership',
    badge: 'Current Executive Role',
    badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    shortIntro:
      'Overseeing HR and strategic operations while contributing to member development, organizational coordination, and club-wide initiatives within a 200+ member community.',
    description:
      'Serving as the Vice President of Resource Management & Planning for one of the premier student-led business organizations in Bangladesh. Directing cross-functional human resources operations, talent curation, capacity building workshops, and operational pipelines.',
    metrics: [
      { label: 'Community Size', value: '200+ Members' },
      { label: 'Focus Area', value: 'Strategic Operations & HR' },
      { label: 'Key Deliverable', value: 'Leadership Pipelines' },
    ],
    bulletPoints: [
      'Human Resources & Strategic Operations: Oversee planning and human resource operations for 200+ members, optimizing delegation and leadership development pipelines.',
      'Capacity Building: Formulate and conduct skill-building workshops to enhance member capabilities in strategic planning, analytical thinking, and event operations.',
      'Organizational Coordination: Synchronize multi-department initiatives spanning corporate relations, branding, competitive ideation, and logistics.',
    ],
    imageUrl: '/images/jamil_profile_official.jpg',
    imageCaption: 'Executive Committee Announcement — Vice President, Resource Management & Planning',
    tags: ['HR Operations', 'Leadership Pipeline', 'Capacity Building', 'Strategic Planning'],
  },
  {
    id: 'casecation-wing-head',
    role: 'Branding and Production Wing Head',
    organization: 'CaseCation Season 2',
    subOrganization: 'National Business Case Competition — Rajshahi University Business Club',
    period: 'Aug 2025 – Oct 2025',
    category: 'Creative Campaign & Production',
    badge: 'National Campaign Direction',
    badgeColor: 'border-rose-500/30 bg-rose-500/10 text-rose-300',
    shortIntro:
      'Led Branding & Production, overseeing creative direction, visual communication, and cross-functional execution throughout the competition.',
    description:
      'A national business case competition by Rajshahi University Business Club, where I led Branding & Production, overseeing creative direction, visual communication, promotional content, and cross-functional execution.',
    metrics: [
      { label: 'Visual Assets', value: '450+' },
      { label: 'Promo Banners', value: '20+ Nationwide' },
      { label: 'Creative Team', value: '15+ Designers & Editors' },
    ],
    bulletPoints: [
      'Strategic Campaign Direction: Led a 15+ member team in designing and deploying 450+ visual assets and 20+ nationwide promotional banners to maximize digital outreach.',
      'Brand Identity & Cohesion: Formulated a distinct, high-impact aesthetic identity spanning digital social media kits, stage LED backdrops, print collateral, and certificates.',
      'Grand Finale Stage Execution: Managed full visual stage production, video teasers, and presentation frameworks during the grand finale partnering with national sponsors.',
    ],
    imageUrl: '',
    imageCaption: 'Recognition at CaseCation Season 2 Grand Finale Stage Ceremony',
    tags: ['Creative Direction', '450+ Assets', 'Nationwide Outreach', 'Team Leadership'],
  },
  {
    id: 'hult-prize-deputy-director',
    role: 'Deputy Campus Director',
    organization: 'Hult Prize at University of Rajshahi',
    subOrganization: 'Global Flagship Social Enterprise Competition',
    period: 'Sept 2025 – Feb 2026',
    category: 'Global Program Management',
    badge: 'Campus Flagship Execution',
    badgeColor: 'border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300',
    shortIntro:
      'As Deputy Campus Director, I coordinated key teams and supported campus-wide operations, communications, and program execution.',
    description:
      'A global student entrepreneurship program. As Deputy Campus Director, I worked with a 45-member team and supported outreach that brought in 750+ registered teams.',
    metrics: [
      { label: 'Registered Teams', value: '750+' },
      { label: 'Core Team', value: '50+ Members' },
      { label: 'Divisions Supervised', value: '3 Specialized Wings' },
    ],
    bulletPoints: [
      'Team Leadership & Delivery: Directed 50+ members across 3 specialized divisions (Graphics & Visuals, IT & Administration, Media & Documentation) to execute the campus-level flagship social enterprise competition.',
      'Campus-wide Outreach: Architected strategic communication drives that onboarded and engaged 750+ student teams across University of Rajshahi departments.',
      'Operational Frameworks: Established real-time event management protocols, judge coordination, and stage setups for semi-final and grand finale rounds.',
    ],
    imageUrl: '',
    imageCaption: 'Hult Prize at University of Rajshahi — Organizing Committee on Campus Grounds',
    tags: ['Global Program', '750+ Teams', 'Cross-functional Management', 'Social Enterprise'],
  },
  {
    id: 'pathchinhno-social-impact',
    role: 'Umbrella Social Initiative Lead',
    organization: 'Project Pathochinhno (পথ চিহ্ন)',
    subOrganization: 'Hult Prize at University of Rajshahi',
    period: '2025 – 2026',
    category: 'Social Innovation & ESG',
    badge: 'Social Impact Project',
    badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    shortIntro:
      'A social impact initiative under Hult Prize at University of Rajshahi, featuring The Green Footprint, Health & Well-being, and Community Engagement initiatives focused on sustainability, awareness, and community impact.',
    description:
      'Designed and spearheaded a multi-faceted grassroots social impact project targeting United Nations Sustainable Development Goals (SDGs 13, 14, 15) in the Rajshahi region.',
    metrics: [
      { label: 'Tree Plantation', value: '170+ Trees' },
      { label: 'River Conservation', value: '30+ Households' },
      { label: 'Animal Shelters', value: '05+ Street Shelters' },
    ],
    bulletPoints: [
      'The Green FootPrint: Orchestrated a 170+ sapling tree plantation campaign across key university and peri-urban zones to combat climate vulnerability.',
      'Mission BluePulse: Save Life Below Water campaign along the Padma River, raising direct ecological awareness across 30+ riverbank households and local communities.',
      'Winter Heaven: Built and deployed 05+ temporary insulated shelters and welfare points for street animals during extreme North Bengal winter conditions.',
    ],
    imageUrl: '',
    imageCaption: 'Project Pathochinhno Environmental Volunteers along the Padma River in Rajshahi',
    tags: ['Sustainability', 'Padma River', 'Tree Plantation', 'Animal Welfare', 'UN SDGs'],
    subProjects: [
      {
        name: 'The Green FootPrint',
        banglaName: 'গ্রিন ফুটপ্রিন্ট',
        metric: '170+ Trees Planted',
        description: 'Large-scale afforestation drive mobilizing youth volunteers across urban Rajshahi to combat deforestation and urban heat islands.',
        iconName: 'Trees',
      },
      {
        name: 'Mission BluePulse',
        banglaName: 'মিশন ব্লুপালস',
        metric: '30+ Riverbank Households',
        description: 'Targeted advocacy on saving aquatic life along the Padma River, reducing plastic pollution and hazardous dumping in local water bodies.',
        iconName: 'Droplets',
      },
      {
        name: 'Winter Heaven',
        banglaName: 'উইন্টার হেভেন',
        metric: '05+ Weatherproof Shelters',
        description: 'Constructing humane, insulated micro-shelters to protect vulnerable community animals from severe northern winter frost.',
        iconName: 'Home',
      },
    ],
  },
];

export interface DetailedRoleItem {
  id: string;
  role: string;
  organization: string;
  subOrganization?: string;
  period: string;
  type?: string;
  points: string[];
}

export const professionalExperienceList: DetailedRoleItem[] = [
  {
    id: 'english-language-trainer',
    role: "English Language Trainer - Smart Student's Finance (SSF) - CEC",
    organization: 'BRAC Microfinance (Dabi)',
    period: 'July 2026 – Present',
    type: 'Corporate Educational Initiative',
    points: [
      'Teach 65+ primary and high school students practical English communication skills.',
      "Conduct interactive lessons to improve students' English proficiency and confidence.",
    ],
  },
  {
    id: 'research-enumerator',
    role: 'Research Enumerator | Government-Funded Research Projects',
    organization: 'Department of Public Administration, University of Rajshahi',
    period: '2025 – 2026',
    type: 'Academic Field Research',
    points: [
      'Collected primary data from 250+ respondents and 10 FGDs through field interviews and surveys.',
      'Conducted fieldwork across 5-6 upazilas for 5 research projects.',
    ],
  },
];

export const leadershipAndOrganizingExperience: DetailedRoleItem[] = [
  {
    id: 'casecation-wing-head',
    role: 'Branding and Production Wing Head',
    organization: 'CaseCation Season 2',
    period: 'Aug 2025 – Oct 2025',
    type: 'National Case Competition',
    points: [
      'Led 15-member team; produced 450+ visual assets & 20+ nationwide banners.',
      'Managed full visual stage production, video teasers, and presentation frameworks during grand finale.',
    ],
  },
  {
    id: 'unravel-5x',
    role: 'Deputy Director of Branding & Promotion',
    organization: 'UNRAVEL 5X',
    period: 'Aug 2025 – Sep 2025',
    type: 'Business Case Competition',
    points: [
      'Managed promotional design deliverables, producing 150+ custom visual designs and 10+ promotional banners.',
      'Coordinated social media publication calendar and participant engagement campaigns across regional campuses.',
    ],
  },
  {
    id: 'hult-admin-chief',
    role: 'Chief of Administration',
    organization: 'HULT PRIZE at University of Rajshahi 2024-25',
    period: 'Nov 2024 – Feb 2025',
    type: 'Global Innovation Challenge',
    points: [
      'Supervised administrative logistics, event scheduling, and operational resource coordination for seamless execution.',
      'Managed volunteer shifts, venue booking, inventory distribution, and real-time contingency resolution across all event days.',
    ],
  },
];

export const leadershipAndAffiliations: DetailedRoleItem[] = [
  {
    id: 'rubc-vp',
    role: 'Vice President (Resource Management & Planning)',
    organization: 'Rajshahi University Business Club (RUBC)',
    period: 'Apr 2026 – Present',
    type: 'Executive Leadership',
    points: [
      'Directing HR and strategic operations for 200+ members and optimizing leadership development pipelines.',
      'Formulating and conducting skill-building workshops to enhance member capabilities in strategic planning.',
    ],
  },
  {
    id: 'hult-deputy-director',
    role: 'Former Deputy Campus Director',
    organization: 'HULT PRIZE at University of Rajshahi',
    period: '2023 – 2024',
    type: 'Global Campus Operations',
    points: [
      'Spearheaded campus-wide mobilization across 750+ teams and directed 50+ members across 3 specialized wings.',
    ],
  },
  {
    id: 'pathchinhno-lead',
    role: 'Founder & Lead Coordinator',
    organization: 'Project Pathchinhno (পথ চিহ্ন)',
    period: '2023 – Present',
    type: 'Social & ESG Initiative',
    points: [
      'Spearheading The Green FootPrint (170+ trees planted), Mission BluePulse (Padma River conservation), and Winter Heaven.',
    ],
  },
  {
    id: 'pasa-lead',
    role: 'Executive Committee Member & Lead',
    organization: 'Public Administration Student Association',
    period: '2023 – Present',
    type: 'Student Governance',
    points: [
      'Coordinating student welfare, academic seminars, and inter-batch cultural initiatives.',
    ],
  },
];

export const organizingExperience: ExperienceItem[] = [
  {
    id: 'unravel-5x',
    role: 'Deputy Director of Branding & Promotion',
    organization: 'UNRAVEL 5X (Regional Case Competition)',
    period: 'Feb 2025',
    category: 'branding',
    highlights: [
      'Managed promotional design deliverables, successfully producing 150+ custom visual designs and 10+ promotional banners.',
      'Coordinated social media publication calendar and participant engagement campaigns across regional campuses.',
    ],
  },
  {
    id: 'hult-admin-chief',
    role: 'Chief of Administration',
    organization: 'HULT PRIZE 2024-25',
    period: 'Nov 2024 – Feb 2025',
    category: 'operations',
    highlights: [
      'Supervised administrative logistics, event scheduling, and operational resource coordination for seamless execution.',
      'Managed volunteer shifts, venue booking, inventory distribution, and real-time contingency resolution across all event days.',
    ],
  },
];

export const honorsAndAwards: AwardItem[] = [
  {
    id: 'imagen-venture',
    title: 'Finalist: ImaGen Venture Youth Challenge 2024-25',
    organization: 'UNICEF, Generation Unlimited & JAAGO Foundation (Mymensingh Boot-Camp)',
    type: 'Social Innovation & Entrepreneurship',
    year: '2024–2025',
    description: 'Selected as top finalist among thousands of youth innovators across Bangladesh for designing community-driven scalable social solutions.',
    featured: true,
  },
  {
    id: 'ignite-rubc',
    title: 'Champion: Article Writing Segment',
    organization: 'Ignite 3.0 (Rajshahi University Business Club)',
    type: 'Academic & Strategic Writing',
    year: '2024',
    description: 'Secured 1st Place for strategic analysis, macroeconomic articulation, and youth enterprise business critique.',
    featured: true,
  },
  {
    id: 'casecation-production-award',
    title: 'Excellence in Creative Production',
    organization: 'CaseCation Season 2 (National Business Case Competition)',
    type: 'Branding & Production Directorship',
    year: '2025',
    description: 'Special on-stage executive crest and citation for curating 450+ promotional assets and leading 15+ creative team members.',
    featured: true,
  },
  {
    id: 'mun-special-mention',
    title: 'Special Mention II',
    organization: 'Metropolitan Univ. National MUN 2025',
    type: 'Diplomacy & Public Policy',
    year: '2025',
    description: 'Recognized for outstanding diplomatic negotiation, resolution drafting, and committee speech delivery.',
    featured: true,
  },
  {
    id: 'basketball-runner-up',
    title: 'Runners-Up: Inter Department Basketball Tournament',
    organization: 'University of Rajshahi (RU)',
    type: 'Athletics & Team Sports',
    year: '2024',
    description: 'Represented Department of Public Administration with rigorous teamwork, stamina, and competitive spirit.',
  },
  {
    id: 'best-talented-face',
    title: 'Best Talented Face',
    organization: 'Pirgachha Upazila Quiz Competition',
    type: 'General Knowledge & Academics',
    year: 'Competitive Award',
    description: 'First rank across upazila-level competitive academic & general knowledge assessment.',
  },
];

export const caseCompetitions: CompetitionItem[] = [
  { name: "CAPITALIZER '25", stage: 'Semi-finalist', category: 'National Business Strategy' },
  { name: 'NEGOCIO 2.0', stage: 'Semi-finalist', category: 'Case Analysis & Pitch' },
  { name: 'CaseSprint', stage: 'Semi-finalist', category: 'Rapid Problem Solving' },
  { name: 'CaseSpecs 3.0', stage: 'Semi-finalist', category: 'Product Strategy' },
  { name: 'Breaking Brand 2025', stage: 'Participant', category: 'Brand Revitalization' },
  { name: 'ProMAESTROS', stage: 'Participant', category: 'Managerial Decision Making' },
];

export const leadershipCertifications: CertificationItem[] = [
  {
    title: 'Aspire Leadership Program',
    issuer: 'Aspire Institute (Founded by Harvard University Professors)',
    year: '2025',
  },
  {
    title: 'Event Planning & Project Management',
    issuer: 'Bangladesh Youth Leadership Center (BYLC)',
    year: '2024',
  },
  {
    title: 'Bystander Youth Leadership Training',
    issuer: 'Rupantar',
    year: '2024',
  },
  {
    title: 'Hult Prize Global Campus Leadership',
    issuer: 'Hult Prize at University of Rajshahi',
    year: '2024–2025',
  },
];

export const certificationsList = [
  {
    id: 'aspire-leaders',
    title: 'Aspire Leadership Program',
    issuer: 'Aspire Institute (Founded by Harvard University Faculty)',
    date: '2025',
    type: 'Global Leadership',
    credentialId: 'ASP-2025-LEAD',
    description:
      'Immersive curriculum emphasizing strengths-based leadership, global cross-cultural collaboration, and design-thinking approaches to systemic societal challenges.',
  },
  {
    id: 'unicef-imagen',
    title: 'ImaGen Ventures Youth Challenge Finalist',
    issuer: 'UNICEF, Generation Unlimited & JAAGO Foundation',
    date: '2024 – 2025',
    type: 'Social Innovation & Enterprise',
    credentialId: 'UNICEF-IMAGEN-25',
    description:
      'Selected national finalist and boot-camp participant for developing youth-led social enterprise models addressing climate sustainability and grassroots impact.',
  },
  {
    id: 'bylc-event-planning',
    title: 'Event Planning & Project Management',
    issuer: 'Bangladesh Youth Leadership Center (BYLC)',
    date: '2024',
    type: 'Operations & Execution',
    credentialId: 'BYLC-EP-4921',
    description:
      'Certified training in project lifecycles, critical path management, crisis contingency planning, and stakeholder communication for mega-events.',
  },
  {
    id: 'hult-appreciation',
    title: 'Hult Prize Leadership & 750+ Teams Mobilization',
    issuer: 'Hult Prize Foundation & University of Rajshahi',
    date: '2024 – 2025',
    type: 'Global Program Management',
    credentialId: 'HULT-RU-2025-LEAD',
    description:
      'Official Certificate of Appreciation for outstanding leadership as Deputy Campus Director and Chief of Administration, successfully onboarding 750+ student teams.',
  },
  {
    id: 'rupantar-bystander',
    title: 'Bystander Youth Leadership Training',
    issuer: 'Rupantar',
    date: '2024',
    type: 'Civic & Social Action',
    credentialId: 'RUP-BYST-882',
    description:
      'Trained in active bystander intervention methodologies, conflict de-escalation, human rights defense, and peer-to-peer mobilization in campus environments.',
  },
  {
    id: 'public-policy-ru',
    title: 'Administrative Governance & Public Policy',
    issuer: 'Department of Public Administration, University of Rajshahi',
    date: '2023 – 2025',
    type: 'Academic Specialization',
    credentialId: 'RU-BPA-GOV',
    description:
      'Advanced specialized seminar series in bureaucratic reform, institutional accountability, human resource administration, and public sector governance.',
  },
  {
    id: 'creative-branding-design',
    title: 'Brand Identity Design & Visual Campaign Direction',
    issuer: 'Creative Production Directorate, RUBC',
    date: '2024',
    type: 'Design & Visual Strategy',
    credentialId: 'RUBC-DES-004',
    description:
      'Mastery in vector graphics (Adobe Illustrator), commercial raster editing (Photoshop), print prepress, and social campaign visual packaging.',
  },
  {
    id: 'data-analytics-tools',
    title: 'Executive Presentations & Quantitative Analysis',
    issuer: 'Business Analytics Lab, RU',
    date: '2024',
    type: 'Analytical Tools',
    credentialId: 'BAL-EXCEL-09',
    description:
      'Advanced spreadsheet modeling (Microsoft Excel), data visualization with charts and pivot tables, and keynote presentation crafting in PowerPoint.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Strategic & Management Skills',
    skills: [
      { name: 'Strategic Planning & Operations' },
      { name: 'Human Resource Management' },
      { name: 'Cross-functional Team Leadership' },
      { name: 'Project & Event Management' },
      { name: 'Analytical & Critical Thinking' },
      { name: 'Public Administration & Policy' },
      { name: 'Stakeholder & Press Relations' },
      { name: 'Social Enterprise & Sustainability' },
    ],
  },
  {
    category: 'Creative & Technical Software Stack',
    skills: [
      { name: 'Meta Business Suite', level: 'Page Management & Campaign Ops' },
      { name: 'Adobe Illustrator', level: 'Visual Campaign & Vector Design' },
      { name: 'Adobe Photoshop', level: 'Photo Compositing & Brand Collateral' },
      { name: 'Canva Pro', level: 'Rapid Social Media Graphics' },
      { name: 'CapCut', level: 'Video Production & Event Promos' },
      { name: 'Microsoft PowerPoint', level: 'Executive Pitches & Keynotes' },
      { name: 'Digital Branding', level: '450+ Campaign Assets' },
      { name: 'Google Workspace', level: 'Collaborative Workflows' },
    ],
  },
];

export const educationList: EducationItem[] = [
  {
    degree: 'Bachelor of Public Administration (BPA)',
    institution: 'University of Rajshahi',
    location: 'Rajshahi, Bangladesh',
    period: 'Nov 2022 – Present',
    result: 'Cumulative CGPA: 3.65 / 4.00',
    details: 'Currently studying in 4th year 2nd semester. Focusing on public policy, organizational behavior, strategic administration, human resource governance, and administrative systems.',
  },
  {
    degree: 'Higher Secondary Certificate (HSC) — Humanities',
    institution: 'Pirgachha Govt. College',
    location: 'Pirgachha, Rangpur, Bangladesh',
    period: 'Passed: 2021 (Dinajpur Board)',
    result: 'GPA 5.00 / 5.00 (Golden / Perfect GPA)',
    details: 'Academic excellence in humanities curriculum, critical analysis, and regional debate and general knowledge quiz competitions.',
  },
  {
    degree: 'Secondary School Certificate (SSC) — Science / Humanities',
    institution: 'Jnankur High School',
    location: 'Pirgachha, Rangpur, Bangladesh',
    period: 'Completed (Dinajpur Board)',
    result: 'GPA 4.78 / 5.00',
    details: 'Graduated with high distinction; active in school science club, mathematics Olympiads, cultural competitions, and academic tournaments.',
  },
];

export const academicReferences: AcademicReference[] = [
  {
    name: 'Dr. Mst. Marzina Begum',
    title: 'Chairman',
    department: 'Department of Public Administration',
    institution: 'University of Rajshahi',
    email: 'marzinabegum80@gmail.com',
    phone: '+880 1712-985854',
  },
  {
    name: 'Dr. Md. Nurul Momen',
    title: 'Professor',
    department: 'Department of Public Administration',
    institution: 'University of Rajshahi',
    email: 'nurulmomen78@gmail.com',
    phone: '+880 1716-438902',
  },
];

export interface SportsTournamentItem {
  id: string;
  sport: 'basketball' | 'cricket' | 'football';
  tournamentName: string;
  season: string;
  achievement: string;
  isChampion: boolean;
  team: string;
  role: string;
  keyHighlights: string[];
  accolades: string[];
  accentColor: string;
}

export const sportsAndGamesData: SportsTournamentItem[] = [
  {
    id: 'cricket-tournament',
    sport: 'cricket',
    tournamentName: 'Intra Department Cricket Tournament',
    season: '2023 & 2026',
    achievement: 'Champion 2 Times (2023, 2026)',
    isChampion: true,
    team: 'Department of Public Administration Cricket Squad',
    role: 'Captain (Both Editions) & All-Rounder',
    keyHighlights: [
      'Led team as Captain to two consecutive championship titles (2023, 2026)',
      'Awarded Man of the Tournament (MVP) in both tournaments',
      'Orchestrated strategic field settings, bowling rotations, and decisive match finishes under high pressure',
    ],
    accolades: [
      '2x Champion',
      '2x Team Captain',
      '2x Man of the Tournament (MVP)',
    ],
    accentColor: '#34D399',
  },
  {
    id: 'football-tournament',
    sport: 'football',
    tournamentName: 'Intra University Football Tournament',
    season: '2023, 2024, 2025',
    achievement: 'Champion 3 Times (2023, 2024, 2025)',
    isChampion: true,
    team: 'Department of Public Administration Football Team',
    role: 'Captain (2 Times) & Playmaker',
    keyHighlights: [
      'Achieved historic 3-consecutive-year championship streak (2023, 2024, 2025)',
      'Led the team as Captain in 2 out of 3 championship campaigns',
      'Demonstrated tactical on-field vision, high stamina, and defensive-to-offensive transitions in inter-department knockout stages',
    ],
    accolades: [
      '3x University Champion',
      '2x Team Captain',
      '3-Peat Dynasty',
    ],
    accentColor: '#00D1FF',
  },
  {
    id: 'basketball-tournament',
    sport: 'basketball',
    tournamentName: 'Intra University Basket Ball Tournament 2024-25',
    season: '2024–2025',
    achievement: 'Runner-up (2025)',
    isChampion: false,
    team: 'Department of Public Administration Basket Ball Team',
    role: 'Defender',
    keyHighlights: [
      'Secured Runner-up trophy at university-wide court championship',
      'Played primary role as starting Defender anchoring defensive rebounds and perimeter stops',
      'Committed high-intensity team play, quick court transitions, and tactical man-to-man coverage',
    ],
    accolades: [
      'Runner-up (2025)',
      'Starting Defender',
      'Court Finalist',
    ],
    accentColor: '#F59E0B',
  },
];

