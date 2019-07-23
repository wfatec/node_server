module.exports = {
  base: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSAGE: "",
      DATA: {
        today: {
          pv: 1234,
          uv: 345,
          avgTime: "00:20:10",
          avgPage: 3.54,
          online: 123
        },
        yesterday: {
          pv: 1204,
          uv: 3245,
          avgTime: "00:24:10",
          avgPage: 3.4,
          online: 234
        }
      }
    });
  },
  efficiencyPromotion: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSAGE: "",
      DATA: {
        userApply: {
          total: 1234,
          thisMonth: 345,
          lastMonth: 567,
          promotionPercen: "13%"
        },
        endProcess: {
          total: 1124,
          thisMonth: 453,
          lastMonth: 123,
          promotionPercen: "11%"
        }
      }
    });
  },
  roleDistribution: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSAGE: "",
      DATA: {
        roles: [
          {
            pv: 1234,
            roleName: "普通员工"
          },
          {
            pv: 2345,
            roleName: "人力"
          },
          {
            pv: 3456,
            roleName: "团队管理者"
          },
          {
            pv: 4567,
            roleName: "经营管理者"
          }
        ]
      }
    });
  },
  ageDistribution: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSAGE: "",
      DATA: {
        details: [
          {
            age: "20以下",
            userNum: 234
          },
          {
            age: "20-30",
            userNum: 2341
          },
          {
            age: "30-45",
            userNum: 321
          },
          {
            age: "45以上",
            userNum: 432
          }
        ]
      }
    });
  },
  onlineUserTendency: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSAGE: "",
      DATA: {
        x: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24
        ],
        series: [
          {
            onlineUser: [2500, 2400, 2900, 2300]
          },
          {
            onlineUser: [200, 300, 250, 180]
          }
        ]
      }
    });
  },
  topTenSearch: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSAGE: "",
      DATA: {
        pageDetail: [
          {
            keyword: "工资",
            subModule: "收入证明",
            value: 1500
          },
          {
            keyword: "工资",
            subModule: "离职证明",
            value: 1500
          },
          {
            keyword: "工资",
            subModule: "搜索模块",
            value: 1500
          }
        ]
      }
    });
  },
  topTenTransferBusiness: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSAGE: "",
      DATA: {
        pageDetail: [
          {
            business: "业务1",
            percent: "12%",
            value: 1500
          },
          {
            business: "业务2",
            percent: "12%",
            value: 1500
          },
          {
            business: "业务3",
            percent: "12%",
            value: 1500
          },
          {
            business: "业务4",
            percent: "12%",
            value: 1500
          }
        ]
      }
    });
  },
  topTenPage: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSAGE: "",
      DATA: {
        pageDetail: [
          {
            page: "home",
            percent: "12%",
            value: 1500
          },
          {
            page: "salary",
            percent: "10%",
            value: 1300
          },
          {
            page: "dimission",
            percent: "7%",
            value: 1000
          }
        ]
      }
    });
  }
};
