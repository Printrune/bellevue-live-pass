import {siteUrl} from './site-url';
export const image=(name:string)=>siteUrl(`assets/${name}.webp`);
const descriptions:Record<string,string>={
  'tulalip-relay':'Supplied reference photo of bareback relay racers rounding a dirt track in front of spectators',
  'tulalip-race':'Supplied reference photo of horse racers charging toward the finish under arena lights',
  'tulalip-race-women':'Supplied reference photo of two women racing horses side by side',
  skijoring:'Supplied reference photo of a horse and rider pulling a skier across a snowy racecourse',
  arena:'Supplied Bellevue Orca concept showing player introductions in a blue and gold arena',
  'indian-relay':'Fictional concept of bareback Indian Relay Racing athletes on an outdoor dirt track under blue and gold evening lights',
  'indigenous-sports':'Fictional concept of Indigenous women playing basketball in a modern blue and gold arena',
  moto:'Concept of a protected motocross rider jumping through a blue-and-gold indoor arena',
  waterpark:'Concept of an indoor water park with turquoise pools and twisting blue and gold slides',
  concert:'Concept of a live concert with blue laser beams and golden arena spotlights',
  family:'Concept of families exploring glowing kinetic sculptures and interactive light installations',
  'arts-gathering':'Illustrative community workshop with families making abstract paper sculptures and paintings',
  'community-game':'Concept of basketball players warming up, viewed from the courtside baseline',
  'weekend-game':'Concept of a basketball game viewed diagonally from an upper arena corner',
  resort:'Concept of a luxury resort suite with a fireplace and evergreen views at twilight',
  lunch:'Concept of a seasonal vegetable and grain lunch in a sunlit destination restaurant',
  rail:'Concept of a blue-and-white light rail train at an urban station at twilight',
  coach:'Concept of a navy-and-silver coach outside a warmly illuminated resort',
  parking:'Concept of a modern arena parking garage with a separate pedestrian walkway',
  ev:'Concept of a blue electric vehicle connected to a charger outside the entertainment district',
  food:'Concept of a salmon rice bowl and citrus drink ready for arena pickup',
  court:'Supplied concept of Bellevue Orca basketball on the arena court',
  hotel:'Supplied concept of the Cascade Hotel and destination hospitality',
  dining:'Supplied concept of a Bellevue Live dining and sports bar',
  vip:'Supplied concept of a premium arena hospitality lounge',
  retail:'Supplied concept of the Bellevue Live arena team store'
};
export const imageAlt=(name:string)=>descriptions[name]??'Proposed destination concept visual';
