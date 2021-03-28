<template>
  <div id="app" :class="{ noscroll: showintro, stickynav: navstick }">
    <div
      class="container-fluid intro"
      ref="intro"
      :class="{ hidden: !showintro }"
    >
      <div class="container">
        <div class="row">
          <div class="col-md introcopy">
            <h2><i class="icon-check-1"></i>Motivator</h2>
            <p>
              A list making app to help with routine and indecision.
              Sort bucket items into collections and create radomly
              generated to-do lists. Check and delete items to track
              progress, and stay motivated!
            </p>
          </div>
          <div class="col-md intromenu">
            Open collection:

            <ul>
              <draggable
                :list="collections"
                group="collectionlist"
                ghostClass="ghost"
                draggable=".menuitem"
                delay="100"
              >
                <li
                  class="menuitem"
                  v-for="(collection, index) in collections"
                  v-bind:key="index"
                >
                  <a
                    href="javascript:void(0)"
                    @click="
                      loadCollection(index);
                      animateIntro(index);
                    "
                    >{{ collection.title }}</a
                  >
                </li>
                <li class="addnewcollection">
                  <a
                    href="javascript:void(0)"
                    @click="
                      addCollection();
                      animateIntro();
                    "
                    ><i class="icon-plus"></i> New</a
                  >
                </li>
              </draggable>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <header id="header" class="header container-fluid">
      <div class="row">
        <div class="col">
          <div class="brand">
            <h1>
              <a href="javascript:void(0)" @click="animateIntro('reverse')"
                ><i class="icon-check-1"></i>Motivator</a
              >
            </h1>
          </div>
          <nav>
            <div class="menutoggle">
              <span class="menutitle">Collections:</span
              ><button
                class="icon menu-button"
                @click="
                  {
                    showcollections = !showcollections;
                  }
                "
              >
                <i class="icon-menu"></i>
              </button>
            </div>
            <Collections
              v-bind:collectionsmenu="collectionsmenu"
              v-bind:cindex="cindex"
              v-bind:title="collections[cindex].title"
              v-bind:showcollections="showcollections"
              v-on:addcollection="addCollection"
              v-on:loadcollection="loadCollection"
              v-on:deletecollection="deleteCollection"
            />
          </nav>
        </div>
      </div>
    </header>
    <main id="maincontent" class="main container-fluid no-gutters p-0">
      <div class="page-title container-fluid">
        <div class="row">
          <div class="col">
            <h2
              v-show="!editcollectiontitle"
              @focus="focusInput('titleinput')"
              @click="editcollectiontitle = true"
              tabindex="0"
            >
              <i class="icon-pencil-alt"></i> {{ collections[cindex].title }}
            </h2>
            <input
              v-show="editcollectiontitle"
              type="text"
              ref="titleinput"
              v-model="collections[cindex].title"
              @blur="editcollectiontitle = false"
              @keyup.enter="editcollectiontitle = false"
            />
          </div>
        </div>
      </div>
      <div class="main-body container">
        <div class="row">
          <div class="buckets-panel col-md-8 col-xl-9">
            <Buckets
              ref="bucketslist"
              v-bind:buckets="collections[cindex].buckets"
              v-on:addbucket="addBucket"
              v-on:deletebucket="deleteBucket"
            />
          </div>
          <div class="randomize-panel col-md-4 col-xl-3">
            <Randomize
              v-bind:buckets="collections[cindex].buckets"
              v-bind:listoptions="collections[cindex].listoptions"
              v-on:generatelist="generateList"
            />
          </div>
        </div>
      </div>
    </main>
    <Output
      v-if="showoutput"
      v-bind:randomlist="randomlist"
      v-bind:footnote="outputfootnote"
      v-bind:removedeleteditems.sync="collections[cindex].removedeleteditems"
      v-on:closeoutput="closeOutput"
    />
    <div class="alert" :class="{ showing: alertmessage }">
      <div class="alert-inner">
        <h3>
          {{ alertmessage }}
        </h3>
        <p>Good job!</p>
      </div>
    </div>
    <footer class="footer container-fluid">
      *App data is saved to browser cache. &copy; Keef Studio 2021.
    </footer>
  </div>
</template>

<script>
import "reset-css";
import "bootstrap-4-grid";
import gsap from "gsap";
import "@/assets/fontello/css/motivator-embedded.css";
import "@/style.scss";
import draggable from "vuedraggable";

