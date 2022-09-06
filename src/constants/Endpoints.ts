const getUrl = () => {
    let backendAddress;
    backendAddress = `http://localhost:8080`;
    return `${backendAddress}/api`;
  };
  const Endpoints = {
    AUTHENTICATE: getUrl() + "/authenticate",
    RESET_PASSWORD: getUrl() + "/reset-password",
    LOGOUT: getUrl() + "/worker/logout",
    WORKER: getUrl() + "/worker",
    TEMPLATE: getUrl() + "/template",
    PARAMETER: getUrl() + "/parameter",
    WORKER_PROFILE: getUrl() + "/workers/profile",
    CALCULATION: getUrl() + "/calculation",
    QUESTION: getUrl() + "/question",
    LINKS: getUrl() + "/link",
    ASSOCIATION: getUrl() + "/association",
    CATEGORY: getUrl() + "/category",
    DICTIONARY: getUrl() + "/dictionary",
    PAIR_TYPE: getUrl() + "/pair/type",
    PAIR: getUrl() + "/pair",
    CLUSTER: getUrl() + "/cluster",
    WORD_APPEAL: getUrl() + "/word-appeal",
    WORD_UNKNOWN: getUrl() + "/word-unknown",
    LOGIN_STATISTICS: getUrl() + "/login-statistics",
    SELECTABLE_NOTIFY: getUrl() + "/multinotif",
    USERS: getUrl() + "/users",
    AD_CAMPAIGN: getUrl() + "/ad-campaign",
    PAYMENTS: getUrl() + "/payments",
  };
  
  export default Endpoints;