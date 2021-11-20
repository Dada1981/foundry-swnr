export const ACTIONS = {
  endRound: {
    title: "End the Round",
    cp: 0,
    desc: "",
    dept: "",
  },
  aboveAndBeyond: {
    title: "Above and Beyond",
    cp: 0,
    desc: "",
    dept: "",
    note:
      "Roll attr/skill vs 9. Success manually give +CP = skill level. Fail -1 CP.",
  },
  dealCrisis: {
    title: "Deal With a Crisis",
    cp: 0,
    desc: "",
    dept: "",
    note:
      "Roll attr/skill vs 10 +/- 2. Success crisis resolved or aid PC resolving crisis.",
  },
  doYourDuty: {
    title: "Do Your Duty",
    cp: 1,
    desc: "",
    dept: "",
    note: "Name plausible way helping. Cannot do same act two rounds in a row.",
  },
  escape: {
    title: "Escape Combat",
    cp: -4,
    desc: "",
    dept: "bridge",
    skill: "Pilot",
    attr: ["int", "dex"],
    dc: "opposed",
  },
  evasive: {
    title: "Evasive Manuevers",
    cp: -2,
    desc:
      "Roll Int or Dex/Pilot against  difficulty 9 to add your Pilot skill to the ship’s AC  until its next turn.  Usable once per round at most.",
    dept: "bridge",
    skill: "Pilot",
    attr: ["int", "dex"],
    dc: 9,
    limit: "round",
  },
  pursue: {
    title: "Pursue Target",
    cp: -3,
    desc: "",
    dept: "bridge",
    skill: "Pilot",
    attr: ["int", "dex"],
    dc: "opposed",
  },
  intoFire: {
    title: "Into the Fire",
    cp: 0,
    desc:
      "Accept a Crew Lost Crisis and gain your Lead skill plus one in Command Points. You may do this at most once per round.",
    note: "Accept Crew Lost Crisis and add lead skill to CP manually",
    dept: "captain",
    limit: "round",
  },
  keepTogether: {
    title: "Keep it Together",
    cp: 0,
    desc: "",
    note: "Nullify hit as Instant. Roll Crisis",
    dept: "captain",
    limit: "round",
  },
  supportDept: {
    title: "Support Department",
    cp: 0,
    desc: "",
    note:
      "Choose Department. Actions for Dept take 2 fewer CP. Once per round.",
    dept: "captain",
    limit: "round",
  },
  crashSys: {
    title: "Crash Systems",
    cp: -2,
    desc: "",
    note: "On success, enemy starts next turn with -CP = Program Skill",
    dept: "comms",
    skill: "Program",
    attr: ["int"],
    dc: "opposed",
  },
  defeatECM: {
    title: "Defeat ECM",
    cp: -2,
    desc: "",
    note:
      "On success, attacks by your ship this round against targe +hit = 2x Program Skill",
    dept: "comms",
    skill: "Program",
    attr: ["int"],
    dc: "opposed",
  },
  sensorGhost: {
    title: "Sensor Ghost",
    cp: -2,
    desc: "",
    note: "On success, AC bonus = Program Skill until next turn.",
    dept: "comms",
    skill: "Program",
    limit: "round",
    attr: ["int"],
    dc: 9,
  },
  boostEngine: {
    title: "Boost Engines",
    cp: -2,
    desc: "",
    note: "On success, speed +2 until next turn",
    dept: "engineering",
    skill: "Fix",
    attr: ["int"],
    dc: 8,
  },
  damageControl: {
    title: "Damage Control",
    cp: -3,
    desc: "",
    note:
      "On success, repair (2/3/4/6) * Fix Skill (ship class based). +1 difficulty each time in fight",
    dept: "engineering",
    skill: "Fix",
    attr: ["int"],
    dc: 7,
  },
  emergencyRepair: {
    title: "Emergency Repairs",
    cp: -3,
    desc: "",
    note:
      "On success, manually repair disabled system or degraded engine +1. Destroyed systems not eligible.",
    dept: "engineering",
    skill: "Fix",
    attr: ["int"],
    dc: 8,
  },
  fireAll: {
    title: "Fire All Guns",
    cp: -3,
    desc: "",
    note: "Gunners fire all",
    dept: "gunnery",
  },
  fireOne: {
    title: "Fire One Weapon",
    cp: -2,
    desc: "",
    note: "A gunners fires one",
    dept: "gunnery",
  },
  targetSystem: {
    title: "Target Systems",
    cp: -1,
    desc: "",
    note:
      "Fire One can target fitting, weapon, or engine -4 hit. Half damage-armor > 0 to work.",
    dept: "gunnery",
  },
};
