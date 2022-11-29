const getUrl = () => {
    let backendAddress;
    backendAddress = `http://localhost:8080`;
    return `${backendAddress}/api`;
  };
  const Endpoints = {
    AUTHENTICATE: getUrl() + "/authenticate",
    RESET_PASSWORD: getUrl() + "/reset-password",
    LOGOUT: getUrl() + "/logout",
    WORKER: getUrl() + "/worker",
    WORKER_PROFILE: getUrl() + "/workers/profile",
    BILL: getUrl() + "/bill",
    CREDIT: getUrl() + "/credit",
    USERS: getUrl() + "/users",
    BANK_CARD: getUrl() + "/bank-card",
    INSURANCE: getUrl() + "/insurance"
  };
  
  export default Endpoints;