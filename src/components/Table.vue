<template>
  <div class="container p-4">
    <!-- <div class="col-lg-12"> -->
    <div class="mx-auto">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="https://snow.edu/">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Directory</li>
        </ol>
      </nav>
    </div>
    <!-- </div> -->
    <!-- here closes the breadcrumb div -->

    <div class="body-content" id="containertable">
      <div class="text-left">
        <h1 id="titleDirectory">Directory</h1>
      </div>

      <div class="text-left" v-if="filterByCampus">
        <button id="btnTag" type="button" class="btn btn-primary">
          {{ filterCampusValue }}
          <i id="iconTag" class="bi bi-x-lg" @click="disableFilter()"></i>
        </button>
      </div>

      <div class="d-flex flex-wrap row mb-4">
        <div class="col-12">
          <div class="form-input">
            <span class="icon" id="spanIcon">
              <i id="iconSearch" class="bi bi-search"></i>
            </span>

            <!-- <span v-if="filterByCampus" class="icon2" id="spanIcon">
              <p id="campusTag">{{filterCampusValue}} </p>
             
            </span>  -->

            <input
              id="inputSearch"
              ref="inputFocus"
              class="form-control mr-sm-2"
              placeholder="Search for name, deparment, and building..."
              v-model.trim="nameDirectory"
            />

            <button
              class="bi bi-sliders btn dropdown-toggle filterBtn"
              type="button"
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

              <li>
                <a class="dropdown-item" v-on:click="selectCampus('Richfield')"
                  >Richfield Campus</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="d-flex flex-wrap row mb-4">
        
        <div class="col-md-4">
          <a
            title="Full Employee Phone List"
            href="https://snow.edu/directory/employee_phone.php"
            target="_blank"
            >
            <img
              src="https://snow.edu/directory/images/printphone.jpg"
              alt="Snow College Phone List"
              class="img-fluid"
            />
          </a>
        </div>

        <div class="col-md-4">
          <a
            title="Full Employee Phone List"
            href="https://snow.edu/directory/employee_phone.php?campus=Ephraim"
             target="_blank"
            ><img
              src="https://snow.edu/directory/images/printephraim.jpg"
              alt="Snow College Phone List"
              class="img-fluid"
            />
          </a>
        </div>

        <div class="col-md-3">
          <a
            title="Full Employee Phone List"
            href="https://snow.edu/directory/employee_phone.php?campus=Richfield"
             target="_blank"
            ><img
              src="https://snow.edu/directory/images/printrichfield.jpg"
              alt="Snow College Phone List"
              class="img-fluid"
            />
          </a>
        </div>
       
      </div>

      <div class="d-flex flex-wrap row mb-4">
        <div class="col-11">
          <div
            id="btnGroup"
            class="d-block btn-group"
            role="group"
            aria-label="First group"
          >
            <button type="button" class="btn btn-outline-dark">
              <a href="#A">A</a>
            </button>
            <button type="button" class="btn btn-outline-dark">
              <a href="#B">B</a>
            </button>

            <button class="btn btn-outline-dark">
              <a href="#C">C</a>
            </button>

            <button class="btn btn-outline-dark">
              <a href="#D">D</a>
            </button>
            <button class="btn btn-outline-dark">
              <a href="#E">E</a>
            </button>

            <button class="btn btn-outline-dark">
              <a href="#F">F</a>
            </button>

            <button class="btn btn-outline-dark">
              <a href="#G">G</a>
            </button>

            <button class="btn btn-outline-dark">
              <a href="#H">H</a>
            </button>

            <button class="btn btn-outline-dark">
              <a href="#I">I</a>
            </button>

            <button class="btn btn-outline-dark">
              <a href="#J">J</a>
            </button>

            <button class="btn btn-outline-dark">
              <a href="#K">K</a>
            </button>

            <button class="btn btn-outline-dark">
              <a href="#L">L</a>
            </button>

            <button class="btn btn-outline-dark">
              <a href="#M">M</a>
            </button>

            <button class="btn btn-outline-dark">
              <a href="#N">N</a>
            </button>

            <button class="btn btn-outline-dark">
              <a href="#O">O</a>
            </button>
            <button class="btn btn-outline-dark">
              <a href="#P">P</a>
            </button>

            <button class="btn btn-outline-dark">
              <a href="#Q">Q</a>
            </button>

            <button class="btn btn-outline-dark">
              <a href="#R">R</a>
            </button>

            <button class="btn btn-outline-dark">
              <a href="#S">S</a>
            </button>

            <button class="btn btn-outline-dark">
              <a href="#T">T</a>
            </button>

            <button class="btn btn-outline-dark">
              <a href="#U">U</a>
            </button>

            <button class="btn btn-outline-dark">
              <a href="#V">V</a>
            </button>

            <button class="btn btn-outline-dark">
              <a href="#W">W</a>
            </button>

            <button class="btn btn-outline-dark">
              <a href="#X">X</a>
            </button>
            <button class="btn btn-outline-dark">
              <a href="#Y">Y</a>
            </button>

            <button class="btn btn-outline-dark">
              <a href="#Z">Z</a>
            </button>
          </div>
        </div>
      </div>

      <div class="table-sm">
        <table class="table table-striped table-bordered table-hover">
          <thead class="bold">
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="info in filterdirectory" :key="info.name">
              <td>
                <a class="LinkBold" href="#"> {{ info.name }} </a>
              </td>

              <td>
                <a href="#"> {{ info.phone }} </a>
              </td>

              <td>
                <a href="#"> {{ info.email }} </a>
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
      filterByCampus: false,
      filterCampusValue: "",
      message: "",
      nameDirectory: "",
      directory: [
        {
          id: 1,
          name: "Abid, Wissem",
          phone: "4352837435",
          email: "emailemail@.com",
          deparment: "Center for Global Engagement",
          building: "Noyes building",
          campus: "Ephraim",
        },

        {
          id: 2,
          name: "Marie, Will",
          phone: "4352837435",
          email: "emailemail@.com",
          deparment: "Greenwood Student Center",
          building: "Greenwood Student Center",
          campus: "Richfield",
        },

        {
          id: 3,
          name: "Becky Adams",
          phone: "884-5645-5454",
          email: "emailemail@.com",
          deparment: "Center for Global Engagement",
          building: "Noyes building",
          campus: "Ephraim",
        },

        {
          id: 4,
          name: "Michael Daniel",
          phone: "(801)-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "AC",
          campus: "Ephraim",
        },

        {
          id: 5,
          name: "Emil Cruz",
          phone: "802-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "AC",
          campus: "Richfield",
        },

        {
          id: 6,
          name: "JAIDEN JULES",
          phone: "802-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "AC",
          campus: "Richfield",
        },

        {
          id: 7,
          name: "Amy Martinez",
          phone: "802-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "Humanities",
          campus: "Ephraim",
        },
      ],
    };
  },

  methods: {
    FocusInput() {
      this.$refs.inputFocus.focus();
    },

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
      this.FocusInput();
      this.AddCampusTag();
    },

    filterBySelectedCampus(campusValue, selectedCampusValue) {
      console.log(campusValue, selectedCampusValue);
      if (campusValue == selectedCampusValue) {
        return true;
      } else {
        return false;
      }
    },

    indicateUser(message2) {
      this.message = message2;
    },

    disableFilter() {
      this.filterCampusValue = "";
      this.FocusInput();
      return (this.filterByCampus = false);
    },

    sortListAlphabetically(listDisplay) {
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

  mounted() {
    this.FocusInput();
  },

  computed: {
    filterdirectory() {
      if (this.filterByCampus == true) {
        const listdisplay = this.directory.filter(
          (r) =>
            this.filterBySelectedCampus(r.campus, this.filterCampusValue) &&
            (this.upperCaseFilter(this.nameDirectory, r.name) ||
              this.phoneNumberFilter(this.nameDirectory, r.phone) ||
              this.deparmentFilter(this.nameDirectory, r.deparment) ||
              this.buildingFilter(this.nameDirectory, r.building))
        );
        return this.sortListAlphabetically(listdisplay);
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
        return this.sortListAlphabetically(listdisplay);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.btn-group > button {
  font-size: 14px;
  border-color: rgb(244, 121, 32);
}

a {
  color: rgb(244, 121, 32);
  text-decoration: none;
}

table {
  background-color: white;
}

#titleDirectory {
  position: relative;
  font-family: "Bebas Neue", cursive;
  color: rgb(14, 24, 66);
}

#btnTag {
  border-radius: 12px;
  background-color: rgb(244, 121, 32);
  border: none;
}

#iconTag:hover {
  box-shadow: 2px 2px;
 background-color: rgb(14, 24, 66);
}

.filterBtn {
  color: rgb(14, 24, 66);
}

.LinkBold {
  text-decoration: none;
  color: rgb(244, 121, 32);
  font-weight: bold;
}

.form-input {
  position: relative;
  display: flex;
  margin: 10px auto;
  align-items: center;
  justify-content: center;

  #inputSearch {
    display: block;
    border: 2px solid #eee;
    padding: 5px 10px 5px 50px;
    line-height: 30px;
    outline: 0;
  }
  .icon {
    position: absolute;
    display: flex;
    left: 15px;
    top: 10;
  }

  .icon2 {
    position: absolute;
    display: block;
    left: 35px;
    top: 10;
  }
}
</style>


