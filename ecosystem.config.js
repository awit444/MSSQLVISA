module.exports = {
  apps: [
    {
      name: "Node-API",
      script: "index.js",
      node_args: "--no-warnings",
      autorestart: true,
      watch: false
    },
    {
      name: "Ngrok-Tunnel",
      script: "ngrok",
      args: "http --domain=extremely-accurate-mustang.ngrok-free.app 3000",
      autorestart: true,
      watch: false
    }
  ]
};
