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

      <!-- <div id="btnTagContainer" class="sticky-top text-left" v-if="filterByCampus">
        <button id="btnTag" type="button" class="btn btn-primary">
          {{ filterCampusValue }}
          <i id="iconTag" class="bi bi-x-lg" @click="disableFilter()"></i>
        </button>
      </div> -->

      <div class="sticky-top d-flex flex-wrap row mb-4">
        <div class="col-12">
          <div
            id="btnTagContainer"
            class="sticky-top text-left"
            v-if="filterByCampus"
          >
            <button id="btnTag" type="button" class="btn btn-primary">
              {{ filterCampusValue }}
              <i id="iconTag" class="bi bi-x-lg" @click="disableFilter()"></i>
            </button>
          </div>
          <div class="form-input">
            <span class="icon" id="spanIcon">
              <i id="iconSearch" class="bi bi-search"></i>
            </span>

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
              Campus
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
          <p v-if="realListLS"></p>

          <p>{{ realListLS }}</p>
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

      <div class="table-responsive">
        <table class="table table-light table-sm table-striped">
          <!-- table table-striped table-bordered table-hover -->
          <thead class="thead-light">
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="info in filterdirectory" :key="info.name">
              <td>
                <a
                  href="#"
                  v-on:click="addDirectoryClickToHistory(info.id, info.name)"
                  class="LinkBold"
                >
                  {{ info.name }}
                </a>
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
      arrayInLocal: false,
      realOne: [],
      realSecond: [],
      realListLS: [],
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
          name: "Will, Marie",
          phone: "4352837435",
          email: "emailemail@.com",
          deparment: "Greenwood Student Center",
          building: "Greenwood Student Center",
          campus: "Richfield",
        },

        {
          id: 3,
          name: "Adams, Becky",
          phone: "884-5645-5454",
          email: "emailemail@.com",
          deparment: "Center for Global Engagement",
          building: "Noyes building",
          campus: "Ephraim",
        },

        {
          id: 4,
          name: "Daniel, Michael",
          phone: "(801)-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "AC",
          campus: "Ephraim",
        },

        {
          id: 5,
          name: "Cruz, Emil",
          phone: "802-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "AC",
          campus: "Richfield",
        },

        {
          id: 6,
          name: "Jules, Jaiden",
          phone: "802-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "AC",
          campus: "Richfield",
        },

        {
          id: 7,
          name: "Martinez, Amy",
          phone: "802-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "Humanities",
          campus: "Ephraim",
        },

        {
          id: 7,
          name: "Martinez, Amy",
          phone: "802-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "Humanities",
          campus: "Ephraim",
        },
        {
          id: 7,
          name: "Martinez, Amy",
          phone: "802-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "Humanities",
          campus: "Ephraim",
        },
        {
          id: 7,
          name: "Martinez, Amy",
          phone: "802-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "Humanities",
          campus: "Ephraim",
        },
        {
          id: 7,
          name: "Martinez, Amy",
          phone: "802-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "Humanities",
          campus: "Ephraim",
        },
        {
          id: 7,
          name: "Martinez, Amy",
          phone: "802-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "Humanities",
          campus: "Ephraim",
        },
        {
          id: 7,
          name: "Martinez, Amy",
          phone: "802-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "Humanities",
          campus: "Ephraim",
        },
        {
          id: 7,
          name: "Martinez, Amy",
          phone: "802-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "Humanities",
          campus: "Ephraim",
        },
        {
          id: 7,
          name: "Martinez, Amy",
          phone: "802-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "Humanities",
          campus: "Ephraim",
        },
        {
          id: 7,
          name: "Martinez, Amy",
          phone: "802-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "Humanities",
          campus: "Ephraim",
        },
        {
          id: 7,
          name: "Martinez, Amy",
          phone: "802-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "Humanities",
          campus: "Ephraim",
        },
        {
          id: 7,
          name: "Martinez, Amy",
          phone: "802-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "Humanities",
          campus: "Ephraim",
        },
        {
          id: 7,
          name: "Martinez, Amy",
          phone: "802-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "Humanities",
          campus: "Ephraim",
        },
        {
          id: 7,
          name: "Martinez, Amy",
          phone: "802-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "Humanities",
          campus: "Ephraim",
        },
        {
          id: 7,
          name: "Martinez, Amy",
          phone: "802-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "Humanities",
          campus: "Ephraim",
        },
        {
          id: 7,
          name: "Martinez, Amy",
          phone: "802-5645-5454",
          email: "emailemail@.com",
          deparment: "Athletics",
          building: "Humanities",
          campus: "Ephraim",
        },
        {
          id: 7,
          name: "Martinez, Amy",
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

  
    //     createArray(searchId, searchName) {
    //   var array = [];

    //   if (this.arrayInLocal == false) {
    //     this.arrayInLocal = true;
    //   var  newRecentSearch = {
    //       id: searchId,
    //       name: searchName,
    //     };

    //     array.push(newRecentSearch);
    //     this.saveArrayToLS(array);
    //   } else {

    //     newRecentSearch = {
    //       id: searchId,
    //       name: searchName,
    //     };

    //  this.saveArrayToLS(newRecentSearch);

    //   }

    // },

    addDirectoryClickToHistory(clickId, clickName) {
      var history = localStorage.getItem("reallist");
      if (history) {
        var historyArray = JSON.parse(history);
        historyArray.push({ id: clickId, name: clickName });
        localStorage.setItem("reallist", JSON.stringify(historyArray));
      } else {
        const newHistoryArray = [{ id: clickId, name: clickName }];
        const newHistoryString = JSON.stringify(newHistoryArray);
        localStorage.setItem("reallist", newHistoryString);
      }

      this.realListLS = JSON.parse(localStorage.getItem("reallist"));

     
    },

    // getListFromLS()
    // {
    //     this.realListLS = localStorage.getItem("reallist");
    //     return

    // }
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
  font-size: 12px;
  border-color: rgb(244, 121, 32);
}

.btn-group > button:hover {
  box-shadow: 2px 2px;
  background-color: rgb(14, 24, 66);
}

a {
  color: rgb(244, 121, 32);
  text-decoration: none;
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


