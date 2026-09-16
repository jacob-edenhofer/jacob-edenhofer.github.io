export type TwitterThread = {
  id: string;
  title: string;
  date: string;
  language: "English" | "German";
  kind?: ThreadKind;
};

// Optional label describing what a thread does: a summary of one paper or
// book, a primer on a literature, or a reading list.
export type ThreadKind = "paper-summary" | "book-summary" | "primer" | "reading-list";

export type ThreadGroup = {
  id: string;
  title: string;
  items: TwitterThread[];
};

// Dates and IDs come from the saved thread headers. Entries are newest first.
// The two threads on veto players and Ganghof were already linked on this page.
export const threadGroups: ThreadGroup[] = [
  {
    "id": "climate",
    "title": "Climate politics",
    "items": [
      {
        "id": "2063277710617514358",
        "title": "Degrowth and the erosion of support for climate policy",
        "date": "2026-06-06",
        "language": "English"
      },
      {
        "id": "2012992239408984257",
        "title": "Voters versus interest groups across the stages of decarbonisation",
        "date": "2026-01-18",
        "language": "English"
      },
      {
        "id": "2005674033258606687",
        "title": "My favourite climate papers of 2025",
        "date": "2025-12-29",
        "language": "English",
        "kind": "reading-list"
      },
      {
        "id": "2000944001806168354",
        "title": "Gender, occupational status, and support for the green transition",
        "date": "2025-12-16",
        "language": "English"
      },
      {
        "id": "1975650537547972914",
        "title": "Badenoch’s proposed repeal of the UK Climate Change Act",
        "date": "2025-10-07",
        "language": "English"
      },
      {
        "id": "1939770607953989817",
        "title": "Introducing the Climate Politics Framework",
        "date": "2025-06-30",
        "language": "English"
      },
      {
        "id": "1876215518384079306",
        "title": "Why a second Trump term may well derail the (US) energy transition",
        "date": "2025-01-06",
        "language": "German"
      },
      {
        "id": "1823100973541150876",
        "title": "Dewatripont and Roland and the sequencing of climate policy",
        "date": "2024-08-12",
        "language": "English",
        "kind": "paper-summary"
      },
      {
        "id": "1805285201364328554",
        "title": "Institutions and the strategic challenges of climate policymaking",
        "date": "2024-06-24",
        "language": "English"
      },
      {
        "id": "1770034720111251541",
        "title": "Elite cues and public opinion on climate policy",
        "date": "2024-03-19",
        "language": "English",
        "kind": "primer"
      },
      {
        "id": "1760635907995017502",
        "title": "The geopolitics of the green transition",
        "date": "2024-02-22",
        "language": "English"
      },
      {
        "id": "1752478438223495563",
        "title": "Policy feedback and the politics of green subsidies",
        "date": "2024-01-30",
        "language": "English"
      },
      {
        "id": "1722216966608523757",
        "title": "Reforming Germany’s climate law",
        "date": "2023-11-08",
        "language": "German"
      },
      {
        "id": "1703329859324330241",
        "title": "Did climate protests lead to Germany’s climate law?",
        "date": "2023-09-17",
        "language": "English"
      },
      {
        "id": "1679788474667356160",
        "title": "Stiglerian settings and climate policy",
        "date": "2023-07-14",
        "language": "German"
      },
      {
        "id": "1679460462956511232",
        "title": "Olsonian settings and the political (in)feasibility of climate policy",
        "date": "2023-07-13",
        "language": "German"
      },
      {
        "id": "1635997715837452291",
        "title": "Carbon pricing and its political economy",
        "date": "2023-03-15",
        "language": "German",
        "kind": "reading-list"
      },
      {
        "id": "1601210794259030016",
        "title": "Can Ostrom’s principles scale? Lessons from the eradication of smallpox",
        "date": "2022-12-09",
        "language": "English"
      }
    ]
  },
  {
    "id": "populism",
    "title": "Populism and the radical right",
    "items": [
      {
        "id": "1993758805000147137",
        "title": "Is fighting right-wing populism even possible?",
        "date": "2025-11-26",
        "language": "English"
      },
      {
        "id": "1982804858206859283",
        "title": "Credibility and the limits of accommodation on immigration",
        "date": "2025-10-27",
        "language": "English"
      },
      {
        "id": "1982077326390120865",
        "title": "The political effects of right-wing violence in Germany",
        "date": "2025-10-25",
        "language": "English",
        "kind": "primer"
      },
      {
        "id": "1957046944724844966",
        "title": "When accommodation on immigration can work",
        "date": "2025-08-17",
        "language": "English"
      },
      {
        "id": "1946877895323844900",
        "title": "The political economy of banning the AfD",
        "date": "2025-07-20",
        "language": "German"
      },
      {
        "id": "1912818177555231055",
        "title": "The pros and cons of the cordon sanitaire",
        "date": "2025-04-17",
        "language": "English"
      },
      {
        "id": "1875127004326158567",
        "title": "The political logic of populist bullshit: Reflection on Zürn’s FAZ article",
        "date": "2025-01-03",
        "language": "German"
      },
      {
        "id": "1863743988974416222",
        "title": "The accommodation debate and party competition",
        "date": "2024-12-03",
        "language": "English",
        "kind": "primer"
      },
      {
        "id": "1820385805308670391",
        "title": "The economics and politics of immigration in the UK",
        "date": "2024-08-05",
        "language": "English",
        "kind": "reading-list"
      },
      {
        "id": "1819655256583635349",
        "title": "How accommodating the far right can incite violence",
        "date": "2024-08-03",
        "language": "English"
      },
      {
        "id": "1816157318255644977",
        "title": "High-street vacancies, local decline, and populist support",
        "date": "2024-07-24",
        "language": "English"
      },
      {
        "id": "1668246736928755717",
        "title": "Electoral systems and the radical right’s threat to democracy",
        "date": "2023-06-12",
        "language": "English"
      }
    ]
  },
  {
    "id": "democracy",
    "title": "Liberal democracy and its tensions",
    "items": [
      {
        "id": "2007131571204001963",
        "title": "Voters’ responses to democratic backsliding",
        "date": "2026-01-02",
        "language": "English",
        "kind": "primer"
      },
      {
        "id": "1990822736554307921",
        "title": "Technocracy as insurance against losing political power",
        "date": "2025-11-18",
        "language": "English"
      },
      {
        "id": "1983994040342507951",
        "title": "Dahl on polyarchy and democratisation",
        "date": "2025-10-30",
        "language": "English",
        "kind": "book-summary"
      },
      {
        "id": "1886335627974651908",
        "title": "The rise and fall of technocratic democracies",
        "date": "2025-02-03",
        "language": "English"
      },
      {
        "id": "1869128300096110983",
        "title": "The case for liberal democracy and its limits",
        "date": "2024-12-17",
        "language": "German"
      },
      {
        "id": "1845435161850032510",
        "title": "The political consequences of technocratic economic policy",
        "date": "2024-10-13",
        "language": "English"
      },
      {
        "id": "1815847355234525533",
        "title": "A mostly sceptical take on citizens’ assemblies, part II",
        "date": "2024-07-23",
        "language": "English"
      },
      {
        "id": "1800848319469813866",
        "title": "Why voters may fail to sanction democratic backsliding",
        "date": "2024-06-12",
        "language": "English",
        "kind": "primer"
      },
      {
        "id": "1759718258234605742",
        "title": "A mostly sceptical take on citizens’ assemblies, part I",
        "date": "2024-02-19",
        "language": "English"
      },
      {
        "id": "1748083543480164666",
        "title": "Democratic hooliganism and excessive optimism in the resilience of democratic institutions",
        "date": "2024-01-18",
        "language": "English"
      },
      {
        "id": "1716052321820455017",
        "title": "Ignorant voters, rational electorates?",
        "date": "2023-10-22",
        "language": "English"
      }
    ]
  },
  {
    "id": "autocracy",
    "title": "Autocracy and competitive authoritarianism",
    "items": [
      {
        "id": "1821271761297789118",
        "title": "Fico’s authoritarianism and the power of autocratic imitation",
        "date": "2024-08-07",
        "language": "English"
      },
      {
        "id": "1757539820140696055",
        "title": "An overview of the political economy of autocracy",
        "date": "2024-02-13",
        "language": "English",
        "kind": "primer"
      },
      {
        "id": "1667987147603804162",
        "title": "Why personalised autocracies struggle with contract-intensive growth",
        "date": "2023-06-11",
        "language": "German"
      },
      {
        "id": "1601978348447711233",
        "title": "How EU membership helps sustain Orbán’s regime",
        "date": "2022-12-11",
        "language": "English"
      },
      {
        "id": "1597004142505263104",
        "title": "Did autocracies really handle Covid better than democracies?",
        "date": "2022-11-27",
        "language": "English"
      }
    ]
  },
  {
    "id": "institutions",
    "title": "Institutions and policymaking",
    "items": [
      {
        "id": "1987597300131147889",
        "title": "Political scandals and the clarity of accountability",
        "date": "2025-11-09",
        "language": "English"
      },
      {
        "id": "1985285872296620063",
        "title": "Summarising ‘Bad Democracy Traps’",
        "date": "2025-11-03",
        "language": "English",
        "kind": "paper-summary"
      },
      {
        "id": "1967573005074362380",
        "title": "Should politicians be paid higher wages?",
        "date": "2025-09-15",
        "language": "English"
      },
      {
        "id": "1932369783686615244",
        "title": "Are voters (as) dumb (as Bryan Caplan argues)?",
        "date": "2025-06-10",
        "language": "English"
      },
      {
        "id": "1878404899345444924",
        "title": "Germany’s debt brake, ageing voters, and public investment",
        "date": "2025-01-12",
        "language": "German"
      },
      {
        "id": "1878379229114487135",
        "title": "Ganghof on patterns of democracy",
        "date": "2025-01-12",
        "language": "English",
        "kind": "book-summary"
      },
      {
        "id": "1847043471879688293",
        "title": "Candidate selection and polarisation in the United States",
        "date": "2024-10-17",
        "language": "English"
      },
      {
        "id": "1824464754271789096",
        "title": "Legislative overload and administrative capacity",
        "date": "2024-08-16",
        "language": "German",
        "kind": "primer"
      },
      {
        "id": "1817808203201028576",
        "title": "Knowledge economy vs. first-past-the-post",
        "date": "2024-07-29",
        "language": "English"
      },
      {
        "id": "1782321494615294172",
        "title": "The uses and limits of the Varieties of Capitalism framework",
        "date": "2024-04-22",
        "language": "English"
      },
      {
        "id": "1774787712496595255",
        "title": "Why comparative politics matters for single-country analysis",
        "date": "2024-04-01",
        "language": "English"
      },
      {
        "id": "1770204231938568628",
        "title": "The war in Ukraine and strains within Germany’s traffic-light coalition",
        "date": "2024-03-19",
        "language": "English"
      },
      {
        "id": "1736338887486640624",
        "title": "Veto players and policy stability",
        "date": "2023-12-17",
        "language": "English",
        "kind": "primer"
      },
      {
        "id": "1713308082631999819",
        "title": "Clarity of responsibility under external constraints",
        "date": "2023-10-14",
        "language": "English"
      },
      {
        "id": "1690469312090263553",
        "title": "Lijphart on majoritarian and consensus democracy",
        "date": "2023-08-12",
        "language": "English",
        "kind": "book-summary"
      },
      {
        "id": "1610699608866406404",
        "title": "Lindvall on power sharing and the capacity for reform",
        "date": "2023-01-04",
        "language": "English",
        "kind": "book-summary"
      },
      {
        "id": "1605515288107024385",
        "title": "Jacobs on long-term policymaking",
        "date": "2022-12-21",
        "language": "English",
        "kind": "book-summary"
      },
      {
        "id": "1603519205650866178",
        "title": "Cox and McCubbins on institutions and policy outcomes",
        "date": "2022-12-15",
        "language": "English",
        "kind": "paper-summary"
      }
    ]
  },
  {
    "id": "redistribution",
    "title": "Inequality and redistribution",
    "items": [
      {
        "id": "2009729310995665013",
        "title": "Meritocracy when luck and effort are hard to distinguish",
        "date": "2026-01-09",
        "language": "English"
      },
      {
        "id": "1980404444753010930",
        "title": "Compensation and the backlash against globalisation",
        "date": "2025-10-20",
        "language": "English",
        "kind": "paper-summary"
      },
      {
        "id": "1974435991302947259",
        "title": "Besley et al. on growth experience and zero-sum attitudes",
        "date": "2025-10-04",
        "language": "English",
        "kind": "paper-summary"
      },
      {
        "id": "1969363353869951018",
        "title": "Cochrane versus Blanchard on the political externalities of wealth taxes",
        "date": "2025-09-20",
        "language": "English"
      },
      {
        "id": "1860686521809985660",
        "title": "Korpi’s power resources theory and recent labour economics",
        "date": "2024-11-24",
        "language": "English"
      },
      {
        "id": "1847977851791810568",
        "title": "Ansell and Gingrich on education, insecurity, and political attitudes",
        "date": "2024-10-20",
        "language": "English",
        "kind": "paper-summary"
      },
      {
        "id": "1845826285060174328",
        "title": "Acemoglu and Robinson on inequality and democratisation",
        "date": "2024-10-14",
        "language": "English",
        "kind": "primer"
      },
      {
        "id": "1841572542953230615",
        "title": "Cavaillé on fairness and support for redistribution",
        "date": "2024-10-02",
        "language": "English",
        "kind": "book-summary"
      },
      {
        "id": "1825935220031500339",
        "title": "The political economy of redistribution",
        "date": "2024-08-20",
        "language": "English",
        "kind": "primer"
      },
      {
        "id": "1727280137681457169",
        "title": "Iversen and Rosenbluth on work and gender inequality",
        "date": "2023-11-22",
        "language": "English",
        "kind": "book-summary"
      },
      {
        "id": "1714336624547381553",
        "title": "Core voters and regressive policies of Germany’s progressive traffic-light coalition",
        "date": "2023-10-17",
        "language": "German"
      }
    ]
  },
  {
    "id": "advice",
    "title": "Expertise and policy advice",
    "items": [
      {
        "id": "1999224274582720740",
        "title": "The political economy of policy advice",
        "date": "2025-12-11",
        "language": "English"
      },
      {
        "id": "1968051040974147712",
        "title": "Expert advice, public opinion, and democratic accountability",
        "date": "2025-09-16",
        "language": "English"
      },
      {
        "id": "1805556455765930020",
        "title": "The foundations and limits of welfare economics",
        "date": "2024-06-25",
        "language": "English",
        "kind": "primer"
      }
    ]
  },
  {
    "id": "research",
    "title": "Other",
    "items": [
      {
        "id": "2085095990592188549",
        "title": "What a failed experiment on gender and climate policy taught us",
        "date": "2026-08-05",
        "language": "English"
      },
      {
        "id": "2069464875634405497",
        "title": "Brexit at ten and the politics of regional decline",
        "date": "2026-06-23",
        "language": "English"
      },
      {
        "id": "1974069665338098008",
        "title": "Reflections on German reunification from a (historical) political economy perspective, part II",
        "date": "2025-10-03",
        "language": "English"
      },
      {
        "id": "1868658513440022580",
        "title": "My favourite books in 2024",
        "date": "2024-12-16",
        "language": "English",
        "kind": "reading-list"
      },
      {
        "id": "1855018725935923425",
        "title": "The political costs of Trump’s first trade war",
        "date": "2024-11-08",
        "language": "English",
        "kind": "paper-summary"
      },
      {
        "id": "1841780267230384498",
        "title": "Reflections on German reunification from a (historical) political economy perspective, part I",
        "date": "2024-10-03",
        "language": "German"
      },
      {
        "id": "1840790536929632517",
        "title": "Models of social change",
        "date": "2024-09-30",
        "language": "English"
      },
      {
        "id": "1775546545842065541",
        "title": "Moral hazard and the commitment problem in bank bailouts",
        "date": "2024-04-03",
        "language": "German"
      },
      {
        "id": "1758084907597693402",
        "title": "The perils of spatial eyeball econometrics: The case of East-West differences in Germany",
        "date": "2024-02-15",
        "language": "English",
        "kind": "reading-list"
      },
      {
        "id": "1751258861405630521",
        "title": "Reading list on the Shoah and the Nazi dictatorship, part II",
        "date": "2024-01-27",
        "language": "English",
        "kind": "reading-list"
      },
      {
        "id": "1618941225968758784",
        "title": "Reading list on the Shoah and the Nazi dictatorship, part I",
        "date": "2023-01-27",
        "language": "English",
        "kind": "reading-list"
      }
    ]
  }
];
