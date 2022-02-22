<template>
  <div class="container p-4">
    <div class="col-lg-12">
      <div class="mx-auto">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="https://snow.edu/">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Directory
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <!-- here closes the breadcrumb div -->

    <div class="body-content" id="containertable">
      <div class="text-left">
        <h1 id="titleDirectory">Directory Table copy 2</h1>
        <p>{{ filterByCampus }}</p>
      </div>

      <div class="row mb-4">
        <div class="col-12">
          <div class="input-group">
            <input
              class="form-control mr-sm-2"
              placeholder="Search for name, deparment, and building..."
              v-model.trim="nameDirectory"
            />

            <button
              class="bi bi-sliders btn dropdown-toggle"
              type="button"
              id="filterBtn"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filters
            </button>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" v-on:click="selectCampus('Ephraim')"
                  >Ephraim Campus</a
                >
              </li>
              <li><a class="dropdown-item" href="#">Richfield Campus</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-12 text-center">
          <div
            id="btnGroup"
            class="btn-group btn-group-sm"
            role="group"
            aria-label="Small button group"
          >
            <button type="button" class="btn btn-outline-dark">
              <a href="#A">A</a>
            </button>
            <li class="list-inline-item"><a href="#B">B</a></li>
            <li class="list-inline-item"><a href="#C">C</a></li>
            <li class="list-inline-item"><a href="#D">D</a></li>
            <li class="list-inline-item"><a href="#E">E</a></li>
            <li class="list-inline-item"><a href="#F">F</a></li>
            <li class="list-inline-item"><a href="#G">G</a></li>
            <li class="list-inline-item"><a href="#H">H</a></li>
            <li class="list-inline-item"><a href="#I">I</a></li>
            <li class="list-inline-item"><a href="#J">J</a></li>
            <li class="list-inline-item"><a href="#K">K</a></li>
            <li class="list-inline-item"><a href="#L">L</a></li>
            <li class="list-inline-item"><a href="#M">M</a></li>
            <li class="list-inline-item"><a href="#N">N</a></li>
            <li class="list-inline-item"><a href="#O">O</a></li>
            <li class="list-inline-item"><a href="#P">P</a></li>
            <li class="list-inline-item"><a href="#Q">Q</a></li>
            <li class="list-inline-item"><a href="#R">R</a></li>
            <li class="list-inline-item"><a href="#S">S</a></li>
            <li class="list-inline-item"><a href="#T">T</a></li>
            <li class="list-inline-item"><a href="#U">U</a></li>
            <li class="list-inline-item"><a href="#V">V</a></li>
            <li class="list-inline-item"><a href="#W">W</a></li>
            <li class="list-inline-item"><a href="#X">X</a></li>
            <li class="list-inline-item"><a href="#Y">Y</a></li>
            <li class="list-inline-item"><a href="#Z">Z</a></li>
          </div>
        </div>
      </div>

      <div class="table-responsive table-sm">
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
    <!-- here closes the containertable -->
  </div>
</template>


