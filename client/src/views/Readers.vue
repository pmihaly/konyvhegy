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
  />
</template>

<script>
import ResourceCRUD from '../components/ResourceCRUD';

export default {
  components: { ResourceCRUD }
};
</script>
