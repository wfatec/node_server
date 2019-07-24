module.exports = {
  hitogram: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSAGE: "",
      DATA: {
        x: ["20190501", "20190502", "20190503", "20190504", "20190505"],
        y_l: [100, 200, 300, 400, 500], //转化次数
        y_r: ["29.7", "19.7", "42.7", "53.7", "16.7"], //转化率
        totalNum: 1500, // 总转化次数
        percent: "70%"  // 总转化率
      }
    });
  },
  tabular: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSAGE: "",
      DATA: {
        pageDetail: [
          {
            subModule: "因私出境",
            convertTime: 1500,
            convertRatio: "57.6%",
            linkRelativeRatio: "50.0%"
          },
          {
            subModule: "收入证明",
            convertTime: 1200,
            convertRatio: "55.0%",
            linkRelativeRatio: "45.0%"
          },
          {
            subModule: "信息变更",
            convertTime: 1000,
            convertRatio: "50.6%",
            linkRelativeRatio: "40.0%"
          }
        ],
        totalPage: 9
      }
    });
  }
};
