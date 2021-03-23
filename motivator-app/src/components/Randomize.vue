<template>
  <div>
    <h3>Randomize</h3>
    <div class="randomize-options">
      <fieldset>
        <label for="numberitems">Number of items: </label>
        <input
          id="numberitems"
          type="number"
          min="0"
          v-model="listoptions.listcount"
          size="2"
          style="width: 5em; display: inline-block"
        /><span v-show="listoptions.listcount == 0"
          >&nbsp;&nbsp;(random count)</span
        >
      </fieldset>
      <fieldset class="inline-label">
        <input
          type="checkbox"
          id="preventduplicates"
          v-model="listoptions.preventduplicates"
        />
        <label for="preventduplicates">prevent duplicates</label>
      </fieldset>
      <fieldset>
        <label for="selectbuckets">Select from buckets:</label>
        <select
          id="selectbuckets"
          multiple="multiple"
          v-model="listoptions.listbuckets"
          v-bind:size="buckets.length + 1"
        >
          <option value="All" selected>All</option>
          <option
            v-for="(bucket, index) in buckets"
            v-bind:key="index"
            :value="index"
          >
            {{ bucket.name }}
          </option>
        </select>
      </fieldset>
      <fieldset class="inline-label">
        <input
          type="radio"
          id="random"
          name="bucketcycle"
          value="random"
          v-model="listoptions.bucketcycle"
          checked
        />
        <label for="random">random</label>&nbsp;
        <input
          type="radio"
          id="sequential"
          name="bucketcycle"
          value="sequential"
          v-model="listoptions.bucketcycle"
        />
        <label for="sequential">sequential</label>
      </fieldset>
    </div>
    <div class="generate">
      <button class="generate-btn" @click="$emit('generatelist', listoptions)">
        Generate to-do list
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Randomize",
  props: {
    buckets: {
      type: Array,
      default: () => [],
    },
    listoptions: {
      type: Object,
      default() {
        return {
          listcount: 3,
          listbuckets: ["All"],
        };
      },
    },
  },
  data() {
    //define component data
    return {
      randomList: [],
      listbuckets: ["All"],
      listcount: 6,
    };
  },
  mounted() {
    //load data into component
    this.loadBuckets();
    //update data when changed by another component
    this.$root.$on("bucketsupdate", this.loadBuckets);
    this.$root.$on("collectionloaded", this.collectionLoaded);
  },
  methods: {
    //import app data
    loadBuckets: function () {
      if (localStorage.buckets) {
        //this.buckets = JSON.parse(localStorage.buckets);
      }
    },
    collectionLoaded: function () {
      this.listbuckets = ["All"];
    },
  },
};
</script>
