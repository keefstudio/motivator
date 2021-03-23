//main app data objects
var appdata = {
  cindex: 0,
  collections: [
    {
      title: "Exercises",
      buckets: [
        {
          name: "Strength",
          items: [
            "Bench press",
            "Squat",
            "Rows",
            "Dead lift",
            "Shoulder Press",
            "Farmer carry",
            "Dips"
          ],
          trashed: []
        },
        {
          name: "Mobility",
          items: [
            "Lunge with rotation",
            "Arch & curl",
            "Frog stretch",
            "Cross kicks",
            "Elbow to knee"
          ],
          trashed: []
        },
        {
          name: "Kettle Bells",
          items: ["Swing", "Thrust", "Snatch", "Deck Squat", "Lunge"],
          trashed: []
        },
        {
          name: "Cardio",
          items: ["Run", "Walk", "Skip (rope)", "Row", "Burpees", "Cycle"],
          trashed: []
        },
        {
          name: "Calesthenics",
          items: [
            "Pull ups",
            "Muscle up",
            "Hand stand",
            "Push ups",
            "Pistol Squat",
            "L-sits",
            "Planche"
          ],
          trashed: []
        }
      ],
      listoptions: {
        listcount: "6",
        listbuckets: ["All"],
        preventduplicates: true,
        bucketcycle: "random"
      },
      removedeleteditems: false
    },
    {
      title: "Chores",
      buckets: [
        {
          name: "Finance",
          items: [
            "Pay bills",
            "Check balances",
            "Track retirement",
            "Total expenses",
            "Investment check"
          ],
          trashed: []
        },
        {
          name: "Cleaning",
          items: [
            "Sanitize",
            "Floors",
            "Windows",
            "Curtains",
            "Storage",
            "Garage",
            "Basement"
          ],
          trashed: []
        },
        {
          name: "Honey-do",
          items: [
            "Fix chair",
            "Build table",
            "Change door",
            "Paint kitchen",
            "Install fixture"
          ],
          trashed: []
        },
        {
          name: "Maintenance",
          items: [
            "Rotate tires",
            "Change oil",
            "Furnace filter",
            "Water softener"
          ],
          trashed: []
        },
        {
          name: "Yardwork",
          items: [
            "Mow lawn",
            "Pull weeds",
            "Clean gutters",
            "Rake",
            "Sweep walks"
          ],
          trashed: []
        }
      ],
      listoptions: {
        listcount: "1",
        listbuckets: ["All"],
        preventduplicates: true,
        bucketcycle: "random"
      },
      removedeleteditems: true
    },
    {
      title: "Activities",
      buckets: [
        {
          name: "Fun",
          items: ["Game", "Bowl", "Golf", "Shop", "Dine", "Show"],
          trashed: []
        },
        {
          name: "Fitness",
          items: ["Workout", "Walk", "Run", "Cycle", "Hike"],
          trashed: []
        },
        {
          name: "Relax",
          items: ["Read", "Meditate", "Movie", "Tea", "Garden"],
          trashed: []
        },
        {
          name: "Work",
          items: ["Clean", "Yardwork", "Finance", "Honey-do", "Maintenance"],
          trashed: []
        }
      ],
      listoptions: {
        listcount: "4",
        listbuckets: ["All"],
        preventduplicates: true,
        bucketcycle: "sequential"
      },
      removedeleteditems: true
    }
  ],
  randomlist: {
    bucket: {
      name: "",
      itmes: [],
      itemkeys: []
    }
  }
};
var blankCollection = {
  title: "Collection 1",
  buckets: [
    /*{
          name: "Bucket 1",
          items: ["item1", "item2", "item3"],
          trashed: [],
        }*/
  ],
  listoptions: {
    listcount: 0,
    listbuckets: ["All"],
    preventduplicates: true,
    bucketcycle: "random"
  },
  removedeleteditems: true
};

//place data in storage if not already
if (!localStorage.appdata) {
  localStorage.setItem("firstrun", "true");
  localStorage.setItem("appdata", JSON.stringify(appdata));
  localStorage.setItem("blankcollection", JSON.stringify(blankCollection));
}

import Vue from "vue";
import App from "./App.vue";

// set up and create vue instance

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App)
}).$mount("#app");
