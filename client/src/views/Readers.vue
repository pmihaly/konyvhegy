<template>
  <ResourceCRUD
    resourceName="olvasó"
    resourceNamePlural="olvasók"
    resourceUrl="/readers"
    :columns="[
      {
        field: 'id',
        label: 'Azonosító',
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
      dataFormatting: function(readers) {
        return readers.map(reader => {
          reader.birthDate = new Date(Date.parse(reader.birthDate)).toLocaleString(
            navigator.language || navigator.userLanguage
          );
          return reader;
        });
      }
    };
  }
};
</script>
