  function article(){
    console.log('masuk sini')
    document.querySelector("#article").style.display = "block"
    document.querySelector("#article1").style.display = "none"
    document.querySelector("#article2").style.display = "none"
  }

  function article1(){
    document.querySelector("#article").style.display = "none"
    document.querySelector("#article1").style.display = "block"
    document.querySelector("#article2").style.display = "none"
  }

  function article2(){
    document.querySelector("#article").style.display = "none"
    document.querySelector("#article1").style.display = "none"
    document.querySelector("#article2").style.display = "block"
  }