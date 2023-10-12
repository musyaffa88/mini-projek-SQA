@extends('layouts.second')

@section('container')
<div class="row justify-content-center">
    <div class="col-md-4">
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
        <main class="form-signin">
            <h1 class="h3 mb-3 fw-normal text-center">Masuk sebagai Klien</h1>
            <form action="/masukklien" method="post">
              @csrf
              <div class="form-floating">
                <input type="email" name="email" class="form-control @error('email') is-invalid @enderror" id="email" placeholder="name@example.com" autofocus required value="{{ old('email') }}">
                <label for="email">Email</label>
                @error('email')
                  <div class="invalid-feedback">
                    {{ $message }}
                  </div>
                @enderror
              </div>
              <div class="form-floating">
                <input type="password" name="password" class="form-control" id="password" placeholder="Password" required>
                <label for="password">Password</label>
              </div>
          
              <button class="w-100 btn btn-lg btn-primary" type="submit">Masuk</button>
            </form>
            <small class="d-block text-center mt-3">Belum Terdaftar? <a href="/daftarklien">Daftar Sekarang!</a></small>
            <a href="/" class="w-100 btn btn-outline-primary mt-3">Kembali</a>
          </main>
        
    </div>
</div>
  
@endsection