export default [
    {
        name: "UNSEEN",
        url: "/unseen",
        image: require("@/assets/gamesImages/UNSEEN_background.png"),
        title: require("@/assets/gamesImages/UNSEEN_title.png"),
        preview: require("@/assets/gamesImages/UNSEEN_preview.png"),
        gridColumn: 1,
        gridRow: 1,
        color: "$theme-color",
        available: true
    },
    {
        name: "COSMOS",
        url: "/cosmos",
        image: require("@/assets/gamesImages/COSMOS_background.png"),
        title: require("@/assets/gamesImages/COSMOS_title.png"),
        preview: require("@/assets/gamesImages/COSMOS_preview.png"),
        gridColumn: 5,
        gridRow: 2,
        color: "$theme-color",
        available: true
     },

    {
        name: "MOVEAMAZE",
        url: "/comingsoon",
        image: require("@/assets/gamesImages/COMINGSOON_background.png"),
        title: require("@/assets/gamesImages/MOVEAMAZE_title.png"),
        preview: require("@/assets/gamesImages/MOVEAMAZE_preview.png"),

        gridColumn: 3,
        gridRow: 3,
        color: "$theme-color",
        available: true
     },
     {
         name: "DUCKTAN",
         url: "/ducktan",
         image: require("@/assets/gamesImages/DUCKTAN_background.png"),
         title: require("@/assets/gamesImages/DUCKTAN_title.png"),
         preview: require("@/assets/gamesImages/DUCKTAN_preview.png"),

         gridColumn: 2,
         gridRow: 4,
         color: "$theme-color",
         available: true
      },
     {
         name: "COMING SOON",
         url: "/comingsoon",
         image: require("@/assets/gamesImages/COMINGSOON_background.png"),
         title: require("@/assets/gamesImages/COMINGSOON_title.png"),
         gridColumn: 4,
         gridRow: 5,
         color: "$theme-color",
         available: false
      },
     {
         name: "0",
         url: "/",
         title: require("@/assets/gridPapero/0.png"),
         gridColumn: 2,
         gridRow: 6,
         color: "$theme-color",
         available: true,
         isPaperoImage: true
      },
     {
         name: "1",
         url: "/",
         title: require("@/assets/gridPapero/1.png"),
         gridColumn: 3,
         gridRow: 9,
         color: "$theme-color",
         available: true,
         isPaperoImage: true
      },
     {
         name: "2",
         url: "/",
         title: require("@/assets/gridPapero/2.png"),
         gridColumn: 4,
         gridRow: 7,
         color: "$theme-color",
         available: true,
         isPaperoImage: true
      },

]