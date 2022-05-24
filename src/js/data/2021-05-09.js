dataSetVersion = "2021-05-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Units",
    key: "series",
    tooltip: "Check this to restrict to certain Units.",
    checked: false,
    sub: [
      { name: "Photon Maiden", key: "PM" },
      { name: "Peaky P-key.", key: "PP" },
      { name: "Happy Around", key: "HA" },
      { name: "Lyrical Lilly", key: "LL" },
      { name: "Rondo", key: "R" },
      { name: "Merm4id", key: "M" },
    ]
  },
  
];
dataSet[dataSetVersion].characterData = [
  {
    name: "Yuuka Nishio",
    img: "c5DqpgX.png",
    opts: {
      series: [ "HA" ],
    }
  },
  {
    name: "Karin Kagami",
    img: "tJnkSzK.png",
    opts: {
     series: ["HA"]
    }
  },
  {
    name: "Kanon Shizaki",
    img: "0YT7QlS.png",
    opts: {
      series: ["HA"]
    }
  },
  {
    name: "Haruka Mimura",
    img: "NWlZud3.png",
    opts: {
      series: ["HA"]
  
    },
  },
  {
    name: "Aimi",
    img: "qdveFSy.png",
    opts: {
      series: [ "PP" ],
    }
  },
  {
    name: "Moeka Koizumi",
    img: "ptGp0x4.png",
    opts: {
      series: [ "PP" ],
    }
  },
  {
    name: "Miyu Takagi",
    img: "vBKdDm4.png",
    opts: {
      series: [ "PP" ],
    }
  },
  {
    name: "Reo Kurachi",
    img: "A7ZnuHo.png",
    opts: {
      series: [ "PP" ],
    }
  },
  {
    name: "Hinata Satou",
    img: "sgZPf11.png",
    opts: {
      series: [ "PM" ],
    }
  },
  {
    name: "Ami Maeshima",
    img: "8UX7hKE.png",
    opts: {
      series: [ "PM" ],
    }
  },
  {
    name: "Haruki Iwata",
    img: "OhaDcnc.png",
    opts: {
      series: [ "PM" ],
    }
  },
  {
    name: "Risa Tsumugi",
    img: "MgzqjFK.png",
    opts: {
      series: [ "PM" ],
    }
  },
  {
    name: "Natsumi Hirajima",
    img: "ohmetZh.png",
    opts: {
     series: ["M"],
    }
  },
  {
    name: "Mei Okada",
    img: "aDIf0pN.png",
    opts: {
      series: ["M"],
    }
  },
  {
    name: "Himari Hazuki",
    img: "2Pr8b2N.png",
    opts: {
      series: ["M"],
    }
  },
  {
    name: "Ai Negishi",
    img: "htOMdDQ.png",
    opts: {
      series: ["M"],
    }
  },
  {
    name: "Rihona Katou",
    img: "PrRPujP.png",
    opts: {
      series: ["R"],
    }
  },
  {
    name: "Sae Otsuka",
    img: "ze79bFC.png",
    opts: {
      series: ["R"],
    }
  },
  {
    name: "Haruna Momono",
    img: "WMjyRLJ.png",
    opts: {
      series: ["R"],
    }
  },
  {
    name: "Tsunko",
    img: "VT9mTGb.png",
    opts: {
      series: ["R"],
    }
  },
  {
    name: "Hazuki Tanda",
    img: "rshnJPV.png",
    opts: {
      series: ["LL"],
    }
  },
  {
    name: "Amane Shindou",
    img: "qsceD4I.png",
    opts: {
      series: ["LL"],
    }
  },
  {
    name: "Ruka Fukagawa",
    img: "pLdMjQ3.png",
    opts: {
      series: ["LL"],
    }
  },
  {
    name: "Yuzuki Watase",
    img: "8DLUAPf.png",
    opts: {
      series: ["LL"],
    }
  },
];
