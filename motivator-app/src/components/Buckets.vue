<template>
  <div>
    <h3>Buckets</h3>
    <div class="buckets-list">
      <draggable
        :list="buckets"
        v-bind="dragOptions"
        group="bucketlist"
        ghostClass="ghost"
        draggable=".item"
        delay="100"
        @start="sorted = true"
        @change="bucketSorted"
      >
        <bucket
          class="item"
          v-for="(bucket, index) in buckets"
          :key="index"
          ref="bucket"
          v-bind:bucket="bucket"
          v-bind:bindex="index"
          v-on:deletebucket="deleteBucket"
          v-on:editbucket="editBucket"
        />
        <div class="bucket-card" slot="footer">
          <div class="add-card">
            <button
              class="addbucket"
              @click="
                added = true;
                $emit('addbucket');
              "
            >
              <i class="icon-plus"></i>
            </button>
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import draggable from "vuedraggable";
import Bucket from "./Bucket.vue";

export default {
  name: "Buckets",
  components: {
    Bucket,
    draggable,
  },
  props: {
    buckets: {
      type: Array,
    },
  },
  data() {
    return {
      added: false,
      deleted: -1,
      sorted: false,
      editing: false,
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 1,
        disabled: this.editing,
      };
    },
  },
  updated() {
    if (!this.sorted && !this.editing) {
      this.forceUpdateLists();
      this.animateBuckets();
    }
    this.sorted = false;
  },
  methods: {
    editBucket: function (editing) {
      this.sorted = true;
      this.editing = editing;
    },
    deleteBucket: function (index) {
      this.deleted = index;
      this.$emit("deletebucket", index);
    },
    bucketSorted: function (data) {
      this.forceUpdateLists();
      //animate moved item
      gsap.from(".bucket-card:nth-of-type(" + (data.moved.newIndex + 1) + ")", {
        scale: 0.9,
        duration: 0.2,
      });
    },
    animateBuckets: function () {
      if (this.added) {
        this.added = false;
        this.$refs.bucket[this.buckets.length - 1].focusInput("cardtitle");
        gsap.from(".bucket-card:nth-last-of-type(-n+2)", {
          scale: 0.9,
          opacity: 0,
          duration: 0.3,
          stagger: {
            each: 0.12,
            ease: "power4.Out",
          },
        });
      } else if (this.deleted > -1) {
        gsap.from(".bucket-card:nth-of-type(n+" + (this.deleted + 1) + ")", {
          scale: 0.9,
          opacity: 0,
          duration: 0.3,
          stagger: {
            each: 0.12,
            ease: "power4.Out",
          },
        });
        this.deleted = -1;
      } else {
        gsap.from(".bucket-card", {
          scale: 0.9,
          opacity: 0,
          duration: 0.3,
          stagger: {
            each: 0.12,
            ease: "power4.Out",
          },
        });
      }
    },
    forceUpdateLists: function () {
      //force update teaxareas after sorting
      for (var i = 0; i < this.buckets.length; i++) {
        this.$refs.bucket[i].listCardItems();
      }
    },
  },
};
</script>