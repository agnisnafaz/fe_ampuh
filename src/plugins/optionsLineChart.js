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
    width: 585,
    height: 360,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: "70%",
        background: "#fff",
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: "front",
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.05,
        },
      },
      track: {
        background: "#fff",
        strokeWidth: "67%",
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.15,
        },
      },
      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: "#111",
          fontSize: "17px",
        },
        value: {
          formatter: function (val) {
            return parseInt(val);
          },
          color: "#111",
          fontSize: "36px",
          show: true,
        },
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: [primary],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  stroke: {
    lineCap: "round",
  },
};