<script>
export default {
  name: "Table2",
  data() {
    return {
      filterByCampus: false,
      filterCampusValue: "",
      message: "",
      nameDirectory: "",
      directory: [
        {
          id: 1,
          name: "Abid, Wissem",
          phone: "4352837435",
          deparment: "Center for Global Engagement",
          building: "Noyes building",
          campus: "Ephraim",
        },

        {
          id: 2,
          name: "Marie, Will",
          phone: "4352837435",
          deparment: "Greenwood Student Center",
          building: "Greenwood Student Center",
          campus: "Richfield",
        },

        {
          id: 3,
          name: "Becky Adams",
          phone: "884-5645-5454",
          deparment: "Center for Global Engagement",
          building: "Noyes building",
          campus: "Ephraim",
        },

        {
          id: 4,
          name: "Michael Daniel",
          phone: "(801)-5645-5454",
          deparment: "Athletics",
          building: "AC",
          campus: "Ephraim",
        },

        {
          id: 5,
          name: "Emil Cruz",
          phone: "802-5645-5454",
          deparment: "Athletics",
          building: "AC",
          campus: "Richfield",
        },

        {
          id: 6,
          name: "JAIDEN JULES",
          phone: "802-5645-5454",
          deparment: "Athletics",
          building: "AC",
          campus: "Richfield",
        },

        {
          id: 7,
          name: "Amy Martinez",
          phone: "802-5645-5454",
          deparment: "Athletics",
          building: "Humanities",
          campus: "Ephraim",
        },
      ],
    };
  },

  methods: {
    upperCaseFilter(filterValue, nameValue) {
      const filterName = nameValue.toUpperCase();
      const simpleFilter = filterValue.toUpperCase();
      return filterName.includes(simpleFilter);
    },

    phoneNumberFilter(filterValue, phoneValue) {
      const filterPhone = phoneValue.toString();
      const simpleFilter = filterValue.toString();
      return filterPhone.includes(simpleFilter);
    },

    deparmentFilter(filterValue, deparmentValue) {
      const filterDeparment = deparmentValue.toUpperCase();
      const simpleFilter = filterValue.toUpperCase();
      return filterDeparment.includes(simpleFilter);
    },

    buildingFilter(filterValue, buildingValue) {
      const filterbuilding = buildingValue.toUpperCase();
      const simpleFilter = filterValue.toUpperCase();
      return filterbuilding.includes(simpleFilter);
    },

    selectCampus(campus) {
      this.filterByCampus = true;
      this.filterCampusValue = campus;
    },

    FilterBySelectedCampus(campusValue, selectedCampusValue) {
      console.log(campusValue, selectedCampusValue);
      if (campusValue == selectedCampusValue) {
        return true;
      } else {
        return false;
      }
    },

    SortListAlphabetically(listDisplay) {
      return listDisplay.sort((a, b) => {
        let fa = a.name,
          fb = b.name;
        if (fa < fb) {
          return -1;
        } else {
          return 1;
        }
      });
    },
  },

  computed: {
    filterdirectory() {
      if (this.filterByCampus == true) {
        const listdisplay = this.directory.filter(
          (r) =>
            this.FilterBySelectedCampus(r.campus, this.filterCampusValue) &&
            (this.upperCaseFilter(this.nameDirectory, r.name) ||
              this.phoneNumberFilter(this.nameDirectory, r.phone) ||
              this.deparmentFilter(this.nameDirectory, r.deparment) ||
              this.buildingFilter(this.nameDirectory, r.building))
        );
        return this.SortListAlphabetically(listdisplay);
      } else {
        const listdisplay =
          this.nameDirectory === ""
            ? this.directory
            : this.directory.filter(
                (r) =>
                  this.upperCaseFilter(this.nameDirectory, r.name) ||
                  this.phoneNumberFilter(this.nameDirectory, r.phone) ||
                  this.deparmentFilter(this.nameDirectory, r.deparment) ||
                  this.buildingFilter(this.nameDirectory, r.building)
              );
        return this.SortListAlphabetically(listdisplay);
      }
    },
  },

  // ephraimCampus(){
  //   this.message = "you are filtering for Ephraim";
  //   return this.directory.filter(
  //     (list) => {
  //       return list.building == "Ephraim";
  //     });
  // }

  // ephraimCampus(){
  //   return this.directory.filter(
  //     (list) => {
  //       return list.building == "Ephraim";
  //     });

  // }

  //  filterdirectory2() {
  //   return this.directory.filter((list) =>{
  //     return list.campus.match(this.campusmatch);
  //   })

  // },

  // filterdirectory2(){
  //   return this.directory.filter((listdi) => {
  //     return listdi.name.match(this.nameDirectory);
  //   });
  // },
};

// Notes
//  || r.phone.includes(this.nameDirectory)
</script>

<style scoped lang="scss">
#titleDirectory {
  position: relative;
  font-family: "Bebas Neue", cursive;
  color: rgb(14, 24, 66);
}

#filterBtn {
  color: rgb(14, 24, 66);
}

#btnGroup a {
  text-decoration: none;
  color: orange;
}
</style>


