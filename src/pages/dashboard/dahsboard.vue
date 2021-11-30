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
                      ref="graph_suhu"
                      height="200"
                      type="area"
                      :options="optionsSuhu"
                      :series="seriesSuhu"
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
                      ref="graph_saturasi"
                      height="200"
                      type="area"
                      :options="optionsSaturasi"
                      :series="seriesSaturasi"
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
                    ref="graph_pengunjung"
                    height="250"
                    type="bar"
                    :options="optionsPengunjung"
                    :series="seriesPengunjung"
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
          <px-card title="Volume">
            <div class="bar-chart-widget">
              <div class="top-content bg-primary"></div>
              <div class="bottom-content card-body">
                <div class="row">
                  <div class="col-12">
                    <div id="chart-widget5">
                      <apexchart
                        ref="graph_volume"
                        height="360"
                        type="radialBar"
                        :options="optionsPengunjung"
                        :series="seriesPengunjung"
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
import {
  chartSuhu,
  chartPengunjung,
  chartSaturasi,
  chartVolume,
} from "@/plugins/optionsLineChart";
var primary = localStorage.getItem("primary_color") || "#7366ff";
var secondary = localStorage.getItem("secondary_color") || "#f73164";

export default {
  name: "ChartWidgets",
  components: {
    // countTo,
  },
  data() {
    return {
      suhu_tertinggi: 0,
      suhu_terendah: 0,
      suhu_rata: 0,
      saturasi_tertinggi: 0,
      saturasi_terendah: 0,
      saturasi_rata: 0,
      pengunjung_perhari: 0,
      pengunjung_perminggu: 0,
      pengunjung_perbulan: 0,
      optionsSuhu: chartSuhu,
      seriesSuhu: [
        {
          name: "Suhu",
          data: [],
        },
      ],
      optionsSaturasi: chartSaturasi,
      seriesSaturasi: [
        {
          name: "Saturasi",
          data: [],
        },
      ],
      optionsPengunjung: chartPengunjung,
      seriesPengunjung: [
        {
          name: "Pengunjung",
          data: [],
        },
      ],
      optionsVolume: chartVolume,
      seriesVolume: [
        {
          name: "Volume",
          data: [],
        },
      ],
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
        if (status === 200 || status === 201) {
          this.$refs.graph_suhu.updateOptions(this.getOptions(data.x));
          this.$refs.graph_suhu.updateSeries(this.getSeries("Suhu", data.y));
          setInterval(() => {
            this.getChartSuhu();
          }, 3000);
        }
      });
    },
    getChartSaturasi() {
      API.get("/api/grafiksaturasi").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          this.$refs.graph_saturasi.updateOptions(this.getOptions(data.x));
          this.$refs.graph_saturasi.updateSeries(
            this.getSeries("Saturasi", data.y)
          );

          setInterval(() => {
            this.getChartSaturasi();
          }, 3000);
        }
      });
    },
    getChartPengunjung() {
      API.get("/api/grafikpengunjung").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          this.$refs.graph_pengunjung.updateOptions(this.getOptions(data.x));
          this.$refs.graph_pengunjung.updateSeries(
            this.getSeries("Pengunjung", data.y)
          );
          setInterval(() => {
            this.getChartPengunjung();
          }, 3000);
        }
      });
    },
    getChartVolume() {
      API.get("/api/grafikvolume").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          this.$refs.graph_volume.updateSeries(
            this.getSeries("Volume", data.y)
          );
          setInterval(() => {
            this.getChartVolume();
          }, 3000);
        }
      });
    },

    getSuhuTertinggi() {
      API.get("/api/maxsuhu").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          this.suhu_tertinggi = data.data;
          setInterval(() => {
            this.getSuhuTertinggi();
          }, 3000);
        }
      });
    },
    getSuhuTerendah() {
      API.get("/api/minsuhu").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          this.suhu_terendah = data.data;
          setInterval(() => {
            this.getSuhuTerendah();
          }, 3000);
        }
      });
    },
    getSuhuRata() {
      API.get("/api/meansuhu").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          this.suhu_rata = data.data;
          setInterval(() => {
            this.getSuhuRata();
          }, 3000);
        }
      });
    },
    getSaturasiTertinggi() {
      API.get("/api/maxsaturasi").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          this.saturasi_tertinggi = data.data;
          setInterval(() => {
            this.getSaturasiTertinggi();
          }, 3000);
        }
      });
    },
    getSaturasiTerendah() {
      API.get("/api/minsaturasi").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          this.saturasi_terendah = data.data;
          setInterval(() => {
            this.getSaturasiTerendah();
          }, 3000);
        }
      });
    },
    getSaturasiRata() {
      API.get("/api/meansaturasi").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          this.saturasi_rata = data.data;
          setInterval(() => {
            this.getSaturasiRata();
          }, 3000);
        }
      });
    },

    getPengunjungPerhari() {
      API.get("/api/jmlhpengunjunghariini").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          this.pengunjung_perhari = data.data;
          setInterval(() => {
            this.getPengunjungPerhari();
          }, 3000);
        }
      });
    },
    getPengunjungPerminggu() {
      API.get("/api/jmlhpengunjungmingguini").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          this.pengunjung_perminggu = data.data;
          setInterval(() => {
            this.getPengunjungPerminggu();
          }, 3000);
        }
      });
    },
    getPengunjungPerbulan() {
      API.get("/api/jmlhpengunjungbulanini").then(({ status, data }) => {
        if (status == 200 || status == 201) {
          this.pengunjung_perbulan = data.data;
          setInterval(() => {
            this.getPengunjungPerbulan();
          }, 3000);
        }
      });
    },
    getOptions(categories) {
      return {
        xaxis: {
          show: true,
          categories: categories,
        },
      };
    },
    getSeries(name, series) {
      return [
        {
          name: name,
          data: series,
        },
      ];
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
