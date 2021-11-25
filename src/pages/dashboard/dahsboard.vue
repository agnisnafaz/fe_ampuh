<template>
  <div class="container">
    <v-row>
      <v-col sm="12" md="12" lg="12" xl="12" class="mt-16 mt-sm-16">
        <h1 class="text-center teks">Data Statistik</h1>
      </v-col>

      <div class="row">
        <div class="col-md-6">
          <px-card>
            <div slot="headerCustom">
              <div class="row">
                <div class="col-9">
                  <h5>Suhu</h5>
                </div>
              </div>
            </div>

            <div slot="with-padding">
              <div class="row">
                <div class="col-12">
                  <div id="chart-widget7">
                    <apexchart
                      height="200"
                      type="area"
                      :options="chart1.options"
                      :series="chart1.series"
                    ></apexchart>
                  </div>
                </div>
                <div class="container">
                  <div class="row">
                    <div class="text-center col-4 b-r-light">
                      <div>
                        <span class="num font-primary">Tertinggi </span>
                        <div>
                          <span class="text-muted mt-2 mb-2 block-bottom"
                            >{{ suhu_tertinggi }}<sup>o</sup>C</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="text-center col-4 b-r-light">
                      <div>
                        <span class="num font-primary">Rata-rata </span>
                        <div>
                          <span class="text-muted mt-2 mb-2 block-bottom"
                            >{{ suhu_rata }}<sup>o</sup>C</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="text-center col-4 b-r-light">
                      <div>
                        <span class="num font-primary">Terendah </span>
                        <div>
                          <span class="text-muted mt-2 mb-2 block-bottom"
                            >{{ suhu_terendah }}<sup>o</sup>C</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </px-card>
        </div>
        <div class="col-xl-6 col-md-6 box-col-12">
          <px-card title="Saturasi">
            <div slot="with-padding">
              <div class="row">
                <div class="col-12">
                  <div id="chart-widget7">
                    <apexchart
                      height="200"
                      type="area"
                      :options="chart2.options"
                      :series="chart2.series"
                    ></apexchart>
                  </div>
                </div>
                <div class="container">
                  <div class="row">
                    <div class="text-center col-4 b-r-light">
                      <div>
                        <span class="num font-primary">Tertinggi </span>
                        <div>
                          <span class="text-muted mt-2 mb-2 block-bottom"
                            >{{ saturasi_tertinggi }}&#37;</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="text-center col-4 b-r-light">
                      <div>
                        <span class="num font-primary">Rata-rata </span>
                        <div>
                          <span class="text-muted mt-2 mb-2 block-bottom"
                            >{{ saturasi_rata }}&#37;</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="text-center col-4 b-r-light">
                      <div>
                        <span class="num font-primary">Terendah </span>
                        <div>
                          <span class="text-muted mt-2 mb-2 block-bottom"
                            >{{ saturasi_terendah }}&#37;</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </px-card>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-6 col-md-6 box-col-12">
          <px-card>
            <div slot="headerCustom">
              <div class="row">
                <div class="col-9">
                  <h5>Pengunjung</h5>
                </div>
              </div>
            </div>
            <div slot="with-padding">
              <div class="chart-container">
                <div id="columnchart">
                  <apexchart
                    height="250"
                    type="bar"
                    :options="chart3.options"
                    :series="chart3.series"
                  ></apexchart>
                </div>
              </div>
              <div class="container">
                <div class="row">
                  <div class="text-center col-4 b-r-light">
                    <div>
                      <span class="num font-primary">Perhari </span>
                      <div>
                        <span class="text-muted mt-2 mb-2 block-bottom">{{
                          pengunjung_perhari
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="text-center col-4 b-r-light">
                    <div>
                      <span class="num font-primary">Perminggu</span>
                      <div>
                        <span class="text-muted mt-2 mb-2 block-bottom">{{
                          pengunjung_perminggu
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="text-center col-4 b-r-light">
                    <div>
                      <span class="num font-primary">Perbulan</span>
                      <div>
                        <span class="text-muted mt-2 mb-2 block-bottom">{{
                          pengunjung_perbulan
                        }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </px-card>
        </div>

        <div class="col-xl-6 col-md-6 box-col-12">
          <px-card title="Volume Handsanitizer">
            <div class="bar-chart-widget">
              <div class="top-content bg-primary"></div>
              <div class="bottom-content card-body">
                <div class="row">
                  <div class="col-12">
                    <div id="chart-widget5">
                      <apexchart
                        height="350"
                        type="radialBar"
                        :options="chart4.options"
                        :series="chart4.series"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </px-card>
        </div>
      </div>
    </v-row>
  </div>
</template>
<script>
import API from "@/services/api.service";
var primary = localStorage.getItem("primary_color") || "#7366ff";
var secondary = localStorage.getItem("secondary_color") || "#f73164";
// import countTo from "vue-count-to";
// function generateData1(count, yrange) {
//   var i = 0;
//   var series = [];
//   while (i < count) {
//     var x = "w" + (i + 1).toString();
//     var y =
//       Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

//     series.push({
//       x: x,
//       y: y,
//     });
//     i++;
//   }
//   return series;
// }
function generateData(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([x, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}

export default {
  name: "ChartWidgets",
  components: {
    // countTo,
  },
  data() {
    return {
      chart1: {
        options: {
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
        },
        series: [
          {
            name: "Suhu",
            data: [],
          },
        ],
      },
      chart2: {
        options: {
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
        },
        series: [
          {
            name: "Saturasi",
            data: [],
          },
        ],
      },
      chart3: {
        options: {
          chart: {
            width: 585,
            height: 350,
            type: "bar",
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
          },
          legend: {
            show: false,
          },
          colors: [primary],
          dataLabels: {
            enabled: false,
          },
          plotOptions: {
            bar: {
              radius: 10,
              horizontal: false,
              columnWidth: "55%",
            },
          },
          stroke: {
            show: true,
            colors: ["transparent"],
            curve: "smooth",
            lineCap: "butt",
          },
          title: {
            text: "Load Average",
            align: "left",
            style: {
              fontSize: "12px",
            },
          },
          subtitle: {
            text: "20%",
            floating: true,
            align: "right",
            offsetY: 0,
            style: {
              fontSize: "22px",
            },
          },
          xaxis: {
            categories: [],
          },
          fill: {
            colors: [secondary],
          },
          tooltip: {
            y: {
              formatter: function(val) {
                return "$ " + val + " thousands";
              },
            },
          },
        },
        series: [
          {
            data: [],
          },
        ],
      },
      chart4: {
        options: {
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
                  formatter: function(val) {
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
        },
        series: [70],
        labels: ["Volatility"],
      },
    };
  },
  created() {
    this.getChartSuhu();
    this.getChartSaturasi();
    this.getChartPengunjung();
    this.getChartVolume();
    this.getSuhuTertinggi();
    this.getSuhuRata();
    this.getSuhuTerendah();
    this.getSaturasiTertinggi();
    this.getSaturasiRata();
    this.getSaturasiTerendah();
    this.getPengunjungPerhari();
    this.getPengunjungPerminggu();
    this.getPengunjungPerbulan();
  },
  methods: {
    getChartSuhu() {
      API.get("/api/grafiksuhu").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          this.chart1.series.data = data.y;
          this.chart1.options.xaxis.categories = data.x;
          setInterval(() => {
            this.getChartSuhu;
          }, 3000);
        }
      });
    },
    getSuhuTertinggi() {
      API.get("/api/maxsuhu").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          this.suhu_tertinggi = data.data;
          setInterval(() => {
            this.getSuhuTertinggi;
          }, 3000);
        }
      });
    },
    getSuhuTerendah() {
      API.get("/api/minsuhu").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          this.suhu_terendah = data.data;
          setInterval(() => {
            this.getSuhuTerendah;
          }, 3000);
        }
      });
    },
    getSuhuRata() {
      API.get("/api/meansuhu").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          this.suhu_rata = data.data;
          setInterval(() => {
            this.getSuhuRata;
          }, 3000);
        }
      });
    },
    getChartSaturasi() {
      API.get("/api/grafiksaturasi").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          this.chart1.series.data = data.y;
          this.chart1.options.xaxis.categories = data.x;
          setInterval(() => {
            this.getChartSaturasi;
          }, 3000);
        }
      });
    },
    getSaturasiTertinggi() {
      API.get("/api/maxsaturasi").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          this.saturasi_tertinggi = data.data;
          setInterval(() => {
            this.getSaturasiTertinggi;
          }, 3000);
        }
      });
    },
    getSaturasiTerendah() {
      API.get("/api/minsaturasi").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          this.saturasi_terendah = data.data;
          setInterval(() => {
            this.getSaturasiTerendah;
          }, 3000);
        }
      });
    },
    getSaturasiRata() {
      API.get("/api/meansaturasi").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          this.saturasi_rata = data.data;
          setInterval(() => {
            this.getSaturasiRata;
          }, 3000);
        }
      });
    },
    getChartPengunjung() {
      API.get("/api/maxsuhu").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          this.chart1.series.data = data.y;
          this.chart1.options.xaxis.categories = data.x;
          setInterval(() => {
            this.getChartPengunjung;
          }, 3000);
        }
      });
    },
  },
};
</script>
<style>
.teks {
  font-family: Georgia, "Times New Roman", Times, serif;
  color: black;
  padding-top: 20;
  size: 15px;
}
</style>
