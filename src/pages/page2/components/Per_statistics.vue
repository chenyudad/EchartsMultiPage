<template>
  <div class="Per_statistics">
    <div class="Per_Status_statistics">
      <div class="Per_Status_stati_sub">
        <div
          class="Per_Status_stati Per_Status_stati_sub_img stati_sub_one"
        ></div>
        <div class="Per_Status_stati">
          <div class="Per_Status_stati_sub_top">0~6岁</div>
          <div class="Per_Status_stati_sub_buttom">
            {{ statisticsData[0] }}
          </div>
        </div>
      </div>
      <div class="Per_Status_stati_sub">
        <div
          class="Per_Status_stati Per_Status_stati_sub_img stati_sub_two"
        ></div>
        <div class="Per_Status_stati">
          <div class="Per_Status_stati_sub_top">7~12岁</div>
          <div class="Per_Status_stati_sub_buttom">
            {{ statisticsData[1] }}
          </div>
        </div>
      </div>
      <div class="Per_Status_stati_sub">
        <div
          class="Per_Status_stati Per_Status_stati_sub_img stati_sub_three"
        ></div>
        <div class="Per_Status_stati">
          <div class="Per_Status_stati_sub_top">13~15岁</div>
          <div class="Per_Status_stati_sub_buttom">
            {{ statisticsData[2] }}
          </div>
        </div>
      </div>
    </div>
    <div class="clear"></div>
    <div class="Per_Status_statistics">
      <div class="Per_Status_stati_sub">
        <div
          class="Per_Status_stati Per_Status_stati_sub_img stati_sub_four"
        ></div>
        <div class="Per_Status_stati">
          <div class="Per_Status_stati_sub_top">16~18岁</div>
          <div class="Per_Status_stati_sub_buttom">
            {{ statisticsData[3] }}
          </div>
        </div>
      </div>
      <div class="Per_Status_stati_sub">
        <div
          class="Per_Status_stati Per_Status_stati_sub_img stati_sub_five"
        ></div>
        <div class="Per_Status_stati">
          <div class="Per_Status_stati_sub_top">19~35岁</div>
          <div class="Per_Status_stati_sub_buttom">
            {{ statisticsData[4] }}
          </div>
        </div>
      </div>
      <div class="Per_Status_stati_sub">
        <div
          class="Per_Status_stati Per_Status_stati_sub_img stati_sub_six"
        ></div>
        <div class="Per_Status_stati">
          <div class="Per_Status_stati_sub_top">36~55岁</div>
          <div class="Per_Status_stati_sub_buttom">
            {{ statisticsData[5] }}
          </div>
        </div>
      </div>
      <div class="Per_Status_stati_sub">
        <div
          class="Per_Status_stati Per_Status_stati_sub_img stati_sub_seven"
        ></div>
        <div class="Per_Status_stati">
          <div class="Per_Status_stati_sub_top">56岁以上</div>
          <div class="Per_Status_stati_sub_buttom">
            {{ statisticsData[6] }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Perchoice",
  data() {
    return {
      choiceSelected: 3,
      statisticsData: ["21%", "21%", "21%", "21%", "21%", "21%", "21%"],
    };
  },
  methods: {
    updateYear(_year) {
      if (_year == 2021) {
        this.statisticsData = ["21%", "21%", "21%", "21%", "21%", "21%", "21%"];
      } else {
        this.statisticsData = [
          Math.round(Math.random() * 100, 2) + "%",
          Math.round(Math.random() * 100, 2) + "%",
          Math.round(Math.random() * 100, 2) + "%",
          Math.round(Math.random() * 100, 2) + "%",
          Math.round(Math.random() * 100, 2) + "%",
          Math.round(Math.random() * 100, 2) + "%",
          Math.round(Math.random() * 100, 2) + "%",
        ];
      }
    },
  },
};
</script>

<style  scoped>
</style>