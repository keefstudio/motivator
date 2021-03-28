<template>
  <div class="collections cf" :class="{showing: showcollections}">
    <div class="collections-menu" v-focus-outside="focusOutsideMenu">
      <ul>
        <li>
          <a
            class="show-menu"
            href="javascript:void(0)"
            @click="showmenu = !showmenu"
            >{{ title }}</a
          >
          <ul v-show="showcollections || showmenu">
            <li
              v-for="(item, index) in collectionsmenu"
              v-bind:key="index"
              v-bind:class="{ selected: index == cindex }"
            >
              <a
                href="javascript:void(0)"
                ref="collectionlink"
                @click="
                  $emit('loadcollection', index),
                    $event.target.blur,
                    (showmenu = false)
                "
                >{{ item }}</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="collections-options" v-focus-outside="focusOutsideOptions">
      <button
        class="icon menu-button show-options"
        @click="showoptions = !showoptions"
      >
        &#8942;
      </button>
      <ul v-show="showcollections || showoptions">
        <li>
          <a
            href="javascript:void(0)"
            @click="
              $emit('addcollection');
              showoptions = false;
            "
            >Create new</a
          >
        </li>
        <li>
          <a
            href="javascript:void(0)"
            @click="
              $emit('addcollection', 'duplicate');
              showoptions = false;
            "
            >Duplicate</a
          >
        </li>
        <li @mouseleave="deleteactive = false">
          <em v-show="deleteactive">Really?</em>&nbsp;<a
            href="javascript:void(0)"
            @click.stop="deleteActive"
            ><span v-show="!deleteactive">Delete</span
            ><span v-show="deleteactive">Yes</span></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import focusOutside from "vue-focus-outside";
export default {
  name: "Collections",
  props: {
    collectionsmenu: Array,
    cindex: Number,
    title: {
      type: String,
      default: "Collections",
    },
    showcollections: {
      type: Boolean,
      default: false,
    },
  },
  directives: {
    focusOutside,
  },
  data() {
    // define component data
    return {
      showmenu: false,
      showoptions: false,
      deleteactive: false,
    };
  },
  methods: {
    focusOutsideMenu: function () {
      this.showmenu = false;
    },
    focusOutsideOptions: function () {
      this.showoptions = false;
    },
    deleteActive: function () {
      if (this.deleteactive === true) {
        this.$emit("deletecollection");
        this.deleteactive = false;
        this.showoptions = false;
      } else {
        this.deleteactive = true;
      }
    },
  },
};
</script>