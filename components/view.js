export function init() {
    var formDiv = document.getElementById('main')
    formDiv.innerHTML = `<form class="row g-3">
    <div class="mb-3 row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="text" readonly  id="staticEmail" value="email@example.com">
      </div>
    </div>
     <div class="mb-3 row">
      <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword">
      </div>
    </div>
    
  
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="submit">Submit form</button>
    </div>
  </form>`
}