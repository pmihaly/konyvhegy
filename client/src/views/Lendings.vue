<template>
  <ResourceCRUD
    resourceName="kölcsönzés"
    resourceUrl="/lendings"
    :columns="[
      {
        field: 'id',
        label: 'Azonosító',
        searchable: true
      },
      {
        field: 'reader',
        label: 'Olvasó',
        searchable: true
      },
      {
        field: 'book',
        label: 'Kölcsönzött könyv',
        searchable: true
      },
      {
        field: 'deadline',
        label: 'Olv. határidő',
        searchable: true
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
