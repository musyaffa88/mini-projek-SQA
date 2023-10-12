@extends('layouts.main')

@section('container')
<main>
  {{-- <h1 class="visually-hidden">Heroes examples</h1> --}}
  {{-- @foreach($platform as $p) --}}
  <div class="text-center">
    <h1 class="display-5 fw-bold">Indikator Platform {{ $platform->nama }}</h1>
    <p>Fasilitator : {{ $platform->fasilitator->name }}</p>
    <div class="col-lg-6 mx-auto border-bottom"">
        @if(session()->has('success'))
        <div class="alert alert-success" role="alert">
          {{ session('success') }}
        </div>
        @endif
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3 pt-3 pb-4">
          <a href="/strategiklien/{{ $platform->id }}" class="btn btn-primary"><i class="bi bi-info-square"></i> Strategi</a>
          <a href="/indikatorklien/{{ $platform->id }}" class="btn btn-primary"><i class="bi bi-info-square"></i> Indikator</a>
          <a href="/dashboardklien/{{ $platform->id }}" class="btn btn-primary"><i class="bi bi-info-square"></i> Dashboard</a>
        </div>
        <button type="button" class="btn btn-primary px-4 gap-3 mb-3"  data-bs-toggle="modal" data-bs-target="#tambahIndikator" data-bs-whatever="Tambah Indikator Baru"><i class="bi bi-plus-square"></i> Buat Indikator</button>
        {{-- Tambah Indikator --}}
        <div class="modal fade text-start" id="tambahIndikator" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Tambah Indikator Baru</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form action="/tambahindikator" method="post">
                  @csrf
                  <div class="mb-3">
                    <label for="name" class="col-form-label">Nama Indikator</label>
                    <input type="text" class="form-control @error('nama') is-invalid @enderror" id="nama" name="nama" autofocus required>
                    @error('nama')
                        <div class="invalid-feedback">
                          {{ $message }}
                        </div>
                    @enderror
                  </div>
                  <div class="mb-3">
                    <label for="deskripsi" class="col-form-label">Deskripsi</label>
                    <textarea class="form-control  @error('deskripsi') is-invalid @enderror" id="deskripsi" name="deskripsi"></textarea>
                    @error('deskripsi')
                    <div class="invalid-feedback">
                      {{ $message }}
                    </div>
                    @enderror
                  </div>
                  <input type="hidden" name="platform_id" id="platform_id" value="{{ $platform->id }}">
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

  <div>
    <div class="mx-auto"> 
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Indikator</th>
            <th scope="col">Deskripsi</th>
            <th scope="col">Opsi</th>
          </tr>
        </thead>
        <tbody>
          @php
              $n = 0;
          @endphp
          @foreach ($indikator as $i)
            @php
              $n++;
            @endphp
          <tr>
            <th scope="row">{{ $n }}</th>
            <td>{{ $i->nama }}</td>
            <td>{{ $i->deskripsi }}</td>
            <td>
              <a href="/dataindikatorklien/{{ $i->id }}" class="btn btn-primary btn-sm"><i class="bi bi-info-square"></i></a>
              <button class="btn btn-primary btn-sm"  data-bs-toggle="modal" data-bs-target="#editIndikator{{ $i->id }}" data-bs-whatever="Edit Data Indikator"><i class="bi bi-pencil-square"></i></button>
              <div class="modal fade text-start" id="editIndikator{{ $i->id }}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Edit Indikator</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form action="/editindikator/{{ $i->id }}" method="post">
                        @method('put')
                        @csrf
                        <div class="mb-3">
                          <label for="nama" class="col-form-label">Nama Indikator</label>
                          <input type="text" class="form-control @error('nama') is-invalid @enderror" id="nama" name="nama" autofocus required value="{{ $i->nama }}">
                          @error('nama')
                              <div class="invalid-feedback">
                                {{ $message }}
                              </div>
                          @enderror
                        </div>
                        <div class="mb-3">
                          <label for="deskripsi" class="col-form-label">Deskripsi</label>
                          <textarea class="form-control  @error('deskripsi') is-invalid @enderror" id="deskripsi" name="deskripsi" value="{{ $i->deskripsi }}"></textarea>
                          @error('deskripsi')
                          <div class="invalid-feedback">
                            {{ $message }}
                          </div>
                          @enderror
                          <input type="hidden" name="platform_id" id="platform_id" value="{{ $platform->id }}">
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-light" data-bs-dismiss="modal">Tutup</button>
                          <button type="submit" class="btn btn-primary">Edit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <form action="/hapusindikator/{{ $i->id }}" method="post" class="d-inline">
                @method('delete')
                @csrf
                <button class="btn btn-primary btn-sm" onclick="return confirm('Apakah anda yakin?')"><i class="bi bi-trash"></i></button>
              </form>
            </td>
          </tr>
          @endforeach
        </tbody>
      </table>
    </div>
  </div>
</main>

@endsection
