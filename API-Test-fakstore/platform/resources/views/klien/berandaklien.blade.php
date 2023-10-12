@extends('layouts.main')

@section('container')
<main>
{{-- <h1 class="visually-hidden">Heroes examples</h1> --}}

  <div class="text-center">
    <h1 class="display-5 fw-bold">Bangun Platform Anda!</h1>
    <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dolore tempore. Maxime a alias at laudantium perferendis enim! Nemo, delectus.</p>
        @if(session()->has('success'))
        <div class="alert alert-success" role="alert">
          {{ session('success') }}
        </div>
        @endif
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3"  data-bs-toggle="modal" data-bs-target="#tambahPlatform" data-bs-whatever="Tambah Platform Baru"><i class="bi bi-plus-square"></i> Buat Platform</button>
            {{-- Tambah Platform --}}
              <div class="modal fade text-start" id="tambahPlatform" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Tambah Platform Baru</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form action="/tambahplatform" method="post">
                        @csrf
                        <div class="mb-3">
                          <label for="name" class="col-form-label">Nama Platform</label>
                          <input type="text" class="form-control @error('nama') is-invalid @enderror" id="nama" name="nama" autofocus required>
                          @error('nama')
                              <div class="invalid-feedback">
                                {{ $message }}
                              </div>
                          @enderror
                        </div>
                        <div class="mb-3">
                          <label for="deskripsi" class="col-form-label">Kegunaan/Deskripsi:</label>
                          <textarea class="form-control  @error('deskripsi') is-invalid @enderror" id="deskripsi" name="deskripsi" required></textarea>
                          @error('deskripsi')
                          <div class="invalid-feedback">
                            {{ $message }}
                          </div>
                          @enderror
                        </div>
                        <div class="input-group mb-3">
                          <label class="input-group-text" for="fasilitator_id">Fasilitator</label>
                          <select class="form-select" name="fasilitator_id" id="fasilitator_id">
                                <option selected>Pilih Satu</option>
                                @foreach ($fasilitator as $f)
                                <option value="{{ $f->id }}">{{ $f->name }}</option>
                                @endforeach
                          </select>        
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-light" data-bs-dismiss="modal">Tutup</button>
                          <button type="submit" class="btn btn-primary">Tambah</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </div>
  </div>

  <div class="px-4 pt-5 my-5 border-bottom">
    <h5 class="display-6 fw-bold text-center">Platform Anda</h5>
      <div class="mx-auto"> 
        @foreach($platforms as $platform)
        <div class="card mt-3 mb-3 card text-center">
            <h5 class="card-header text-center">{{ $platform->nama }}</h5>
            <div class="card-body">
                <p class="card-text">{{ $platform->deskripsi }}</p>
                <a href="/strategiklien/{{ $platform->id }}" class="btn btn-primary btn-sm"><i class="bi bi-info-square"></i> Strategi</a>
                <a href="/indikatorklien/{{ $platform->id }}" class="btn btn-primary btn-sm"><i class="bi bi-info-square"></i> Indikator</a>
                <a href="/dashboardklien/{{ $platform->id }}" class="btn btn-primary btn-sm"><i class="bi bi-info-square"></i> Dashboard</a>
                <p></p>
                <button class="btn btn-outline-primary btn-sm"  data-bs-toggle="modal" data-bs-target="#editPlatform{{ $platform->id }}" data-bs-whatever="Edit Data Platform"><i class="bi bi-pencil-square"></i> Edit</button>
                {{-- Edit Data Platform --}}
                <div class="modal fade text-start" id="editPlatform{{ $platform->id }}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Data Platform</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      {{-- Edit Data --}}
                      <div class="modal-body">
                        <form action="/editplatform/{{ $platform->id }}" method="post">
                          @method('put')
                          @csrf
                          <div class="mb-3">
                            <label for="name" class="col-form-label">Nama Platform</label>
                            <input type="text" class="form-control @error('nama') is-invalid @enderror" id="nama" name="nama" autofocus required value="{{ $platform->nama }}">
                            @error('nama')
                                <div class="invalid-feedback">
                                  {{ $message }}
                                </div>
                            @enderror
                          </div>
                          <div class="mb-3">
                            <label for="deskripsi" class="col-form-label">Kegunaan/Deskripsi</label>
                            <textarea class="form-control  @error('deskripsi') is-invalid @enderror" id="deskripsi" name="deskripsi" required value="{{ $platform->deskripsi }}"></textarea>
                            @error('deskripsi')
                            <div class="invalid-feedback">
                              {{ $message }}
                            </div>
                            @enderror
                          </div>
                          <div class="input-group mb-3">
                            <label class="input-group-text" for="fasilitator_id">Fasilitator</label>
                            <select class="form-select" name="fasilitator_id" id="fasilitator_id">
                                  @foreach ($fasilitator as $f)
                                  <option value="{{ $f->id }}" @if($f->id === $platform->fasilitator_id) selected @endif>{{ $f->name }}</option>
                                  @endforeach
                            </select>        
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                            <button type="submit" class="btn btn-primary">Edit</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <form action="/hapusplatform/{{ $platform->id }}" method="post" class="d-inline">
                  @method('delete')
                  @csrf
                  <button class="btn btn-outline-primary btn-sm" onclick="return confirm('Apakah anda yakin?')"><i class="bi bi-trash"></i> Hapus</button>
                </form>
                <p>Dibuat : {{ $platform->created_at }} | Diupdate : {{ $platform->updated_at }}</p>
            </div>
                <p class="card-header text-center">Fasilitator : {{ $platform->fasilitator->name }} </p>
        </div>
      </div>
        @endforeach
  </div>
</main>

@endsection
