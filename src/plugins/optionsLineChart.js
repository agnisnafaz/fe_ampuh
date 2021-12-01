var primary = localStorage.getItem("primary_color") || "#7366ff";
var secondary = localStorage.getItem("secondary_color") || "#f73164";

export const chartSuhu = {
  chart: {
    width: 510,
    height: 190,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: [primary],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  xaxis: {
    show: true,
    categories: [],
  },
  fill: {
    colors: [primary],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  grid: {
    yaxis: {
      show: false,
    },
    padding: {
      right: -75,
      bottom: 0,
    },
  },
};

export const chartSaturasi = {
  chart: {
    width: 510,
    height: 190,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: ["#51BB25"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  xaxis: {
    show: true,
    categories: [],
  },
  fill: {
    colors: ["#51BB25"],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  grid: {
    yaxis: {
      show: false,
    },
    padding: {
      right: -75,
      bottom: 0,
    },
  },
};

export const chartPengunjung = {
  chart: {
    width: 510,
    height: 190,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: ["	#FFD700"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  xaxis: {
    show: true,
    categories: [],
  },
  fill: {
    colors: ["#FFD700"],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  grid: {
    yaxis: {
      show: false,
    },
    padding: {
      right: -75,
      bottom: 0,
    },
  },
};
export const chartVolume = {
  chart: {
    height: 350,
    type: "radialBar",
  },

  labels: ["Volume"],
};
