module.exports = {
  port: "80", // listen port
  root: "../localfile", // web file root
  proxy: {  // router/* -> target/router/*
    router: "/api",
    target: "http://domain/"
  }
}