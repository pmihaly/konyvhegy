<template>
  <section>
    <div class="field is-grouped">
      <b-button class="control" type="is-success" icon-left="plus"
        >Új {{ resourceName }} hozzáadása</b-button
      >
      <b-button
        class="control"
        type="is-primary"
        icon-left="pencil"
        :disabled="!checkedObjects.length"
        >{{ buttonText('szerkesztése') }}</b-button
      >
      <b-button
        class="control"
        type="is-danger"
        icon-left="delete"
        :disabled="!checkedObjects.length"
        @click="deleteObjects"
        >{{ buttonText('törlése') }}</b-button
      >
    </div>
    <b-table
      :data="tableData"
      :columns="columns"
      paginated
      per-page="200"
      striped
      hoverable
      :loading="isLoadingResource"
      checkable
      :checked-rows.sync="checkedObjects"
    >
      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="emoticon-sad" size="is-large"></b-icon>
            </p>
            <p>Nincs megjeleníthető {{ resourceName }}.</p>
          </div>
        </section>
      </template>
    </b-table>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      isLoadingResource: true,
      tableData: [],
      checkedObjects: []
    };
  },
  props: {
    resourceName: { type: String, required: true },
    resourceNamePlural: { type: String, required: true },
    resourceUrl: { type: String, required: true },
    columns: { type: Array, required: true },
    dataFormatting: { type: Function, required: false }
  },
  created() {
    axios.get(this.resourceUrl).then(axiosResponse => {
      let resources = axiosResponse.data;
      if (this.dataFormatting) resources = this.dataFormatting(resources);
      this.isLoadingResource = false;
      this.tableData = resources;
    });
  },
  methods: {
    buttonText: function(actionText) {
      if (this.checkedObjects.length === 0)
        return `Nincs ${this.resourceName} kijelölve`;
      if (this.checkedObjects.length === 1)
        return `Kijelölt ${this.resourceName} ${actionText}`;
      if (this.checkedObjects.length >= 2)
        return `Kijelölt ${this.resourceNamePlural} ${actionText}`;
      return '';
    },
    deleteObjects: function() {
      this.checkedObjects.map(async object => {
        await axios.delete(`${this.resourceUrl}/${object.id}`);
        this.tableData = this.tableData.filter(tableObject => {
          return tableObject.id !== object.id;
        });
      });
      this.checkedObjects = [];
    }
  }
};
</script>
