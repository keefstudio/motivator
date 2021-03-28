// vue.config.js file to be place in the root of your repository

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  pwa: {
    themeColor: "#0075FF",
    msTileColor: "#0075FF",
    appleMobileWebAppCache: "yes",
    manifestOptions: {
      background_color: "#0075FF",
      description: "Random list generator",
      display: "standalone",
      name: "Motivator",
      short_name: "Motivator",
      start_url: "/index.html"
    }
  }
};
