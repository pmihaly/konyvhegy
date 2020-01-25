<template>
  <section>
    <b-table
      :data="tableData"
      :columns="columns"
      paginated
      per-page="200"
      striped
      hoverable
      :loading="isLoadingResource"
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
      tableData: []
    };
  },
  props: {
    resourceName: { type: String, required: true },
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
  }
};
</script>
