let fname = document.getElementById("name");
let mhindi = document.getElementById("hindi");
let menglish = document.getElementById("english");
let mphysics = document.getElementById("physics");
let mchemistry = document.getElementById("chemistry");
let mmath = document.getElementById("math");
let mclass = document.getElementById("class");
let mark;
let percent;
//Name output



const rname = () => {
   document.getElementById("oname").innerHTML = fname.value;
   document.getElementById("ohindi").innerHTML = mhindi.value;
   document.getElementById("oenglish").innerHTML = menglish.value;
   document.getElementById("omath").innerHTML = mmath.value;
   document.getElementById("ophysics").innerHTML = mphysics.value;
   document.getElementById("ochemistry").innerHTML = mchemistry.value;
   document.getElementById("oclass").innerHTML = mclass.value;
   mark = parseInt(mhindi.value) + parseInt(menglish.value) + parseInt(mphysics.value) + parseInt(mchemistry.value) + parseInt(mmath.value);
   document.getElementById("ototal").innerHTML = mark;
   percent = mark / 500 * 100 + "%";
   document.getElementById("oParasentage").innerHTML = percent;
   let devi;
   if ( mark>=300) {
      devi = "First";
   }
   else if( mark>=224) {
      devi = "Second";
   }
   else if( mark>=165) {
      devi = "Third";
   }
    else{
      devi = "Fail"
      
   };
   document.getElementById("oresult").innerHTML = devi;
   document.getElementById('tbl').style.display = 'block';
   document.getElementById('start').style.display = 'none';
   return rname;
};

const marksheet = () => {
   document.getElementById('start').style.display = 'block';
   document.getElementById('tbl').style.display = 'none';
};
   function PrintDiv() {
       window.print();
};




 




