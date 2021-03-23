<template>
  <div class="bucket-card">
    <div class="card-inner card-front">
      <h4
        v-show="!editcardtitle"
        @focus="
          editcardtitle = true;
          focusInput('cardtitle');
        "
        tabindex="0"
      >
        {{ bucket.name }}
      </h4>
      <input
        type="text"
        v-model="bucket.name"
        v-show="editcardtitle"
        ref="cardtitle"
        @blur="
          {
            editcardtitle = false;
            $emit('editbucket', false);
          }
        "
      />
      <ul
        v-show="!editcardlist"
        @focus="
          editcardlist = true;
          focusInput('cardlist');
        "
        tabindex="0"
      >
        <li
          v-for="(item, index) in bucket.items"
          :class="{ trashed: bucket.trashed.includes(index) }"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
      <textarea
        v-show="editcardlist"
        ref="cardlist"
        :rows="bucket.items.length"
        v-model="cardlistitems"
        @blur="
          {
            updateItems($event.target.value),
              (editcardlist = false),
              $emit('editbucket', false);
          }
        "
      ></textarea>
      <div class="bucketdelete">
        <button v-show="!deletebucket" @click="deletebucket = true">
          <i class="icon-cancel-1"></i>
        </button>
        <span v-show="deletebucket" @mouseleave="deletebucket = false">
          <em>Delete?&nbsp;</em>
          <button
            @click="
              $emit('deletebucket', bindex);
              deletebucket = false;
            "
            @blur="deletebucket = false"
          >
            Yes
          </button>
        </span>
      </div>
    </div>
  </div>
</template>
 <script>
export default {
  name: "Bucket",
  props: {
    bucket: Object,
    bindex: Number,
    isnew: Boolean,
  },
  data() {
    // define component data
    return {
      editcardtitle: false,
      editcardlist: false,
      deletebucket: false,
      cardlistitems: "",
    };
  },
  mounted() {
    this.listCardItems();
  },
  methods: {
    //populates list items used in editable text area
    listCardItems: function () {
      this.cardlistitems = this.$options.filters.listItems(this.bucket.items);
    },
    //convert items list in textarea to array and update in data object
    updateItems: function (data) {
      data = data.split("\n");
      //remove last item if blank
      if (data[data.length - 1] == "") {
        data.splice(data.length - 1, 1);
      }
      //update bucket items list array
      this.bucket.items = data;
    },
    //focus and select text in provided input
    focusInput: function (input) {
      this.$emit("editbucket", true);
      if (input == "cardtitle") {
        this.editcardtitle = true;
      }
      if (input == "cardlist") {
        this.editcardlist = true;
      }
      this.$nextTick(function () {
        this.$refs[input].focus();
        this.$refs[input].select();
      });
    },
  },
  filters: {
    //convert items list to string with line breaks
    listItems: function (items) {
      var itemlist = "";
      if (!items) return "";
      for (var i = 0; i < items.length; i++) {
        itemlist += items[i];
        if (i < items.length - 1) {
          itemlist += "\n";
        }
      }
      return itemlist;
    },
  },
};
</script>