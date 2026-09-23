<template>
  <div style="width: 100%; height: 600px">
    <v-chart :option="chartOption" @click="onMapClick" autoresize />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const emit = defineEmits(["province-click"]);

const chartOption = ref({});

onMounted(async () => {
  try {
    // 加载地图数据
    const res = await fetch("/map/China.json");
    const chinaJson = await res.json();
    echarts.registerMap("china", chinaJson);

    // 地图注册成功后才配置图表选项
    chartOption.value = {
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          type: "map",
          map: "china",
          roam: true,
          label: { show: true },
          itemStyle: { areaColor: "#eee", borderColor: "#999" },
          emphasis: { itemStyle: { areaColor: "#cfc" } },
          data: [],
        },
      ],
    };
  } catch (error) {
    console.error("地图加载失败:", error);
  }
});

function onMapClick(params) {
  if (params.componentType === "series" && params.seriesType === "map") {
    emit("province-click", params.name);
  }
}
</script>
