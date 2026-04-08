export interface Mission {
  id: string;
  name: string;
  year: number;
  agency: string;
  type: string;
  status: "success" | "failure" | "partial";
  crew: number;
  duration: string;
  objective: string;
  outcome: string;
  image: string;
}

export const missions: Mission[] = [
  {
    id: "sputnik-1",
    name: "Sputnik 1",
    year: 1957,
    agency: "Soviet Space Program",
    type: "Satellite",
    status: "success",
    crew: 0,
    duration: "21 days",
    objective: "First artificial satellite",
    outcome: "Successfully orbited Earth, transmitted radio signals for 21 days",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
  },
  {
    id: "apollo-11",
    name: "Apollo 11",
    year: 1969,
    agency: "NASA",
    type: "Lunar Landing",
    status: "success",
    crew: 3,
    duration: "8 days",
    objective: "First human Moon landing",
    outcome: "Armstrong and Aldrin walked on the Moon, collected 21.5 kg of lunar material",
    image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800&q=80",
  },
  {
    id: "voyager-1",
    name: "Voyager 1",
    year: 1977,
    agency: "NASA",
    type: "Deep Space",
    status: "success",
    crew: 0,
    duration: "47+ years",
    objective: "Explore outer planets and interstellar space",
    outcome: "Flew by Jupiter and Saturn, now in interstellar space - farthest human-made object",
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&q=80",
  },
  {
    id: "hubble",
    name: "Hubble Space Telescope",
    year: 1990,
    agency: "NASA/ESA",
    type: "Observatory",
    status: "success",
    crew: 0,
    duration: "34+ years",
    objective: "Deep space observation and imaging",
    outcome: "Revolutionized astronomy, captured 1.5M+ observations, 200+ discoveries",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
  },
  {
    id: "iss",
    name: "International Space Station",
    year: 1998,
    agency: "NASA/Roscosmos/ESA/JAXA/CSA",
    type: "Space Station",
    status: "success",
    crew: 7,
    duration: "26+ years",
    objective: "Permanent human presence in space, microgravity research",
    outcome: "Continuously crewed since 2000, 3000+ experiments conducted",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    id: "jwst",
    name: "James Webb Space Telescope",
    year: 2021,
    agency: "NASA/ESA/CSA",
    type: "Observatory",
    status: "success",
    crew: 0,
    duration: "5+ years",
    objective: "Infrared astronomy, early universe observation",
    outcome: "Most powerful space telescope, capturing unprecedented deep field images",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80",
  },
  {
    id: "artemis-1",
    name: "Artemis 1",
    year: 2022,
    agency: "NASA",
    type: "Lunar Flyby",
    status: "success",
    crew: 0,
    duration: "25.5 days",
    objective: "Test SLS rocket and Orion capsule for crewed Moon missions",
    outcome: "Successfully completed lunar flyby, tested heat shield and systems",
    image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&q=80",
  },
  {
    id: "perseverance",
    name: "Mars Perseverance Rover",
    year: 2021,
    agency: "NASA",
    type: "Mars Rover",
    status: "success",
    crew: 0,
    duration: "5+ years",
    objective: "Search for signs of ancient life, collect samples",
    outcome: "Discovered organic molecules, producing oxygen from CO2, collected rock samples",
    image: "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=800&q=80",
  },
];

export const launchStats = [
  { year: "2015", launches: 20, successful: 18 },
  { year: "2016", launches: 22, successful: 20 },
  { year: "2017", launches: 18, successful: 17 },
  { year: "2018", launches: 21, successful: 19 },
  { year: "2019", launches: 25, successful: 23 },
  { year: "2020", launches: 39, successful: 37 },
  { year: "2021", launches: 46, successful: 44 },
  { year: "2022", launches: 64, successful: 61 },
  { year: "2023", launches: 87, successful: 83 },
  { year: "2024", launches: 112, successful: 108 },
  { year: "2025", launches: 134, successful: 130 },
];

export const budgetData = [
  { year: "2015", budget: 18.0 },
  { year: "2016", budget: 19.3 },
  { year: "2017", budget: 19.9 },
  { year: "2018", budget: 20.7 },
  { year: "2019", budget: 21.5 },
  { year: "2020", budget: 22.6 },
  { year: "2021", budget: 23.3 },
  { year: "2022", budget: 24.0 },
  { year: "2023", budget: 25.4 },
  { year: "2024", budget: 24.9 },
  { year: "2025", budget: 25.1 },
];

export const missionTypes = [
  { type: "Satellite", count: 1245 },
  { type: "Crewed", count: 156 },
  { type: "Lunar", count: 42 },
  { type: "Mars", count: 18 },
  { type: "Deep Space", count: 24 },
  { type: "Space Station", count: 8 },
  { type: "Observatory", count: 35 },
];
