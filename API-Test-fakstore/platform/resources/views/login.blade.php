<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">
    {{-- Bootstrap Icon --}}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
    {{-- CSS --}}
    <link rel="stylesheet" href="/css/welcome.css">
    <link rel="stylesheet" href="/css/style.css">
    <title>Platform</title>
  </head>
  <body>
      <div class="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
          <div class="modal-dialog" role="document">
            <div class="modal-content rounded-5 shadow">
              <div class="modal-header p-5 pb-4 border-bottom-0">
                <!-- <h5 class="modal-title">Modal title</h5> -->
                      @if(session()->has('berhasil'))
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                          {{ session('berhasil') }}
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                      @endif
                
                      @if(session()->has('GagalMasuk'))
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                          {{ session('GagalMasuk') }}
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                      @endif
                <h2 class="fw-bold mb-0">Masuk</h2>
              </div>
        
              <div class="modal-body p-5 pt-0">
                <form action="/masuk" method="post">
                    @csrf
                    <div class="form-floating mb-3">
                        <input type="email" name="email" class="form-control rounded-4 @error('email') is-invalid @enderror" id="email" placeholder="name@example.com" autofocus required value="{{ old('email') }}">
                        <label for="floatingInput">Email</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" name="password" class="form-control rounded-4" id="floatingPassword" placeholder="Password" required>
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">Masuk</button>
                    <small class="text-muted">Belum Terdaftar? Daftar di bawah ini</small>
                    <hr class="my-4">
                    <h2 class="fs-5 fw-bold mb-3">Daftar</h2>
                    <a href="/daftarklien" class="w-100 py-2 mb-2 btn btn-outline-primary rounded-4">Daftar sebagai Klien</a>
                    <a href="/daftarfasilitator" class="w-100 py-2 mb-2 btn btn-outline-primary rounded-4">Daftar sebagai Fasilitator</a>
                </form>
              </div>
            </div>
          </div>
      </div>
  </body>
  