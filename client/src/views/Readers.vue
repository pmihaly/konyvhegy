<template>
  <ResourceCRUD
    resourceName="olvasó"
    resourceUrl="/readers"
    :columns="[
      {
        field: 'id',
        label: 'Azonosító',
        width: '100',
        searchable: true
      },
      {
        field: 'fullName',
        label: 'Teljes név',
        searchable: true
      },
      {
        field: 'email',
        label: 'Email cím',
        searchable: true
      },
      {
        field: 'phone',
        label: 'Telefonszám',
        searchable: true
      },
      {
        field: 'birthDate',
        label: 'Szül. dátum',
        centered: true
      }
    ]"
    :dataFormatting="dataFormatting"
  />
</template>

<script>
import ResourceCRUD from '../components/ResourceCRUD';

export default {
  components: { ResourceCRUD },
  data() {
    return {
      tableData: [],
      dataFormatting: function(readers) {
        return readers.map(readerData => {
          readerData.birthDate = new Date(Date.parse(readerData.birthDate)).toLocaleString(
            navigator.language || navigator.userLanguage
          );
          return readerData;
        });
      }
    };
  }
};
</script>
