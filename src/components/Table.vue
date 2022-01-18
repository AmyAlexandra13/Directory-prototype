<template>
  <div class="container p-4">
    <div class="mx-auto">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="https://snow.edu/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Directory</li>
        </ol>
      </nav>
    </div>
    <!-- here closes the breadcrumb div -->

    <div class="form-group row">
      <div class="col-sm-2 text-end">
        <label class="col-form-label" for="nameDirectory2"> Name: </label>
      </div>

      <div class="col-sm-10">
        <input class="form-control" v-model="nameDirectory" />
      </div>

      <div class="col-sm-10">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="info in filterdirectory" :key="info.name">
              <td>
                {{ info.name }}
              </td>

              <td>
                {{ info.phone }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Table",
  data() {
    return {
      nameDirectory: "",
      directory: [
        {
          id: 1,
          name: "Abid, Wissem",
          phone: "4352837435",
        },

        {
          id: 2,
          name: "Marie, Will",
          phone: "4352837435",
        },

        {
          id: 3,
          name: "Becky Adams",
          phone: "884-5645-5454",
        },
      ],
    };
  },

  methods:
  {
    upperCaseFilter(filterValue, nameValue)
    {
     const filterName = nameValue.toUpperCase();
     const simpleFilter = filterValue.toUpperCase(); //this.nameDirectory but it does not work
      return filterName.includes(simpleFilter);
      
    },

    phoneNumberFilter(filterValue, phoneValue)
    {
      const filterPhone = phoneValue.toString();
     const simpleFilter = filterValue.toString(); //this.nameDirectory but it does not work, ask Alex
      return filterPhone.includes(simpleFilter);
    }
  },

  computed: {
    filterdirectory() {
      const listdisplay =
        this.nameDirectory === ""
          ? this.directory
          : this.directory.filter((r) =>
             this.upperCaseFilter(this.nameDirectory, r.name) ||
             this.phoneNumberFilter(this.nameDirectory, r.phone) //|| r.phone.includes(this.nameDirectory)
            );
      return listdisplay.sort((a, b) => a.name > b.name);
   
    },
  },

  
};



</script>

<style scoped>
</style>
