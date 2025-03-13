export const apps = [{
  name: "app",
  script: "./app.js",
  log_file: "./logs/dump.log",
  out_file: "./logs/output.log",
  error_file: "./logs/error.log",
  watch: [
    "commands"
  ],
  autorestart: true,
  max_restarts: 5,
  restart_delay: 5000,
  shutdown_with_message: true,
  min_uptime: 2000,
  listen_timeout: 8000,
  merge_logs: true,
}];