import Collections from "./components/Collections.vue";
import Buckets from "./components/Buckets.vue";
import Randomize from "./components/Randomize.vue";
import Output from "./components/Output.vue";

export default {
  name: "App",
  components: {
    Collections,
    Buckets,
    Randomize,
    Output,
    draggable,
  },
  data() {
    //define app data
    return {
      appdata: {},
      collections: [{}],
      collectionsmenu: [],
      cindex: 0,
      randomlist: {},
      showcollections: false,
      showoutput: false,
      outputfootnote: "",
      editcollectiontitle: false,
      showintro: true,
      bucketscleared: 0,
      alertmessage: "",
      navstick: false,
    };
  },
  created() {
    //workbox for vue-pwa (add to home screen)
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.showUpdateUI = true;
      });
    }
    //scroll listener for sticky nav
    var scrollpos = 0;
    window.addEventListener('scroll', () => {
      var scrollY = window.scrollY;
      //var headerheight = document.getElementById('header').offsetHeight;
      if(scrollY < scrollpos && scrollY > 3){
        this.navstick = true;
      } else {
        this.navstick = false;
        this.showcollections = false;
      }
      scrollpos = scrollY;
    });
  },
  destroyed () {
    window.removeEventListener('scroll');
  },
  async accept() {
    this.showUpdateUI = false;
    await this.$workbox.messageSW({ type: "SKIP_WAITING" });
  },  
  mounted() {
    //import app data from localStorage
    if (localStorage.appdata) {
      this.appdata = JSON.parse(localStorage.appdata);
      this.collections = this.appdata.collections;
      //focus on collection title if first launch
      if (localStorage.firstrun == "true") {
        this.showintro = true;
        //this.focusInput("titleinput");
        localStorage.firstrun = "false";
      }
    }
    //event listeners
    this.$root.$on("show-output", this.showOutput);
  },
  watch: {
    //export appdata to localStorage when changed locally
    appdata: {
      handler(data) {
        localStorage.appdata = JSON.stringify(data);
      },
      deep: true,
    },
    //update items when changed
    collections: {
      handler(data) {
        //create navigation menu
        this.collectionsmenu = data.map((item) => {
          return item.title;
        });
        //reset menu visibility
        this.showcollections = false;
      },
      deep: true,
    },
  },
  methods: {
    //Intro transition
    animateIntro: function (dir) {
      var scope = this;
      //create animation timeline
      var ai = gsap.timeline({
        defaults: { duration: 0.2 },
        onComplete: function () {
          scope.showintro = false;
        },
      });
      //add tween to timeline
      ai.fromTo(
        ".intro",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          ease: "strong.easeOut",
        },
        0
      );
      ai.pause();
      // determine animation direction and play
      if (dir == "reverse") {
        ai.progress(1);
        ai.reverse(0);

        this.showintro = true;
        this.$nextTick(() => {
          //scroll to top of intro
          this.$refs.intro.scrollTop = 0;
        });
      } else {
        if (dir === this.cindex) {
          this.$refs.bucketslist.animateBuckets();
        }
        ai.play();
      }
    },
    //Collection options
    addCollection: function (option) {
      //add new collection to app data
      var newcollection = {};

      //duplicate current collection option
      if (option === "duplicate") {
        //stringify then parse to avoid mutation when copying
        newcollection = JSON.parse(
          JSON.stringify(this.collections[this.cindex])
        );
        newcollection.title += " copy";
      } else {
        //load in blank collection object if new
        newcollection = JSON.parse(localStorage.blankcollection);
        //change title for new collection
        newcollection.title = "Collection " + (this.collections.length + 1);
      }
      //add new colletion to main object
      this.collections.push(newcollection);
      //load new collection into app
      this.loadCollection(this.collections.length - 1, true);
    },
    loadCollection: function (index, isnew) {
      //use next tick for focus event
      this.$nextTick(function () {
        //set focus to title for newly added collection
        if (isnew) {
          this.focusInput("titleinput");
        }
        //reset menu visibility
        this.showcollections = false;
        //set cindex to collection: used glabally
        this.cindex = parseInt(index);
        //scroll to top of page
        window.scrollTo(0, 0);
      });
    },
    //delete current collection
    deleteCollection: function () {
      //copy cindex before changing
      var index = this.cindex;
      //change cindex to account for one less item
      if (this.cindex > 0) {
        this.cindex = this.cindex - 1;
      }
      //if last collection clear items
      if (this.collections.length <= 1) {
        this.collections[index].title = "Collection 1";
        this.collections[index].buckets = [];
        this.collections[index].listoptions = {
          listcount: 0,
          listbuckets: ["All"],
          preventduplicates: true,
          bucketcycle: "random",
        };
        this.collections[index].removedeleteditems = false;
      } else {
        //delete current collection
        this.collections.splice(index, 1);
      }
      //scroll to top of page
      window.scrollTo(0, 0);
    },
    //for editing collection title
    focusInput: function (input) {
      this.editcollectiontitle = true;
      this.$nextTick(function () {
        this.$refs[input].focus();
        this.$refs[input].select();
      });
    },

    //Bucket options
    addBucket: function () {
      var currbuckets = this.collections[this.cindex].buckets;
      var newbucket = {
        name: "Bucket List " + (currbuckets.length + 1),
        items: ["item 1", "item 2", "item 3"],
        trashed: [],
      };
      currbuckets.push(newbucket);
    },
    deleteBucket: function (index) {
      var currbuckets = this.collections[this.cindex].buckets;
      var currlistbuckets = this.collections[this.cindex].listoptions
        .listbuckets;
      var bindex = currlistbuckets.indexOf(index);

      if (bindex > -1) {
        currlistbuckets.splice(bindex, 1);
        for (var b = bindex; b < currlistbuckets.length; b++) {
          currlistbuckets[b]--;
        }
      }
      if (currlistbuckets.length == 0) {
        currlistbuckets[0] = "All";
      }

      this.$refs.bucketslist.deleted = index;
      currbuckets.splice(index, 1);
    },

    //Randomize options
    generateList: function (listoptions) {
      var listcount = listoptions.listcount;
      var listbuckets = listoptions.listbuckets;
      var preventduplicates = listoptions.preventduplicates;
      var bucketcycle = listoptions.bucketcycle;

      //reset list data
      this.randomlist = {};
      this.buckets = this.collections[this.cindex].buckets;
      this.outputfootnote = "";

      //generate randomlistcount number if 0
      if (listcount == 0) {
        listcount = this.getRandomInt(
          this.getBucketItemsLength(this.buckets, listbuckets)
        );
        listcount++;
      }

      //prevent duplicates: to avoid infinite loop
      if (preventduplicates) {
        var itemcount = this.getBucketItemsLength(this.buckets, listbuckets);
        if (listcount > itemcount) {
          listcount = itemcount;
          this.outputfootnote = "*count exceeded available items";
        }
      }

      var s = 0;
      var itemindexlist = [];
      //create loop based on user input number
      for (var i = 0; i < listcount; i++) {
        var thisbucket;

        //if bucketcycle is RANDOM (default)
        if (bucketcycle == "random" || !bucketcycle) {
          //pick random bucket from all
          thisbucket = this.getRandomInt(this.buckets.length);
          //pick random bucket from selected
          if (listbuckets && listbuckets[0] != "All") {
            thisbucket = listbuckets[this.getRandomInt(listbuckets.length)];
          }
        }

        //if bucketcycle is SEQUENTIAL
        if (bucketcycle == "sequential") {
          //pick sequential bucket from all
          if (!listbuckets || listbuckets[0] == "All") {
            thisbucket = s;
            //reset counter if maxed
            if (s + 1 >= this.buckets.length) {
              s = -1;
            }
          }
          //pick random bucket from selected
          if (listbuckets && listbuckets[0] != "All") {
            thisbucket = listbuckets[s];
            //reset counter if maxed
            if (s + 1 >= listbuckets.length) {
              s = -1;
            }
          }
          s++;
        }

        //select random item from bucket
        var thisitem = this.getRandomInt(this.buckets[thisbucket].items.length);

        //create index of item
        var itemindex = thisbucket + "-" + thisitem;

        //prevent duplicate: start over if duplicate
        if (preventduplicates) {
          if (itemindexlist.indexOf(itemindex) >= 0) {
            i--;
            continue;
          }
        }

        //add index to index list
        itemindexlist.push(itemindex);
      }

      //format items from indexlist and add to randomlist object
      for (var x = 0; x < itemindexlist.length; x++) {
        var bx = itemindexlist[x].split("-").map(Number);

        this.randomlist[bx[0]] = {
          name: "",
          items: [],
          itemkeys: [],
        };
      }

      for (var y = 0; y < itemindexlist.length; y++) {
        var by = itemindexlist[y].split("-").map(Number);

        this.randomlist[by[0]].name = this.buckets[by[0]].name;
        this.randomlist[by[0]].items.push(this.buckets[by[0]].items[by[1]]);
        this.randomlist[by[0]].itemkeys.push(by[0] + "-" + by[1]);
      }

      this.showoutput = true;
    },
    getBucketItemsLength: function (buckets, bucketslist) {
      var bucketitems = 0;

      //Add all buckets to list if ALL is selected
      if (bucketslist[0] == "All") {
        bucketslist = [];
        buckets.map((b, index) => {
          bucketslist.push(index);
        });
      }

      //count all bucket list items
      bucketslist.map((listbucket) => {
        bucketitems += buckets[listbucket].items.length;
      });

      return bucketitems;
    },
    getRandomInt: function (max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    //hide output window
    closeOutput: function (deleted) {
      //remove deleted items from system
      if (
        deleted.length > 0 &&
        this.collections[this.cindex].removedeleteditems
      ) {
        //convert deleted list to listkeys
        var deletekeys = [];
        var scope = this;
        deleted.map(function (item) {
          item = item.split("-");
          deletekeys.push(scope.randomlist[item[0]].itemkeys[item[1]]);
        });
        //dedupe deleted items
        var deduped = [];
        deletekeys.map(function (item) {
          if (!deduped.includes(item)) {
            deduped.push(item);
          }
        });
        //sort deduped in ascending order
        var sorted = [[-1, -1]];
        deduped.map(function (item, index) {
          item = item.split("-").map(Number);
          for (var i = index; i >= 0; i--) {
            if (item[0] > sorted[i][0]) {
              sorted.splice(i + 1, 0, item);
              break;
            } else if (item[0] === sorted[i][0] && item[1] > sorted[i][1]) {
              sorted.splice(i + 1, 0, item);
              break;
            }
          }
        });
        sorted.splice(0, 1);

        //add deleted items to bucket trash
        sorted.map(function (item) {
          scope.collections[scope.cindex].buckets[item[0]].trashed.unshift(
            parseInt(item[1])
          );
        });

        //pause for CSS animation
        gsap.delayedCall(1, function () {
          //display items deleted alert
          var deleteditems = deduped.length;
          if(deleteditems > 0){
            scope.alertmessage = deleteditems + " item";
            if(deleteditems > 1){
              scope.alertmessage += "s";
            }
            scope.alertmessage += " completed";
            scope.showAlert();
          }
          //loop through buckets to remove tagged items
          //bucket loop
          for (
            var i = 0;
            i < scope.collections[scope.cindex].buckets.length;
            i++
          ) {
            //item loop
            for (
              var x = 0;
              x < scope.collections[scope.cindex].buckets[i].trashed.length;
              x++
            ) {
              var trasheditem =
                scope.collections[scope.cindex].buckets[i].trashed[x];
              scope.collections[scope.cindex].buckets[i].items.splice(
                trasheditem,
                1
              );
            }

            //empty trash
            scope.collections[scope.cindex].buckets[i].trashed = [];

            //force update bucket lists
            scope.$refs.bucketslist.forceUpdateLists();

            //delete bucket if empty
            if (scope.collections[scope.cindex].buckets[i].items.length == 0) {
              scope.deleteBucket(i);
              //construct alert message
              scope.bucketscleared++;
              scope.alertmessage = scope.bucketscleared + " bucket";
              if (scope.bucketscleared > 1) {
                scope.alertmessage += "s";
              }
              scope.alertmessage += " emptied";
              if (scope.collections[scope.cindex].buckets.length === 0) {
                scope.alertmessage = "All buckets emptied";
              }
              scope.showAlert();
              //back up bucket loop for one less bucket
              i--;
            } 
          }
        });
      }
      // finally hide output window
      this.showOutput(false);
    },
    //controlls output window visibility
    showOutput: function (data) {
      //true to show, false to hide
      this.showoutput = data;
    },
    showAlert: function () {
      //animate alert popup
      var scope = this;
      gsap.fromTo(
        ".alert",
        1,
        { opacity: 0 },
        {
          opacity: 2,
          ease: "power4.easeOut",
          onComplete: function () {
            this.reverse();
          },
          onReverseComplete: function () {
            //reset
            scope.bucketscleared = 0;
            scope.alertmessage = "";
          },
        }
      );
    },
  },
};
</script>