module.exports = {
  visitor: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSAGE: "",
      DATA: {
        x: [2019 - 05 - 01, 2019 - 05 - 02, 2019 - 05 - 03, 2019 - 05 - 04],
        series: [
          {
            data: [2500, 2400, 2900, 2300]
          },
          {
            data: [200, 300, 250, 180]
          }
        ]
      }
    });
  },
  visitorDetail: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSAGE: "",
      DATA: {
        pageDetail: [
          {
            date: "2019/05/10",
            visitor: 1500,
            activeUser: "100"
          },
          {
            date: "2019/05/11",
            visitor: 1400,
            activeUser: "120"
          },
          {
            date: "2019/05/12",
            visitor: 1500,
            activeUser: "140"
          },
          {
            date: "2019/05/13",
            visitor: 1600,
            activeUser: "130"
          }
        ],
        totalPage: 9
      }
    });
  }
};
