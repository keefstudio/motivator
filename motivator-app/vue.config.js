// vue.config.js file to be place in the root of your repository

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  pwa: {
    themeColor: "#303030",
    msTileColor: "#0075FF",
    appleMobileWebAppCache: "yes",
    manifestOptions: {
      background_color: "#ffffff",
      description: "List making app with random to-do generator",
      display: "fullscreen",
      icons: [
        {
          "src": "/checkmark-icon.png",
          "sizes": "384x384",
          "type": "image/png"
        }
      ],
      name: "Motivator",
      short_name: "motivator",
      start_url: "/index.html"
    }
  }
};
