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
    name: "Yuuka Nishio(Rinku)",
    img: "c5DqpgX.png",

    opts: {
      series: [ "HA" ],
    }
  },
  {
    name: "Karin Kagami(Maho)",
    img: "tJnkSzK.png",
    opts: {
     series: ["HA"]
    }
  },
  {
    name: "Kanon Shizaki(rei)",
    img: "0YT7QlS.png",
    opts: {
      series: ["HA"]
    }
  },
  {
    name: "Haruka Mimura(muni)",
    img: "NWlZud3.png",
    opts: {
      series: ["HA"]
  
    },
  },
  {
    name: "Aimi(kyouko)",
    img: "qdveFSy.png",
    opts: {
      series: [ "PP" ],
    }
  },
  {
    name: "Moeka Koizumi(jennifer)",
    img: "ptGp0x4.png",
    opts: {
      series: [ "PP" ],
    }
  },
  {
    name: "Miyu Takagi(shinobu)",
    img: "vBKdDm4.png",
    opts: {
      series: [ "PP" ],
    }
  },
  {
    name: "Reo Kurachi(esora)",
    img: "A7ZnuHo.png",
    opts: {
      series: [ "PP" ],
    }
  },
  {
    name: "Hinata Satou(noa)",
    img: "sgZPf11.png",
    opts: {
      series: [ "PM" ],
    }
  },
  {
    name: "Ami Maeshima(ibuki)",
    img: "8UX7hKE.png",
    opts: {
      series: [ "PM" ],
    }
  },
  {
    name: "Haruki Iwata(towa)",
    img: "OhaDcnc.png",
    opts: {
      series: [ "PM" ],
    }
  },
  {
    name: "Risa Tsumugi(saki)",
    img: "MgzqjFK.png",
    opts: {
      series: [ "PM" ],
    }
  },
  {
    name: "Natsumi Hirajima(rika)",
    img: "ohmetZh.png",
    opts: {
     series: ["M"],
    }
  },
  {
    name: "Mei Okada(marika)",
    img: "aDIf0pN.png",
    opts: {
      series: ["M"],
    }
  },
  {
    name: "Himari Hazuki(saori)",
    img: "2Pr8b2N.png",
    opts: {
      series: ["M"],
    }
  },
  {
    name: "Ai Negishi(dalia)",
    img: "htOMdDQ.png",
    opts: {
      series: ["M"],
    }
  },
  {
    name: "Rihona Katou(tsubaki)",
    img: "PrRPujP.png",
    opts: {
      series: ["R"],
    }
  },
  {
    name: "Sae Otsuka(nagisa)",
    img: "ze79bFC.png",
    opts: {
      series: ["R"],
    }
  },
  {
    name: "Haruna Momono(hiiro)",
    img: "WMjyRLJ.png",
    opts: {
      series: ["R"],
    }
  },
  {
    name: "Tsunko(aoi)",
    img: "VT9mTGb.png",
    opts: {
      series: ["R"],
    }
  },
  {
    name: "Hazuki Tanda(miyuu)",
    img: "rshnJPV.png",
    opts: {
      series: ["LL"],
    }
  },
  {
    name: "Amane Shindou(haruna)",
    img: "qsceD4I.png",
    opts: {
      series: ["LL"],
    }
  },
  {
    name: "Ruka Fukagawa(kurumi)",
    img: "pLdMjQ3.png",
    opts: {
      series: ["LL"],
    }
  },
  {
    name: "Yuzuki Watase(miiko)",
    img: "8DLUAPf.png",
    opts: {
      series: ["LL"],
    }
  },
];
