<template>
  <div class="home">
    {{ countDown }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CountDown from "@/utils/countDown";
const countDown = new CountDown();
export default Vue.extend({
  name: "Home",
  data() {
    return {
      countDown: 1200,
    };
  },
  mounted() {
    this.listenCountdown();
    this.countDown = 200;
    countDown.start(this.countDown * 1000);
  },
  methods: {
    listenCountdown() {
      countDown.listen = ({
        time = 0,
        status,
      }: {
        time: number;
        status: string;
      }) => {
        if (status === "end") {
          //如果没有题目 就获取题目
        }
        console.log(time);
        this.countDown = Math.ceil(time / 1000) || 0;
      };
    },
  },
});
</script>
