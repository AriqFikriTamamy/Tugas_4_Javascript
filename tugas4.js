function tinggiBadan() {
  var siswa1 = 190;
  var siswa2 = 178;
  var siswa3 = 160;

  if (siswa1>siswa2) {
    if (siswa1>siswa3) {
      console.log("tertinggi")
    }else {
      console.log("sedang")
    }
  }else {
    if (siswa1<siswa3) {
      console.log("terendah")
    }else {
      console.log("sedang")
    }
  }

  if (siswa2>siswa3) {
    if (siswa2>siswa1) {
      console.log("tertinggi")
    }else {
      console.log("sedang")
    }
   }else {
     if (siswa2<siswa1) {
       console.log("sedang")
     }else {
       console.log("terendah")
     }
  }

  if (siswa3>siswa1) {
    if (siswa3>siswa2) {
      console.log("tertinggi")
    }else {
      console.log("sedang")
    }
  }else {
    if (siswa3<siswa2) {
      console.log("terendah")
    }else {
      console.log("sedang")
    }
  }
}
tinggiBadan()
