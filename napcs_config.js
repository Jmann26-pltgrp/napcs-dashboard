'use strict';
/**
 * napcs_config.js — National Configuration & Summary Data
 * PLT Strategies Group, Inc. | May 2026
 * Contains: national totals, state summaries, density table, jurisdiction data
 * UPDATE when registry version changes or research sessions complete.
 */
const NAPCS_CONFIG = {
  "national": {
    "universe": 4940,
    "confirmed": 308,
    "dependent": 214,
    "combined": 522,
    "density": "10.6%",
    "confirmed_density": "6.2%",
    "organizing": 2,
    "decertified": 5,
    "closed": 12,
    "jurisdictions": 21
  },
  "state_data": {
    "AZ": {
      "name": "Arizona",
      "universe": 562,
      "conf": 4,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "lb": "NLRB Region 28 (Phoenix)",
      "lb_abbrev": "NLRB",
      "note": "National Labor Relations Act (NLRA). Arizona is a right-to-work state (ARS §23-1302). No state public-sector collective "
    },
    "CA": {
      "name": "California",
      "universe": 1246,
      "conf": 139,
      "dep": 66,
      "org": 0,
      "dec": 2,
      "clo": 0,
      "lb": "PERB(CA) — California Public Employment Relations Board",
      "lb_abbrev": "PERB(CA) — California Public Employment ",
      "note": "Educational Employment Relations Act (EERA), Gov. Code §3540 et seq."
    },
    "CT": {
      "name": "Connecticut",
      "universe": 21,
      "conf": 4,
      "dep": 1,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "lb": "SBLR (CT)",
      "lb_abbrev": "Connecticut State Board of Labor Relatio",
      "note": "Connecticut Teacher Negotiation Act (TNA) — Conn. Gen. Stat. §10-153a et seq. Governs certificated staff in most CT char"
    },
    "DC": {
      "name": "Washington DC",
      "universe": 125,
      "conf": 7,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 1,
      "lb": "NLRB",
      "lb_abbrev": "NLRB— Region 5 (Baltimore/Washington)",
      "note": "National Labor Relations Act (NLRA). All DC Public Charter Schools (PCS) are authorized by the DC Public Charter School "
    },
    "DE": {
      "name": "Delaware",
      "universe": 23,
      "conf": 4,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "lb": "PERB(DE)",
      "lb_abbrev": "Delaware Public Employment Relations Boa",
      "note": "14 Del.C. Chapter 40 — Public School Employment Relations Act (PSERA). All Delaware charter schools are public employers"
    },
    "FL": {
      "name": "Florida",
      "universe": 734,
      "conf": 5,
      "dep": 3,
      "org": 0,
      "dec": 0,
      "clo": 1,
      "lb": "PERC (FL)",
      "lb_abbrev": "Florida Public Employees Relations Commi",
      "note": "Florida Public Employees Relations Act (PERA), Fla. Stat. §447.203. PERC(FL) has exclusive jurisdiction over all FL char"
    },
    "IL": {
      "name": "Illinois",
      "universe": 131,
      "conf": 30,
      "dep": 1,
      "org": 0,
      "dec": 0,
      "clo": 5,
      "lb": "NLRB (Region 13) / IELRB",
      "lb_abbrev": "NLRB, Region 13 (Chicago) — primary juri",
      "note": "National Labor Relations Act (NLRA) for private nonprofits (most IL charters, per Chicago Mathematics & Science Academy,"
    },
    "LA": {
      "name": "Louisiana",
      "universe": 142,
      "conf": 3,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 1,
      "lb": "LSCSC / NLRB R15",
      "lb_abbrev": "Louisiana State Civil Service Commission",
      "note": "Louisiana Employee Relations Act (LERA) — post-Act 172 (signed May 23, 2024) for all BESE-authorized Type 2/5 charters. "
    },
    "MA": {
      "name": "Massachusetts",
      "universe": 73,
      "conf": 8,
      "dep": 5,
      "org": 0,
      "dec": 1,
      "clo": 1,
      "lb": "DLR (MA)",
      "lb_abbrev": "Massachusetts Department of Labor Relati",
      "note": "M.G.L. c. 71 §89 (Charter School Law — explicitly classifies charter school employees as public employees); M.G.L. c. 15"
    },
    "ME": {
      "name": "Maine",
      "universe": 11,
      "conf": 1,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "lb": "NLRB",
      "lb_abbrev": "NLRB— Region 1 (Boston)",
      "note": "National Labor Relations Act (NLRA). Baxter Academy is incorporated as a private nonprofit charter school under the Main"
    },
    "MI": {
      "name": "Michigan",
      "universe": 373,
      "conf": 10,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "lb": "MERC / NLRB Region 7",
      "lb_abbrev": "Michigan Employment Relations Commission",
      "note": "SPLIT JURISDICTION: (1) MERC under PERA (Mich. Comp. Laws §423.201 et seq.) for locally-authorized and ISD-authorized ch"
    },
    "MN": {
      "name": "Minnesota",
      "universe": 309,
      "conf": 7,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 1,
      "lb": "BMS (MN)",
      "lb_abbrev": "Minnesota Bureau of Mediation Services",
      "note": "Minnesota Public Employment Labor Relations Act (PELRA), Minn. Stat. §179A. 2023 PELRA amendments explicitly included ch"
    },
    "NJ": {
      "name": "New Jersey",
      "universe": 86,
      "conf": 19,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 1,
      "lb": "PERC (NJ)",
      "lb_abbrev": "Public Employment Relations Commission o",
      "note": "N.J.S.A. 18A:36A (NJ Charter School Law); N.J.S.A. 34:13A-1 et seq. All NJ charter schools are public schools; all emplo"
    },
    "NM": {
      "name": "New Mexico",
      "universe": 98,
      "conf": 2,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "lb": "PELRB (confirmed for J Paul Taylor Academy) / CONTESTED PELRB or NLRB Region 28 (other schools)",
      "lb_abbrev": "J Paul Taylor Academy: PELRB jurisdictio",
      "note": "NM charter schools authorized by PEC, serve as independent LEAs. PEBA (NMSA 10-7E) covers state agencies/units of local "
    },
    "NY": {
      "name": "New York",
      "universe": 338,
      "conf": 24,
      "dep": 4,
      "org": 0,
      "dec": 1,
      "clo": 0,
      "lb": "PERB(NY)",
      "lb_abbrev": "New York Public Employment Relations Boa",
      "note": "NY Education Law Article 56 (Charter Schools Act); NY Civil Service Law Article 14 (Taylor Law). NY charter school emplo"
    },
    "OH": {
      "name": "Ohio",
      "universe": 323,
      "conf": 12,
      "dep": 14,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "lb": "NLRB (Region 8 / Region 9)",
      "lb_abbrev": "NLRB— Region 8 (Cleveland) and Region 9 ",
      "note": "National Labor Relations Act (NLRA). Ohio charter schools (\"community schools\" per ORC Chapter 3314) are classified as p"
    },
    "OR": {
      "name": "Oregon",
      "universe": 128,
      "conf": 1,
      "dep": 120,
      "org": 0,
      "dec": 1,
      "clo": 0,
      "lb": "ERB (OR)",
      "lb_abbrev": "Oregon Employment Relations Board",
      "note": "PECBA — Public Employee Collective Bargaining Act (ORS 243.650 et seq.). All district-authorized OR charter schools are "
    },
    "PA": {
      "name": "Pennsylvania",
      "universe": 175,
      "conf": 21,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "lb": "NLRB",
      "lb_abbrev": "NLRB",
      "note": "National Labor Relations Act (NLRA). Pennsylvania Virtual Charter School, 364 NLRB No. 87 (2016) established that all PA"
    },
    "RI": {
      "name": "Rhode Island",
      "universe": 42,
      "conf": 7,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 1,
      "lb": "NLRB Region 1 (Boston)",
      "lb_abbrev": "NLRB, Region 1, Boston",
      "note": "Federal NLRA. All 42 RI charter schools are independently incorporated nonprofits — including the 3 LEA/District-authori"
    },
    "HI": {
      "name": "Hawaii",
      "universe": 40,
      "conf": 0,
      "dep": 40,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "lb": "HLRB",
      "lb_abbrev": "HLRB",
      "note": "All HI charter schools are state employees — HSTA BU05 / HGEA / UPW"
    },
    "WI": {
      "name": "Wisconsin",
      "universe": 225,
      "conf": 0,
      "dep": 0,
      "org": 0,
      "dec": 0,
      "clo": 0,
      "lb": "WERC / NLRB R18",
      "lb_abbrev": "WERC",
      "note": "0 confirmed organized. Post-Act 10 — no charter school CB cases."
    }
  },
  "state_centers": {
    "AZ": [
      34,
      -111.5
    ],
    "CA": [
      36.7,
      -119.7
    ],
    "CT": [
      41.6,
      -72.7
    ],
    "DC": [
      38.9,
      -77
    ],
    "DE": [
      39,
      -75.5
    ],
    "FL": [
      27.8,
      -81.6
    ],
    "HI": [
      20.5,
      -157
    ],
    "IL": [
      40,
      -89
    ],
    "LA": [
      30.5,
      -91.8
    ],
    "MA": [
      42.2,
      -71.5
    ],
    "ME": [
      44.5,
      -69
    ],
    "MI": [
      43.5,
      -84.5
    ],
    "MN": [
      46,
      -93.5
    ],
    "NJ": [
      40.1,
      -74.5
    ],
    "NM": [
      34.5,
      -106
    ],
    "NY": [
      43,
      -75.5
    ],
    "OH": [
      40.4,
      -82.8
    ],
    "OR": [
      43.9,
      -120.5
    ],
    "PA": [
      40.9,
      -77.7
    ],
    "RI": [
      41.7,
      -71.5
    ],
    "WI": [
      44.5,
      -89.5
    ]
  },
  "density_table": [
    {
      "st": "HI",
      "name": "Hawaii",
      "universe": 40,
      "confirmed": 0,
      "dependent": 40,
      "combined": 40,
      "density": "100.0%",
      "lb": "HLRB",
      "note": "All HI charter schools are state employees — HSTA BU05 / HGEA / UPW"
    },
    {
      "st": "OR",
      "name": "Oregon",
      "universe": 128,
      "confirmed": 1,
      "dependent": 120,
      "combined": 121,
      "density": "94.5%",
      "lb": "Oregon Employment Relations Board",
      "note": "PECBA — Public Employee Collective Bargaining Act (ORS 243.650 et seq.). All district-authorized OR charter schools are "
    },
    {
      "st": "CT",
      "name": "Connecticut",
      "universe": 21,
      "confirmed": 4,
      "dependent": 1,
      "combined": 5,
      "density": "23.8%",
      "lb": "Connecticut State Board of Labor Relatio",
      "note": "Connecticut Teacher Negotiation Act (TNA) — Conn. Gen. Stat. §10-153a et seq. Governs certificated staff in most CT char"
    },
    {
      "st": "IL",
      "name": "Illinois",
      "universe": 131,
      "confirmed": 30,
      "dependent": 1,
      "combined": 31,
      "density": "23.7%",
      "lb": "NLRB, Region 13 (Chicago) — primary juri",
      "note": "National Labor Relations Act (NLRA) for private nonprofits (most IL charters, per Chicago Mathematics & Science Academy,"
    },
    {
      "st": "NJ",
      "name": "New Jersey",
      "universe": 86,
      "confirmed": 19,
      "dependent": 0,
      "combined": 19,
      "density": "22.1%",
      "lb": "Public Employment Relations Commission o",
      "note": "N.J.S.A. 18A:36A (NJ Charter School Law); N.J.S.A. 34:13A-1 et seq. All NJ charter schools are public schools; all emplo"
    },
    {
      "st": "MA",
      "name": "Massachusetts",
      "universe": 73,
      "confirmed": 8,
      "dependent": 5,
      "combined": 13,
      "density": "17.8%",
      "lb": "Massachusetts Department of Labor Relati",
      "note": "M.G.L. c. 71 §89 (Charter School Law — explicitly classifies charter school employees as public employees); M.G.L. c. 15"
    },
    {
      "st": "DE",
      "name": "Delaware",
      "universe": 23,
      "confirmed": 4,
      "dependent": 0,
      "combined": 4,
      "density": "17.4%",
      "lb": "Delaware Public Employment Relations Boa",
      "note": "14 Del.C. Chapter 40 — Public School Employment Relations Act (PSERA). All Delaware charter schools are public employers"
    },
    {
      "st": "RI",
      "name": "Rhode Island",
      "universe": 42,
      "confirmed": 7,
      "dependent": 0,
      "combined": 7,
      "density": "16.7%",
      "lb": "NLRB, Region 1, Boston",
      "note": "Federal NLRA. All 42 RI charter schools are independently incorporated nonprofits — including the 3 LEA/District-authori"
    },
    {
      "st": "CA",
      "name": "California",
      "universe": 1246,
      "confirmed": 139,
      "dependent": 66,
      "combined": 205,
      "density": "16.5%",
      "lb": "PERB(CA) — California Public Employment ",
      "note": "Educational Employment Relations Act (EERA), Gov. Code §3540 et seq."
    },
    {
      "st": "PA",
      "name": "Pennsylvania",
      "universe": 175,
      "confirmed": 21,
      "dependent": 0,
      "combined": 21,
      "density": "12.0%",
      "lb": "NLRB",
      "note": "National Labor Relations Act (NLRA). Pennsylvania Virtual Charter School, 364 NLRB No. 87 (2016) established that all PA"
    },
    {
      "st": "ME",
      "name": "Maine",
      "universe": 11,
      "confirmed": 1,
      "dependent": 0,
      "combined": 1,
      "density": "9.1%",
      "lb": "NLRB— Region 1 (Boston)",
      "note": "National Labor Relations Act (NLRA). Baxter Academy is incorporated as a private nonprofit charter school under the Main"
    },
    {
      "st": "NY",
      "name": "New York",
      "universe": 338,
      "confirmed": 24,
      "dependent": 4,
      "combined": 28,
      "density": "8.3%",
      "lb": "New York Public Employment Relations Boa",
      "note": "NY Education Law Article 56 (Charter Schools Act); NY Civil Service Law Article 14 (Taylor Law). NY charter school emplo"
    },
    {
      "st": "OH",
      "name": "Ohio",
      "universe": 323,
      "confirmed": 12,
      "dependent": 14,
      "combined": 26,
      "density": "8.0%",
      "lb": "NLRB— Region 8 (Cleveland) and Region 9 ",
      "note": "National Labor Relations Act (NLRA). Ohio charter schools (\"community schools\" per ORC Chapter 3314) are classified as p"
    },
    {
      "st": "DC",
      "name": "Washington DC",
      "universe": 125,
      "confirmed": 7,
      "dependent": 0,
      "combined": 7,
      "density": "5.6%",
      "lb": "NLRB— Region 5 (Baltimore/Washington)",
      "note": "National Labor Relations Act (NLRA). All DC Public Charter Schools (PCS) are authorized by the DC Public Charter School "
    },
    {
      "st": "MI",
      "name": "Michigan",
      "universe": 373,
      "confirmed": 10,
      "dependent": 0,
      "combined": 10,
      "density": "2.7%",
      "lb": "Michigan Employment Relations Commission",
      "note": "SPLIT JURISDICTION: (1) MERC under PERA (Mich. Comp. Laws §423.201 et seq.) for locally-authorized and ISD-authorized ch"
    },
    {
      "st": "MN",
      "name": "Minnesota",
      "universe": 309,
      "confirmed": 7,
      "dependent": 0,
      "combined": 7,
      "density": "2.3%",
      "lb": "Minnesota Bureau of Mediation Services",
      "note": "Minnesota Public Employment Labor Relations Act (PELRA), Minn. Stat. §179A. 2023 PELRA amendments explicitly included ch"
    },
    {
      "st": "LA",
      "name": "Louisiana",
      "universe": 142,
      "confirmed": 3,
      "dependent": 0,
      "combined": 3,
      "density": "2.1%",
      "lb": "Louisiana State Civil Service Commission",
      "note": "Louisiana Employee Relations Act (LERA) — post-Act 172 (signed May 23, 2024) for all BESE-authorized Type 2/5 charters. "
    },
    {
      "st": "NM",
      "name": "New Mexico",
      "universe": 98,
      "confirmed": 2,
      "dependent": 0,
      "combined": 2,
      "density": "2.0%",
      "lb": "J Paul Taylor Academy: PELRB jurisdictio",
      "note": "NM charter schools authorized by PEC, serve as independent LEAs. PEBA (NMSA 10-7E) covers state agencies/units of local "
    },
    {
      "st": "FL",
      "name": "Florida",
      "universe": 734,
      "confirmed": 5,
      "dependent": 3,
      "combined": 8,
      "density": "1.1%",
      "lb": "Florida Public Employees Relations Commi",
      "note": "Florida Public Employees Relations Act (PERA), Fla. Stat. §447.203. PERC(FL) has exclusive jurisdiction over all FL char"
    },
    {
      "st": "AZ",
      "name": "Arizona",
      "universe": 562,
      "confirmed": 4,
      "dependent": 0,
      "combined": 4,
      "density": "0.7%",
      "lb": "NLRB",
      "note": "National Labor Relations Act (NLRA). Arizona is a right-to-work state (ARS §23-1302). No state public-sector collective "
    },
    {
      "st": "WI",
      "name": "Wisconsin",
      "universe": 225,
      "confirmed": 0,
      "dependent": 0,
      "combined": 0,
      "density": "0.0%",
      "lb": "WERC",
      "note": "0 confirmed organized. Post-Act 10 — no charter school CB cases."
    }
  ],
  "jurisdiction_data": {
    "AZ": {
      "lb_abbrev": "NLRB R28",
      "lb_full": "National Labor Relations Board, Region 28 (Phoenix)",
      "statute": "NLRA",
      "nlrb": "Yes",
      "card_check": "No",
      "dominant": "AFT Local 6627 / AZ-ACTS",
      "note": "Right-to-work state. All AZ charters are private employers under NLRA."
    },
    "CA": {
      "lb_abbrev": "PERB (CA)",
      "lb_full": "California Public Employment Relations Board",
      "statute": "EERA — Gov. Code §3540",
      "nlrb": "No",
      "card_check": "Yes",
      "dominant": "CTA / UTLA / CFT",
      "note": "Card-check via majority showing. PERB(CA) has exclusive jurisdiction per EERA."
    },
    "CT": {
      "lb_abbrev": "SBLR / NLRB R34",
      "lb_full": "CT State Board of Labor Relations / NLRB Region 34",
      "statute": "Teacher Negotiation Act (TNA)",
      "nlrb": "Partial",
      "card_check": "Yes",
      "dominant": "CEA / AFT Connecticut",
      "note": "TNA applies to district-dependent charters; NLRB R34 for independent."
    },
    "DC": {
      "lb_abbrev": "NLRB R5",
      "lb_full": "National Labor Relations Board, Region 5 (Baltimore/Washington)",
      "statute": "NLRA",
      "nlrb": "Yes",
      "card_check": "No",
      "dominant": "DC ACTS / AFT",
      "note": "All DC Public Charter School employees are private — NLRB R5 exclusive jurisdiction."
    },
    "DE": {
      "lb_abbrev": "PERB (DE)",
      "lb_full": "Delaware Public Employment Relations Board",
      "statute": "14 Del.C. Ch. 40",
      "nlrb": "No",
      "card_check": "Yes",
      "dominant": "DSEA / NEA",
      "note": "Card-check available. DSEA/NEA dominates DE charter organizing."
    },
    "FL": {
      "lb_abbrev": "PERC (FL)",
      "lb_full": "Florida Public Employees Relations Commission",
      "statute": "PERA — Fla. Stat. §447",
      "nlrb": "Partial",
      "card_check": "No",
      "dominant": "FEA / BTU",
      "note": "SB 256 (2023) requires annual recertification. Hostile organizing environment."
    },
    "HI": {
      "lb_abbrev": "HLRB",
      "lb_full": "Hawaii Labor Relations Board",
      "statute": "HRS Ch. 89 / HRS §89-10.55",
      "nlrb": "No",
      "card_check": "N/A",
      "dominant": "HSTA (BU05) / HGEA / UPW",
      "note": "All 40 HI charters are state employees under master CBAs. 100% structurally covered."
    },
    "IL": {
      "lb_abbrev": "NLRB R13 / IELRB",
      "lb_full": "NLRB Region 13 (Chicago) / IL Educational Labor Relations Board",
      "statute": "NLRA / IELRA",
      "nlrb": "Yes — primary",
      "card_check": "No",
      "dominant": "ChiACTS / AFT / CTU",
      "note": "Split jurisdiction: NLRB for private nonprofits; IELRB for ISBE-authorized/district-dependent."
    },
    "LA": {
      "lb_abbrev": "NLRB R15 / LSCSC",
      "lb_full": "NLRB Region 15 / LA State Civil Service Commission",
      "statute": "LERA — post-Act 172",
      "nlrb": "Yes",
      "card_check": "No",
      "dominant": "UTNO / LFT",
      "note": "Act 172 (2012) stripped NLRB jurisdiction from most LA charters; ongoing legal disputes."
    },
    "MA": {
      "lb_abbrev": "DLR (MA)",
      "lb_full": "Massachusetts Department of Labor Relations",
      "statute": "M.G.L. c. 71 §89 / WMA",
      "nlrb": "No",
      "card_check": "Yes",
      "dominant": "BTU / AFT Massachusetts",
      "note": "Card-check via Work Management Act. MA explicitly classifies charters as public employers."
    },
    "ME": {
      "lb_abbrev": "MLRB / NLRB R1",
      "lb_full": "Maine Labor Relations Board / NLRB Region 1 (Boston)",
      "statute": "NLRA / MPELRL",
      "nlrb": "Partial",
      "card_check": "No",
      "dominant": "MEA / NEA",
      "note": "Only 1 NAPCS school (Baxter Academy — independent nonprofit, NLRB R1)."
    },
    "MI": {
      "lb_abbrev": "MERC / NLRB R7",
      "lb_full": "Michigan Employment Relations Commission / NLRB Region 7",
      "statute": "PERA — MCL §423 / NLRA",
      "nlrb": "Partial",
      "card_check": "No",
      "dominant": "Michigan ACTS / AFT Michigan",
      "note": "Split jurisdiction: MERC for district-authorized; NLRB R7 for independently incorporated."
    },
    "MN": {
      "lb_abbrev": "BMS (MN)",
      "lb_full": "Minnesota Bureau of Mediation Services",
      "statute": "PELRA — Minn. Stat. §179A",
      "nlrb": "No",
      "card_check": "Yes",
      "dominant": "Education Minnesota / NEA",
      "note": "Card-check post-2023 PELRA amendment. All MN charters are public employers under PELRA."
    },
    "NJ": {
      "lb_abbrev": "PERC (NJ)",
      "lb_full": "Public Employment Relations Commission of New Jersey",
      "statute": "N.J.S.A. 18A:36A / 34:13A-1",
      "nlrb": "No",
      "card_check": "Yes",
      "dominant": "NJEA / AFT-NJ",
      "note": "Card-check available. PERC(NJ) has unambiguous statutory jurisdiction — NLRB does not apply."
    },
    "NM": {
      "lb_abbrev": "PELRB / NLRB R28",
      "lb_full": "NM Public Employee Labor Relations Board / NLRB Region 28",
      "statute": "PEBA — NMSA §10-7E / NLRA",
      "nlrb": "Partial",
      "card_check": "No",
      "dominant": "NEA-NM",
      "note": "Split jurisdiction. Voluntary recognition (Monte del Sol) leaves no PELRB record."
    },
    "NY": {
      "lb_abbrev": "NLRB R2/R29",
      "lb_full": "NLRB Region 2 (New York City) / Region 29 (Brooklyn)",
      "statute": "NLRA",
      "nlrb": "Yes",
      "card_check": "No",
      "dominant": "UFT / NYSUT",
      "note": "PERB(NY) declined jurisdiction over charters in 2004. NLRB R2/R29 exclusive. UFT dominant in NYC."
    },
    "OH": {
      "lb_abbrev": "NLRB R8/R9",
      "lb_full": "NLRB Region 8 (Cleveland) / Region 9 (Cincinnati)",
      "statute": "NLRA / ORC §3314.10(A)(3)",
      "nlrb": "Yes",
      "card_check": "No",
      "dominant": "Cleveland ACTS / OFT / OEA",
      "note": "ORC §3314.10(A)(3) creates structural dependent coverage for district-operated conversions."
    },
    "OR": {
      "lb_abbrev": "ERB (OR)",
      "lb_full": "Oregon Employment Relations Board",
      "statute": "PECBA — ORS 243.650",
      "nlrb": "No",
      "card_check": "Yes",
      "dominant": "OEA / NEA",
      "note": "~120 LEA-authorized charters structurally covered by OEA district CBAs. 95%+ combined density."
    },
    "PA": {
      "lb_abbrev": "NLRB R4/R6",
      "lb_full": "NLRB Region 4 (Philadelphia) / Region 6 (Pittsburgh)",
      "statute": "NLRA — 2016 landmark ruling",
      "nlrb": "Yes",
      "card_check": "No",
      "dominant": "PSEA / AFT Pennsylvania / ACSE",
      "note": "2016 3rd Circuit ruling: all PA charters are private employers under NLRA. PERA does not apply."
    },
    "RI": {
      "lb_abbrev": "NLRB R1",
      "lb_full": "NLRB Region 1 (Boston)",
      "statute": "NLRA",
      "nlrb": "Yes",
      "card_check": "No",
      "dominant": "RIFT&HP / AFT / IBEW",
      "note": "All 42 RI charters independently incorporated — NLRB R1 exclusive jurisdiction."
    },
    "WI": {
      "lb_abbrev": "WERC / NLRB R18",
      "lb_full": "Wisconsin Employment Relations Commission / NLRB Region 18",
      "statute": "NLRA / MERA post-Act 10",
      "nlrb": "Yes",
      "card_check": "No",
      "dominant": "None confirmed",
      "note": "Post-Act 10 (2011): WERC has no charter CB cases. 0 confirmed organized schools."
    }
  },
  "status_lists": {
    "CONFIRMED": [
      {
        "id": "C0412011",
        "name": "BASIS Tucson North",
        "city": "Tucson",
        "state": "AZ",
        "union": "Arizona Alliance of Charter Teachers and Staff (AA",
        "date": "April 25, 2023",
        "website": "http://enrollbasis.com/tucson-north/"
      },
      {
        "id": "C0404006",
        "name": "City High School",
        "city": "Tucson",
        "state": "AZ",
        "union": "Arizona Alliance of Charter Teachers and Staff (AA",
        "date": "May 19, 2026 (election date; NLRB certif",
        "website": "http://www.cityhighschool.org"
      },
      {
        "id": "C0414026",
        "name": "Paulo Freire Freedom School - Downtown",
        "city": "Tucson",
        "state": "AZ",
        "union": "Arizona Alliance of Charter Teachers and Staff (AA",
        "date": "May 19, 2026 (election date; NLRB certif",
        "website": "http://www.paulofreireschool.org"
      },
      {
        "id": "C0405011",
        "name": "Paulo Freire Freedom School - University",
        "city": "Tucson",
        "state": "AZ",
        "union": "Arizona Alliance of Charter Teachers and Staff (AA",
        "date": "May 19, 2026 (election date; NLRB certif",
        "website": "http://www.paulofreireschool.org"
      },
      {
        "id": "C0694032",
        "name": "Accelerated School",
        "city": "LOS ANGELES",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Pre-2016 UTLA certification (conversion ",
        "website": "http://www.accelerated.org/our-schools/tas/"
      },
      {
        "id": "C0694032",
        "name": "Accelerated School",
        "city": "LOS ANGELES",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Pre-2016 UTLA certification (conversion ",
        "website": "http://www.accelerated.org/our-schools/tas/"
      },
      {
        "id": "C0608025",
        "name": "Alain Leroy Locke College Preparatory Academy",
        "city": "LOS ANGELES",
        "state": "CA",
        "union": "Animo Management United (AMU) / UTLA chapter (Gree",
        "date": "Green Dot network-wide certification — P",
        "website": "http://greendot.org/locke/"
      },
      {
        "id": "C0608025",
        "name": "Alain Leroy Locke College Preparatory Academy",
        "city": "LOS ANGELES",
        "state": "CA",
        "union": "Animo Management United (AMU) / UTLA chapter (Gree",
        "date": "Green Dot network-wide certification — P",
        "website": "http://greendot.org/locke/"
      },
      {
        "id": "C0608025",
        "name": "Alain Leroy Locke College Preparatory Academy",
        "city": "LOS ANGELES",
        "state": "CA",
        "union": "Animo Management United (AMU) / UTLA chapter (Gree",
        "date": "Green Dot network-wide certification — P",
        "website": "http://greendot.org/locke/"
      },
      {
        "id": "C0606003",
        "name": "Albert Einstein Academies",
        "city": "San Diego",
        "state": "CA",
        "union": "Einstein Educators Collective",
        "date": "Not confirmed — PERB records request req",
        "website": "http://www.aeacs.org/"
      },
      {
        "id": "C0610038",
        "name": "Alliance Cindy and Bill Simon Technology Academy High",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "May 2020 (PERB certification — PERB Orde",
        "website": "http://simontechnology.org"
      },
      {
        "id": "C0613050",
        "name": "Alliance College-Ready Middle Academy 12",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "May 2020 (PERB certification — PERB Orde",
        "website": "http://crma12.org"
      },
      {
        "id": "C0609014",
        "name": "Alliance College-Ready Middle Academy 4",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "May 2020 (PERB certification — PERB Orde",
        "website": "http://crma4.org"
      },
      {
        "id": "C0609015",
        "name": "Alliance College-Ready Middle Academy 5",
        "city": "Los Angeles",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "May 21, 2020",
        "website": ""
      },
      {
        "id": "C0614010",
        "name": "Alliance College-Ready Middle Academy 8",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "May 2020 (PERB certification — PERB Orde",
        "website": "http://crma8.org"
      },
      {
        "id": "C0605030",
        "name": "Alliance Collins Family College-Ready High",
        "city": "Huntington Park",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "May 2020 (PERB certification — PERB Orde",
        "website": "http://collinsfamilyjaguars.org"
      },
      {
        "id": "C0606030",
        "name": "Alliance Dr. Olga Mohan High",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "May 2020 (PERB certification — PERB Orde",
        "website": "http://mohanhs.org"
      },
      {
        "id": "C0604027",
        "name": "Alliance Gertz-Ressler Richard Merkin 6-12 Complex",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "May 2020 (PERB certification — PERB Orde",
        "website": "http://gertzresslerhigh.org"
      },
      {
        "id": "C0607098",
        "name": "Alliance Jack H. Skirball Middle",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "May 2020 (PERB certification — PERB Orde",
        "website": "http://skirballmiddle.org"
      },
      {
        "id": "C0605026",
        "name": "Alliance Judy Ivie Burton Technology Academy High",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "May 2020 (PERB certification — PERB Orde",
        "website": "http://www.burtontech.org/"
      },
      {
        "id": "C0614011",
        "name": "Alliance Kory Hunter Middle",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "May 2020 (PERB certification — PERB Orde",
        "website": "http://www.koryhunterms.org"
      },
      {
        "id": "C0609011",
        "name": "Alliance Leichtman-Levine Family Foundation Environmental Science High",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "~2020-2021 (PERB certification anticipat",
        "website": "http://www.llesat.org"
      },
      {
        "id": "C0606056",
        "name": "Alliance Marc & Eva Stern Math and Science",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "May 2020 (PERB certification — PERB Orde",
        "website": "http://sternmass.org"
      },
      {
        "id": "C0614012",
        "name": "Alliance Margaret M. Bloomfield Technology Academy High",
        "city": "Huntington Park",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "May 2020 (PERB certification — PERB Orde",
        "website": "http://bloomfieldhs.org"
      },
      {
        "id": "C0615005",
        "name": "Alliance Marine - Innovation and Technology 6-12 Complex",
        "city": "Sun Valley",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "May 2020 (PERB certification — PERB Orde",
        "website": "http://www.alliancemit.org"
      },
      {
        "id": "C0609013",
        "name": "Alliance Morgan McKinzie High",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "~2020-2021 (PERB certification anticipat",
        "website": "http://www.mckinziehs.org"
      },
      {
        "id": "C0606031",
        "name": "Alliance Ouchi-O'Donovan 6-12 Complex",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "May 2020 (PERB certification — PERB Orde",
        "website": "http://ouchihs.org"
      },
      {
        "id": "C0607020",
        "name": "Alliance Patti and Peter Neuwirth Leadership Academy",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "May 2020 (PERB certification — PERB Orde",
        "website": "http://www.neuwirthleadership.org"
      },
      {
        "id": "C0609012",
        "name": "Alliance Piera Barbaglia Shaheen Health Services Academy",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "May 2020 (PERB certification — PERB Orde",
        "website": "http://www.pbshsa.org"
      },
      {
        "id": "C0612002",
        "name": "Alliance Renee and Meyer Luskin Academy High",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "May 2020 (PERB certification — PERB Orde",
        "website": "http://luskinacademy.org"
      },
      {
        "id": "C0612022",
        "name": "Alliance Susan and Eric Smidt Technology High",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "May 2020 (PERB certification — PERB Orde",
        "website": "http://smidttech.org"
      },
      {
        "id": "C0611026",
        "name": "Alliance Ted K. Tajima High",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "May 2020 (PERB certification — PERB Orde",
        "website": "http://www.tajimahigh.org"
      },
      {
        "id": "C0611025",
        "name": "Alliance Tennenbaum Family Technology High",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "May 2020 (PERB certification — PERB Orde",
        "website": "http://www.tennenbaumtech.org/"
      },
      {
        "id": "C0615006",
        "name": "Alliance Virgil Roberts Leadership Academy",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Alliance Educators United (UTLA chapter)",
        "date": "May 2020 (PERB certification — PERB Orde",
        "website": "http://www.avrlacademy.org"
      },
      {
        "id": "C0617006",
        "name": "Animo City of Champions Charter High",
        "city": "Inglewood",
        "state": "CA",
        "union": "Asociación De Maestros Unidos (AMU)",
        "date": "Network-wide AMU coverage from school op",
        "website": "http://greendot.org"
      },
      {
        "id": "C0618030",
        "name": "Ánimo Compton Charter",
        "city": "Compton",
        "state": "CA",
        "union": "Asociación De Maestros Unidos (AMU)",
        "date": "Network-wide AMU coverage from school op",
        "website": "http://greendot.org"
      },
      {
        "id": "C0614016",
        "name": "Animo Ellen Ochoa Charter Middle",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Asociación De Maestros Unidos (AMU)",
        "date": "Network-wide AMU coverage from school op",
        "website": "http://ca.greendot.org/ochoa"
      },
      {
        "id": "C0616031",
        "name": "Animo Florence Firestone Charter Middle School",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Asociación De Maestros Unidos (AMU)",
        "date": "Network-wide AMU coverage from school op",
        "website": "http://ca.greendot.org/florence-firestone/"
      },
      {
        "id": "C0602050",
        "name": "Animo Inglewood Charter High",
        "city": "Inglewood",
        "state": "CA",
        "union": "Asociación De Maestros Unidos (AMU)",
        "date": "Network-wide AMU coverage from school op",
        "website": "http://www.greendot.org/inglewood"
      },
      {
        "id": "C0606008",
        "name": "Animo Jackie Robinson High",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Asociación De Maestros Unidos (AMU)",
        "date": "Network-wide AMU coverage from school op",
        "website": "http://ca.greendot.org/jackierobinson/"
      },
      {
        "id": "C0613002",
        "name": "Animo James B. Taylor Charter Middle",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Asociación De Maestros Unidos (AMU)",
        "date": "Network-wide AMU coverage from school op",
        "website": "http://ca.greendot.org/taylor"
      },
      {
        "id": "C0610012",
        "name": "Animo Jefferson Charter Middle",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Asociación De Maestros Unidos (AMU)",
        "date": "Network-wide AMU coverage from school op",
        "website": "http://ca.greendot.org/jefferson"
      },
      {
        "id": "C0600002",
        "name": "Animo Leadership High",
        "city": "Inglewood",
        "state": "CA",
        "union": "Asociación De Maestros Unidos (AMU)",
        "date": "2001 (first AMU CBA ratified; organizing",
        "website": "http://www.greendot.org/leadership"
      },
      {
        "id": "C0618167",
        "name": "Animo Legacy Charter Middle",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Asociación De Maestros Unidos (AMU)",
        "date": "Network-wide AMU coverage from school op",
        "website": "http://ca.greendot.org/legacy"
      },
      {
        "id": "C0614017",
        "name": "Animo Mae Jemison Charter Middle",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Asociación De Maestros Unidos (AMU)",
        "date": "Network-wide AMU coverage from school op",
        "website": "http://ca.greendot.org/jemison"
      },
      {
        "id": "C0603045",
        "name": "Animo Oscar De La Hoya Charter High",
        "city": "LOS ANGELES",
        "state": "CA",
        "union": "Animo Management United (AMU) / UTLA chapter (Gree",
        "date": "Green Dot network-wide certification — P",
        "website": "http://ca.greendot.org/odlh/"
      },
      {
        "id": "C0603045",
        "name": "Animo Oscar De La Hoya Charter High",
        "city": "LOS ANGELES",
        "state": "CA",
        "union": "Animo Management United (AMU) / UTLA chapter (Gree",
        "date": "Green Dot network-wide certification — P",
        "website": "http://ca.greendot.org/odlh/"
      },
      {
        "id": "C0603045",
        "name": "Animo Oscar De La Hoya Charter High",
        "city": "LOS ANGELES",
        "state": "CA",
        "union": "Animo Management United (AMU) / UTLA chapter (Gree",
        "date": "Green Dot network-wide certification — P",
        "website": "http://ca.greendot.org/odlh/"
      },
      {
        "id": "C0606010",
        "name": "Animo Pat Brown",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Asociación De Maestros Unidos (AMU)",
        "date": "Network-wide AMU coverage from school op",
        "website": "http://ca.greendot.org/patbrown"
      },
      {
        "id": "C0606011",
        "name": "Animo Ralph Bunche High",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Asociación De Maestros Unidos (AMU)",
        "date": "Network-wide AMU coverage from school op",
        "website": "http://ca.greendot.org/ralphbunche/"
      },
      {
        "id": "C0604002",
        "name": "Animo South Los Angeles Charter",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Asociación De Maestros Unidos (AMU)",
        "date": "Network-wide AMU coverage from school op",
        "website": "http://ca.greendot.org/southla"
      },
      {
        "id": "C0604003",
        "name": "Animo Venice Charter High",
        "city": "Venice",
        "state": "CA",
        "union": "Asociación De Maestros Unidos (AMU)",
        "date": "Network-wide AMU coverage from school op",
        "website": "http://ca.greendot.org/venice"
      },
      {
        "id": "C0607002",
        "name": "Animo Watts College Preparatory Academy",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Asociación De Maestros Unidos (AMU)",
        "date": "Network-wide AMU coverage from school op",
        "website": "http://ca.greendot.org/watts"
      },
      {
        "id": "C0698001",
        "name": "Antioch Charter Academy",
        "city": "Antioch",
        "state": "CA",
        "union": "Antioch Education Association (AEA, CTA affiliate)",
        "date": "District CBA — Antioch USD",
        "website": "http://www.antiochcharteracademy.org"
      },
      {
        "id": "C0610014",
        "name": "Architecture Construction and Engineering Charter",
        "city": "Oxnard",
        "state": "CA",
        "union": "Oxnard Federation of Teachers and Staff (AFT affil",
        "date": "District CBA — Oxnard USD",
        "website": ""
      },
      {
        "id": "C0600004",
        "name": "Arundel Elementary",
        "city": "San Carlos",
        "state": "CA",
        "union": "San Carlos Teachers Association (CTA affiliate)",
        "date": "District CBA — San Carlos USD",
        "website": "https://www.scsdk8.org"
      },
      {
        "id": "C0609009",
        "name": "Birmingham Community Charter High",
        "city": "Lake Balboa",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Pre-2016 UTLA certification (conversion ",
        "website": "http://birminghamcharter.com"
      },
      {
        "id": "C0609009",
        "name": "Birmingham Community Charter High",
        "city": "Lake Balboa",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Pre-2016 UTLA certification (conversion ",
        "website": "http://birminghamcharter.com"
      },
      {
        "id": "C0699005",
        "name": "Brittan Acres Elementary",
        "city": "San Carlos",
        "state": "CA",
        "union": "San Carlos Teachers Association (CTA affiliate)",
        "date": "District CBA — San Carlos USD",
        "website": "https://www.scsdk8.org"
      },
      {
        "id": "C0613092",
        "name": "Calahan Community Charter",
        "city": "Northridge",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Unknown — PERB case number pending coord",
        "website": ""
      },
      {
        "id": "C0614021",
        "name": "Caliber: Beta Academy",
        "city": "San Pablo",
        "state": "CA",
        "union": "Caliber Workers Union / Caliber Independent Worker",
        "date": "May 26, 2022 (voluntary recognition by C",
        "website": "http://www.caliberbetaacademy.org"
      },
      {
        "id": "C0616026",
        "name": "Caliber: ChangeMakers Academy",
        "city": "Vallejo",
        "state": "CA",
        "union": "Caliber Workers Union / Caliber Independent Worker",
        "date": "May 26, 2022 (voluntary recognition by C",
        "website": "http://www.calibercma.org/"
      },
      {
        "id": "C0606020",
        "name": "California Virtual Academy @ Los Angeles",
        "city": "Simi Valley",
        "state": "CA",
        "union": "California Virtual Educators United",
        "date": "PERB(CA) certified (exact date unconfirm",
        "website": "http://www.caliva.org"
      },
      {
        "id": "C0602009",
        "name": "California Virtual Academy @ San Diego",
        "city": "Simi Valley",
        "state": "CA",
        "union": "California Virtual Educators United",
        "date": "PERB(CA) certified (exact date unconfirm",
        "website": "http://www.caliva.org"
      },
      {
        "id": "C0612108",
        "name": "California Virtual Academy @ San Joaquin",
        "city": "Simi Valley",
        "state": "CA",
        "union": "California Virtual Educators United",
        "date": "PERB(CA) certified (exact date unconfirm",
        "website": "http://cava.k12.com/"
      },
      {
        "id": "C0604008",
        "name": "California Virtual Academy @ Sonoma",
        "city": "Simi Valley",
        "state": "CA",
        "union": "California Virtual Educators United",
        "date": "PERB(CA) certified (exact date unconfirm",
        "website": "http://www.caliva.org"
      },
      {
        "id": "C0606022",
        "name": "California Virtual Academy @ Sutter",
        "city": "Marysville",
        "state": "CA",
        "union": "California Virtual Educators United (CVEU/CTA)",
        "date": "~2014 (statewide CAVA certification)",
        "website": ""
      },
      {
        "id": "C0612014",
        "name": "California Virtual Academy at Fresno",
        "city": "Simi Valley",
        "state": "CA",
        "union": "California Virtual Educators United",
        "date": "PERB(CA) certified (exact date unconfirm",
        "website": "http://www.caliva.org"
      },
      {
        "id": "C0606019",
        "name": "California Virtual Academy at Kings",
        "city": "Simi Valley",
        "state": "CA",
        "union": "California Virtual Educators United",
        "date": "PERB(CA) certified (exact date unconfirm",
        "website": "http://www.caliva.org"
      },
      {
        "id": "C0612016",
        "name": "California Virtual Academy at Maricopa",
        "city": "Simi Valley",
        "state": "CA",
        "union": "California Virtual Educators United",
        "date": "PERB(CA) certified (exact date unconfirm",
        "website": "http://www.caliva.org"
      },
      {
        "id": "C0613111",
        "name": "California Virtual Academy at Sutter",
        "city": "Simi Valley",
        "state": "CA",
        "union": "California Virtual Educators United",
        "date": "PERB(CA) certified (exact date unconfirm",
        "website": "http://www.caliva.org"
      },
      {
        "id": "C0606021",
        "name": "California Virtual Academy San Mateo",
        "city": "Simi Valley",
        "state": "CA",
        "union": "California Virtual Educators United",
        "date": "PERB(CA) certified (exact date unconfirm",
        "website": "http://www.caliva.org"
      },
      {
        "id": "C0604009",
        "name": "Camino Nuevo Charter High",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Camino Nuevo Teachers Association (CTA affiliate)",
        "date": "With Camino Nuevo network",
        "website": ""
      },
      {
        "id": "C0613094",
        "name": "Chandler Learning Academy",
        "city": "Northridge",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Unknown — PERB case number pending",
        "website": ""
      },
      {
        "id": "C0610032",
        "name": "Children of Promise Preparatory Academy",
        "city": "Inglewood",
        "state": "CA",
        "union": "Inglewood Teachers Association (ITA, CTA affiliate",
        "date": "District CBA — Inglewood USD",
        "website": ""
      },
      {
        "id": "C0695002",
        "name": "Children's Community Charter",
        "city": "Paradise",
        "state": "CA",
        "union": "Teacher's Association of Paradise (TAP, CTA affili",
        "date": "District CBA — Paradise USD",
        "website": "http://www.paradisecccs.org"
      },
      {
        "id": "C0617015",
        "name": "Citizens of the World Charter School: Hollywood",
        "city": "Los Angeles",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "June 7, 2024 (PERB recognition order — L",
        "website": "http://cwchollywood.org"
      },
      {
        "id": "C0613011",
        "name": "Citizens of the World Charter School: Mar Vista",
        "city": "Los Angeles",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "June 7, 2024 (PERB recognition order — L",
        "website": "http://www.cwcmarvista.org"
      },
      {
        "id": "C0612029",
        "name": "Citizens of the World Charter School: Silver Lake",
        "city": "Los Angeles",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "June 7, 2024 (PERB recognition order — L",
        "website": "http://cwcsilverlake.org"
      },
      {
        "id": "C0619068",
        "name": "Citizens of the World Charter School: West Valley",
        "city": "Winnetka",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "June 7, 2024 (PERB recognition order — L",
        "website": "http://www.cwcwestvalley.org/"
      },
      {
        "id": "C0621006",
        "name": "Citizens of the World: East Valley",
        "city": "Valley Village",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "June 7, 2024 (PERB recognition order — L",
        "website": "http://cwceastvalley.org/"
      },
      {
        "id": "C0694034",
        "name": "Creative Arts Charter",
        "city": "San Francisco",
        "state": "CA",
        "union": "United Educators of San Francisco (UESF)",
        "date": "Circa 2010 (PERB certification — SF-RR-9",
        "website": "http://www.creativeartscharter.org"
      },
      {
        "id": "C0694005",
        "name": "Creative Arts Charter",
        "city": "San Francisco",
        "state": "CA",
        "union": "United Educators of San Francisco (UESF, AFT affil",
        "date": "Unknown — PERB case number pending",
        "website": "http://www.creativeartscharter.org"
      },
      {
        "id": "C0613095",
        "name": "Darby Avenue Charter",
        "city": "Northridge",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Unknown — PERB case number pending",
        "website": ""
      },
      {
        "id": "C0693004",
        "name": "Darnall Charter",
        "city": "Chula Vista",
        "state": "CA",
        "union": "Darnall Charter Teachers Association (CTA affiliat",
        "date": "Unknown — PERB case number pending",
        "website": "http://www.darnallcharter.org/"
      },
      {
        "id": "C0611037",
        "name": "El Camino Real Charter High",
        "city": "Woodland Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Pre-2016 UTLA certification (conversion ",
        "website": "http://ecrchs.net"
      },
      {
        "id": "C0611037",
        "name": "El Camino Real Charter High",
        "city": "Woodland Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Pre-2016 UTLA certification (conversion ",
        "website": "http://ecrchs.net"
      },
      {
        "id": "C0613096",
        "name": "Emelita Academy Charter",
        "city": "Tarzana",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Unknown — PERB case number pending",
        "website": ""
      },
      {
        "id": "C0621009",
        "name": "Environmental Charter High - Gardena",
        "city": "Gardena",
        "state": "CA",
        "union": "Environmental Educators United",
        "date": "May 11, 2023 (PERB recognition order — L",
        "website": "http://www.ecsonline.org"
      },
      {
        "id": "C0601017",
        "name": "Environmental Charter High - Lawndale",
        "city": "Lawndale",
        "state": "CA",
        "union": "Environmental Educators United",
        "date": "May 11, 2023 (PERB recognition order — L",
        "website": "http://www.ecsonline.org"
      },
      {
        "id": "C0610046",
        "name": "Environmental Charter Middle - Gardena",
        "city": "Gardena",
        "state": "CA",
        "union": "Environmental Educators United",
        "date": "May 11, 2023 (PERB recognition order — L",
        "website": "http://www.ecsonline.org"
      },
      {
        "id": "C0613022",
        "name": "Environmental Charter Middle - Inglewood",
        "city": "Inglewood",
        "state": "CA",
        "union": "Environmental Educators United",
        "date": "May 11, 2023 (PERB recognition order — L",
        "website": "http://www.ecsonline.org"
      },
      {
        "id": "C0608056",
        "name": "Five Keys Adult School (SF Sheriffs Dept)",
        "city": "San Francisco",
        "state": "CA",
        "union": "California Federation of Teachers (CFT/AFT)",
        "date": "Unknown — PERB case number pending",
        "website": ""
      },
      {
        "id": "C0613059",
        "name": "Gateway To College Academy",
        "city": "Petaluma",
        "state": "CA",
        "union": "Petaluma Federation of Teachers (AFT affiliate)",
        "date": "District CBA — Petaluma City USD",
        "website": ""
      },
      {
        "id": "C0607033",
        "name": "Global Education Academy",
        "city": "LOS ANGELES",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Pre-2016 UTLA certification (conversion ",
        "website": "http://www.geaschool.com"
      },
      {
        "id": "C0607033",
        "name": "Global Education Academy",
        "city": "LOS ANGELES",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Pre-2016 UTLA certification (conversion ",
        "website": "http://www.geaschool.com"
      },
      {
        "id": "C0614043",
        "name": "Global Education Academy 2",
        "city": "LOS ANGELES",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Pending verification — likely via networ",
        "website": "http://www.geaschool.com"
      },
      {
        "id": "C0614043",
        "name": "Global Education Academy 2",
        "city": "LOS ANGELES",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Pending verification — likely via networ",
        "website": "http://www.geaschool.com"
      },
      {
        "id": "C0605025",
        "name": "Gompers Charter Middle",
        "city": "San Diego",
        "state": "CA",
        "union": "San Diego Educators Association (CTA affiliate)",
        "date": "Unknown — PERB case number pending",
        "website": ""
      },
      {
        "id": "C0613097",
        "name": "Granada Community Charter",
        "city": "Northridge",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Unknown — PERB case number pending",
        "website": ""
      },
      {
        "id": "C0603020",
        "name": "Granada Hills Charter",
        "city": "Granada Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "~2003 (conversion from LAUSD Granada Hil",
        "website": "http://www.ghctk12.com"
      },
      {
        "id": "C0603076",
        "name": "Granada Hills Charter High",
        "city": "Granada Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Pre-2016 UTLA certification (conversion ",
        "website": "http://www.ghctk12.com"
      },
      {
        "id": "C0603076",
        "name": "Granada Hills Charter High",
        "city": "Granada Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Pre-2016 UTLA certification (conversion ",
        "website": "http://www.ghctk12.com"
      },
      {
        "id": "C0694027",
        "name": "Harriet Tubman Village Charter",
        "city": "San Diego",
        "state": "CA",
        "union": "San Diego Education Association (SDEA, NEA affilia",
        "date": "District CBA — San Diego USD",
        "website": "http://www.tubmancharter.org"
      },
      {
        "id": "C0699023",
        "name": "Heather Elementary",
        "city": "San Carlos",
        "state": "CA",
        "union": "San Carlos Teachers Association (CTA affiliate)",
        "date": "District CBA — San Carlos USD",
        "website": "https://www.scsdk8.org"
      },
      {
        "id": "C0698007",
        "name": "Helix High",
        "city": "La Mesa",
        "state": "CA",
        "union": "Helix Teachers Association (CTA affiliate)",
        "date": "Unknown — PERB case number pending",
        "website": "http://www.helixcharter.net"
      },
      {
        "id": "C0615037",
        "name": "High Tech Elementary",
        "city": "San Diego",
        "state": "CA",
        "union": "High Tech Education Collective (HTEC)",
        "date": "2021",
        "website": "http://www.hightechhigh.org"
      },
      {
        "id": "C0611050",
        "name": "High Tech Elementary Chula Vista",
        "city": "Chula Vista",
        "state": "CA",
        "union": "High Tech Education Collective (HTEC)",
        "date": "2021",
        "website": "http://www.hightechhigh.org"
      },
      {
        "id": "C0600011",
        "name": "High Tech Elementary Explorer",
        "city": "San Diego",
        "state": "CA",
        "union": "High Tech Education Collective (HTEC)",
        "date": "2021",
        "website": "http://www.hightechhig.org"
      },
      {
        "id": "C0619017",
        "name": "High Tech Elementary Mesa",
        "city": "San Diego",
        "state": "CA",
        "union": "High Tech Education Collective (HTEC)",
        "date": "2021",
        "website": "http://www.hightechhigh.org"
      },
      {
        "id": "C0613029",
        "name": "High Tech Elementary North County",
        "city": "San Marcos",
        "state": "CA",
        "union": "High Tech Education Collective (HTEC)",
        "date": "2021",
        "website": "http://www.hightechhigh.org"
      },
      {
        "id": "C0600013",
        "name": "High Tech High",
        "city": "San Diego",
        "state": "CA",
        "union": "High Tech Education Collective (HTEC)",
        "date": "2021",
        "website": "http://www.hightechhigh.org"
      },
      {
        "id": "C0607037",
        "name": "High Tech High Chula Vista",
        "city": "Chula Vista",
        "state": "CA",
        "union": "High Tech Education Collective (HTEC)",
        "date": "2021",
        "website": "http://www.hightechhigh.org"
      },
      {
        "id": "C0604033",
        "name": "High Tech High International",
        "city": "San Diego",
        "state": "CA",
        "union": "High Tech Education Collective (HTEC)",
        "date": "2021",
        "website": "http://www.hightechhigh.org"
      },
      {
        "id": "C0605028",
        "name": "High Tech High Media Arts",
        "city": "San Diego",
        "state": "CA",
        "union": "High Tech Education Collective (HTEC)",
        "date": "2021",
        "website": "http://www.hightechhigh.org"
      },
      {
        "id": "C0618077",
        "name": "High Tech High Mesa",
        "city": "San Diego",
        "state": "CA",
        "union": "High Tech Education Collective (HTEC)",
        "date": "2021",
        "website": "http://www.hightechhigh.org"
      },
      {
        "id": "C0607038",
        "name": "High Tech High North County",
        "city": "San Marcos",
        "state": "CA",
        "union": "High Tech Education Collective (HTEC)",
        "date": "2021",
        "website": "http://www.hightechhigh.org"
      },
      {
        "id": "C0603025",
        "name": "High Tech Middle",
        "city": "San Diego",
        "state": "CA",
        "union": "High Tech Education Collective (HTEC)",
        "date": "2021",
        "website": "http://www.hightechhigh.org"
      },
      {
        "id": "C0611051",
        "name": "High Tech Middle Chula Vista",
        "city": "Chula Vista",
        "state": "CA",
        "union": "High Tech Education Collective (HTEC)",
        "date": "2021",
        "website": "http://www.hightechhigh.org"
      },
      {
        "id": "C0605029",
        "name": "High Tech Middle Media Arts",
        "city": "San Diego",
        "state": "CA",
        "union": "High Tech Education Collective (HTEC)",
        "date": "2021",
        "website": "http://www.hightechhigh.org"
      },
      {
        "id": "C0619018",
        "name": "High Tech Middle Mesa",
        "city": "San Diego",
        "state": "CA",
        "union": "High Tech Education Collective (HTEC)",
        "date": "2021",
        "website": "http://www.hightechhigh.org"
      },
      {
        "id": "C0609033",
        "name": "High Tech Middle North County",
        "city": "San Marcos",
        "state": "CA",
        "union": "High Tech Education Collective (HTEC)",
        "date": "2021",
        "website": "http://www.hightechhigh.org"
      },
      {
        "id": "NAPCS-ADD-CA-001",
        "name": "Horizon Charter",
        "city": "Lincoln",
        "state": "CA",
        "union": "Horizon Certificated Employees Association (CTA/NE",
        "date": "Certificated unit: 2001 (SA-RR-1028-E — ",
        "website": "http://www.horizoncharterschools.org"
      },
      {
        "id": "C0610119",
        "name": "iQ Academy California-Los Angeles",
        "city": "Simi Valley",
        "state": "CA",
        "union": "IQ Academy Teachers Association",
        "date": "Not confirmed — PERB records request req",
        "website": "http://iqca.k12start.com"
      },
      {
        "id": "C0604034",
        "name": "Ivy Academia",
        "city": "Woodland Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Not confirmed — PERB records request req",
        "website": "http://www.iaecs.org"
      },
      {
        "id": "C0600015",
        "name": "Joe Serna Jr. Charter",
        "city": "Acampo",
        "state": "CA",
        "union": "California School Employees Association (CSEA) — C",
        "date": "Not confirmed — PERB records request req",
        "website": "http://www.lodiusd.net"
      },
      {
        "id": "C0606082",
        "name": "Leadership Public Schools - Hayward",
        "city": "Hayward",
        "state": "CA",
        "union": "East Bay Educators United",
        "date": "Not confirmed — PERB records request req",
        "website": "http://www.leadps.org/hayward/"
      },
      {
        "id": "C0603033",
        "name": "Leadership Public Schools: Richmond",
        "city": "Richmond",
        "state": "CA",
        "union": "East Bay Educators United",
        "date": "Not confirmed — PERB records request req",
        "website": "http://www.leadps.org"
      },
      {
        "id": "C0605040",
        "name": "Los Angeles Academy of Arts and Enterprise Charter",
        "city": "Pomona",
        "state": "CA",
        "union": "LA Academy of Arts and Enterprise (CTA affiliate)",
        "date": "Unknown — PERB case number pending",
        "website": ""
      },
      {
        "id": "C0602025",
        "name": "Los Angeles Leadership Academy",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Los Angeles Leadership Academy United (independent",
        "date": "Unknown — PERB case number pending",
        "website": "http://www.laleadership.org"
      },
      {
        "id": "C0699030",
        "name": "Mare Island Technology Academy",
        "city": "Vallejo",
        "state": "CA",
        "union": "Mare Island Technology Academy Education Associati",
        "date": "Unknown — PERB case number pending",
        "website": "http://www.mitacademy.org"
      },
      {
        "id": "C0696007",
        "name": "Montague Charter Academy",
        "city": "Arleta",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Conversion from LAUSD Montague Elementar",
        "website": "http://montaguecharter.org"
      },
      {
        "id": "C0696020",
        "name": "Montague Charter Academy",
        "city": "Pacoima",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Not confirmed — long UTLA organizing his",
        "website": "http://montaguecharter.org"
      },
      {
        "id": "C0606059",
        "name": "Monterey Bay Charter",
        "city": "Pacific Grove",
        "state": "CA",
        "union": "Monterey Bay United",
        "date": "Circa 2020 (PERB certification — SF-RR-1",
        "website": "http://www.mbayschool.org"
      },
      {
        "id": "C0694017",
        "name": "Mueller Charter School (Robert L.)",
        "city": "Chula Vista",
        "state": "CA",
        "union": "Mueller Charter School Teachers Association (CTA a",
        "date": "Unknown — PERB case number pending",
        "website": ""
      },
      {
        "id": "C0612067",
        "name": "Oak Park Preparatory Academy",
        "city": "Sacramento",
        "state": "CA",
        "union": "Sacramento City Teachers Association (SCTA, CTA/NE",
        "date": "District CBA — Sacramento City USD",
        "website": ""
      },
      {
        "id": "C0604053",
        "name": "Ocean Charter",
        "city": "Los Angeles",
        "state": "CA",
        "union": "Ocean Charter Teachers Association",
        "date": "Circa 2005 (PERB recognition — LA-RR-111",
        "website": "http://oceancs.org"
      },
      {
        "id": "C0693011",
        "name": "Options for Youth-Victorville Charter",
        "city": "Victorville",
        "state": "CA",
        "union": "Victor Valley Options for Youth Teachers Associati",
        "date": "Unknown — PERB case number pending",
        "website": ""
      },
      {
        "id": "C0699038",
        "name": "Pacific Collegiate Charter",
        "city": "Santa Cruz",
        "state": "CA",
        "union": "United Pacific Collegiate School (United PCS)",
        "date": "Not confirmed — PERB records request req",
        "website": "http://www.pacificcollegiate.com"
      },
      {
        "id": "C0603046",
        "name": "Pacoima Charter Elementary",
        "city": "Pacoima",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Conversion — UTLA retained from LAUSD",
        "website": "http://pacoimacharter.org"
      },
      {
        "id": "C0603093",
        "name": "Pacoima Charter Elementary",
        "city": "PACOIMA",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Pre-2016 UTLA certification (conversion ",
        "website": "http://pacoimacharter.org"
      },
      {
        "id": "C0603093",
        "name": "Pacoima Charter Elementary",
        "city": "PACOIMA",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Pre-2016 UTLA certification (conversion ",
        "website": "http://pacoimacharter.org"
      },
      {
        "id": "C0695011",
        "name": "Palisades Charter High",
        "city": "Pacific Palisades",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "~1993 (conversion from LAUSD Palisades H",
        "website": "http://palihigh.org"
      },
      {
        "id": "C0695025",
        "name": "Palisades Charter High",
        "city": "Pacific Palisades",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Pre-2016 UTLA certification (conversion ",
        "website": "http://palihigh.org"
      },
      {
        "id": "C0695025",
        "name": "Palisades Charter High",
        "city": "Pacific Palisades",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Pre-2016 UTLA certification (conversion ",
        "website": "http://palihigh.org"
      },
      {
        "id": "C0612053",
        "name": "Palmdale Aerospace Academy",
        "city": "Palmdale",
        "state": "CA",
        "union": "Palmdale Elementary Teachers Association (certific",
        "date": "Not confirmed — PERB records request req",
        "website": "http://www.tpaa.org"
      },
      {
        "id": "C0693012",
        "name": "Peabody Charter",
        "city": "Santa Barbara",
        "state": "CA",
        "union": "Santa Barbara Teachers Association (SBTA, CTA affi",
        "date": "District CBA — Santa Barbara USD",
        "website": "http://www.sbunified.org"
      },
      {
        "id": "C0616009",
        "name": "Pinnacle Academy Charter Independent Study",
        "city": "King City",
        "state": "CA",
        "union": "King City Joint Union High School District Teacher",
        "date": "District CBA — King City JUHSD",
        "website": ""
      },
      {
        "id": "NAPCS-ADD-CA-002",
        "name": "Port of Los Angeles High",
        "city": "San Pedro",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA) — certified but",
        "date": "December 15, 2014 (LA-RR-1237-E closed —",
        "website": "https://www.polahs.net"
      },
      {
        "id": "NAPCS-ADD-CA-006",
        "name": "Quail Lake Environmental Charter",
        "city": "Clovis",
        "state": "CA",
        "union": "Environmental Educators United (CTA/NEA)",
        "date": "July 7, 2023 (PERB(CA) recognition — LA-",
        "website": "http://www.sanger.k12.ca.us"
      },
      {
        "id": "C0611068",
        "name": "Realm Charter",
        "city": "Berkeley",
        "state": "CA",
        "union": "Berkeley Federation of Teachers (AFT affiliate)",
        "date": "Unknown — PERB case number pending",
        "website": ""
      },
      {
        "id": "C0697008",
        "name": "River Valley Charter",
        "city": "Lakeside",
        "state": "CA",
        "union": "California Teachers Association (Lakeside USD loca",
        "date": "District CBA — Lakeside Union School Dis",
        "website": "http://www.rivervalleyhigh.org"
      },
      {
        "id": "NAPCS-ADD-CA-005",
        "name": "Riverside Preparatory",
        "city": "Oro Grande",
        "state": "CA",
        "union": "Oro Grande Riverside Prep Educators Association (I",
        "date": "Date not confirmed from public sources —",
        "website": "http://www.riversideprep.net"
      },
      {
        "id": "C0694024",
        "name": "San Carlos Charter Learning Center",
        "city": "San Carlos",
        "state": "CA",
        "union": "San Carlos Teachers Association (CTA affiliate)",
        "date": "1994 (district CBA coverage from opening",
        "website": "http://www.sancarloscharter.org"
      },
      {
        "id": "C0605060",
        "name": "Santa Rosa Academy",
        "city": "Menifee",
        "state": "CA",
        "union": "Menifee Teachers Association",
        "date": "Not confirmed — PERB records request req",
        "website": "http://www.sra.mn"
      },
      {
        "id": "C0695016",
        "name": "Santiago Middle",
        "city": "Garden Grove",
        "state": "CA",
        "union": "Orange Unified Education Association (OUEA, CTA af",
        "date": "District CBA — Orange USD",
        "website": ""
      },
      {
        "id": "C0605133",
        "name": "School of Arts and Enterprise",
        "city": "Pomona",
        "state": "CA",
        "union": "SAE Teachers Association",
        "date": "Not confirmed — PERB records request req",
        "website": "http://www.thesae.k12.ca.us/"
      },
      {
        "id": "C0615066",
        "name": "Shasta County Independent Study Charter",
        "city": "Redding",
        "state": "CA",
        "union": "Shasta County Certificated Employees Association (",
        "date": "County CBA — Shasta County Office of Edu",
        "website": ""
      },
      {
        "id": "C0614072",
        "name": "Shenandoah Valley",
        "city": "Plymouth",
        "state": "CA",
        "union": "Amador County Teachers Association (ACTA, CTA affi",
        "date": "District CBA — Amador County USD",
        "website": ""
      },
      {
        "id": "C0606071",
        "name": "Smythe Academy of Arts and Sciences",
        "city": "Sacramento",
        "state": "CA",
        "union": "Twin Rivers United Educators (TRUE, CTA affiliate)",
        "date": "District CBA — Twin Rivers USD",
        "website": "http://smythe6.trusd.net/"
      },
      {
        "id": "NAPCS-ADD-CA-004",
        "name": "Sparrow Academy",
        "city": "La Mesa",
        "state": "CA",
        "union": "La Mesa-Spring Valley Teachers Association (CTA/NE",
        "date": "Date not confirmed from public sources —",
        "website": "http://www.sparrowschool.org"
      },
      {
        "id": "C0606072",
        "name": "Steele Canyon High",
        "city": "El Cajon",
        "state": "CA",
        "union": "Steele Canyon Charter Teachers Association (CTA af",
        "date": "Unknown — PERB case number pending",
        "website": "http://www.schscougars.org/"
      },
      {
        "id": "NAPCS-ADD-CA-003",
        "name": "Summit Preparatory Charter High",
        "city": "Redwood City",
        "state": "CA",
        "union": "Unite Summit (CTA/NEA)",
        "date": "February 27, 2023 (PERB(CA) certificatio",
        "website": "http://summitprep.summitps.org"
      },
      {
        "id": "C0614146",
        "name": "Summit Public School K2",
        "city": "El Cerrito",
        "state": "CA",
        "union": "Unite Summit",
        "date": "02/27/2023",
        "website": "http://k2.summitps.org"
      },
      {
        "id": "C0613027",
        "name": "Summit Public School: Shasta",
        "city": "Daly City",
        "state": "CA",
        "union": "Unite Summit",
        "date": "02/27/2023",
        "website": "http://shasta.summitps.org"
      },
      {
        "id": "C0611081",
        "name": "Summit Public School: Tahoma",
        "city": "San Jose",
        "state": "CA",
        "union": "Unite Summit",
        "date": "02/27/2023",
        "website": "http://tahoma.summitps.org"
      },
      {
        "id": "C0616048",
        "name": "Summit Public School: Tamalpais",
        "city": "Richmond",
        "state": "CA",
        "union": "Unite Summit",
        "date": "02/27/2023",
        "website": "http://tam.summitps.org"
      },
      {
        "id": "C0609069",
        "name": "Sycamore Academy of Science and Cultural Arts",
        "city": "Wildomar",
        "state": "CA",
        "union": "Lake Elsinore Teachers Association",
        "date": "Not confirmed — PERB records request req",
        "website": "http://www.sycamoreacademycharter.org"
      },
      {
        "id": "C0619040",
        "name": "Sycamore Academy of Science and Cultural Arts - Chino Valley",
        "city": "Chino",
        "state": "CA",
        "union": "Lake Elsinore Teachers Association",
        "date": "Not confirmed — PERB records request req",
        "website": "http://www.sycamorechino.org/"
      },
      {
        "id": "C0694001",
        "name": "The Accelerated School",
        "city": "South Los Angeles",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "March 25, 2009 (PERB LA-RR-1166-E, close",
        "website": "https://www.acceleratedschools.net"
      },
      {
        "id": "C0611108",
        "name": "Thomas Edison Charter Academy",
        "city": "San Francisco",
        "state": "CA",
        "union": "Edison Charter Teachers Union",
        "date": "Circa 2007 (PERB certification — SF-RR-8",
        "website": "http://www.teca-sf.org"
      },
      {
        "id": "C0600036",
        "name": "Tierra Linda Middle",
        "city": "San Carlos",
        "state": "CA",
        "union": "San Carlos Teachers Association (CTA affiliate)",
        "date": "District CBA — San Carlos USD",
        "website": "https://www.scsdk8.org"
      },
      {
        "id": "C0608058",
        "name": "Walter L. Bachrodt Elementary",
        "city": "San Jose",
        "state": "CA",
        "union": "San Jose Teachers Association (SJTA, CTA affiliate",
        "date": "District CBA — San Jose USD",
        "website": ""
      },
      {
        "id": "C0600042",
        "name": "White Oaks Elementary",
        "city": "San Carlos",
        "state": "CA",
        "union": "San Carlos Teachers Association (CTA affiliate)",
        "date": "District CBA — San Carlos USD",
        "website": "https://www.scsdk8.org"
      },
      {
        "id": "C0997001",
        "name": "COMMON GROUND HIGH SCHOOL",
        "city": "New Haven",
        "state": "CT",
        "union": "UAW Local 2110",
        "date": "November 2021 (NLRB election date)",
        "website": "http://www.commongroundct.org"
      },
      {
        "id": "C0997003",
        "name": "INTEGRATED DAY CHARTER SCHOOL",
        "city": "Norwich",
        "state": "CT",
        "union": "Norwich Integrated Education Association",
        "date": "1997 (founding — union predates first da",
        "website": ""
      },
      {
        "id": "C0997004",
        "name": "INTERDISTRICT SCHOOL FOR ARTS AND COMMUNICATION (ISAAC)",
        "city": "New London",
        "state": "CT",
        "union": "ISAAC Education Association",
        "date": "2005 (per NAPCS baseline — primary sourc",
        "website": "http://www.isaacschool.org"
      },
      {
        "id": "C0902001",
        "name": "NEW BEGINNINGS FAMILY ACADEMY",
        "city": "Bridgeport",
        "state": "CT",
        "union": "New Beginnings Education Association",
        "date": "Pre-2013 (NAPCS baseline; exact year unk",
        "website": "http://www.nbfacademy.org"
      },
      {
        "id": "C1116001",
        "name": "BREAKTHROUGH MONTESSORI PCS",
        "city": "Washington",
        "state": "DC",
        "union": "Breakthrough Montessori Staff Union",
        "date": "June 5, 2025 (NLRB cert — employer RM pe",
        "website": "http://www.breakthroughmontessori.org/"
      },
      {
        "id": "C1119008",
        "name": "CALLE OCHO CAMPUS — MUNDO VERDE BILINGUAL PCS",
        "city": "Washington",
        "state": "DC",
        "union": "Mundo Verde Staff Union",
        "date": "May 4, 2020 (voluntary recognition / car",
        "website": "http://mundoverdepcs.org"
      },
      {
        "id": "C1100005",
        "name": "CAPITAL CITY PCS — LOWER SCHOOL",
        "city": "Washington",
        "state": "DC",
        "union": "Capital City Staff Union",
        "date": "May 2, 2024 (NLRB election date, Case 05",
        "website": "http://www.ccpcs.org"
      },
      {
        "id": "C1112001",
        "name": "CAPITAL CITY PCS — MIDDLE SCHOOL",
        "city": "Washington",
        "state": "DC",
        "union": "Capital City Staff Union",
        "date": "May 2, 2024 (network-wide, NLRB 05-RC-33",
        "website": "http://www.ccpcs.org"
      },
      {
        "id": "C1108006",
        "name": "CAPITAL CITY PCS — UPPER SCHOOL",
        "city": "Washington",
        "state": "DC",
        "union": "Capital City Staff Union",
        "date": "May 2, 2024 (network-wide, NLRB 05-RC-33",
        "website": "http://www.ccpcs.org"
      },
      {
        "id": "C1114009",
        "name": "DISTRICT OF COLUMBIA INTERNATIONAL SCHOOL (DCI)",
        "city": "Washington",
        "state": "DC",
        "union": "DCI Staff Union",
        "date": "May 7, 2024 (NLRB election date — case #",
        "website": "http://www.dcinternationalschool.org"
      },
      {
        "id": "C1100001",
        "name": "J.F. COOK CAMPUS — MUNDO VERDE BILINGUAL PCS",
        "city": "Washington",
        "state": "DC",
        "union": "Mundo Verde Staff Union",
        "date": "May 15, 2019 (NLRB election date, Case 0",
        "website": "https://www.mundoverdepcs.org"
      },
      {
        "id": "C1096002",
        "name": "Charter School of Wilmington",
        "city": "Wilmington",
        "state": "DE",
        "union": "Charter School of Wilmington Education Association",
        "date": "Spring 2018 (exact date pending PERB(DE)",
        "website": "http://charterschool.org/"
      },
      {
        "id": "C1006003",
        "name": "Odyssey Charter School",
        "city": "Wilmington",
        "state": "DE",
        "union": "Odyssey Charter School Education Association (OCSE",
        "date": "Fall 2018 (exact date pending PERB(DE) F",
        "website": "http://www.odysseycharterschooldel.org"
      },
      {
        "id": "C1000002",
        "name": "Sussex Academy of Arts and Sciences",
        "city": "Georgetown",
        "state": "DE",
        "union": "Sussex Academy of Arts and Sciences Education Asso",
        "date": "February 2026 (PERB(DE) case 1521 — Noti",
        "website": "http://www.sussexacademy.org"
      },
      {
        "id": "C1018001",
        "name": "Sussex Montessori School",
        "city": "Seaford",
        "state": "DE",
        "union": "Sussex Montessori Education Association (SMEA)",
        "date": "Unknown — pending PERB(DE) FOIA records ",
        "website": "http://sussexmontessoricharter.com/"
      },
      {
        "id": "C1298003",
        "name": "City of Pembroke Pines Charter — West Middle School",
        "city": "Pembroke Pines",
        "state": "FL",
        "union": "Broward Teachers Union (BTU) Local #1975 — Charter",
        "date": "January 2007 (exact date pending PERC(FL",
        "website": "http://pinescharter.net"
      },
      {
        "id": "C1200007",
        "name": "City of Pembroke Pines Charter School — Academic Village",
        "city": "Pembroke Pines",
        "state": "FL",
        "union": "Broward Teachers Union (BTU) Local #1975 — Charter",
        "date": "January 2007 (exact date pending PERC(FL",
        "website": "http://franklin-academy.org"
      },
      {
        "id": "C1299007",
        "name": "City of Pembroke Pines Charter School — East Campus Elementary",
        "city": "Pembroke Pines",
        "state": "FL",
        "union": "Broward Teachers Union (BTU) Local #1975 — Charter",
        "date": "January 2007 (exact date pending PERC(FL",
        "website": "http://pinescharter.net"
      },
      {
        "id": "C1202008",
        "name": "Compass Middle Charter School",
        "city": "Bartow",
        "state": "FL",
        "union": "Polk Education Association (PEA) / FEA — 3 separat",
        "date": "December 1, 2009 (earliest of 3 PERC cer",
        "website": "http://schools.polk-fl.net/compassmiddle"
      },
      {
        "id": "C1203019",
        "name": "Pembroke Pines FSU Charter Elementary School",
        "city": "Pembroke Pines",
        "state": "FL",
        "union": "Broward Teachers Union (BTU) / Florida Education A",
        "date": "N/A",
        "website": "http://pinescharter.net"
      },
      {
        "id": "C1706010",
        "name": "ACERO CHARTER SCHOOL NETWORK - BARTOLOME DE LAS CASAS",
        "city": "Chicago",
        "state": "IL",
        "union": "United Educators for Justice (UEJ) / ChiACTS",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://www.ucsnschools.org/"
      },
      {
        "id": "C1713006",
        "name": "ACERO CHARTER SCHOOL NETWORK - BRIGHTON PARK",
        "city": "Chicago",
        "state": "IL",
        "union": "United Educators for Justice (UEJ) / ChiACTS",
        "date": "Unknown — NLRB Region 13 records request",
        "website": ""
      },
      {
        "id": "C1706009",
        "name": "ACERO CHARTER SCHOOL NETWORK - CARLOS FUENTES",
        "city": "Chicago",
        "state": "IL",
        "union": "United Educators for Justice (UEJ) / ChiACTS",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://www.ucsnschools.org/"
      },
      {
        "id": "C1711004",
        "name": "ACERO CHARTER SCHOOL NETWORK - ESMERALDA SANTIAGO",
        "city": "Chicago",
        "state": "IL",
        "union": "United Educators for Justice (UEJ) / ChiACTS",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://www.ucsnschools.org/"
      },
      {
        "id": "C1711003",
        "name": "ACERO CHARTER SCHOOL NETWORK - JOVITA IDAR",
        "city": "Chicago",
        "state": "IL",
        "union": "United Educators for Justice (UEJ) / ChiACTS",
        "date": "Unknown — NLRB Region 13 records request",
        "website": ""
      },
      {
        "id": "C1708012",
        "name": "ACERO CHARTER SCHOOL NETWORK - MAJOR HECTOR P. GARCIA M.D. HIGH SCHOOL",
        "city": "Chicago",
        "state": "IL",
        "union": "United Educators for Justice (UEJ) / ChiACTS",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://www.ucsnschools.org"
      },
      {
        "id": "C1707007",
        "name": "ACERO CHARTER SCHOOL NETWORK - OFFICER DONALD J. MARQUEZ SCHOOL",
        "city": "Chicago",
        "state": "IL",
        "union": "United Educators for Justice (UEJ) / ChiACTS",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://www.ucsnschools.org/"
      },
      {
        "id": "C1708011",
        "name": "ACERO CHARTER SCHOOL NETWORK - PFC OMAR E. TORRES CAMPUS",
        "city": "Chicago",
        "state": "IL",
        "union": "United Educators for Justice (UEJ) / ChiACTS",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://ucsnschools.org"
      },
      {
        "id": "C1712003",
        "name": "ACERO CHARTER SCHOOL NETWORK - ROBERTO CLEMENTE",
        "city": "Chicago",
        "state": "IL",
        "union": "United Educators for Justice (UEJ) / ChiACTS",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://www.ucsnschools.org/"
      },
      {
        "id": "C1705008",
        "name": "ACERO CHARTER SCHOOL NETWORK - RUFINO TAMAYO",
        "city": "Chicago",
        "state": "IL",
        "union": "United Educators for Justice (UEJ) / ChiACTS",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://www.ucsnschools.org/"
      },
      {
        "id": "C1710004",
        "name": "ACERO CHARTER SCHOOL NETWORK - SANDRA CISNEROS",
        "city": "Chicago",
        "state": "IL",
        "union": "United Educators for Justice (UEJ) / ChiACTS",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://www.ucsnschools.org/"
      },
      {
        "id": "C1708010",
        "name": "ACERO CHARTER SCHOOL NETWORK - SPC DANIEL ZIZUMBO CAMPUS",
        "city": "Chicago",
        "state": "IL",
        "union": "United Educators for Justice (UEJ) / ChiACTS",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://www.ucsnschools.org/"
      },
      {
        "id": "C1713007",
        "name": "ACERO CHARTER SCHOOL NETWORK VICTORIA SOTO CAMPUS",
        "city": "Chicago",
        "state": "IL",
        "union": "United Educators for Justice (UEJ) / ChiACTS",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://www.ucsnschools.org"
      },
      {
        "id": "C1705012",
        "name": "ASPIRA ANTONIA PANTOJA HIGH SCHOOL",
        "city": "Chicago",
        "state": "IL",
        "union": "ChiACTS / Youth Connections (YCCS)",
        "date": "Unknown — NLRB Region 13 records request",
        "website": ""
      },
      {
        "id": "C1703003",
        "name": "CHICAGO INTERNATIONAL CHARTER SCHOOL (CICS) - NORTHTOWN",
        "city": "Chicago",
        "state": "IL",
        "union": "ChiACTS (Chicago Alliance of Charter Teachers and ",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://www.chicagointl.org/campuses/northtown.html"
      },
      {
        "id": "C1706003",
        "name": "CHICAGO INTERNATIONAL CHARTER SCHOOL (CICS) - RALPH ELLISON",
        "city": "Chicago",
        "state": "IL",
        "union": "ChiACTS (Chicago Alliance of Charter Teachers and ",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://www.chicagointl.org/campuses/ralph-ellison.html"
      },
      {
        "id": "C1705003",
        "name": "CHICAGO INTERNATIONAL CHARTER SCHOOL (CICS) - WRIGHTWOOD",
        "city": "Chicago",
        "state": "IL",
        "union": "ChiACTS (Chicago Alliance of Charter Teachers and ",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://www.chicagointl.org/campuses/wrightwood.html"
      },
      {
        "id": "C1713010",
        "name": "CHRISTOPHER HOUSE",
        "city": "Chicago",
        "state": "IL",
        "union": "ChiACTS (Chicago Alliance of Charter Teachers and ",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://www.christopherhouse.org"
      },
      {
        "id": "C1710013",
        "name": "INSTITUTO HEALTH SCIENCE CAREER ACADEMY (IHSCA)",
        "city": "Chicago",
        "state": "IL",
        "union": "ChiACTS (Chicago Alliance of Charter Teachers and ",
        "date": "Unknown — NLRB Region 13 records request",
        "website": ""
      },
      {
        "id": "C1712007",
        "name": "INSTITUTO JUSTICE AND LEADERSHIP CHARTER ACADEMY",
        "city": "Chicago",
        "state": "IL",
        "union": "ChiACTS (Chicago Alliance of Charter Teachers and ",
        "date": "Unknown — NLRB Region 13 records request",
        "website": ""
      },
      {
        "id": "NAPCS-ADD-IL-002",
        "name": "JACKSON CHARTER SCHOOL",
        "city": "Chicago",
        "state": "IL",
        "union": "ChiACTS (Chicago Alliance of Charter Teachers and ",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://www.chicagointl.org/campuses/rockford-patriots.html"
      },
      {
        "id": "C1704003",
        "name": "NAMASTE CHARTER SCHOOL",
        "city": "Chicago",
        "state": "IL",
        "union": "ChiACTS (Chicago Alliance of Charter Teachers and ",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://www.cps.edu"
      },
      {
        "id": "NAPCS-ADD-IL-001",
        "name": "NAMASTE ELEMENTARY CHARTER SCHOOL",
        "city": "Chicago",
        "state": "IL",
        "union": "ChiACTS (Chicago Alliance of Charter Teachers and ",
        "date": "Unknown — NLRB Region 13 records request",
        "website": ""
      },
      {
        "id": "C1701005",
        "name": "PASSAGES CHARTER SCHOOL",
        "city": "Chicago",
        "state": "IL",
        "union": "ChiACTS (Chicago Alliance of Charter Teachers and ",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://www.cps.edu"
      },
      {
        "id": "C1799009",
        "name": "PRAIRIE CROSSING CHARTER SCHOOL",
        "city": "Grayslake",
        "state": "IL",
        "union": "Prairie Crossing Federation of Teachers and Suppor",
        "date": "Unknown — IELRB records request needed",
        "website": "http://www.prairiecrossingcharterschool.org"
      },
      {
        "id": "C1710009",
        "name": "URBAN PREP ACADEMY CHARTER HS - BRONZEVILLE",
        "city": "Chicago",
        "state": "IL",
        "union": "ChiACTS (Chicago Alliance of Charter Teachers and ",
        "date": "June 2015 (network-wide, NLRB RC-151747)",
        "website": "http://www.urbanprep.org"
      },
      {
        "id": "C1706011",
        "name": "URBAN PREP ACADEMY CHARTER HS - ENGLEWOOD",
        "city": "Chicago",
        "state": "IL",
        "union": "ChiACTS (Chicago Alliance of Charter Teachers and ",
        "date": "June 2015 (NLRB cert RC-151747)",
        "website": ""
      },
      {
        "id": "NAPCS-ADD-IL-003",
        "name": "YCCS WEST",
        "city": "Chicago",
        "state": "IL",
        "union": "ChiACTS / Youth Connections (YCCS)",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://yccs.us/"
      },
      {
        "id": "C1705019",
        "name": "YCCS: ASSOCIATION HOUSE",
        "city": "Chicago",
        "state": "IL",
        "union": "ChiACTS / Youth Connections (YCCS)",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://yccs.us/"
      },
      {
        "id": "C1705022",
        "name": "YCCS: LATINO YOUTH HIGH SCHOOL",
        "city": "Chicago",
        "state": "IL",
        "union": "ChiACTS / Youth Connections (YCCS)",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://yccs.us/"
      },
      {
        "id": "C1705030",
        "name": "YCCS: YOUTH CONNECTION LEADERSHIP ACADEMY",
        "city": "Chicago",
        "state": "IL",
        "union": "ChiACTS / Youth Connections (YCCS)",
        "date": "Unknown — NLRB Region 13 records request",
        "website": ""
      },
      {
        "id": "C2205002",
        "name": "Benjamin Franklin High School",
        "city": "New Orleans",
        "state": "LA",
        "union": "United Teachers of Franklin / UTNO",
        "date": "2014",
        "website": ""
      },
      {
        "id": "C2217025",
        "name": "Bricolage Academy",
        "city": "New Orleans",
        "state": "LA",
        "union": "Bricolage Academy Educators United (BAEU) / UTNO",
        "date": "2021",
        "website": ""
      },
      {
        "id": "C2211007",
        "name": "Lycée Français International de la Louisiane (LFI)",
        "city": "New Orleans",
        "state": "LA",
        "union": "Union des Educateurs du LFNO (UELFNO) / UTNO — cer",
        "date": "2024-05-21 (NLRB certification date — ju",
        "website": ""
      },
      {
        "id": "C2210012",
        "name": "Morris Jeff Community School",
        "city": "New Orleans",
        "state": "LA",
        "union": "Morris Jeff United Educators (MJUE) / UTNO",
        "date": "2013",
        "website": ""
      },
      {
        "id": "C2505001",
        "name": "ADVANCED MATH AND SCIENCE ACADEMY CHARTER SCHOOL",
        "city": "Marlborough",
        "state": "MA",
        "union": "AMSA Educators Association / Teamsters Local 170",
        "date": "July 16, 2014 (Unit 1 — teachers); March",
        "website": "http://www.amsacs.org"
      },
      {
        "id": "C2595003",
        "name": "CAPE COD LIGHTHOUSE CHARTER SCHOOL",
        "city": "East Harwich",
        "state": "MA",
        "union": "Cape Cod Lighthouse Charter School Educators Assoc",
        "date": "April 14, 2011 (DLR certification — 1 re",
        "website": "http://www.cclighthouseschool.org"
      },
      {
        "id": "C2595004",
        "name": "CITY ON A HILL CHARTER PUBLIC SCHOOL",
        "city": "Boston",
        "state": "MA",
        "union": "City on a Hill Educators Association / Boston Teac",
        "date": "May 1, 2018 (DLR certification — 3 recor",
        "website": "http://www.cityonahill.org"
      },
      {
        "id": "C2501002",
        "name": "CODMAN ACADEMY CHARTER PUBLIC SCHOOL",
        "city": "Boston",
        "state": "MA",
        "union": "Codman Academy Educators Union / Boston Teachers U",
        "date": "May 29, 2024 (DLR WMA card-check certifi",
        "website": "http://www.codmanacademy.org"
      },
      {
        "id": "C2505002",
        "name": "COMMUNITY CHARTER SCHOOL OF CAMBRIDGE",
        "city": "Cambridge",
        "state": "MA",
        "union": "Community Charter School of Cambridge Educators Un",
        "date": "June 7, 2024 (DLR certification; amended",
        "website": "http://www.ccscambridge.org"
      },
      {
        "id": "C2598006",
        "name": "FOXBOROUGH REGIONAL CHARTER SCHOOL",
        "city": "Foxborough",
        "state": "MA",
        "union": "FRCSTA — Foxborough Regional Charter School Teache",
        "date": "Unknown — no DLR records found; voluntar",
        "website": "http://www.foxboroughrcs.org"
      },
      {
        "id": "C2594002",
        "name": "NEIGHBORHOOD HOUSE CHARTER SCHOOL",
        "city": "Boston",
        "state": "MA",
        "union": "Neighborhood House Charter School Educators Union ",
        "date": "March 18, 2024 (DLR certification — 4 re",
        "website": "http://www.thenhcs.org"
      },
      {
        "id": "C2596006",
        "name": "PIONEER VALLEY PERFORMING ARTS CHARTER PUBLIC SCHOOL",
        "city": "South Hadley",
        "state": "MA",
        "union": "PVPA Staff Association / UAW Local 2322",
        "date": "February 8, 2018 (DLR certification — co",
        "website": "http://pvpa.org"
      },
      {
        "id": "C2313001",
        "name": "BAXTER ACADEMY FOR TECHNOLOGY AND SCIENCE",
        "city": "Portland",
        "state": "ME",
        "union": "Baxter Academy Education Association",
        "date": "May 14, 2019 (NLRB election/certificatio",
        "website": "http://baxter-academy.org"
      },
      {
        "id": "C2601002",
        "name": "Arts Academy in the Woods",
        "city": "Fraser",
        "state": "MI",
        "union": "Arts Academy in the Woods Federation of Teachers (",
        "date": "~January 2012 (exact date recoverable vi",
        "website": "http://www.artsacad.net"
      },
      {
        "id": "C2699074",
        "name": "Cesar Chavez Academy Elementary",
        "city": "Detroit",
        "state": "MI",
        "union": "Michigan Alliance of Charter Teachers & Staff (Mic",
        "date": "February 7, 2013 (network-wide certifica",
        "website": "http://www.chavezvernor.com/"
      },
      {
        "id": "C2601012",
        "name": "Cesar Chavez Academy High School",
        "city": "Detroit",
        "state": "MI",
        "union": "Michigan Alliance of Charter Teachers & Staff (Mic",
        "date": "February 7, 2013 (NLRB R7 election, 2:1 ",
        "website": "http://www.chavezwaterman.com"
      },
      {
        "id": "C2609001",
        "name": "Cesar Chavez Academy Intermediate",
        "city": "Detroit",
        "state": "MI",
        "union": "Michigan Alliance of Charter Teachers & Staff (Mic",
        "date": "February 7, 2013 (network-wide certifica",
        "website": "http://www.chavezmartin.com/"
      },
      {
        "id": "C2699073",
        "name": "Cesar Chavez Academy Middle School",
        "city": "Detroit",
        "state": "MI",
        "union": "Michigan Alliance of Charter Teachers & Staff (Mic",
        "date": "February 7, 2013 (network-wide certifica",
        "website": "http://www.chavezgoldsmith.com/"
      },
      {
        "id": "C2600004",
        "name": "Grand Rapids Child Discovery Center",
        "city": "Grand Rapids",
        "state": "MI",
        "union": "Unknown — bargaining agreement active per school t",
        "date": "Unknown — MERC FOIA required for cert da",
        "website": "http://www.childdiscoverycenter.org"
      },
      {
        "id": "NAPCS-ADD-MI-001",
        "name": "Macomb Montessori Academy",
        "city": "Clinton Township",
        "state": "MI",
        "union": "Michigan Education Association (MEA) / NEA — dual ",
        "date": "Unknown — confirmed as of 2018 MEA repor",
        "website": "http://macombmontessoriacademy.com"
      },
      {
        "id": "NAPCS-ADD-MI-002",
        "name": "Old Redford Academy",
        "city": "Detroit",
        "state": "MI",
        "union": "Michigan Education Association (MEA) / NEA",
        "date": "Unknown — confirmed existing as of Novem",
        "website": "Unknown — research coordinator to verify current school website and operational status"
      },
      {
        "id": "C2610008",
        "name": "University Yes Academy",
        "city": "Detroit",
        "state": "MI",
        "union": "Michigan Alliance of Charter Teachers and Staff (M",
        "date": "May 14, 2015 (NLRB Certification of Repr",
        "website": ""
      },
      {
        "id": "NAPCS-ADD-MI-003",
        "name": "West Michigan Academy of Arts and Academics",
        "city": "Spring Lake",
        "state": "MI",
        "union": "Michigan Education Association (MEA) / NEA",
        "date": "October 12, 2010",
        "website": "Unknown — research coordinator to verify current school website (not in NCES CCD; address 17350 Hazel St, Spring Lake MI 49456)"
      },
      {
        "id": "C2714001",
        "name": "ART AND SCIENCE ACADEMY",
        "city": "Isanti",
        "state": "MN",
        "union": "ASA Staff Association",
        "date": "2021 (BMS card-check, case 21RCE0933 — e",
        "website": "http://artandscienceacademy.k12.mn.us/"
      },
      {
        "id": "C2707002",
        "name": "COMMUNITY SCHOOL OF EXCELLENCE (CSE)",
        "city": "Saint Paul",
        "state": "MN",
        "union": "CSE Staff Association",
        "date": "June 2014 (NLRB, pre-PELRA amendment)",
        "website": "http://www.csemn.org/"
      },
      {
        "id": "C2718004",
        "name": "HIAWATHA COLLEGE PREP - NORTHROP CAMPUS",
        "city": "Minneapolis",
        "state": "MN",
        "union": "Hiawatha Area Workers United (HAWU)",
        "date": "June 2021 (network-wide — NLRB 18-RC-276",
        "website": "http://www.hiawathaacademies.org/"
      },
      {
        "id": "C2715010",
        "name": "HIAWATHA COLLEGIATE HIGH SCHOOL",
        "city": "Minneapolis",
        "state": "MN",
        "union": "Hiawatha Area Workers United (HAWU)",
        "date": "June 2021 (network-wide — NLRB 18-RC-276",
        "website": "http://www.hiawathaacademies.org/"
      },
      {
        "id": "C2707018",
        "name": "HIAWATHA LEADERSHIP ACADEMY - NORTHROP CAMPUS",
        "city": "Minneapolis",
        "state": "MN",
        "union": "Hiawatha Area Workers United (HAWU)",
        "date": "June 2021 (network-wide — NLRB 18-RC-276",
        "website": "http://www.hiawathaacademies.org/"
      },
      {
        "id": "C2705019",
        "name": "TWIN CITIES GERMAN IMMERSION SCHOOL (TCGIS)",
        "city": "Saint Paul",
        "state": "MN",
        "union": "TCGIS Staff Association",
        "date": "January 2014 (NLRB, pre-PELRA amendment)",
        "website": "http://www.tcgis.org/"
      },
      {
        "id": "NAPCS-ADD-MN-002",
        "name": "Ubah Medical Academy",
        "city": "Hopkins",
        "state": "MN",
        "union": "Ubah Academy Staff Association",
        "date": "2011 (BMS case 11PCE0488 — exact date pe",
        "website": "https://ubahmedicalacademy.org"
      },
      {
        "id": "NAPCS-ADD-NJ-002",
        "name": "BelovED Community Charter School",
        "city": "Jersey City",
        "state": "NJ",
        "union": "BelovED CS Education Association (pending OPRA con",
        "date": "September 19, 2024 — MOST RECENT CHARTER",
        "website": "https://www.belovedccs.org"
      },
      {
        "id": "C3498003",
        "name": "Classical Academy Charter School",
        "city": "Clifton",
        "state": "NJ",
        "union": "Classical Academy Charter School Association",
        "date": "2015-16 (exact date pending OPRA)",
        "website": "http://www.classiclacademy.org"
      },
      {
        "id": "C3408004",
        "name": "Community Charter School of Paterson",
        "city": "Paterson",
        "state": "NJ",
        "union": "Community Charter School of Paterson Education Ass",
        "date": "2015 (card check — exact date pending OP",
        "website": "http://www.ccsp.org"
      },
      {
        "id": "C3411005",
        "name": "Dr. Lena Edwards Academic Charter School",
        "city": "Jersey City",
        "state": "NJ",
        "union": "Dr. Lena Edwards Academic Charter School Education",
        "date": "~2016 (cert date uncertain — \"2016?\" in ",
        "website": "http://www.drlenaedwardscharterschool.org"
      },
      {
        "id": "C3498004",
        "name": "East Orange Community Charter School",
        "city": "East Orange",
        "state": "NJ",
        "union": "East Orange Community Charter Education Associatio",
        "date": "2019 (exact date pending OPRA)",
        "website": "http://www.theeoccs.org"
      },
      {
        "id": "C3498006",
        "name": "Englewood on the Palisades Charter School",
        "city": "Englewood",
        "state": "NJ",
        "union": "Englewood on the Palisades Charter School Teachers",
        "date": "October 20, 2010 (PERC RO-2011-010)",
        "website": "http://www.englewoodcharterschool.com"
      },
      {
        "id": "C3498012",
        "name": "Golden Door Charter School",
        "city": "Jersey City",
        "state": "NJ",
        "union": "Golden Door Education Association",
        "date": "2015 (card check — exact date pending OP",
        "website": "http://www.goldendoorschool.org"
      },
      {
        "id": "C3498007",
        "name": "Greater Brunswick Charter School",
        "city": "New Brunswick",
        "state": "NJ",
        "union": "Greater Brunswick Charter School Education Associa",
        "date": "2000-2001 (exact date pending OPRA)",
        "website": "http://greaterbrunswick.org"
      },
      {
        "id": "C3498011",
        "name": "International Charter School",
        "city": "Trenton",
        "state": "NJ",
        "union": "International Charter School of Trenton Education ",
        "date": "2000 (original PERC election); reaffirme",
        "website": "http://internationalcs.org"
      },
      {
        "id": "C3401005",
        "name": "LEAP Academy University Charter School",
        "city": "Camden",
        "state": "NJ",
        "union": "LEAP Academy Teachers Association",
        "date": "2004 (exact date pending OPRA)",
        "website": "http://www.leapacademycharter.org"
      },
      {
        "id": "C3497004",
        "name": "Learning Community Charter School",
        "city": "Jersey City",
        "state": "NJ",
        "union": "Learning Community Charter School Education Associ",
        "date": "2024 (exact date pending OPRA)",
        "website": "http://www.lccsnj.org"
      },
      {
        "id": "C3499005",
        "name": "Marion P. Thomas Charter School PAC Academy",
        "city": "Newark",
        "state": "NJ",
        "union": "Marion P. Thomas Education Association",
        "date": "Unknown — CBA confirmed on PERC portal; ",
        "website": "https://www.mptcs.org"
      },
      {
        "id": "C3499006",
        "name": "Marion P. Thomas Charter School STEAM Academy",
        "city": "Newark",
        "state": "NJ",
        "union": "Marion P. Thomas Education Association",
        "date": "Unknown — same CBA as C3499005",
        "website": "https://www.mptcs.org"
      },
      {
        "id": "C3401006",
        "name": "New Horizons Community Charter School",
        "city": "Newark",
        "state": "NJ",
        "union": "New Horizons Employee Association",
        "date": "2003 (exact date pending OPRA)",
        "website": "http://www.nhccschool.org"
      },
      {
        "id": "C3403001",
        "name": "Paterson Charter School for Science and Technology",
        "city": "Paterson",
        "state": "NJ",
        "union": "Paterson Charter Education Association",
        "date": "2015 (card check — exact date pending OP",
        "website": "http://www.pcsst.org/"
      },
      {
        "id": "C3497009",
        "name": "Soaring Heights Charter School",
        "city": "Jersey City",
        "state": "NJ",
        "union": "Soaring Heights Charter School Education Associati",
        "date": "Unknown — predates PERC online database;",
        "website": "http://www.shcsjc.org"
      },
      {
        "id": "C3497010",
        "name": "Sussex County Charter School",
        "city": "Sparta",
        "state": "NJ",
        "union": "Sussex County Charter Education Association",
        "date": "2016 (card check — exact date pending OP",
        "website": "http://www.sussexcharter.org"
      },
      {
        "id": "NAPCS-ADD-NJ-001",
        "name": "The Ethical Community Charter School",
        "city": "Jersey City",
        "state": "NJ",
        "union": "Ethical Community CS Education Association (pendin",
        "date": "September 2020 (PERC cert date from Regi",
        "website": "https://www.teccs.org"
      },
      {
        "id": "C3400004",
        "name": "The Queen City Academy Charter School",
        "city": "Plainfield",
        "state": "NJ",
        "union": "Queen City Education Association",
        "date": "2015 (card check — exact date pending OP",
        "website": "http://queencity.edu/"
      },
      {
        "id": "C3511001",
        "name": "J Paul Taylor Academy",
        "city": "Las Cruces",
        "state": "NM",
        "union": "National Education Association (NEA)",
        "date": "2015-2016 school year (unit formed); 201",
        "website": "http://www.jpaultayloracademy.org"
      },
      {
        "id": "C3500003",
        "name": "Monte del Sol Charter School",
        "city": "Santa Fe",
        "state": "NM",
        "union": "NEA-New Mexico (National Education Association)",
        "date": "2010-2011 school year",
        "website": "http://www.mdscs.org"
      },
      {
        "id": "C3600001",
        "name": "Amber Charter School",
        "city": "New York",
        "state": "NY",
        "union": "United Federation of Teachers (UFT) Local 2",
        "date": "September 1, 2009 (UFT CBA effective dat",
        "website": "http://www.ambercharter.org"
      },
      {
        "id": "NAPCS-ADD-NY-002",
        "name": "Amber Charter School — Inwood Campus",
        "city": "New York",
        "state": "NY",
        "union": "United Federation of Teachers, Local 2 / NYSUT / A",
        "date": "May 2022",
        "website": "https://www.ambercharter.org"
      },
      {
        "id": "C3608004",
        "name": "Bronx Academy of Promise Charter School",
        "city": "Bronx",
        "state": "NY",
        "union": "United Federation of Teachers, Local 2 / NYSUT / A",
        "date": "Pre-2024 (UFT cert confirmed via CB case",
        "website": "http://www.bronxacademyofpromise.com"
      },
      {
        "id": "C3608005",
        "name": "Bronx Community Charter School",
        "city": "Bronx",
        "state": "NY",
        "union": "United Federation of Teachers (UFT) / UFT ACTS",
        "date": "N/A",
        "website": "http://www.bronxcommunity.org"
      },
      {
        "id": "C3608006",
        "name": "Bronx Global Learning Institute for Girls Charter School",
        "city": "Bronx",
        "state": "NY",
        "union": "United Federation of Teachers, Local 2 / NYSUT / A",
        "date": "November 2018",
        "website": "https://www.bgligcs.com"
      },
      {
        "id": "C3615012",
        "name": "Brooklyn Prospect Charter School — CSD 13.2",
        "city": "Brooklyn",
        "state": "NY",
        "union": "United Federation of Teachers, Local 2 / NYSUT / A",
        "date": "May 2024 (voted May 2024; cert date = ta",
        "website": "http://www.brooklynprospect.org"
      },
      {
        "id": "C3615003",
        "name": "Charter High School for Law and Social Justice",
        "city": "Bronx",
        "state": "NY",
        "union": "United Federation of Teachers, Local 2 / AFT",
        "date": "Pre-existing — exact date unknown; FOIA ",
        "website": "http://www.chslsj.org"
      },
      {
        "id": "C3605007",
        "name": "Charter School for Educational Excellence",
        "city": "Yonkers",
        "state": "NY",
        "union": "Yonkers Federation of Teachers (YFT) / NYSUT / AFT",
        "date": "Pre-September 2016 (decert petition dism",
        "website": "http://www.charterschoolofeducationalexcellence.org"
      },
      {
        "id": "NAPCS-ADD-NY-001",
        "name": "Charter School of Inquiry (Williamsville, Erie County)",
        "city": "Williamsville",
        "state": "NY",
        "union": "Charter School of Inquiry Union (independent — no ",
        "date": "2019",
        "website": "https://www.charterschoolofinquiry.com"
      },
      {
        "id": "C3614006",
        "name": "Compass Charter School",
        "city": "Brooklyn",
        "state": "NY",
        "union": "United Federation of Teachers, Local 2 / NYSUT / A",
        "date": "March 2021",
        "website": "http://www.brooklyncompass.org"
      },
      {
        "id": "C3618014",
        "name": "Elm Community Charter School",
        "city": "Elmhurst",
        "state": "NY",
        "union": "United Federation of Teachers, Local 2 / AFT",
        "date": "2020",
        "website": "http://elmcharterschool.org"
      },
      {
        "id": "C3602004",
        "name": "Global Concepts Charter School",
        "city": "Lackawanna",
        "state": "NY",
        "union": "Global Concepts Charter School Union (INDEPENDENT ",
        "date": "March 2017",
        "website": "http://www.globalconceptscs.org"
      },
      {
        "id": "C3609019",
        "name": "Growing Up Green Charter School",
        "city": "Long Island City",
        "state": "NY",
        "union": "United Federation of Teachers, Local 2 / AFT",
        "date": "March 2023",
        "website": "http://www.gugcs.org"
      },
      {
        "id": "C3600006",
        "name": "King Center Charter School",
        "city": "Buffalo",
        "state": "NY",
        "union": "King Center United Professionals / NYSUT / AFT / N",
        "date": "October 1, 2024 (NLRB Certification of R",
        "website": "http://www.kccs.org"
      },
      {
        "id": "C3611011",
        "name": "New Visions Charter High School for Advanced Math and Science",
        "city": "Bronx",
        "state": "NY",
        "union": "United Federation of Teachers, Local 2 / AFT",
        "date": "Pre-existing — exact date unknown; FOIA ",
        "website": "https://www.newvisions.org"
      },
      {
        "id": "C3611012",
        "name": "New Visions Charter High School for the Humanities",
        "city": "Bronx",
        "state": "NY",
        "union": "United Federation of Teachers, Local 2 / AFT",
        "date": "Pre-existing — exact date unknown; FOIA ",
        "website": "http://www.newvisions.org/humanities"
      },
      {
        "id": "C3612010",
        "name": "New Visions Charter High School for the Humanities II",
        "city": "Bronx",
        "state": "NY",
        "union": "United Federation of Teachers, Local 2 / AFT",
        "date": "Pre-existing — exact date unknown; FOIA ",
        "website": "http://www.newvisions.org/charter/hum"
      },
      {
        "id": "C3610026",
        "name": "New York French-American Charter School",
        "city": "New York",
        "state": "NY",
        "union": "United Federation of Teachers (UFT) Local 2",
        "date": "March 2012 (PERB(NY) certification order",
        "website": "http://www.nyfacs.net"
      },
      {
        "id": "C3608017",
        "name": "NYC Charter High School for Architecture, Engineering & Construction Industries",
        "city": "Bronx",
        "state": "NY",
        "union": "United Federation of Teachers, Local 2 / NYSUT / A",
        "date": "January 2010 (per UFT.org press release ",
        "website": "http://www.aecicharterhs.org"
      },
      {
        "id": "C3604006",
        "name": "Opportunity Charter School",
        "city": "New York",
        "state": "NY",
        "union": "United Federation of Teachers, Local 2 / NYSUT / A",
        "date": "Pre-2013 (UFT chapter leader \"Crystal Ch",
        "website": "http://ocsny.org"
      },
      {
        "id": "C3600008",
        "name": "Renaissance Charter School",
        "city": "Jackson Heights",
        "state": "NY",
        "union": "United Federation of Teachers, Local 2 / NYSUT / A",
        "date": "Pre-2010 (NAPCS 2018-19 listed; UFT teac",
        "website": "http://rencharters.org"
      },
      {
        "id": "C3601011",
        "name": "Riverhead Charter School",
        "city": "Calverton",
        "state": "NY",
        "union": "NYSUT (local name not specified in case record)",
        "date": "November 2016 (survived decertification ",
        "website": "http://www.riverheadcharterschool.org"
      },
      {
        "id": "NAPCS-ADD-NY-003",
        "name": "Uncommon Preparatory Charter High School (Brooklyn)",
        "city": "Brooklyn",
        "state": "NY",
        "union": "Gap: union name unknown — obtainable via NLRB ADS ",
        "date": "Estimated June 2024 (case 29-RC-341899 f",
        "website": "https://www.uncommonschools.org"
      },
      {
        "id": "C3608010",
        "name": "University Prep High School",
        "city": "Bronx",
        "state": "NY",
        "union": "United Federation of Teachers (UFT) Local 2",
        "date": "January 2010 (UFT-Green Dot founding par",
        "website": "http://www.upchs.org"
      },
      {
        "id": "C3902003",
        "name": "Arts and College Preparatory Academy (ACPA)",
        "city": "Columbus",
        "state": "OH",
        "union": "ACPA United",
        "date": "December 5, 2025",
        "website": "http://artcollegeprep.org/"
      },
      {
        "id": "C3910003",
        "name": "Cleveland College Preparatory Academy",
        "city": "Cleveland",
        "state": "OH",
        "union": "Cleveland Alliance for Charter Teachers and Staff ",
        "date": "Spring 2016 — exact date pending NLRB re",
        "website": "http://clevelandcollegeprep.org/"
      },
      {
        "id": "C3908011",
        "name": "KIPP Columbus",
        "city": "Columbus",
        "state": "OH",
        "union": "KIPP Columbus Alliance for Charter Teachers and St",
        "date": "May 5, 2023",
        "website": "http://www.kippcolumbus.org"
      },
      {
        "id": "C3904034",
        "name": "Menlo Park Academy",
        "city": "Cleveland",
        "state": "OH",
        "union": "Cleveland Alliance for Charter Teachers and Staff ",
        "date": "April 14, 2022",
        "website": "http://www.menloparkacademy.com"
      },
      {
        "id": "C3910017",
        "name": "Northeast Ohio College Preparatory School",
        "city": "Cleveland",
        "state": "OH",
        "union": "Cleveland Alliance for Charter Teachers and Staff ",
        "date": "May 12, 2016",
        "website": "http://www.neocollegeprep.org/"
      },
      {
        "id": "C3912013",
        "name": "Stepstone Academy",
        "city": "Cleveland",
        "state": "OH",
        "union": "Cleveland Alliance for Charter Teachers and Staff ",
        "date": "September 21, 2018",
        "website": "http://stepstoneacademy.org/"
      },
      {
        "id": "NAPCS-ADD-OH-001",
        "name": "Summit Academy Community School — Painesville",
        "city": "Painesville",
        "state": "OH",
        "union": "Cleveland Alliance for Charter Teachers and Staff ",
        "date": "Unknown — NLRB records request required ",
        "website": "https://www.summitacademy.com"
      },
      {
        "id": "C3901015",
        "name": "Summit Academy Community School for Alternative Learners of Lorain",
        "city": "Lorain",
        "state": "OH",
        "union": "OFT (local designation pending NLRB records confir",
        "date": "January 14, 2022",
        "website": "http://summitacademies.org/schools/lorain-elementary/"
      },
      {
        "id": "C3904065",
        "name": "Summit Academy Secondary School-Parma",
        "city": "Parma",
        "state": "OH",
        "union": "Cleveland Alliance for Charter Teachers and Staff ",
        "date": "March 2018 (approximate) — exact date pe",
        "website": "https://www.summitacademy.com"
      },
      {
        "id": "C3904066",
        "name": "Summit Academy Secondary School-Youngstown",
        "city": "Youngstown",
        "state": "OH",
        "union": "Summit Academy Youngstown Secondary Education Asso",
        "date": "Pre-2018-19 (NAPCS lists this school in ",
        "website": "http://summitacademies.org/schools/warren-elementary/"
      },
      {
        "id": "C3905038",
        "name": "Summit Academy Youngstown",
        "city": "Youngstown",
        "state": "OH",
        "union": "Ohio Education Association / Summit Academy Youngs",
        "date": "Pre-2018-19 (NAPCS lists this school in ",
        "website": "http://summitacademies.org/schools/youngstown-elementary/"
      },
      {
        "id": "C3911020",
        "name": "University of Cleveland Preparatory School",
        "city": "Cleveland",
        "state": "OH",
        "union": "Cleveland Alliance for Charter Teachers and Staff ",
        "date": "March 2016 (approximate) — exact date pe",
        "website": "http://www.uniclevelandprep.org"
      },
      {
        "id": "C4102006",
        "name": "MOSIER COMMUNITY SCHOOL",
        "city": "Mosier",
        "state": "OR",
        "union": "Oregon Education Association (OEA) — District 21 E",
        "date": "June 24, 2014 (ERB CC-007-14 — Certifica",
        "website": "http://www.mosier.k12.or.us"
      },
      {
        "id": "NAPCS-ADD-OR-001",
        "name": "OREGON VIRTUAL ACADEMY (ORVA)",
        "city": "North Bend (statewide virtual)",
        "state": "OR",
        "union": "Oregon Virtual Academy Educators United, AFT-Orego",
        "date": "August 20, 2021 (NLRB 19-RC-278342 — Cer",
        "website": "http://evergreenvirtual.org"
      },
      {
        "id": "C4201001",
        "name": "21ST CENTURY CYBER CHARTER SCHOOL",
        "city": "Downingtown",
        "state": "PA",
        "union": "21st Century Cyber Education Association / PSEA/NE",
        "date": "August 25, 2021",
        "website": "http://www.21cccs.org"
      },
      {
        "id": "C4219004",
        "name": "AGORA CYBER CHARTER SCHOOL",
        "city": "King of Prussia",
        "state": "PA",
        "union": "Agora Cyber Education Association / PSEA (teachers",
        "date": "January 22, 2015 (earliest unit — counse",
        "website": "https://agora.org"
      },
      {
        "id": "C4208002",
        "name": "ENVIRONMENTAL CHARTER SCHOOL AT FRICK PARK",
        "city": "Pittsburgh",
        "state": "PA",
        "union": "Alliance of Charter School Employees / AFT Local 6",
        "date": "December 2018",
        "website": ""
      },
      {
        "id": "C4205003",
        "name": "FOLK ARTS CULTURAL TREASURES CHARTER SCHOOL",
        "city": "Philadelphia",
        "state": "PA",
        "union": "Alliance of Charter School Employees Local 6056 / ",
        "date": "December 13, 2022",
        "website": "http://www.factschool.org"
      },
      {
        "id": "C4200012",
        "name": "MONTESSORI REGIONAL CHARTER SCHOOL",
        "city": "Erie",
        "state": "PA",
        "union": "Unknown — NLRB RC case closed, cert issued; union ",
        "date": "November 30, 2017 (date filed) or later ",
        "website": "https://www.mrcserie.org"
      },
      {
        "id": "C4200007",
        "name": "NEW FOUNDATIONS CHARTER SCHOOL",
        "city": "Philadelphia",
        "state": "PA",
        "union": "AFT Pennsylvania",
        "date": "July 14, 2025",
        "website": "http://www.newfoundations.org/"
      },
      {
        "id": "C4205004",
        "name": "NORTHWOOD ACADEMY CHARTER SCHOOL",
        "city": "Philadelphia",
        "state": "PA",
        "union": "Alliance of Charter School Employees Local 6056 / ",
        "date": "January 30, 2023",
        "website": ""
      },
      {
        "id": "C4219014",
        "name": "PENNSYLVANIA CYBER CHARTER SCHOOL",
        "city": "Midland",
        "state": "PA",
        "union": "PA Cyber School Education Association / PSEA/NEA (",
        "date": "April 25, 2014 (earliest unit — teachers",
        "website": "http://www.pacyber.org"
      },
      {
        "id": "C4201006",
        "name": "PENNSYLVANIA VIRTUAL CHARTER SCHOOL",
        "city": "King of Prussia",
        "state": "PA",
        "union": "PA Virtual Charter Education Association / PSEA/NE",
        "date": "September 7, 2016",
        "website": "http://pavcsk12.org"
      },
      {
        "id": "C4219017",
        "name": "PROPEL CHARTER SCHOOL - BRADDOCK HILLS",
        "city": "Braddock Hills",
        "state": "PA",
        "union": "PCSEA / PSEA/NEA",
        "date": "April 29, 2021",
        "website": ""
      },
      {
        "id": "C4219018",
        "name": "PROPEL CHARTER SCHOOL - EAST",
        "city": "Turtle Creek",
        "state": "PA",
        "union": "PCSEA / PSEA/NEA",
        "date": "April 29, 2021",
        "website": "http://www.propelschools.org/"
      },
      {
        "id": "C4219016",
        "name": "PROPEL CHARTER SCHOOL - HAZELWOOD",
        "city": "Pittsburgh",
        "state": "PA",
        "union": "PCSEA / PSEA/NEA",
        "date": "April 29, 2021",
        "website": "http://www.propelschools.org/"
      },
      {
        "id": "C4203010",
        "name": "PROPEL CHARTER SCHOOL - HOMESTEAD",
        "city": "Homestead",
        "state": "PA",
        "union": "Propel Charter School Education Association (PCSEA",
        "date": "April 29, 2021",
        "website": "http://www.propelschools.org/"
      },
      {
        "id": "C4205006",
        "name": "PROPEL CHARTER SCHOOL - MCKEESPORT",
        "city": "McKeesport",
        "state": "PA",
        "union": "PCSEA / PSEA/NEA",
        "date": "April 29, 2021",
        "website": "http://www.propelschools.org/"
      },
      {
        "id": "C4219019",
        "name": "PROPEL CHARTER SCHOOL - MONTOUR",
        "city": "McKees Rocks",
        "state": "PA",
        "union": "PCSEA / PSEA/NEA",
        "date": "April 29, 2021",
        "website": "http://www.propelschools.org/"
      },
      {
        "id": "C4211009",
        "name": "PROPEL CHARTER SCHOOL - NORTHSIDE",
        "city": "Pittsburgh",
        "state": "PA",
        "union": "PCSEA / PSEA/NEA",
        "date": "April 29, 2021",
        "website": "http://www.propelschools.org/"
      },
      {
        "id": "C4219020",
        "name": "PROPEL CHARTER SCHOOL - PITCAIRN",
        "city": "Pitcairn",
        "state": "PA",
        "union": "PCSEA / PSEA/NEA",
        "date": "April 29, 2021",
        "website": "http://www.propelschools.org/"
      },
      {
        "id": "C4211007",
        "name": "URBAN PATHWAYS K-5 COLLEGE CHARTER SCHOOL",
        "city": "Pittsburgh",
        "state": "PA",
        "union": "Alliance for Charter School Employees / ACSE Local",
        "date": "June 3, 2022",
        "website": "http://www.upcsk5.net"
      },
      {
        "id": "C4210003",
        "name": "VIDA CHARTER SCHOOL",
        "city": "Gettysburg",
        "state": "PA",
        "union": "Vida Education Association & Support Professionals",
        "date": "November 3, 2017",
        "website": "http://vidacharterschool.com/"
      },
      {
        "id": "C4298015",
        "name": "WEST OAK LANE CHARTER SCHOOL",
        "city": "Philadelphia",
        "state": "PA",
        "union": "Alliance for Charter School Employees (ACSE) Local",
        "date": "2004 (first union charter school in Penn",
        "website": "https://www.westoaklanecharter.org"
      },
      {
        "id": "C4211014",
        "name": "YOUNG SCHOLARS OF WESTERN PENNSYLVANIA CHARTER SCHOOL",
        "city": "Pittsburgh",
        "state": "PA",
        "union": "Young Scholars of Western PA Education Association",
        "date": "January 29, 2018",
        "website": "http://www.yswpcs.org"
      },
      {
        "id": "C4401001",
        "name": "Highlander Charter School",
        "city": "Providence",
        "state": "RI",
        "union": "International Brotherhood of Electrical Workers (I",
        "date": "",
        "website": ""
      },
      {
        "id": "NAPCS-ADD-RI-001",
        "name": "Highlander Elementary Charter School",
        "city": "Providence",
        "state": "RI",
        "union": "International Brotherhood of Electrical Workers (I",
        "date": "September 6, 2024",
        "website": "https://www.highlandercharter.org"
      },
      {
        "id": "C4402002",
        "name": "NEL/CPS Construction Career Academy",
        "city": "Cranston",
        "state": "RI",
        "union": "Cranston Teachers Alliance (AFT Local 1704)",
        "date": "Pre-2009 (district CBA governs)",
        "website": "https://aes.cpsed.net"
      },
      {
        "id": "NAPCS-ADD-RI-002",
        "name": "Paul Cuffee Lower School",
        "city": "Providence",
        "state": "RI",
        "union": "Rhode Island Federation of Teachers and Health Pro",
        "date": "December 10, 2024",
        "website": "https://www.paulcuffee.org"
      },
      {
        "id": "NAPCS-ADD-RI-003",
        "name": "Paul Cuffee Middle School",
        "city": "Providence",
        "state": "RI",
        "union": "Rhode Island Federation of Teachers and Health Pro",
        "date": "June 11, 2025",
        "website": "https://www.paulcuffee.org"
      },
      {
        "id": "NAPCS-ADD-RI-004",
        "name": "Paul Cuffee Upper School",
        "city": "Providence",
        "state": "RI",
        "union": "Rhode Island Federation of Teachers and Health Pro",
        "date": "October 29, 2024",
        "website": "https://www.paulcuffee.org"
      },
      {
        "id": "C4498001",
        "name": "Times2 Academy",
        "city": "Providence",
        "state": "RI",
        "union": "Providence Teachers Union (AFT Local 958)",
        "date": "Pre-2009 (district CBA governs)",
        "website": "https://www.times2academy.org"
      }
    ],
    "DEPENDENT": [
      {
        "id": "C0608013",
        "name": "Academy Of Careers And Exploration",
        "city": "Helendale",
        "state": "CA",
        "union": "Helendale Teachers Association (CTA)",
        "date": "Via Helendale Elementary School District",
        "website": "http://www.helendalesd.com/schools/a_c_e_and_r_m_s_school"
      },
      {
        "id": "C0616049",
        "name": "Accelerated Charter High",
        "city": "Tulare",
        "state": "CA",
        "union": "Tulare Teachers Association (CTA/NEA)",
        "date": "Via Tulare Joint Union High School Distr",
        "website": "http://www.tulare.k12.ca.us"
      },
      {
        "id": "C0615002",
        "name": "Advanced Learning Academy",
        "city": "Santa Ana",
        "state": "CA",
        "union": "Santa Ana Educators Association (CTA/NEA) — covera",
        "date": "Via Santa Ana Unified School District di",
        "website": "http://www.sausd.us/advancedlearning"
      },
      {
        "id": "C0612051",
        "name": "Alfred B. Nobel Charter Middle School",
        "city": "Northridge",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://nobelms.com"
      },
      {
        "id": "C0699003",
        "name": "Alianza Charter",
        "city": "Watsonville",
        "state": "CA",
        "union": "Pajaro Valley Federation of Teachers (AFT/CFT Loca",
        "date": "Via Pajaro Valley Unified SD district CB",
        "website": "http://www.alianza.pvusd.net"
      },
      {
        "id": "C0611013",
        "name": "Beckford Charter for Enriched Studies",
        "city": "Northridge",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://beckfordcharter.lausd.org"
      },
      {
        "id": "C0693001",
        "name": "Bowling Green Charter Mccoy Academuy",
        "city": "Sacramento",
        "state": "CA",
        "union": "Sacramento City Teachers Association (CTA/NEA) — c",
        "date": "Via Sacramento City Unified district CBA",
        "website": ""
      },
      {
        "id": "C0694008",
        "name": "Buckingham Collegiate Charter Academy",
        "city": "Vacaville",
        "state": "CA",
        "union": "Vacaville Teachers Association (CTA/NEA)",
        "date": "Via Vacaville Unified School District di",
        "website": "http://buckingham.vacavilleusd.org"
      },
      {
        "id": "C0607012",
        "name": "Butterfield Charter",
        "city": "Porterville",
        "state": "CA",
        "union": "Porterville Federation of Teachers (AFT/CFT) or Po",
        "date": "Via Porterville Unified School District ",
        "website": ""
      },
      {
        "id": "C0611014",
        "name": "Calabash Charter Academy",
        "city": "Woodland Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://calabashacad.lausd.org"
      },
      {
        "id": "C0698002",
        "name": "Cali Calmecac Language Academy",
        "city": "Windsor",
        "state": "CA",
        "union": "Windsor Teachers Association (CTA/NEA)",
        "date": "Via Windsor Unified School District dist",
        "website": "http://www.wusd.org"
      },
      {
        "id": "C0603004",
        "name": "California Military Institute",
        "city": "Perris",
        "state": "CA",
        "union": "Perris Teachers Association (CTA/NEA) — coverage u",
        "date": "Via Perris Union High School District di",
        "website": "http://www.cmicharter.org/"
      },
      {
        "id": "C0613093",
        "name": "Calvert Charter for Enriched Studies",
        "city": "Woodland Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://calvertes.lausd.org"
      },
      {
        "id": "C0693002",
        "name": "Canyon Elementary Charter School",
        "city": "Santa Monica",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://canyoncharter.com"
      },
      {
        "id": "C0610028",
        "name": "Carpenter Community Charter School",
        "city": "Studio City",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://carpenteres.lausd.org"
      },
      {
        "id": "C0612052",
        "name": "Castlebay Lane Charter Elementary School",
        "city": "Northridge",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://castlebaylanecharter.com"
      },
      {
        "id": "C0608077",
        "name": "Ceiba College Preparatory Academy",
        "city": "Watsonville",
        "state": "CA",
        "union": "Pajaro Valley Federation of Teachers (AFT/CFT Loca",
        "date": "Via Pajaro Valley Unified SD district CB",
        "website": "http://www.ceibaschools.org"
      },
      {
        "id": "C0696004",
        "name": "Central Valley Home",
        "city": "Kingsburg",
        "state": "CA",
        "union": "Kingsburg Elementary Teachers Association (CTA)",
        "date": "Via Kingsburg Elementary Charter School ",
        "website": "http://www.kesd.org"
      },
      {
        "id": "C0699008",
        "name": "Charter Home School Academy",
        "city": "Visalia",
        "state": "CA",
        "union": "Visalia Teachers Association (CTA/NEA) — coverage ",
        "date": "Via Visalia Unified School District dist",
        "website": "http://www.vusd.org"
      },
      {
        "id": "C0613088",
        "name": "Chatsworth Charter High School",
        "city": "Chatsworth",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://chatsworthhs.org"
      },
      {
        "id": "C0611023",
        "name": "Chicago Park Community Charter",
        "city": "Grass Valley",
        "state": "CA",
        "union": "Chicago Park Teachers Association (CTA)",
        "date": "Via Chicago Park Elementary School Distr",
        "website": "http://www.chicagoparkschool.org"
      },
      {
        "id": "C0610033",
        "name": "Cielo Vista Charter",
        "city": "Palm Springs",
        "state": "CA",
        "union": "Palm Springs Teachers Association (CTA/NEA) — cove",
        "date": "Via Palm Springs Unified School District",
        "website": "http://www.psusd.us"
      },
      {
        "id": "C0698005",
        "name": "Circle Of Independent Learning",
        "city": "Fremont",
        "state": "CA",
        "union": "Fremont Teachers Association (CTA/NEA) — coverage ",
        "date": "Via Fremont Unified School District dist",
        "website": "http://www.coilk12.net"
      },
      {
        "id": "C0608029",
        "name": "Colfax Charter Elementary School",
        "city": "Valley Village",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://colfaxcharteres.lausd.org"
      },
      {
        "id": "C0605014",
        "name": "Community Magnet Charter Elementary School",
        "city": "Los Angeles",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://communitymagnetces.lausd.org"
      },
      {
        "id": "C0605015",
        "name": "Creative Connections Arts Academy",
        "city": "NORTH HIGHLANDS",
        "state": "CA",
        "union": "Twin Rivers Educators Association (CTA/NEA) — cove",
        "date": "Via Twin Rivers Unified School District ",
        "website": "http://ccaa.trusd.net/"
      },
      {
        "id": "C0609019",
        "name": "Da Vinci Charter Academy High",
        "city": "Davis",
        "state": "CA",
        "union": "Davis Teachers Association (CTA/NEA) — coverage un",
        "date": "Via Davis Joint Unified School District ",
        "website": "http://www.davincicharteracademy.net/"
      },
      {
        "id": "C0612031",
        "name": "Dearborn Elementary Charter Academy",
        "city": "Northridge",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://dearbornelem.com"
      },
      {
        "id": "C0611032",
        "name": "Del Vista Math And Science Academy",
        "city": "Delano",
        "state": "CA",
        "union": "Delano Teachers Association (CTA/NEA)",
        "date": "Via Delano Union Elementary School Distr",
        "website": "http://www.duesd.org/schools/delvistaes/"
      },
      {
        "id": "C0601009",
        "name": "Delta Charter Elementary",
        "city": "Tracy",
        "state": "CA",
        "union": "New Jerusalem Teachers Association (CTA)",
        "date": "Via New Jerusalem Elementary School Dist",
        "website": "http://www.deltacharter.net"
      },
      {
        "id": "C0601010",
        "name": "Denair Charter Academy",
        "city": "Denair",
        "state": "CA",
        "union": "Denair Teachers Association (CTA)",
        "date": "Via Denair Unified School District distr",
        "website": "http://www.dusd.k12.ca.us/dca"
      },
      {
        "id": "C0699001",
        "name": "Diamond Technology Institute",
        "city": "Watsonville",
        "state": "CA",
        "union": "Pajaro Valley Federation of Teachers (AFT/CFT Loca",
        "date": "Via Pajaro Valley Unified SD district CB",
        "website": "http://www.avci.pvusd.net"
      },
      {
        "id": "C0612032",
        "name": "Dixie Canyon Community Charter School",
        "city": "Sherman Oaks",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://dixiecanyones.lausd.org"
      },
      {
        "id": "C0604017",
        "name": "Dr. Theodore T. Alexander Jr. Science Center School",
        "city": "Los Angeles",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://alexanderes.lausd.org"
      },
      {
        "id": "C0612033",
        "name": "El Oro Way Charter for Enriched Studies",
        "city": "Granada Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://elorowaycharteres.lausd.org"
      },
      {
        "id": "C0603016",
        "name": "El Rancho Charter",
        "city": "Anaheim",
        "state": "CA",
        "union": "Orange Unified Education Association (CTA/NEA) — c",
        "date": "Via Orange Unified School District distr",
        "website": "http://www.elranchocharter.org"
      },
      {
        "id": "C0699016",
        "name": "Elk Grove Charter",
        "city": "Elk Grove",
        "state": "CA",
        "union": "Elk Grove Education Association (CTA/NEA) — covera",
        "date": "Via Elk Grove Unified School District di",
        "website": "http://egcharter.com"
      },
      {
        "id": "C0614035",
        "name": "Emerson Community Charter School",
        "city": "Los Angeles",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://emersoncc.lausd.org"
      },
      {
        "id": "C0612020",
        "name": "Enadia Way Technology Charter School",
        "city": "West Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://enadiaway.org"
      },
      {
        "id": "C0612034",
        "name": "Encino Charter Elementary School",
        "city": "Encino",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://encinoces.lausd.org"
      },
      {
        "id": "C0615030",
        "name": "Evergreen Institute Of Excellence",
        "city": "Cottonwood",
        "state": "CA",
        "union": "Evergreen Teachers Association (CTA)",
        "date": "Via Evergreen Union Elementary School Di",
        "website": "http://eie.evergreenusd.org"
      },
      {
        "id": "C0606038",
        "name": "Fairmont Charter Elementary",
        "city": "Vacaville",
        "state": "CA",
        "union": "Vacaville Teachers Association (CTA/NEA)",
        "date": "Via Vacaville Unified School District di",
        "website": "http://fairmont.vacavilleusd.org"
      },
      {
        "id": "C0606040",
        "name": "Forestville Academy",
        "city": "Forestville",
        "state": "CA",
        "union": "Forestville Teachers Association (CTA)",
        "date": "Via Forestville Union Elementary School ",
        "website": "http://www.forestvilleusd.org"
      },
      {
        "id": "C0603001",
        "name": "George Washington Carver School Of Arts And Science",
        "city": "Sacramento",
        "state": "CA",
        "union": "Sacramento City Teachers Association (CTA/NEA) — c",
        "date": "Via Sacramento City Unified district CBA",
        "website": "http://www.carverartsandscience.org"
      },
      {
        "id": "C0613089",
        "name": "Grover Cleveland Charter High School",
        "city": "Reseda",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://clevelandhs.org"
      },
      {
        "id": "C0611043",
        "name": "Hale Charter Academy",
        "city": "Woodland Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://halecharteracademy.com"
      },
      {
        "id": "C0612036",
        "name": "Hamlin Charter Academy",
        "city": "West Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://hamlincharter.org"
      },
      {
        "id": "C0695006",
        "name": "Hart-Ransom Academic Charter",
        "city": "Modesto",
        "state": "CA",
        "union": "Hart-Ransom Teachers Association (CTA)",
        "date": "Via Hart-Ransom Union Elementary School ",
        "website": "http://www.hart-ransomcharter.com/index.html"
      },
      {
        "id": "C0603023",
        "name": "Hawthorne Math And Science Academy",
        "city": "Hawthorne",
        "state": "CA",
        "union": "Hawthorne Teachers Association (CTA) — coverage un",
        "date": "Via Hawthorne School District district C",
        "website": "http://www.hawthornemsa.org"
      },
      {
        "id": "C0612037",
        "name": "Haynes Charter for Enriched Studies",
        "city": "West Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://haynesces.lausd.org"
      },
      {
        "id": "C0612003",
        "name": "Hesby Oaks Leadership Charter School",
        "city": "Encino",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://hesbyoaks.com"
      },
      {
        "id": "C0600016",
        "name": "Journey School",
        "city": "Aliso Viejo",
        "state": "CA",
        "union": "Capistrano Unified Education Association (CUEA — C",
        "date": "UNVERIFIED",
        "website": "http://www.journeyschool.net"
      },
      {
        "id": "C0612038",
        "name": "Justice Street Academy Charter School",
        "city": "West Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://justicestacademyes.lausd.org"
      },
      {
        "id": "C0693022",
        "name": "Kenter Canyon Elementary Charter School",
        "city": "Los Angeles",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://kentercanyones.lausd.org"
      },
      {
        "id": "C0695008",
        "name": "Kern Workforce 2000 Academy",
        "city": "Bakersfield",
        "state": "CA",
        "union": "Kern High School Teachers Association (CTA/NEA) — ",
        "date": "Via Kern High School District district C",
        "website": "http://workforce.kernhigh.org"
      },
      {
        "id": "C0612039",
        "name": "Knollwood Preparatory Academy",
        "city": "Granada Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://knollwoodacad.lausd.org"
      },
      {
        "id": "C0694014",
        "name": "Linscott Charter",
        "city": "Watsonville",
        "state": "CA",
        "union": "Pajaro Valley Federation of Teachers (AFT/CFT Loca",
        "date": "Via Pajaro Valley Unified SD district CB",
        "website": "http://linscott.pvusd.net/"
      },
      {
        "id": "C0612040",
        "name": "Lockhurst Drive Charter Elementary School",
        "city": "Woodland Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://lockhurstes.lausd.org"
      },
      {
        "id": "C0612050",
        "name": "Louis Armstrong Middle School Charter",
        "city": "Sherman Oaks",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://louisarmstrongms.org"
      },
      {
        "id": "C0604045",
        "name": "Mark West Charter",
        "city": "Santa Rosa",
        "state": "CA",
        "union": "Mark West Teachers Association (CTA)",
        "date": "Via Mark West Union School District dist",
        "website": "http://www.markwestcharter.org"
      },
      {
        "id": "C0693023",
        "name": "Marquez Charter Elementary School",
        "city": "Pacific Palisades",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://marquezres.lausd.org"
      },
      {
        "id": "C0602027",
        "name": "Mary Collins Charter School At Cherry Valley",
        "city": "PETALUMA",
        "state": "CA",
        "union": "Petaluma Federation of Teachers (AFT/CFT)",
        "date": "Via Petaluma Joint Union High School Dis",
        "website": "http://www.cherryvalleyelementary.org"
      },
      {
        "id": "C0600019",
        "name": "Marysville Charter Academy For The Arts",
        "city": "Marysville",
        "state": "CA",
        "union": "Marysville Teachers Association (CTA/NEA)",
        "date": "Via Marysville Joint Unified School Dist",
        "website": ""
      },
      {
        "id": "C0612041",
        "name": "Nestle Avenue Charter Elementary School",
        "city": "Tarzana",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://nestleavecharter.com"
      },
      {
        "id": "C0614061",
        "name": "New Joseph Bonnheim (Njb) Community Charter",
        "city": "Sacramento",
        "state": "CA",
        "union": "Sacramento City Teachers Association (CTA/NEA) — c",
        "date": "Via Sacramento City Unified district CBA",
        "website": "http://www.thenewbonnheim.com"
      },
      {
        "id": "C0603040",
        "name": "New Technology High",
        "city": "Sacramento",
        "state": "CA",
        "union": "Sacramento City Teachers Association (CTA/NEA) — c",
        "date": "Via Sacramento City Unified district CBA",
        "website": ""
      },
      {
        "id": "C0604011",
        "name": "Northwest Prep Charter",
        "city": "Santa Rosa",
        "state": "CA",
        "union": "Piner-Olivet Teachers Association (CTA)",
        "date": "Via Piner-Olivet Union Elementary SD dis",
        "website": "http://www.pousd.org"
      },
      {
        "id": "C0601030",
        "name": "Nuview Bridge Early College High",
        "city": "Nuevo",
        "state": "CA",
        "union": "Nuview Teachers Association (CTA) — coverage unver",
        "date": "Via Nuview Union School District distric",
        "website": "http://nbechs.nuviewusd.org"
      },
      {
        "id": "C0604071",
        "name": "Oak Grove Elementary/Willowside Middle",
        "city": "Santa Rosa",
        "state": "CA",
        "union": "Oak Grove Education Association (CTA)",
        "date": "Via Oak Grove Union Elementary SD distri",
        "website": "http://www.ogusd.org"
      },
      {
        "id": "C0612098",
        "name": "Old Adobe Elementary Charter",
        "city": "PETALUMA",
        "state": "CA",
        "union": "Old Adobe Teachers Association (CTA)",
        "date": "Via Old Adobe Union Elementary School Di",
        "website": "http://www.oldadobe.org"
      },
      {
        "id": "C0693010",
        "name": "Open Charter Magnet School",
        "city": "Los Angeles",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://www.opencharter.org"
      },
      {
        "id": "C0600029",
        "name": "Orchard View",
        "city": "Sebastopol",
        "state": "CA",
        "union": "Twin Hills Teachers Association (CTA)",
        "date": "Via Twin Hills Union Elementary School D",
        "website": "http://www.orchardviewschool.org"
      },
      {
        "id": "C0608046",
        "name": "Orcutt Academy Charter",
        "city": "Los Alamos",
        "state": "CA",
        "union": "Orcutt Teachers Association (CTA) — coverage unver",
        "date": "Via Orcutt Union Elementary School Distr",
        "website": "http://www.orcutt-schools.net"
      },
      {
        "id": "C0699037",
        "name": "Pacific Coast Charter",
        "city": "Watsonville",
        "state": "CA",
        "union": "Pajaro Valley Federation of Teachers (AFT/CFT Loca",
        "date": "Via Pajaro Valley Unified SD district CB",
        "website": "http://www.pccs.pvusd.net"
      },
      {
        "id": "C0602040",
        "name": "Pacific Crest Academy",
        "city": "El Dorado",
        "state": "CA",
        "union": "El Dorado Teachers Association (CTA) — coverage un",
        "date": "Via El Dorado Union High School District",
        "website": "http://pacificcrest.eduhsd.k12.ca.us"
      },
      {
        "id": "C0698011",
        "name": "Palisades Charter Elementary School",
        "city": "Pacific Palisades",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://palielementary.org"
      },
      {
        "id": "C0608009",
        "name": "Palm Desert Charter Middle",
        "city": "Palm Desert",
        "state": "CA",
        "union": "Desert Sands Teachers Association (CTA/NEA) — cove",
        "date": "Via Desert Sands Unified School District",
        "website": "http://www.dsusd.us"
      },
      {
        "id": "C0606064",
        "name": "Paradise Charter",
        "city": "Modesto",
        "state": "CA",
        "union": "Paradise Teachers Association (CTA)",
        "date": "Via Paradise Elementary School District ",
        "website": "http://www.paradiseesd.org"
      },
      {
        "id": "C0694020",
        "name": "Paul Revere Charter Middle School and Magnet Center",
        "city": "Los Angeles",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://www.paulreverems.com"
      },
      {
        "id": "C0696011",
        "name": "Piner-Olivet Charter",
        "city": "Santa Rosa",
        "state": "CA",
        "union": "Piner-Olivet Teachers Association (CTA)",
        "date": "Via Piner-Olivet Union Elementary SD dis",
        "website": "http://www.pousd.org"
      },
      {
        "id": "C0610084",
        "name": "Pittman Charter",
        "city": "STOCKTON",
        "state": "CA",
        "union": "Stockton Teachers Association (CTA/NEA) — coverage",
        "date": "Via Stockton Unified School District dis",
        "website": ""
      },
      {
        "id": "C0612042",
        "name": "Plainview Academic Charter Academy",
        "city": "Tujunga",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://plainview.lausd.org"
      },
      {
        "id": "C0611065",
        "name": "Pomelo Community Charter School",
        "city": "West Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://pomelocharteres.lausd.org"
      },
      {
        "id": "C0611100",
        "name": "Riverside Drive Charter Elementary School",
        "city": "Sherman Oaks",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://riversidedrivecharter.org"
      },
      {
        "id": "C0601088",
        "name": "Roseland Charter",
        "city": "Santa Rosa",
        "state": "CA",
        "union": "Roseland Teachers Association (CTA/NEA)",
        "date": "Via Roseland Public Schools district CBA",
        "website": "http://www.roselandsd.org"
      },
      {
        "id": "C0606069",
        "name": "Salmon Creek School - A Charter",
        "city": "Occidental",
        "state": "CA",
        "union": "Harmony Teachers Association (CTA)",
        "date": "Via Harmony Union Elementary School Dist",
        "website": "http://www.harmonyusd.org"
      },
      {
        "id": "C0612096",
        "name": "San Miguel Elementary",
        "city": "Santa Rosa",
        "state": "CA",
        "union": "Mark West Teachers Association (CTA)",
        "date": "Via Mark West Union School District dist",
        "website": "http://www.mwusd.org"
      },
      {
        "id": "C0604059",
        "name": "Santa Rosa Accelerated Charter",
        "city": "Santa Rosa",
        "state": "CA",
        "union": "Santa Rosa Teachers Association (CTA/NEA)",
        "date": "Via Santa Rosa City Schools district CBA",
        "website": "http://sracs-santarosa-ca.schoolloop.com"
      },
      {
        "id": "C0607074",
        "name": "Santa Rosa Charter School For The Arts",
        "city": "Santa Rosa",
        "state": "CA",
        "union": "Santa Rosa Teachers Association (CTA/NEA)",
        "date": "Via Santa Rosa City Schools district CBA",
        "website": "http://www.srcsa.org"
      },
      {
        "id": "C0612103",
        "name": "Santa Rosa French-American Charter (Srfacs)",
        "city": "Santa Rosa",
        "state": "CA",
        "union": "Santa Rosa Teachers Association (CTA/NEA)",
        "date": "Via Santa Rosa City Schools district CBA",
        "website": "http://srfacs.srcschools.org"
      },
      {
        "id": "C0612043",
        "name": "Serrania Avenue Charter for Enriched Studies",
        "city": "Woodland Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://serraniaavees.lausd.org"
      },
      {
        "id": "C0611073",
        "name": "Sherman Oaks Elementary Charter School",
        "city": "Sherman Oaks",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://shermanoakselementarycharter.com"
      },
      {
        "id": "C0604058",
        "name": "Spring Creek Elementary Charter",
        "city": "Santa Rosa",
        "state": "CA",
        "union": "Rincon Valley Teachers Association (CTA)",
        "date": "Via Rincon Valley Union Elementary SD di",
        "website": ""
      },
      {
        "id": "C0609068",
        "name": "Stockton Early College Academy",
        "city": "STOCKTON",
        "state": "CA",
        "union": "Stockton Teachers Association (CTA/NEA) — coverage",
        "date": "Via Stockton Unified School District dis",
        "website": "http://seca-susd-ca.schoolloop.com"
      },
      {
        "id": "C0602042",
        "name": "Sunridge Charter",
        "city": "Sebastopol",
        "state": "CA",
        "union": "Twin Hills Teachers Association (CTA)",
        "date": "Via Twin Hills Union Elementary School D",
        "website": "http://www.sunridgeschool.org"
      },
      {
        "id": "C0612044",
        "name": "Superior Street Elementary Charter School",
        "city": "Chatsworth",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://superiores.lausd.org"
      },
      {
        "id": "C0616012",
        "name": "Sylmar Charter High School",
        "city": "Sylmar",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://sylmarhs.org"
      },
      {
        "id": "C0613090",
        "name": "Taft Charter High School",
        "city": "Woodland Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://www.lausd.k12.ca.us/Taft_HS"
      },
      {
        "id": "C0603037",
        "name": "The Met",
        "city": "Sacramento",
        "state": "CA",
        "union": "Sacramento City Teachers Association (CTA/NEA) — c",
        "date": "Via Sacramento City Unified district CBA",
        "website": ""
      },
      {
        "id": "C0695018",
        "name": "Topanga Elementary Charter School",
        "city": "Topanga",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://www.topangaelementary.org"
      },
      {
        "id": "C0612045",
        "name": "Topeka Charter School for Advanced Studies",
        "city": "Northridge",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://topekacharter.lausd.org"
      },
      {
        "id": "C0607090",
        "name": "Vallejo Charter",
        "city": "Vallejo",
        "state": "CA",
        "union": "Vallejo Education Association (CTA/NEA)",
        "date": "Via Vallejo City Unified district CBA (s",
        "website": "http://www.vallejo.k12.ca.us"
      },
      {
        "id": "C0612046",
        "name": "Van Gogh Charter School",
        "city": "Granada Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://vangoghcharter.lausd.org"
      },
      {
        "id": "C0610105",
        "name": "Village Elementary Charter",
        "city": "Santa Rosa",
        "state": "CA",
        "union": "Rincon Valley Teachers Association (CTA)",
        "date": "Via Rincon Valley Union Elementary SD di",
        "website": ""
      },
      {
        "id": "C0601037",
        "name": "Watsonville Charter School Of The Arts",
        "city": "Watsonville",
        "state": "CA",
        "union": "Pajaro Valley Federation of Teachers (AFT/CFT Loca",
        "date": "Via Pajaro Valley Unified SD district CB",
        "website": ""
      },
      {
        "id": "C0611091",
        "name": "Welby Way Elementary Charter School",
        "city": "West Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://welbywayces.lausd.org"
      },
      {
        "id": "C0610109",
        "name": "Western Center Academy",
        "city": "Hemet",
        "state": "CA",
        "union": "Hemet Teachers Association (CTA) — coverage unveri",
        "date": "Via Hemet Unified School District distri",
        "website": "http://www.westerncenteracademy.com"
      },
      {
        "id": "C0695020",
        "name": "Westside Preparatory Charter",
        "city": "Rio Linda",
        "state": "CA",
        "union": "Twin Rivers Educators Association (CTA/NEA) — cove",
        "date": "Via Twin Rivers Unified School District ",
        "website": "http://wpcs.trusd.net/"
      },
      {
        "id": "C0693021",
        "name": "Westwood Elementary Charter School",
        "city": "Los Angeles",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://westwoodces.lausd.org"
      },
      {
        "id": "C0604069",
        "name": "Whitmore Charter High",
        "city": "Ceres",
        "state": "CA",
        "union": "Ceres Teachers Association (CTA) — coverage unveri",
        "date": "Via Ceres Unified School District distri",
        "website": "http://www.ceres.k12.ca.us/wcs"
      },
      {
        "id": "C0604070",
        "name": "Whitmore Charter School Of Art & Technology",
        "city": "Ceres",
        "state": "CA",
        "union": "Ceres Teachers Association (CTA) — coverage unveri",
        "date": "Via Ceres Unified School District distri",
        "website": "http://www.ceres.k12.ca.us"
      },
      {
        "id": "C0612047",
        "name": "Wilbur Charter for Enriched Academics",
        "city": "Tarzana",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://wilburcharteres.lausd.org"
      },
      {
        "id": "C0612048",
        "name": "Woodlake Elementary Community Charter School",
        "city": "Woodland Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://woodlakeelementary.org"
      },
      {
        "id": "C0612049",
        "name": "Woodland Hills Elementary Charter for Enriched Studies",
        "city": "Woodland Hills",
        "state": "CA",
        "union": "United Teachers Los Angeles (UTLA)",
        "date": "Structural — no independent certificatio",
        "website": "http://wheces.org"
      },
      {
        "id": "C0914002",
        "name": "ELM CITY MONTESSORI SCHOOL",
        "city": "New Haven",
        "state": "CT",
        "union": "New Haven Federation of Teachers (NHFT)",
        "date": "N/A — DEPENDENT (covered by pre-existing",
        "website": "http://elmcitymontessori.org/"
      },
      {
        "id": "C1299001",
        "name": "Academy of Environmental Science",
        "city": "Crystal River",
        "state": "FL",
        "union": "Citrus County Education Association (CCEA)",
        "date": "N/A — DEPENDENT status (district CBA app",
        "website": "http://aes.citrusschools.org/"
      },
      {
        "id": "C1204006",
        "name": "Bellalago Charter Academy",
        "city": "Kissimmee",
        "state": "FL",
        "union": "Osceola County Education Association (OCEA)",
        "date": "N/A — DEPENDENT status (district CBA app",
        "website": "http://www.osceolaschools.net"
      },
      {
        "id": "C1203026",
        "name": "Children's Reading Center Charter School",
        "city": "Palatka",
        "state": "FL",
        "union": "Putnam Federation of Teachers/United (PFT/United)",
        "date": "N/A — DEPENDENT status (district CBA app",
        "website": "http://www.putnamschools.org/o/crccs"
      },
      {
        "id": "C1798018",
        "name": "SPRINGFIELD BALL CHARTER SCHOOL",
        "city": "Springfield",
        "state": "IL",
        "union": "Springfield Education Association (SEA) — district",
        "date": "N/A — structural coverage, no independen",
        "website": "http://www.sps186.org/o/ballcharter/"
      },
      {
        "id": "C2598004",
        "name": "BOSTON DAY AND EVENING ACADEMY",
        "city": "Boston",
        "state": "MA",
        "union": "Boston Teachers Union Local 66 / AFT Massachusetts",
        "date": "1998 (Horace Mann charter authorization ",
        "website": "http://www.bdea.com"
      },
      {
        "id": "C2511003",
        "name": "BOSTON GREEN ACADEMY HORACE MANN CHARTER SCHOOL",
        "city": "Boston",
        "state": "MA",
        "union": "Boston Teachers Union Local 66 / AFT Massachusetts",
        "date": "September 2011 (school opening — Horace ",
        "website": "http://www.bostongreenacademy.org"
      },
      {
        "id": "C2512008",
        "name": "DUDLEY STREET NEIGHBORHOOD CHARTER SCHOOL",
        "city": "Boston",
        "state": "MA",
        "union": "Boston Teachers Union Local 66 / AFT Massachusetts",
        "date": "2012 (school opening — Horace Mann statu",
        "website": "http://www.dudleystreetschool.org/"
      },
      {
        "id": "C2598007",
        "name": "EDWARD M. KENNEDY ACADEMY FOR HEALTH CAREERS",
        "city": "Boston",
        "state": "MA",
        "union": "Boston Teachers Union Local 66 / AFT Massachusetts",
        "date": "2007 (school opening — Horace Mann statu",
        "website": "http://www.kennedyacademy.org"
      },
      {
        "id": "C2513006",
        "name": "UP ACADEMY CHARTER SCHOOL OF DORCHESTER",
        "city": "Boston",
        "state": "MA",
        "union": "Boston Teachers Union Local 66 / AFT Massachusetts",
        "date": "2013 (school opening — Horace Mann statu",
        "website": "http://upacademydorchester.org"
      },
      {
        "id": "C3605009",
        "name": "Future Leaders Institute Charter School",
        "city": "New York",
        "state": "NY",
        "union": "United Federation of Teachers (UFT) Local 2",
        "date": "2005 — converted from NYC DOE district s",
        "website": "http://www.futureleadersinstitute.org"
      },
      {
        "id": "C3600011",
        "name": "John V. Lindsay Wildcat Academy CS — Bronx Campus",
        "city": "Bronx",
        "state": "NY",
        "union": "United Federation of Teachers (UFT) Local 2",
        "date": "2000 — converted from NYC DOE alternativ",
        "website": "https://www.jvlwildcat.org"
      },
      {
        "id": "C3600012",
        "name": "John V. Lindsay Wildcat Academy CS — Manhattan Campus",
        "city": "New York",
        "state": "NY",
        "union": "United Federation of Teachers (UFT) Local 2",
        "date": "2000 — same conversion event as Bronx ca",
        "website": "https://www.jvlwildcat.org"
      },
      {
        "id": "C3600013",
        "name": "KIPP Academy Charter School",
        "city": "Bronx",
        "state": "NY",
        "union": "United Federation of Teachers (UFT) Local 2",
        "date": "2000 — KIPP Academy converted from a pro",
        "website": "http://www.kippacademy.org"
      },
      {
        "id": "C3906011",
        "name": "Coshocton Opportunity School",
        "city": "Coshocton",
        "state": "OH",
        "union": "Coshocton City Education Association",
        "date": "Covered from school opening — district C",
        "website": "http://www.coshoctonopportunityschool.com/"
      },
      {
        "id": "C3906013",
        "name": "Eagle Learning Center",
        "city": "Oregon",
        "state": "OH",
        "union": "Oregon City Federation of Teachers",
        "date": "Covered from school opening — district C",
        "website": "http://www.oregonelc.org/"
      },
      {
        "id": "C3902009",
        "name": "Fairborn Digital Academy",
        "city": "Fairborn",
        "state": "OH",
        "union": "Fairborn Education Association",
        "date": "Covered from school opening — district C",
        "website": "http://fairborndigital.us/"
      },
      {
        "id": "C3905013",
        "name": "Findlay Digital Academy",
        "city": "Findlay",
        "state": "OH",
        "union": "Findlay Education Association",
        "date": "Covered from school opening — district C",
        "website": "http://findlaydigitalacademy.com"
      },
      {
        "id": "C3903003",
        "name": "Foxfire High School",
        "city": "Mcconnelsville",
        "state": "OH",
        "union": "Maysville Education Association",
        "date": "Covered from school opening — district C",
        "website": "http://www.foxfireschools.com/"
      },
      {
        "id": "C3910011",
        "name": "Foxfire Intermediate School",
        "city": "Mcconnelsville",
        "state": "OH",
        "union": "Maysville Education Association",
        "date": "Covered from school opening — district C",
        "website": "http://www.foxfireschools.com/"
      },
      {
        "id": "C3906029",
        "name": "Franklin Local Community School",
        "city": "McConnelsville",
        "state": "OH",
        "union": "Franklin Local Education Association (FLEA)",
        "date": "Covered from school opening — district C",
        "website": "https://www.franklinlocalschools.org/schools/franklin-local-community-school/"
      },
      {
        "id": "C3906030",
        "name": "Par Excellence Academy",
        "city": "Newark",
        "state": "OH",
        "union": "Newark Teachers Association",
        "date": "Covered from school opening — district C",
        "website": "http://www.parexcellenceacademy.com"
      },
      {
        "id": "C3904050",
        "name": "Quaker Digital Academy",
        "city": "New Philadelphia",
        "state": "OH",
        "union": "New Philadelphia Education Association",
        "date": "Covered from school opening — district C",
        "website": "http://www.go2qda.org"
      },
      {
        "id": "C3905032",
        "name": "Rittman Academy",
        "city": "Rittman",
        "state": "OH",
        "union": "Rittman Education Association",
        "date": "Covered from school opening — district C",
        "website": "http://www.rittmanacademy.org"
      },
      {
        "id": "C3905033",
        "name": "Schnee Learning Center",
        "city": "Cuyahoga Falls",
        "state": "OH",
        "union": "Cuyahoga Falls Education Association",
        "date": "Covered from school opening — district C",
        "website": "http://www.Schneelearningcenter.org"
      },
      {
        "id": "C3902042",
        "name": "Tomorrow Center Digital",
        "city": "Cardington",
        "state": "OH",
        "union": "Mount Gilead Teachers Association",
        "date": "Covered from school opening — district C",
        "website": "http://thetomorrowcenter.org/"
      },
      {
        "id": "C3914011",
        "name": "Utica Shale Academy of Ohio",
        "city": "Salineville",
        "state": "OH",
        "union": "Jefferson County Teachers Association",
        "date": "Covered from school opening — district C",
        "website": "http://www.uticashaleschool.com/"
      },
      {
        "id": "C3907020",
        "name": "Zanesville Community High School",
        "city": "Zanesville",
        "state": "OH",
        "union": "Zanesville Education Association (ZEA)",
        "date": "Covered from school opening — district C",
        "website": "http://www.zanesvillecommunityhighschool.com/"
      },
      {
        "id": "NCES-411158001727",
        "name": "Academy For Character Education",
        "city": "Cottage Grove",
        "state": "OR",
        "union": "South Lane Education Association / OEA / NEA",
        "date": "School opening (South Lane SD 45J3 CBA c",
        "website": "http://www.ACEClassicalEd.org"
      },
      {
        "id": "NCES-410933001725",
        "name": "Alliance Charter Academy",
        "city": "Oregon City",
        "state": "OR",
        "union": "Oregon City Education Association / OEA / NEA",
        "date": "School opening (Oregon City SD 62 CBA co",
        "website": "http://alliancecharteracademy.com"
      },
      {
        "id": "C4117001",
        "name": "ALSEA CHARTER SCHOOL",
        "city": "Alsea",
        "state": "OR",
        "union": "Local OEA chapter or no union (tiny rural district",
        "date": "Unknown",
        "website": "http://alsea.k12.or.us"
      },
      {
        "id": "C4110012",
        "name": "ANNEX CHARTER SCHOOL",
        "city": "Ontario",
        "state": "OR",
        "union": "Local OEA chapter or no union (small eastern Orego",
        "date": "Unknown",
        "website": "http://www.annex.k12.or.us/"
      },
      {
        "id": "NCES-410192001791",
        "name": "Arco Iris Spanish Immersion School",
        "city": "Beaverton",
        "state": "OR",
        "union": "Beaverton Education Association (BEA) / OEA / NEA",
        "date": "School opening (Beaverton SD 48J CBA cov",
        "website": "http://arcoirisschool.org"
      },
      {
        "id": "C4111001",
        "name": "ARLINGTON CHARTER SCHOOL",
        "city": "Arlington",
        "state": "OR",
        "union": "Local OEA chapter or no union (tiny rural district",
        "date": "Unknown",
        "website": "http://www.honkernet.net"
      },
      {
        "id": "NCES-410963001489",
        "name": "Armadillo Community Charter School",
        "city": "Phoenix",
        "state": "OR",
        "union": "Phoenix-Talent Education Association / OEA / NEA",
        "date": "School opening (Phoenix-Talent SD 4 CBA ",
        "website": "http://www.armadillocharter.org"
      },
      {
        "id": "NCES-410394004181",
        "name": "Arthur Academy",
        "city": "Portland",
        "state": "OR",
        "union": "David Douglas Education Association / OEA / NEA",
        "date": "School opening (David Douglas SD 40 CBA ",
        "website": "http://www.arthuracademy.org"
      },
      {
        "id": "NCES-410171001783",
        "name": "Baker Early College",
        "city": "Baker City",
        "state": "OR",
        "union": "Baker Education Association / OEA / NEA",
        "date": "School opening (Baker SD 5J CBA coverage",
        "website": "http://www.bakercharters.org"
      },
      {
        "id": "NCES-410171001767",
        "name": "Baker Web Academy",
        "city": "Baker City",
        "state": "OR",
        "union": "Baker Education Association / OEA / NEA",
        "date": "School opening (Baker SD 5J CBA coverage",
        "website": "http://www.bakercharters.org"
      },
      {
        "id": "NCES-410198001845",
        "name": "Bend International School",
        "city": "Bend",
        "state": "OR",
        "union": "Bend Education Association (BEA) / OEA / NEA",
        "date": "School opening (Bend-Lapine Administrati",
        "website": "http://www.bendinternationalschool.org"
      },
      {
        "id": "NCES-411145000829",
        "name": "Bethany Charter School",
        "city": "Silverton",
        "state": "OR",
        "union": "Silver Falls Education Association / OEA / NEA",
        "date": "School opening (Silver Falls SD 4J CBA c",
        "website": "http://bethanycharter.silverfalls.orvsd.org"
      },
      {
        "id": "NCES-410759001846",
        "name": "Bridge Charter Academy",
        "city": "Lowell",
        "state": "OR",
        "union": "Lowell Education Association / OEA / NEA",
        "date": "School opening (Lowell SD 71 CBA coverag",
        "website": "http://www.bridgecharter.com"
      },
      {
        "id": "C4112001",
        "name": "BURNT RIVER CHARTER SCHOOL",
        "city": "Unity",
        "state": "OR",
        "union": "Local OEA chapter or no union (tiny rural district",
        "date": "Unknown",
        "website": "http://www.burntriver.k12.or.us"
      },
      {
        "id": "C4111003",
        "name": "BUTTE FALLS CHARTER SCHOOL",
        "city": "Butte Falls",
        "state": "OR",
        "union": "Local OEA chapter or no union (tiny rural district",
        "date": "Unknown",
        "website": "http://www.buttefalls.k12.or.us"
      },
      {
        "id": "C4104003",
        "name": "CAMAS VALLEY SCHOOL",
        "city": "Camas Valley",
        "state": "OR",
        "union": "Local OEA chapter or no union (tiny rural district",
        "date": "Unknown — ERB records request required",
        "website": "http://www.camasvalley.k12.or.us"
      },
      {
        "id": "C4106002",
        "name": "CASCADE HEIGHTS PUBLIC CHARTER SCHOOL",
        "city": "Clackamas",
        "state": "OR",
        "union": "North Clackamas Education Association (NCEA) / OEA",
        "date": "School opening (North Clackamas district",
        "website": "http://www.cascadeheights.org/"
      },
      {
        "id": "NCES-410828001869",
        "name": "Cascade Virtual Academy",
        "city": "Prineville",
        "state": "OR",
        "union": "Mitchell Education Association / OEA / NEA",
        "date": "School opening (Mitchell SD 55 CBA cover",
        "website": ""
      },
      {
        "id": "C4104004",
        "name": "CENTER FOR ADVANCED LEARNING",
        "city": "Gresham",
        "state": "OR",
        "union": "Gresham-Barlow Education Association (GBEA) / OEA ",
        "date": "School opening (Gresham-Barlow district ",
        "website": "http://www.calcharter.org"
      },
      {
        "id": "NCES-411158001677",
        "name": "Childs Way Charter School",
        "city": "Dorena",
        "state": "OR",
        "union": "South Lane Education Association / OEA / NEA",
        "date": "School opening (South Lane SD 45J3 CBA c",
        "website": "http://childswaycharterschool.net/"
      },
      {
        "id": "NCES-410002301535",
        "name": "City View Charter School",
        "city": "Hillsboro",
        "state": "OR",
        "union": "Hillsboro Education Association (HEA) / OEA / NEA",
        "date": "School opening (Hillsboro SD 1J CBA cove",
        "website": "http://www.cityviewcharter.org"
      },
      {
        "id": "NCES-410933001793",
        "name": "Clackamas Academy of Industrial Sciences",
        "city": "Oregon City",
        "state": "OR",
        "union": "Oregon City Education Association / OEA / NEA",
        "date": "School opening (Oregon City SD 62 CBA co",
        "website": "http://www.caisoc.com"
      },
      {
        "id": "C4104006",
        "name": "CLACKAMAS MIDDLE COLLEGE",
        "city": "Happy Valley",
        "state": "OR",
        "union": "North Clackamas Education Association (NCEA) / OEA",
        "date": "School opening (North Clackamas district",
        "website": "http://www.clackamasmiddlecollege.org"
      },
      {
        "id": "C4105004",
        "name": "CLACKAMAS WEB ACADEMY",
        "city": "Clackamas",
        "state": "OR",
        "union": "North Clackamas Education Association (NCEA) / OEA",
        "date": "School opening (North Clackamas district",
        "website": "http://www.clackamaswebacademy.org"
      },
      {
        "id": "NCES-410474000533",
        "name": "Coburg Community Charter School",
        "city": "Eugene",
        "state": "OR",
        "union": "Eugene Education Association (EEA) / OEA / NEA",
        "date": "School opening (Eugene SD 4J CBA coverag",
        "website": "http://coburgcharter.org"
      },
      {
        "id": "NCES-410342001729",
        "name": "Corbett School",
        "city": "Corbett",
        "state": "OR",
        "union": "Corbett Education Association / OEA / NEA",
        "date": "School opening (Corbett SD 39 CBA covera",
        "website": "http://corbett.k12.or.us/"
      },
      {
        "id": "C4109006",
        "name": "COVE CHARTER SCHOOL",
        "city": "Cove",
        "state": "OR",
        "union": "Local OEA chapter or no union (tiny rural district",
        "date": "Unknown",
        "website": "http://www.cove.k12.or.us/"
      },
      {
        "id": "NCES-410450001831",
        "name": "Crater Lake Academy",
        "city": "Eagle Point",
        "state": "OR",
        "union": "Eagle Point Education Association / OEA / NEA",
        "date": "School opening (Eagle Point SD 9 CBA cov",
        "website": "http://www.craterlakecharter.org"
      },
      {
        "id": "NCES-410386001835",
        "name": "Dallas Community Charter",
        "city": "Dallas",
        "state": "OR",
        "union": "Dallas Education Association / OEA / NEA",
        "date": "School opening (Dallas SD 2 CBA coverage",
        "website": "http://dallascommunityschool.org"
      },
      {
        "id": "C4105005",
        "name": "DAYS CREEK CHARTER SCHOOL",
        "city": "Days Creek",
        "state": "OR",
        "union": "Local OEA chapter or no union (tiny rural district",
        "date": "Unknown",
        "website": "http://www.dayscreekschools.com"
      },
      {
        "id": "NCES-410198001860",
        "name": "Desert Sky Montessori",
        "city": "Bend",
        "state": "OR",
        "union": "Bend Education Association (BEA) / OEA / NEA",
        "date": "School opening (Bend-Lapine Administrati",
        "website": "http://www.dsmontessori.org"
      },
      {
        "id": "NCES-410828001864",
        "name": "Destinations Career Academy of Oregon",
        "city": "Prineville",
        "state": "OR",
        "union": "Mitchell Education Association / OEA / NEA",
        "date": "School opening (Mitchell SD 55 CBA cover",
        "website": ""
      },
      {
        "id": "NCES-410750001582",
        "name": "Eddyville Charter School",
        "city": "Eddyville",
        "state": "OR",
        "union": "Lincoln County Education Association / OEA / NEA",
        "date": "School opening (Lincoln County SD CBA co",
        "website": "http://eddyvillecharterschool.org/"
      },
      {
        "id": "C4109007",
        "name": "ELKTON CHARTER SCHOOL",
        "city": "Elkton",
        "state": "OR",
        "union": "Local OEA chapter or no union (tiny rural district",
        "date": "Unknown",
        "website": "http://www.elkton.k12.or.us"
      },
      {
        "id": "NCES-411004001581",
        "name": "Emerson School",
        "city": "Portland",
        "state": "OR",
        "union": "Portland Association of Teachers (PAT) / OEA / NEA",
        "date": "School opening (Portland SD 1J CBA cover",
        "website": "http://www.emersonschool.org"
      },
      {
        "id": "NCES-410516001724",
        "name": "Forest Grove Community School",
        "city": "Forest Grove",
        "state": "OR",
        "union": "Forest Grove Education Association / OEA / NEA",
        "date": "School opening (Forest Grove SD 15 CBA c",
        "website": "http://www.fgcschool.org/"
      },
      {
        "id": "C4107005",
        "name": "FOSSIL CHARTER SCHOOL",
        "city": "Fossil",
        "state": "OR",
        "union": "Local OEA chapter or no union (tiny rural district",
        "date": "Unknown",
        "website": "http://www.fossilschools.com"
      },
      {
        "id": "NCES-410001501859",
        "name": "Frontier Charter Academy",
        "city": "Gervais",
        "state": "OR",
        "union": "Gervais Education Association / OEA / NEA",
        "date": "School opening (Gervais SD 1 CBA coverag",
        "website": "http://www.frontiercharteracademy.org"
      },
      {
        "id": "NCES-410564000327",
        "name": "Glendale Community Charter School Pre-K-12",
        "city": "Glendale",
        "state": "OR",
        "union": "Glendale Education Association / OEA / NEA",
        "date": "School opening (Glendale SD 77 CBA cover",
        "website": "http://www.glendale.k12.or.us"
      },
      {
        "id": "NCES-410600001733",
        "name": "Gresham Arthur Academy",
        "city": "Gresham",
        "state": "OR",
        "union": "Gresham-Barlow Education Association / OEA / NEA",
        "date": "School opening (Gresham-Barlow SD 10J CB",
        "website": "http://www.arthuracademy.org"
      },
      {
        "id": "NCES-410723001873",
        "name": "Harmony Academy",
        "city": "Lake Oswego",
        "state": "OR",
        "union": "Lake Oswego Education Association / OEA / NEA",
        "date": "School opening (Lake Oswego SD 7J CBA co",
        "website": "http://www.oregonrecoveryschools.org"
      },
      {
        "id": "C4111005",
        "name": "HARPER CHARTER SCHOOL",
        "city": "Harper",
        "state": "OR",
        "union": "Local OEA chapter or no union (tiny rural district",
        "date": "Unknown",
        "website": "http://www.harpersd.org"
      },
      {
        "id": "NCES-410627001084",
        "name": "Helix Charter School",
        "city": "Helix",
        "state": "OR",
        "union": "Helix Education Association / OEA / NEA",
        "date": "School opening (Helix SD 1 CBA coverage ",
        "website": "http://www.helix.k12.or.us"
      },
      {
        "id": "NCES-411052011356",
        "name": "Holla School",
        "city": "Portland",
        "state": "OR",
        "union": "Reynolds Education Association / OEA / NEA",
        "date": "School opening (Reynolds SD 7 CBA covera",
        "website": "http://www.hollaschool.org"
      },
      {
        "id": "NCES-410192001823",
        "name": "Hope Chinese Charter School",
        "city": "Beaverton",
        "state": "OR",
        "union": "Beaverton Education Association (BEA) / OEA / NEA",
        "date": "School opening (Beaverton SD 48J CBA cov",
        "website": "http://hopeccs.org"
      },
      {
        "id": "C4102003",
        "name": "HOWARD STREET CHARTER",
        "city": "Salem",
        "state": "OR",
        "union": "Salem-Keizer Education Association (SKEA) / OEA / ",
        "date": "School opening (Salem-Keizer district CB",
        "website": "http://www.howardstreet.org/"
      },
      {
        "id": "C4112002",
        "name": "HUNTINGTON CHARTER SCHOOL",
        "city": "Huntington",
        "state": "OR",
        "union": "Local OEA chapter or no union (tiny rural district",
        "date": "Unknown",
        "website": "http://www.huntington.k12.or.us"
      },
      {
        "id": "C4109001",
        "name": "IMBLER CHARTER SCHOOL",
        "city": "Imbler",
        "state": "OR",
        "union": "Local OEA chapter or no union (tiny rural district",
        "date": "Unknown",
        "website": "http://www.imbler.k12.or.us"
      },
      {
        "id": "NCES-410348001743",
        "name": "Inavale Community Partners Dba Muddy Creek Charter School",
        "city": "Corvallis",
        "state": "OR",
        "union": "Corvallis Education Association (CEA) / OEA / NEA",
        "date": "School opening (Corvallis SD 509J CBA co",
        "website": "http://www.muddycreekcharterschool.org"
      },
      {
        "id": "NCES-410828001813",
        "name": "Insight School of Oregon Painted Hills",
        "city": "Mitchell",
        "state": "OR",
        "union": "Mitchell Education Association / OEA / NEA",
        "date": "School opening (Mitchell SD 55 CBA cover",
        "website": "http://or-ph.insightschools.net"
      },
      {
        "id": "C4105008",
        "name": "IONE COMMUNITY CHARTER SCHOOL",
        "city": "Ione",
        "state": "OR",
        "union": "Local OEA chapter or no union (tiny rural district",
        "date": "Unknown",
        "website": "http://www.ione.k12.or.us"
      },
      {
        "id": "C4104008",
        "name": "JANE GOODALL ENVIRONMENTAL MIDDLE CHARTER SCHOOL",
        "city": "Salem",
        "state": "OR",
        "union": "Salem-Keizer Education Association (SKEA) / OEA / ",
        "date": "School opening (Salem-Keizer district CB",
        "website": "http://jgems.net/"
      },
      {
        "id": "C4111006",
        "name": "JOSEPH CHARTER SCHOOL",
        "city": "Joseph",
        "state": "OR",
        "union": "Local OEA chapter or no union (tiny rural district",
        "date": "Unknown",
        "website": "http://www.staff.josephcharter.org"
      },
      {
        "id": "NCES-411004001830",
        "name": "Kairos Pdx",
        "city": "Portland",
        "state": "OR",
        "union": "Portland Association of Teachers (PAT) / OEA / NEA",
        "date": "School opening (Portland SD 1J CBA cover",
        "website": "http://kairospdx.org/"
      },
      {
        "id": "NCES-410690011366",
        "name": "Kalmiopsis Community Arts High School",
        "city": "Cave Junction",
        "state": "OR",
        "union": "Three Rivers Education Association / OEA / NEA",
        "date": "School opening (Three Rivers/Josephine C",
        "website": "http://www.kcahs.org"
      },
      {
        "id": "NCES-410804001829",
        "name": "Kids Unlimited Academy",
        "city": "Medford",
        "state": "OR",
        "union": "Medford Education Association / OEA / NEA",
        "date": "School opening (Medford SD 549C CBA cove",
        "website": "http://kuoregon.org"
      },
      {
        "id": "NCES-410960000021",
        "name": "Kings Valley Charter School",
        "city": "Philomath",
        "state": "OR",
        "union": "Philomath Education Association / OEA / NEA",
        "date": "School opening (Philomath SD 17J CBA cov",
        "website": "http://sites.google.com/a/kvschool.org/kvcs/"
      },
      {
        "id": "NCES-411004001814",
        "name": "Le Monde French Immersion Public Charter School",
        "city": "Portland",
        "state": "OR",
        "union": "Portland Association of Teachers (PAT) / OEA / NEA",
        "date": "School opening (Portland SD 1J CBA cover",
        "website": "http://www.lemondeimmersion.org"
      },
      {
        "id": "NCES-410600001757",
        "name": "Lewis And Clark Montessori Charter School",
        "city": "Gresham",
        "state": "OR",
        "union": "Gresham-Barlow Education Association / OEA / NEA",
        "date": "School opening (Gresham-Barlow SD 10J CB",
        "website": "http://www.lewisandclarkcharter.org/"
      },
      {
        "id": "NCES-410804001796",
        "name": "Logos Charter School",
        "city": "Medford",
        "state": "OR",
        "union": "Medford Education Association / OEA / NEA",
        "date": "School opening (Medford SD 549C CBA cove",
        "website": "http://www.logoscharter.com"
      },
      {
        "id": "NCES-411104001494",
        "name": "Lourdes School",
        "city": "Scio",
        "state": "OR",
        "union": "Scio Education Association / OEA / NEA",
        "date": "School opening (Scio SD 95 CBA coverage ",
        "website": "http://www.lourdes.k12.or.us/"
      },
      {
        "id": "NCES-410386001045",
        "name": "Luckiamute Valley Charter School",
        "city": "Monmouth",
        "state": "OR",
        "union": "Dallas Education Association / OEA / NEA",
        "date": "School opening (Dallas SD 2 CBA coverage",
        "website": "http://www.lvcs.k12.or.us"
      },
      {
        "id": "NCES-410804001736",
        "name": "Madrone Trail Public Charter School",
        "city": "Central Point",
        "state": "OR",
        "union": "Medford Education Association / OEA / NEA",
        "date": "School opening (Medford SD 549C CBA cove",
        "website": "http://www.madronetrail.org"
      },
      {
        "id": "NCES-410798000629",
        "name": "Mckenzie River Community School",
        "city": "Finn Rock",
        "state": "OR",
        "union": "McKenzie Education Association / OEA / NEA",
        "date": "School opening (Mckenzie SD 68 CBA cover",
        "website": "http://www.mckenziesd.org"
      },
      {
        "id": "NCES-410600001787",
        "name": "Metro East Web Academy",
        "city": "Gresham",
        "state": "OR",
        "union": "Gresham-Barlow Education Association / OEA / NEA",
        "date": "School opening (Gresham-Barlow SD 10J CB",
        "website": "http://www.mewebacademy.org"
      },
      {
        "id": "C4106005",
        "name": "MILWAUKIE ACADEMY OF THE ARTS",
        "city": "Milwaukie",
        "state": "OR",
        "union": "North Clackamas Education Association (NCEA) / OEA",
        "date": "School opening (North Clackamas district",
        "website": "http://www.nclack.k12.or.us/Domain/1478"
      },
      {
        "id": "NCES-410831001789",
        "name": "Molalla River Academy",
        "city": "Molalla",
        "state": "OR",
        "union": "Molalla River Education Association / OEA / NEA",
        "date": "School opening (Molalla River SD 35 CBA ",
        "website": "http://www.molallariveracademy.com"
      },
      {
        "id": "NCES-410759001834",
        "name": "Mountain View Academy",
        "city": "Lowell",
        "state": "OR",
        "union": "Lowell Education Association / OEA / NEA",
        "date": "School opening (Lowell SD 71 CBA coverag",
        "website": "http://www.mtviewacademy.org"
      },
      {
        "id": "NCES-411224004176",
        "name": "Multi-Sensory Instruction Teaching Children Hands-On (Mitch)",
        "city": "Tualatin",
        "state": "OR",
        "union": "Tigard-Tualatin Education Association / OEA / NEA",
        "date": "School opening (Tigard-Tualatin SD 23J C",
        "website": "http://www.mitchcharterschool.org"
      },
      {
        "id": "NCES-411052001434",
        "name": "Multnomah Learning Academy",
        "city": "Fairview",
        "state": "OR",
        "union": "Reynolds Education Association / OEA / NEA",
        "date": "School opening (Reynolds SD 7 CBA covera",
        "website": "http://www.mla.k12.or.us"
      },
      {
        "id": "NCES-410474001593",
        "name": "Network Charter School",
        "city": "Eugene",
        "state": "OR",
        "union": "Eugene Education Association (EEA) / OEA / NEA",
        "date": "School opening (Eugene SD 4J CBA coverag",
        "website": "http://www.networkcharterschool.net/"
      },
      {
        "id": "NCES-410951001534",
        "name": "Nixyaawii Community School",
        "city": "Pendleton",
        "state": "OR",
        "union": "Pendleton Education Association / OEA / NEA",
        "date": "School opening (Pendleton SD 16 CBA cove",
        "website": "http://www.nixyaawii.k12.or.us/"
      },
      {
        "id": "C4109012",
        "name": "NORTH POWDER CHARTER SCHOOL",
        "city": "North Powder",
        "state": "OR",
        "union": "Local OEA chapter or no union (tiny rural district",
        "date": "Unknown",
        "website": "http://www.npowder.k12.or.us"
      },
      {
        "id": "C4102008",
        "name": "OPTIMUM LEARNING ENVIRONMENT CHARTER SCHOOL",
        "city": "Keizer",
        "state": "OR",
        "union": "Salem-Keizer Education Association (SKEA) / OEA / ",
        "date": "School opening (Salem-Keizer district CB",
        "website": "http://ole.salkeiz.k12.or.us"
      },
      {
        "id": "NCES-410810001680",
        "name": "Oregon Charter Academy",
        "city": "Mill City",
        "state": "OR",
        "union": "Santiam Canyon Education Association / OEA / NEA",
        "date": "School opening (Santiam Canyon SD 129J C",
        "website": "http://www.oregoncharter.org"
      },
      {
        "id": "C4106009",
        "name": "OREGON CITY SERVICE LEARNING ACADEMY",
        "city": "Oregon City",
        "state": "OR",
        "union": "Oregon City Education Association (OCEA) / OEA / N",
        "date": "School opening (Oregon City district CBA",
        "website": ""
      },
      {
        "id": "NCES-411011001895",
        "name": "Oregon Connections Academy",
        "city": "Prairie City",
        "state": "OR",
        "union": "Prairie City Education Association / OEA / NEA",
        "date": "School opening (Prairie City SD 4 CBA co",
        "website": "http://www.connectionsacademy.com"
      },
      {
        "id": "NCES-410360001870",
        "name": "Oregon Family School",
        "city": "Crane",
        "state": "OR",
        "union": "Harney County Education Association / OEA / NEA",
        "date": "School opening (Harney County SD 4 CBA c",
        "website": "http://www.oregonfamilyschool.com"
      },
      {
        "id": "NCES-410171001877",
        "name": "Oregon International School",
        "city": "Baker City",
        "state": "OR",
        "union": "Baker Education Association / OEA / NEA",
        "date": "School opening (Baker SD 5J CBA coverage",
        "website": "http://www.oregon-international-school.org"
      },
      {
        "id": "NCES-411089001799",
        "name": "Oregon Trail Academy",
        "city": "Boring",
        "state": "OR",
        "union": "Oregon Trail Education Association / OEA / NEA",
        "date": "School opening (Oregon Trail SD 46 CBA c",
        "website": "http://ota.oregontrailschools.com/"
      },
      {
        "id": "C4104011",
        "name": "PAISLEY CHARTER SCHOOL",
        "city": "Paisley",
        "state": "OR",
        "union": "Local OEA chapter or no union (tiny rural district",
        "date": "Unknown — ERB records request required",
        "website": "http://www.paisleyschooldistrict.com/"
      },
      {
        "id": "NCES-411071001685",
        "name": "Phoenix School",
        "city": "Roseburg",
        "state": "OR",
        "union": "Douglas County Education Association / OEA / NEA",
        "date": "School opening (Douglas County SD 4 CBA ",
        "website": "http://phoenix.roseburg.k12.or.us/"
      },
      {
        "id": "C4110007",
        "name": "PINE EAGLE CHARTER SCHOOL",
        "city": "Halfway",
        "state": "OR",
        "union": "Local OEA chapter or no union (tiny rural district",
        "date": "Unknown",
        "website": "http://www.pineeaglesd.org"
      },
      {
        "id": "NCES-411004001667",
        "name": "Portland Arthur Academy Charter School",
        "city": "Portland",
        "state": "OR",
        "union": "Portland Association of Teachers (PAT) / OEA / NEA",
        "date": "School opening (Portland SD 1J CBA cover",
        "website": "http://www.arthuracademy.org"
      },
      {
        "id": "NCES-411004001649",
        "name": "Portland Village School",
        "city": "Portland",
        "state": "OR",
        "union": "Portland Association of Teachers (PAT) / OEA / NEA",
        "date": "School opening (Portland SD 1J CBA cover",
        "website": "http://www.portlandvillageschool.org"
      },
      {
        "id": "NCES-410372000242",
        "name": "Powell Butte Community Charter School",
        "city": "Powell Butte",
        "state": "OR",
        "union": "Crook County Education Association / OEA / NEA",
        "date": "School opening (Crook County SD CBA cove",
        "website": "http://www.powellbuttecharterschool.org"
      },
      {
        "id": "C4109013",
        "name": "PROSPECT CHARTER SCHOOL",
        "city": "Prospect",
        "state": "OR",
        "union": "Local OEA chapter or no union (tiny rural district",
        "date": "Unknown",
        "website": "http://www.prospect.k12.or.us"
      },
      {
        "id": "NCES-411035001785",
        "name": "Redmond Proficiency Academy",
        "city": "Redmond",
        "state": "OR",
        "union": "Redmond Education Association / OEA / NEA",
        "date": "School opening (Redmond SD 2J CBA covera",
        "website": "http://www.rpacademy.org"
      },
      {
        "id": "C4109017",
        "name": "REEDSPORT COMMUNITY CHARTER SCHOOL",
        "city": "Reedsport",
        "state": "OR",
        "union": "Local OEA chapter or no union (small coastal distr",
        "date": "Unknown",
        "website": "http://www.reedsport.k12.or.us"
      },
      {
        "id": "C4106015",
        "name": "RESOURCE LINK CHARTER SCHOOL",
        "city": "Coos Bay",
        "state": "OR",
        "union": "Coos Bay Education Association (CBEA) / OEA / NEA",
        "date": "School opening (Coos Bay district CBA — ",
        "website": "http://www.resoucelinkcharter.org/rlcs/Home/html"
      },
      {
        "id": "NCES-411052001540",
        "name": "Reynolds Arthur Academy",
        "city": "Troutdale",
        "state": "OR",
        "union": "Reynolds Education Association / OEA / NEA",
        "date": "School opening (Reynolds SD 7 CBA covera",
        "website": "http://www.arthuracademy.org"
      },
      {
        "id": "NCES-411068001811",
        "name": "Rivers Edge Academy Charter School",
        "city": "Rogue River",
        "state": "OR",
        "union": "Rogue River Education Association / OEA / NEA",
        "date": "School opening (Rogue River SD 35 CBA co",
        "website": "http://www.reach-school.org"
      },
      {
        "id": "NCES-411052001798",
        "name": "Rockwood Preparatory Academy",
        "city": "Portland",
        "state": "OR",
        "union": "Reynolds Education Association / OEA / NEA",
        "date": "School opening (Reynolds SD 7 CBA covera",
        "website": "http://rockwoodprep.org/"
      },
      {
        "id": "NCES-410738004186",
        "name": "Sand Ridge Charter School",
        "city": "Lebanon",
        "state": "OR",
        "union": "Lebanon Community Education Association / OEA / NE",
        "date": "School opening (Lebanon Community SD 9 C",
        "website": "http://www.piecharters.k12.or.us"
      },
      {
        "id": "NCES-411098001011",
        "name": "Sauvie Island School",
        "city": "Portland",
        "state": "OR",
        "union": "Scappoose Education Association / OEA / NEA",
        "date": "School opening (Scappoose SD 1J CBA cove",
        "website": "http://www.sauvieislandschool.org"
      },
      {
        "id": "NCES-411122001803",
        "name": "Sheridan Allprep Academy",
        "city": "Sheridan",
        "state": "OR",
        "union": "Sheridan Education Association / OEA / NEA",
        "date": "School opening (Sheridan SD 48J CBA cove",
        "website": "http://www.sheridanallprep.org/"
      },
      {
        "id": "NCES-411129001684",
        "name": "Sherwood Charter School",
        "city": "Sherwood",
        "state": "OR",
        "union": "Sherwood Education Association / OEA / NEA",
        "date": "School opening (Sherwood SD 88J CBA cove",
        "website": "http://sherwoodcharterschool.org"
      },
      {
        "id": "NCES-410750001590",
        "name": "Siletz Valley Schools",
        "city": "Siletz",
        "state": "OR",
        "union": "Lincoln County Education Association / OEA / NEA",
        "date": "School opening (Lincoln County SD CBA co",
        "website": "http://www.siletzvalleyschools.org"
      },
      {
        "id": "NCES-410363001756",
        "name": "Silvies River Charter School",
        "city": "Crane",
        "state": "OR",
        "union": "Harney County Education Association / OEA / NEA",
        "date": "School opening (Harney County Union High",
        "website": "http://www.silviesrcs.org"
      },
      {
        "id": "NCES-411098001542",
        "name": "South Columbia Family School",
        "city": "Warren",
        "state": "OR",
        "union": "Scappoose Education Association / OEA / NEA",
        "date": "School opening (Scappoose SD 1J CBA cove",
        "website": "http://www.scfamilyschool.net/"
      },
      {
        "id": "NCES-410933001642",
        "name": "Springwater Environmental Sciences School",
        "city": "Oregon City",
        "state": "OR",
        "union": "Oregon City Education Association / OEA / NEA",
        "date": "School opening (Oregon City SD 62 CBA co",
        "website": "http://www.springwaterschool.com"
      },
      {
        "id": "NCES-411172001732",
        "name": "St Helens Arthur Academy",
        "city": "St Helens",
        "state": "OR",
        "union": "St Helens Education Association / OEA / NEA",
        "date": "School opening (St Helens SD 502 CBA cov",
        "website": "http://www.arthuracademy.org"
      },
      {
        "id": "NCES-410470001766",
        "name": "Summit Learning Charter",
        "city": "Eagle Creek",
        "state": "OR",
        "union": "Estacada Education Association / OEA / NEA",
        "date": "School opening (Estacada SD 108 CBA cove",
        "website": "http://www.summitlearningcharter.org"
      },
      {
        "id": "NCES-410690001797",
        "name": "Sunny Wolf Charter School",
        "city": "Wolf Creek",
        "state": "OR",
        "union": "Three Rivers Education Association / OEA / NEA",
        "date": "School opening (Three Rivers/Josephine C",
        "website": "http://www.sunnywolfcharterschool.com"
      },
      {
        "id": "NCES-411197001643",
        "name": "Sweet Home Charter School",
        "city": "Sweet Home",
        "state": "OR",
        "union": "Sweet Home Education Association / OEA / NEA",
        "date": "School opening (Sweet Home SD 55 CBA cov",
        "website": "http://www.sweethomecharterschool.org"
      },
      {
        "id": "NCES-410774001872",
        "name": "Teach-Nw",
        "city": "Eugene",
        "state": "OR",
        "union": "Marcola Education Association / OEA / NEA",
        "date": "School opening (Marcola SD 79J CBA cover",
        "website": "http://www.teach-nw.com"
      },
      {
        "id": "NCES-411110001857",
        "name": "The Cannon Beach Academy",
        "city": "Cannon Beach",
        "state": "OR",
        "union": "Seaside Education Association / OEA / NEA",
        "date": "School opening (Seaside SD 10 CBA covera",
        "website": "http://thecannonbeachacademy.org"
      },
      {
        "id": "NCES-411145001769",
        "name": "The Community Roots School",
        "city": "Silverton",
        "state": "OR",
        "union": "Silver Falls Education Association / OEA / NEA",
        "date": "School opening (Silver Falls SD 4J CBA c",
        "website": "http://www.crmontessori.org"
      },
      {
        "id": "NCES-410804001843",
        "name": "The Valley School of Southern Oregon",
        "city": "Medford",
        "state": "OR",
        "union": "Medford Education Association / OEA / NEA",
        "date": "School opening (Medford SD 549C CBA cove",
        "website": "http://www.thevalleyschool.education"
      },
      {
        "id": "NCES-411317001437",
        "name": "Three Rivers Charter School",
        "city": "West Linn",
        "state": "OR",
        "union": "West Linn-Wilsonville Education Association / OEA ",
        "date": "School opening (West Linn-Wilsonville SD",
        "website": "http://www.3rcs.org/pages/Three_Rivers_Charter_School"
      },
      {
        "id": "C4110011",
        "name": "TRIANGLE LAKE CHARTER SCHOOL",
        "city": "Blachly",
        "state": "OR",
        "union": "Local OEA chapter or no union (tiny rural district",
        "date": "Unknown",
        "website": "http://www.blachly.k12.or.us"
      },
      {
        "id": "NCES-410474001848",
        "name": "Twin Rivers Charter School",
        "city": "Eugene",
        "state": "OR",
        "union": "Eugene Education Association (EEA) / OEA / NEA",
        "date": "School opening (Eugene SD 4J CBA coverag",
        "website": "http://twinriverscharter.org/"
      },
      {
        "id": "NCES-411254001122",
        "name": "Ukiah Charter School",
        "city": "Ukiah",
        "state": "OR",
        "union": "Ukiah Education Association / OEA / NEA",
        "date": "School opening (Ukiah SD 80R CBA coverag",
        "website": "http://www.ukiah.k12.or.us"
      },
      {
        "id": "NCES-410474001492",
        "name": "Village School",
        "city": "Eugene",
        "state": "OR",
        "union": "Eugene Education Association (EEA) / OEA / NEA",
        "date": "School opening (Eugene SD 4J CBA coverag",
        "website": "http://www.eugenevillageschool.org"
      },
      {
        "id": "NCES-411011011352",
        "name": "Virtual Preparatory Academy of Oregon",
        "city": "Prairie City",
        "state": "OR",
        "union": "Prairie City Education Association / OEA / NEA",
        "date": "School opening (Prairie City SD 4 CBA co",
        "website": "http://oregon.virtualpreparatoryacademy.com/"
      },
      {
        "id": "NCES-410495001595",
        "name": "West Lane Charter School",
        "city": "Veneta",
        "state": "OR",
        "union": "Fern Ridge Education Association / OEA / NEA",
        "date": "School opening (Fern Ridge SD 28J CBA co",
        "website": "http://www.westlanetech.org"
      },
      {
        "id": "NCES-411104001876",
        "name": "Willamette Connections Academy",
        "city": "Scio",
        "state": "OR",
        "union": "Scio Education Association / OEA / NEA",
        "date": "School opening (Scio SD 95 CBA coverage ",
        "website": "http://www.connectionsacademy.com/"
      },
      {
        "id": "NCES-411167001525",
        "name": "Willamette Leadership Academy",
        "city": "Springfield",
        "state": "OR",
        "union": "Springfield Education Association / OEA / NEA",
        "date": "School opening (Springfield SD 19 CBA co",
        "website": "http://www.willametteleadershipacademy.net"
      },
      {
        "id": "NCES-411353001546",
        "name": "Woodburn Arthur Academy",
        "city": "Woodburn",
        "state": "OR",
        "union": "Woodburn Education Association / OEA / NEA",
        "date": "School opening (Woodburn SD 103 CBA cove",
        "website": "http://www.arthuracademy.org"
      },
      {
        "id": "NCES-410690001812",
        "name": "Woodland Charter School",
        "city": "Grants Pass",
        "state": "OR",
        "union": "Three Rivers Education Association / OEA / NEA",
        "date": "School opening (Three Rivers/Josephine C",
        "website": "http://www.woodlandcharterschool.org"
      }
    ],
    "DECERTIFIED": [
      {
        "id": "NAPCS-ADD-CA-DEC-001",
        "name": "Gompers Preparatory Academy",
        "city": "San Diego",
        "state": "CA",
        "union": "None — DECERTIFIED June 2023 (formerly SDEA / NEA)",
        "date": "January 2019 (PERB(CA) card check certif",
        "website": "http://www.gomperscharter.org"
      },
      {
        "id": "C0603056",
        "name": "St. HOPE Public School 7",
        "city": "Sacramento",
        "state": "CA",
        "union": "None — DECERTIFIED March 2026 (formerly SCTA / CTA",
        "date": "2018 (PERB(CA) card check certification ",
        "website": "http://www.ps7.org"
      },
      {
        "id": "C2599003",
        "name": "CONSERVATORY LAB CHARTER SCHOOL",
        "city": "Boston",
        "state": "MA",
        "union": "AFTMA (formerly) — decertified approximately 2011-",
        "date": "October 22, 2008 (DLR original certifica",
        "website": "http://www.conservatorylab.org"
      },
      {
        "id": "C3609013",
        "name": "Evergreen Charter School",
        "city": "Hempstead",
        "state": "NY",
        "union": "Evergreen Charter Staff Association / NYSUT / AFT ",
        "date": "N/A — DECERTIFIED October 2016",
        "website": "http://ecsli.org"
      },
      {
        "id": "C4100004",
        "name": "RIDGELINE MONTESSORI PUBLIC CHARTER SCHOOL",
        "city": "Eugene",
        "state": "OR",
        "union": "Eugene Charter School Professionals, AFT Local 643",
        "date": "November 2008 (ERB CR-002-08 — certifica",
        "website": "http://www.ridgeline.org"
      }
    ],
    "CLOSED": [
      {
        "id": "NAPCS-ADD-DC-001",
        "name": "CESAR CHAVEZ PCS — PREP MIDDLE SCHOOL",
        "city": "Washington",
        "state": "DC",
        "union": "DC Alliance of Charter Teachers and Staff, Local 1",
        "date": "June 2017 (election; exact cert date unk",
        "website": "http://www.thurgoodmarshallacademy.org"
      },
      {
        "id": "C1208026",
        "name": "FAU/SLCSD Palm Pointe Educational Research School",
        "city": "Port St. Lucie",
        "state": "FL",
        "union": "None confirmed",
        "date": "N/A",
        "website": "http://www.tradition.fau.edu"
      },
      {
        "id": "C1798005",
        "name": "ACERO CHARTER SCHOOL NETWORK - OCTAVIO PAZ",
        "city": "Chicago",
        "state": "IL",
        "union": "United Educators for Justice (UEJ) / ChiACTS",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://www.ucsnschools.org/"
      },
      {
        "id": "C1712004",
        "name": "ACERO CHARTER SCHOOL NETWORK- SOR JUANA INES DE LA CRUZ",
        "city": "Chicago",
        "state": "IL",
        "union": "United Educators for Justice (UEJ) / ChiACTS",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://www.ucsnschools.org/"
      },
      {
        "id": "C1707001",
        "name": "ASPIRA - EARLY COLLEGE HIGH SCHOOL",
        "city": "Chicago",
        "state": "IL",
        "union": "ChiACTS (Chicago Alliance of Charter Teachers and ",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://aec.aspirail.org"
      },
      {
        "id": "C1715001",
        "name": "ASPIRA BUSINESS AND FINANCE SCHOOL",
        "city": "Chicago",
        "state": "IL",
        "union": "ChiACTS (Chicago Alliance of Charter Teachers and ",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://aec.aspirail.org"
      },
      {
        "id": "C1710012",
        "name": "EPIC ACADEMY HIGH SCHOOL",
        "city": "Chicago",
        "state": "IL",
        "union": "ChiACTS (Chicago Alliance of Charter Teachers and ",
        "date": "Unknown — NLRB Region 13 records request",
        "website": "http://www.epicacademy.org"
      },
      {
        "id": "C2210005",
        "name": "International High School of New Orleans",
        "city": "New Orleans",
        "state": "LA",
        "union": "United Teachers of International High School / UTN",
        "date": "2016",
        "website": ""
      },
      {
        "id": "C2511009",
        "name": "UP ACADEMY CHARTER SCHOOL OF BOSTON",
        "city": "Boston",
        "state": "MA",
        "union": "Boston Teachers Union Local 66 (at time of operati",
        "date": "N/A — Horace Mann structural coverage (s",
        "website": "http://www.upacademyboston.org"
      },
      {
        "id": "C2707017",
        "name": "HIAWATHA COLLEGE PREP - KINGFIELD CAMPUS",
        "city": "Minneapolis",
        "state": "MN",
        "union": "Hiawatha Area Workers United (HAWU)",
        "date": "June 2021 (network-wide — NLRB 18-RC-276",
        "website": "http://www.hiawathaacademies.org/"
      },
      {
        "id": "C3411004",
        "name": "Academy for Urban Leadership Charter School",
        "city": "Perth Amboy",
        "state": "NJ",
        "union": "Academy Urban Leadership Education Association",
        "date": "2016 (exact date pending OPRA)",
        "website": "http://www.aulcs.org"
      },
      {
        "id": "C4497001",
        "name": "Academy for Career Exploration (ACE)",
        "city": "Providence",
        "state": "RI",
        "union": "Providence Teachers Union (AFT Local 958)",
        "date": "Pre-2009",
        "website": ""
      }
    ]
  },
  "stateReports": {
  "AZ": {
    "fileName": "AZ_State_Research_Report.pdf",
    "boxUrl": null,
    "netlifyUrl": "reports/AZ_State_Research_Report.pdf"
  },
  "CA": {
    "fileName": "CA_State_Research_Report.pdf",
    "boxUrl": null,
    "netlifyUrl": "reports/CA_State_Research_Report.pdf"
  },
  "CT": {
    "fileName": "CT_State_Research_Report.pdf",
    "boxUrl": null,
    "netlifyUrl": "reports/CT_State_Research_Report.pdf"
  },
  "DC": {
    "fileName": "DC_State_Research_Report.pdf",
    "boxUrl": null,
    "netlifyUrl": "reports/DC_State_Research_Report.pdf"
  },
  "DE": {
    "fileName": "DE_State_Research_Report.pdf",
    "boxUrl": null,
    "netlifyUrl": "reports/DE_State_Research_Report.pdf"
  },
  "FL": {
    "fileName": "FL_State_Research_Report.pdf",
    "boxUrl": null,
    "netlifyUrl": "reports/FL_State_Research_Report.pdf"
  },
  "HI": {
    "fileName": "HI_State_Research_Report.pdf",
    "boxUrl": null,
    "netlifyUrl": "reports/HI_State_Research_Report.pdf"
  },
  "IL": {
    "fileName": "IL_State_Research_Report.pdf",
    "boxUrl": null,
    "netlifyUrl": "reports/IL_State_Research_Report.pdf"
  },
  "LA": {
    "fileName": "LA_State_Research_Report.pdf",
    "boxUrl": null,
    "netlifyUrl": "reports/LA_State_Research_Report.pdf"
  },
  "MA": {
    "fileName": "MA_State_Research_Report.pdf",
    "boxUrl": null,
    "netlifyUrl": "reports/MA_State_Research_Report.pdf"
  },
  "ME": {
    "fileName": "ME_State_Research_Report.pdf",
    "boxUrl": null,
    "netlifyUrl": "reports/ME_State_Research_Report.pdf"
  },
  "MI": {
    "fileName": "MI_State_Research_Report.pdf",
    "boxUrl": null,
    "netlifyUrl": "reports/MI_State_Research_Report.pdf"
  },
  "MN": {
    "fileName": "MN_State_Research_Report.pdf",
    "boxUrl": null,
    "netlifyUrl": "reports/MN_State_Research_Report.pdf"
  },
  "NJ": {
    "fileName": "NJ_State_Research_Report.pdf",
    "boxUrl": null,
    "netlifyUrl": "reports/NJ_State_Research_Report.pdf"
  },
  "NM": {
    "fileName": "NM_State_Research_Report.pdf",
    "boxUrl": null,
    "netlifyUrl": "reports/NM_State_Research_Report.pdf"
  },
  "NY": {
    "fileName": "NY_State_Research_Report.pdf",
    "boxUrl": null,
    "netlifyUrl": "reports/NY_State_Research_Report.pdf"
  },
  "OH": {
    "fileName": "OH_State_Research_Report.pdf",
    "boxUrl": null,
    "netlifyUrl": "reports/OH_State_Research_Report.pdf"
  },
  "OR": {
    "fileName": "OR_State_Research_Report.pdf",
    "boxUrl": null,
    "netlifyUrl": "reports/OR_State_Research_Report.pdf"
  },
  "PA": {
    "fileName": "PA_State_Research_Report.pdf",
    "boxUrl": null,
    "netlifyUrl": "reports/PA_State_Research_Report.pdf"
  },
  "RI": {
    "fileName": "RI_State_Research_Report.pdf",
    "boxUrl": null,
    "netlifyUrl": "reports/RI_State_Research_Report.pdf"
  },
  "WI": {
    "fileName": "WI_State_Research_Report.pdf",
    "boxUrl": null,
    "netlifyUrl": "reports/WI_State_Research_Report.pdf"
  }
}
};
