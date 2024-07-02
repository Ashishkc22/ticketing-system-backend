module.exports = {
  ENTITY: {
    ROLES: {
      Admin: 0,
      Basic: 0,
    },
  },
  REGEX: {
    Email:
      /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  ISSUE_TYPES: ["Task","Bugs","Problem","Change","Backlog"]
};
