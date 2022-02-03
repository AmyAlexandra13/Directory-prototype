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

    <div class="text-left">
<h1 id="titleDirectory">Directory</h1>
</div>


    <div class="form-group row">
      <div class="col-sm-10">
        <input class="form-control" placeholder="Search for name, deparment, and building..." v-model.trim="nameDirectory" />
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
      testword: "",
      nameDirectory: "",
      directory: [
        {
          id: 1,
          name: "Abid, Wissem",
          phone: "4352837435",
          deparment: "Center for Global Engagement",
          building: "Noyes building"
        },

        {
          id: 2,
          name: "Marie, Will",
          phone: "4352837435",
          deparment: "Greenwood Student Center",
          building: "Greenwood Student Center"
          
        },

        {
          id: 3,
          name: "Becky Adams",
          phone: "884-5645-5454",
          deparment: "Center for Global Engagement",
           building: "Noyes building"
        },

         {
          id: 4,
          name: "Michael Daniel",
          phone: "(801)-5645-5454",
          deparment: "Athletics",
          building: "AC"
        },

             {
          id: 5,
          name: "Emil Cruz",
          phone: "802-5645-5454",
          deparment: "Athletics",
          building: "AC"
        },

              {
          id: 6,
          name: "JAIDEN JULES",
          phone: "802-5645-5454",
          deparment: "Athletics",
          building: "AC"
        },

                 {
          id: 7,
          name: "Amy Martinez",
          phone: "802-5645-5454",
          deparment: "Athletics",
          building: "Humanities"
        },

      ],
    };
  },

  methods:
  {
    upperCaseFilter(filterValue, nameValue)
    {
     const filterName = nameValue.toUpperCase();
     const simpleFilter = filterValue.toUpperCase();//this.nameDirectory but it does not work
      return filterName.includes(simpleFilter);
      
    },



    phoneNumberFilter(filterValue, phoneValue)
    {
      const filterPhone = phoneValue.toString();
     const simpleFilter = filterValue.toString(); 
      return filterPhone.includes(simpleFilter);
    },

    deparmentFilter(filterValue, deparmentValue)
    {
      const filterDeparment = deparmentValue.toUpperCase();
      const simpleFilter = filterValue.toUpperCase();
      return filterDeparment.includes(simpleFilter);
    },

    buildingFilter(filterValue, buildingValue)
    {
      const filterbuilding = buildingValue.toUpperCase();
      const simpleFilter = filterValue.toUpperCase();
      return filterbuilding.includes(simpleFilter);
    },



    //   spaceFilter(filterValue, nameTrimValue)
    // {
    //  const spaceValue  = nameTrimValue.trim();
    //  const simpleFilter = filterValue.trim();
    //  return spaceValue.includes(simpleFilter);
    // },

  },

  computed: {
    filterdirectory() {
      const listdisplay =
        this.nameDirectory === ""
        ? this.directory  
        : this.directory.filter((r) =>
             this.upperCaseFilter(this.nameDirectory, r.name) ||
             this.phoneNumberFilter(this.nameDirectory, r.phone) ||
             this.deparmentFilter(this.nameDirectory, r.deparment) ||
             this.buildingFilter(this.nameDirectory, r.building)
            );
      return listdisplay.sort((a, b) => a.name > b.name);

  //     computed: {
	// sortedArray() {
	// 	let sortedRecipes = this.recipes;
		
	// 	sortedRecipes = sortedRecipes.sort((a,b) => {
	// 		let fa = a.title.toLowerCase(), fb = b.title.toLowerCase();
	// 		if (fa < fb) {
	// 			return -1
	// 		}
	// 		if (fa > fb) {
	// 			return 1
	// 		}
	// 		return 0
	// 	})
	// }
   
    },
  },  
};

// Notes
//  || r.phone.includes(this.nameDirectory)

</script>

<style scoped lang="scss">
#titleDirectory{
  position: relative;
 font-family: 'Bebas Neue', cursive;
 color: rgb(14, 24, 66);
}


</style>


