<template>
  <ResourceCRUD
    resourceName="kölcsönzés"
    resourceNamePlural="kölcsönzések"
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
    :dataFormatting="dataFormatting"
  />
</template>

<script>
import ResourceCRUD from '../components/ResourceCRUD';

export default {
  components: { ResourceCRUD },
  data() {
    return {
      dataFormatting: function(lendings) {
        return lendings.map(lending => {
          lending.reader = lending.reader.fullName;
          lending.book = lending.book.title;
          lending.deadline = new Date(
            Date.parse(lending.deadline)
          ).toLocaleString(navigator.language || navigator.userLanguage);
          return lending;
        });
      }
    };
  }
};
</script>
