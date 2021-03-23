<template>
  <div class="output-panel">
    <div class="output-inner" @click.stop>
      <h3><span class="textaccent">Boom!</span> {{ message }}</h3>
      <div class="listitems">
        <ul>
          <li
            v-for="(bucket, key) in randomlist"
            v-bind:key="key"
            ref="listtitle"
            :class="{ allitemsdeleted: alldeleted.includes(key) }"
          >
            <h4>
              {{ bucket.name }}
            </h4>
            <ul>
              <li
                v-for="(item, index) in bucket.items"
                ref="listitem"
                :key="index"
                :class="{
                  completed: checked.includes(key + '-' + index),
                  deleted: deleted.includes(key + '-' + index),
                }"
                tabindex="0"
                @click="checkItem(key + '-' + index)"
                @keyup.enter="checkItem(key + '-' + index)"
              >
                {{ item }}
                <button
                  class="deleteitem"
                  @click.stop="deleteItem(key + '-' + index)"
                >
                  delete
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div
        class="listempty"
        :class="{ visible: deleted.length == itemcount && itemcount > 0 }"
      >
        <i class="icon-thumbs-up-1"></i> <strong>All done!</strong>
      </div>

      <div class="output-options">
        <fieldset class="inline-label">
          <input
            type="checkbox"
            id="removebucketitems"
            v-model="removedeleted"
          />
          <label for="removebucketitems"
            >Remove deleted items from system &raquo;&nbsp;{{
              deleted.length
            }}&nbsp;<span v-if="deleted.length > 0">
              <a
                href="javascript:void(0)"
                @click="(deleted = []), (message = 'Restored')"
                >restore</a
              ></span
            ></label
          >
        </fieldset>
      </div>
      <button class="icon close-output" @click="closeOutput">
        <i class="icon-cancel-1"></i>
      </button>
    </div>
    <div class="output-footnote" v-show="footnote">{{ footnote }}</div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "Output",
  props: {
    randomlist: Object,
    removedeleteditems: {
      type: Boolean,
      default: false,
    },
    footnote: String,
  },
  data() {
    // define component data
    return {
      message: "Chosen",
      checked: [],
      deleted: [],
      removedeleted: false,
      alldeleted: [],
      itemcount: 0,
    };
  },
  mounted() {
    //set data from prop
    this.removedeleted = this.removedeleteditems;
    //count list items
    for (var bucket in this.randomlist) {
      this.itemcount += this.randomlist[bucket].items.length;
    }
    //intro animation
    gsap.from(".output-panel", 0.25, {
      opacity: 0,
      ease: "strong.easeOut",
    });
    gsap.from(".output-inner", 0.35, {
      scale: 0,
      ease: "back.out(1.2)",
    });
    gsap.from(".output-footnote", 0.5, {
      opacity: 0,
      delay: 0.5,
    });
    gsap.from(".listitems li", 0.3, {
      x: 50,
      opacity: 0,
      delay: 0.2,
      stagger: {
        each: 0.1,
        ease: "power4.easeOut",
      },
    });
  },
  watch: {
    checked: {
      handler(data) {
        //Change message when all items checked
        if (data.length == this.itemcount) {
          this.message = "Completed";
        } else {
          this.message = "Checked";
        }
      },
    },
    removedeleted: {
      handler(data) {
        this.$emit("update:removedeleteditems", data);
      },
    },
    deleted: {
      handler(data) {
        //hide bucket titles when all list items have been deleted
        //reset all deleted array
        this.alldeleted = [];
        //create object to count deleted bucket items
        var count = {};
        var scope = this;
        //counted deleted items by buckets
        data.map(function (item) {
          item = item.split("-");
          if (count[item[0]]) {
            count[item[0]]++;
          } else {
            count[item[0]] = 1;
          }
          //if all items are deleted in the bucket add to list
          if (count[item[0]] === scope.randomlist[item[0]].items.length) {
            scope.alldeleted.push(item[0]);
          }
        });
        //Change message when all items deleted
        if (data.length == this.itemcount) {
          this.message = "Cleared";
        } else if (data.length > 0) {
          this.message = "Deleted";
        }
      },
    },
  },
  methods: {
    checkItem: function (item) {
      if (this.checked.includes(item)) {
        this.checked.splice(this.checked.indexOf(item), 1);
      } else {
        this.checked.push(item);
      }
    },
    matchCheck: function (item) {
      for (var i = 0; i < this.checked.length; i++) {
        if (this.checked[i] == item) {
          return true;
        }
      }
      return false;
    },
    deleteItem: function (item) {
      if (!this.deleted.includes(item)) {
        this.deleted.push(item);
        //this.deleted.splice(this.deleted.indexOf(item));
      }
    },
    closeOutput: function () {
      this.$emit("closeoutput", this.deleted);
    },
  },
};
</script>
