const conf: any = {
  local: {
    login: process.env.LOGIN,
    password: process.env.PASSWORD,
    projectName: process.env.PROJECT_NAME,
    baseUrl: process.env.LOCAL_URL,
  },
  web: {
    login: process.env.LOGIN,
    password: process.env.PASSWORD,
    projectName: process.env.PROJECT_NAME,
    baseUrl: process.env.PRODUCTION_URL,
  },
};

export default conf[process.env.ENVIRONMENT || 'local'];
