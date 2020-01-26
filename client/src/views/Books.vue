<template>
  <ResourceCRUD
    resourceName="könyv"
    resourceNamePlural="könyvek"
    resourceUrl="/books"
    :columns="[
      {
        field: 'id',
        label: 'Azonosító',
        searchable: true
      },
      {
        field: 'author',
        label: 'Író',
        searchable: true
      },
      {
        field: 'title',
        label: 'Cím',
        searchable: true
      },
      {
        field: 'releaseYear',
        label: 'Kiadási év',
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
