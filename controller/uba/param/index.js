module.exports = {
  role: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSAGE: "",
      DATA: {
        roleList: [
          {
            roleID: 1,
            roleName: "团队管理者"
          },
          {
            roleID: 2,
            roleName: "普通用户"
          },
          {
            roleID: 3,
            roleName: "分行负责人"
          }
        ]
      }
    });
  },
  org: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSAGE: "",
      DATA: {
        orgList: [
          {
            orgID: 1,
            orgName: "总行",
            children: []
          },
          {
            orgID: 2,
            orgName: "分行",
            children: [
              {
                orgID: 21,
                orgName: "北京市",
                children: [
                  {
                    orgID: 211,
                    orgName: "XXX分行"
                  },
                  {
                    orgID: 212,
                    orgName: "XXX分行"
                  },
                  {
                    orgID: 213,
                    orgName: "XXX分行"
                  }
                ]
              },
              {
                orgID: 22,
                orgName: "河北省",
                children: [
                  {
                    orgID: 231,
                    orgName: "XXX分行"
                  },
                  {
                    orgID: 232,
                    orgName: "XXX分行"
                  },
                  {
                    orgID: 233,
                    orgName: "XXX分行"
                  }
                ]
              }
            ]
          },
          {
            orgID: 3,
            orgName: "事业部",
            children: [
              {
                orgID: 31,
                orgName: "XXX子事业部"
              },
              {
                orgID: 32,
                orgName: "XXX子事业部"
              },
              {
                orgID: 33,
                orgName: "XXX子事业部"
              }
            ]
          }
        ]
      }
    });
  },
  channel: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSAGE: "",
      DATA: {
        channelList: [
          {
            channelID: 1,
            channelName: "web端"
          },
          {
            channelID: 2,
            channelName: "andirod"
          },
          {
            channelID: 3,
            channelName: "ios"
          }
        ]
      }
    });
  },
  age: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSAGE: "",
      DATA: {
        ageList: [
          {
            ageID: 1,
            ageName: "25岁以下"
          },
          {
            ageID: 2,
            ageName: "25-35"
          },
          {
            ageID: 3,
            ageName: "35-50"
          },
          {
            ageID: 3,
            ageName: "50以上"
          }
        ]
      }
    });
  },
  changeBusiness: async (ctx, next) => {
    return (ctx.body = {
      SUCCESS: "TRUE",
      MESSbusiness: "",
      DATA: {
        businessList: [
          {
            businessID: 1,
            businessName: "因私出境"
          },
          {
            businessID: 2,
            businessName: "信息变更"
          },
          {
            businessID: 3,
            businessName: "收入证明"
          },
          {
            businessID: 4,
            businessName: "公积金转移"
          }
        ]
      }
    });
  }
};
