module.exports = {
  hits: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSAGE: "",
      DATA: {
        pageDetail: [
          {
            mainModule: "办事窗",
            subModule: "因私出境",
            " clickNum ": 1500
          },
          {
            mainModule: "办事窗",
            subModule: "信息变更",
            " clickNum ": 1000
          },
          {
            mainModule: "办事窗",
            subModule: "收入证明",
            " clickNum ": 800
          }
        ],
        totalPage: 5
      }
    });
  },
  uniqueVistor: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSAGE: "",
      DATA: {
        pageDetail: [
          {
            mainModule: "办事窗",
            subModule: "因私出境",
            " uniqueVistor ": 1500
          },
          {
            mainModule: "办事窗",
            subModule: "信息变更",
            " uniqueVistor ": 1000
          },
          {
            mainModule: "办事窗",
            subModule: "收入证明",
            " uniqueVistor": 800
          }
        ],
        totalPage: 5
      }
    });
  },
  pv: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSAGE: "",
      DATA: {
        pageDetail: [
          {
            mainModule: "办事窗",
            subModule: "因私出境",
            " pv": 1500
          },
          {
            mainModule: "办事窗",
            subModule: "信息变更",
            pv: 1000
          },
          {
            mainModule: "办事窗",
            subModule: "收入证明",
            pv: 800
          }
        ],
        totalPage: 5
      }
    });
  },
  topSearch: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSAGE: "",
      DATA: {
        pageDetail: [
          {
            mainModule: "办事窗",
            subModule: "因私出境",
            topSearch: 1500
          },
          {
            mainModule: "办事窗",
            subModule: "信息变更",
            topSearch: 1000
          },
          {
            mainModule: "办事窗",
            subModule: "收入证明",
            topSearch: 800
          }
        ],
        totalPage: 5
      }
    });
  },
  standingTime: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSAGE: "",
      DATA: {
        pageDetail: [
          {
            mainModule: "办事窗",
            subModule: "因私出境",
            standingTime: 1500
          },
          {
            mainModule: "办事窗",
            subModule: "信息变更",
            standingTime: 1000
          },
          {
            mainModule: "办事窗",
            subModule: "收入证明",
            standingTime: 800
          }
        ],
        totalPage: 5
      }
    });
  }
};
