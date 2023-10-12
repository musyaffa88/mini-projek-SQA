@extends('layouts.main')

@section('container')
<main>
  {{-- <h1 class="visually-hidden">Heroes examples</h1> --}}
  {{-- @foreach($platform as $p) --}}
  <div class="text-center">
    <h1 class="display-5 fw-bold">Buat Strategi Anda!</h1>
    <div class="col-lg-6 mx-auto">
        @if(session()->has('success'))
        <div class="alert alert-success" role="alert">
          {{ session('success') }}
        </div>
        @endif
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3 pt-3 pb-4 border-bottom">
          <a href="/strategiklien/{{ $platform->id }}" class="btn btn-primary"><i class="bi bi-info-square"></i> Strategi</a>
          <a href="/indikatorklien/{{ $platform->id }}" class="btn btn-primary"><i class="bi bi-info-square"></i> Indikator</a>
          <a href="/dashboardklien/{{ $platform->id }}" class="btn btn-primary"><i class="bi bi-info-square"></i> Dashboard</a>
        </div>
    </div>
  </div>

  <div class="border-bottom">
    <h3 class="text-center mt-3">1. Platform Anda</h3>
    <div class="mx-auto"> 
      <div class="card mt-4 mb-4 card text-center">
            <h5 class="card-header text-center">{{ $platform->nama }}</h5>
            <div class="card-body">
                <p class="card-text">{{ $platform->deskripsi }}</p>
                <button class="btn btn-outline-primary"  data-bs-toggle="modal" data-bs-target="#editPlatform{{ $platform->id }}" data-bs-whatever="Edit Data Platform"><i class="bi bi-pencil-square"></i> Edit</button>
                <div class="modal fade text-start" id="editPlatform{{ $platform->id }}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Data Platform</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
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
                              @foreach ($fasilitator as $f)
                              <label class="input-group-text" for="fasilitator_id">Fasilitator</label>
                              <select class="form-select" name="fasilitator_id" id="fasilitator_id">
                                  <option value="{{ $f->id }}" @if($f->id === $platform->fasilitator_id) selected @endif>{{ $f->name }}</option>
                              </select>        
                              @endforeach
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
                <form action="/hapusplatform/{{ $platform->id }}" method="post" class="d-inline">
                  @method('delete')
                  @csrf
                  <button class="btn btn-outline-primary" onclick="return confirm('Apakah anda yakin?')"><i class="bi bi-trash"></i> Hapus</button>
                </form>
            </div>
            <p class="card-header text-center">Fasilitator : {{ $platform->fasilitator->name }} </p>
      </div>
    </div>
  </div>
  <div class="border-bottom">
    <h3 class="text-center mt-3">2. Pelanggan</h3>
    <div class="mx-auto"> 
      <div class="card mt-4 mb-4 card">
            <div class="card-header text-center">
              <button type="button" class="btn btn-primary btn-sm"  data-bs-toggle="modal" data-bs-target="#tambahPelanggan" data-bs-whatever="Tambah Pelanggan Baru"><i class="bi bi-plus-square"></i> Tambah Pelanggan</button>
              {{-- Tambah Pelanggan --}}
              <div class="modal fade text-start" id="tambahPelanggan" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Tambah Pelanggan Baru</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form action="/tambahpelanggan/{{ $platform->nama}}" method="post">
                        @csrf
                        <div class="mb-3">
                          <label for="nama" class="col-form-label">Nama Pelanggan</label>
                          <input type="text" class="form-control @error('nama') is-invalid @enderror" id="nama" name="nama" autofocus required>
                          @error('nama')
                              <div class="invalid-feedback">
                                {{ $message }}
                              </div>
                          @enderror
                        </div>
                        <div class="mb-3">
                          <label for="deskripsi" class="col-form-label">Deskripsi:</label>
                          <textarea class="form-control  @error('deskripsi') is-invalid @enderror" id="deskripsi" name="deskripsi" required></textarea>
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
            <div class="card-body">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Pelanggan</th>
                    <th scope="col">Deskripsi</th>
                    <th scope="col">Opsi</th>
                  </tr>
                </thead>
                <tbody>
                  @php
                      $n = 0;
                  @endphp
                  @foreach ($pelanggan as $p)
                    @php
                      $n++;
                    @endphp
                  <tr>
                    <th scope="row">{{ $n }}</th>
                    <td>{{ $p->nama }}</td>
                    <td>{{ $p->deskripsi }}</td>
                    <td>
                      <button class="btn btn-primary btn-sm"  data-bs-toggle="modal" data-bs-target="#editPelanggan{{ $p->id }}" data-bs-whatever="Edit Data Pelanggan"><i class="bi bi-pencil-square"></i></button>
                      <div class="modal fade text-start" id="editPelanggan{{ $p->id }}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Edit Data Pelanggan</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <form action="/editpelanggan/{{ $p->id }}" method="post" >
                                @method('put')
                                @csrf
                                <div class="mb-3">
                                  <label for="nama" class="col-form-label">Nama Pelanggan</label>
                                  <input type="text" class="form-control @error('nama') is-invalid @enderror" id="nama" name="nama" autofocus required value="{{ $p->nama }}">
                                  @error('nama')
                                      <div class="invalid-feedback">
                                        {{ $message }}
                                      </div>
                                  @enderror
                                </div>
                                <div class="mb-3">
                                  <label for="deskripsi" class="col-form-label">Deskripsi</label>
                                  <textarea class="form-control  @error('deskripsi') is-invalid @enderror" id="deskripsi" name="deskripsi" required value="{{ $p->deskripsi }}"></textarea>
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
                      <form action="/hapuspelanggan/{{ $p->id }}" method="post" class="d-inline">
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
    </div>
  </div>
  <div class="border-bottom">
    <h3 class="text-center mt-3">3. Interaksi</h3>
    @if($countPelanggan > 0)
      <div class="mx-auto"> 
        <div class="card mt-4 mb-4 card">
              <div class="card-header">
                <h5>Platform ke Pelanggan <button type="button" class="btn btn-primary btn-sm"  data-bs-toggle="modal" data-bs-target="#tambahPltoPel" data-bs-whatever="Tambah PltoPel Baru"><i class="bi bi-plus-square"></i></button></h5>
                {{-- Tambah PltoPel --}}
                <div class="modal fade text-start" id="tambahPltoPel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Tambah Interaksi Platform ke Pelanggan</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form action="/tambahinteraksiPltoPel/{{ $platform->nama }}" method="post" class="row g-3">
                          @csrf
                          <div class="mb-3 col-md-6">
                            <label for="asal" class="col-form-label">Asal</label>
                            <select class="form-select" name="platform_id" id="platform_id">
                              <option value="{{ $platform->id }}">{{ $platform->nama }}</option>
                            </select>
                          </div>
                          <div class="mb-3 col-md-6">
                            <label for="tujuan" class="col-form-label">Tujuan</label>
                            <select class="form-select" name="pelanggan_id" id="pelanggan_id" required>
                              @foreach ($pelanggan as $p)
                              <option value="{{ $p->id }}">{{ $p->nama }}</option>
                              @endforeach
                            </select>
                          </div>
                          <div class="mb-3 col-md-6">
                            <label for="nilai" class="col-form-label">Value</label>
                            <input class="form-control" name="nilai" id="nilai" required>
                            @error('nilai')
                            <div class="invalid-feedback">
                              {{ $message }}
                            </div>
                            @enderror
                          </div>
                          <div class="mb-3 col-md-6">
                            <label for="moneter" class="col-form-label">Moneter?</label>
                            <select class="form-select" name="moneter" id="moneter">
                              <option selected value="Tidak">Tidak</option>
                              <option value="Iya">Iya</option>
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
              <div class="card-body">
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Asal</th>
                      <th scope="col">Tujuan</th>
                      <th scope="col">Value</th>
                      <th scope="col">Moneter?</th>
                      <th scope="col">Opsi</th>
                    </tr>
                  </thead>
                  <tbody>
                    @php
                        $n = 0;
                    @endphp
                    @foreach ($interaksiPltoPel as $i)
                      @php
                        $n++;
                      @endphp
                    <tr>
                      <th scope="row">{{ $n }}</th>
                      <td>{{ $i->platform->nama }}</td>
                      <td>{{ $i->pelanggan->nama }}</td>
                      <td>{{ $i->nilai }}</td>
                      <td>{{ $i->moneter }}</td>
                      <td>
                        <button class="btn btn-primary btn-sm"  data-bs-toggle="modal" data-bs-target="#editinteraksiPltoPel{{ $i->id }}" data-bs-whatever="Edit Data Pelanggan"><i class="bi bi-pencil-square"></i> Edit</button>
                        <div class="modal fade text-start" id="editinteraksiPltoPel{{ $i->id }}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Edit Data Interaksi Platform ke Pelanggan</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <form action="/editinteraksiPltoPel/{{ $i->id }}" method="post" class="row g-3">
                                  @method('put')
                                  @csrf
                                  <div class="mb-3 col-md-6">
                                    <label for="asal" class="col-form-label">Asal</label>
                                    <select class="form-select" name="platform_id" id="platform_id">
                                      <option value="{{ $platform->id }}" @if($platform->id === $i->platform_id) selected @endif>{{ $platform->nama }}</option>
                                    </select>
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label for="tujuan" class="col-form-label">Tujuan</label>
                                    <select class="form-select" name="pelanggan_id" id="pelanggan_id">
                                      @foreach ($pelanggan as $p)
                                      <option value="{{ $p->id }}" @if($p->id === $i->pelanggan_id) selected @endif>{{ $p->nama }}</option>
                                      @endforeach
                                    </select>
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label for="nilai" class="col-form-label">Value</label>
                                    <input class="form-control" name="nilai" id="nilai" value="{{ $i->nilai }}" required>
                                    @error('nilai')
                                    <div class="invalid-feedback">
                                      {{ $message }}
                                    </div>
                                    @enderror
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label for="moneter" class="col-form-label">Moneter?</label>
                                    <select class="form-select" name="moneter" id="moneter">
                                      <option selected value="{{ $i->moneter }}">{{ $i->moneter }}</option>
                                      <option value="Tidak">Tidak</option>
                                      <option value="Iya">Iya</option>
                                    </select>
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
                        <form action="/hapusinteraksiPltoPel/{{ $i->id }}" method="post" class="d-inline">
                          @method('delete')
                          @csrf
                          <button class="btn btn-primary btn-sm" onclick="return confirm('Apakah anda yakin?')"><i class="bi bi-trash"></i> Hapus</button>
                        </form>
                      </td>
                    </tr>
                    @endforeach
                  </tbody>
                </table>
              </div>
              <div class="card-header">
                <h5>Pelanggan ke Platform <button type="button" class="btn btn-primary btn-sm"  data-bs-toggle="modal" data-bs-target="#tambahPeltoPl" data-bs-whatever="Tambah PeltoPl Baru"><i class="bi bi-plus-square"></i></button></h5>
                {{-- Tambah PeltoPl --}}
                <div class="modal fade text-start" id="tambahPeltoPl" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Tambah Interaksi Pelanggan ke Platform</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form action="/tambahinteraksiPeltoPl/{{ $platform->nama }}" method="post" class="row g-3">
                          @csrf
                          <div class="mb-3 col-md-6">
                            <label for="tujuan" class="col-form-label">Asal</label>
                            <select class="form-select" name="pelanggan_id" id="pelanggan_id" required>
                              @foreach ($pelanggan as $p)
                              <option value="{{ $p->id }}">{{ $p->nama }}</option>
                              @endforeach
                            </select>
                          </div>
                          <div class="mb-3 col-md-6">
                            <label for="asal" class="col-form-label">Tujuan</label>
                            <select class="form-select" name="platform_id" id="platform_id">
                              <option value="{{ $platform->id }}">{{ $platform->nama }}</option>
                            </select>
                          </div>
                          <div class="mb-3 col-md-6">
                            <label for="nilai" class="col-form-label">Value</label>
                            <input class="form-control" name="nilai" id="nilai" required>
                            @error('nilai')
                            <div class="invalid-feedback">
                              {{ $message }}
                            </div>
                            @enderror
                          </div>
                          <div class="mb-3 col-md-6">
                            <label for="moneter" class="col-form-label">Moneter?</label>
                            <select class="form-select" name="moneter" id="moneter">
                              <option selected value="Tidak">Tidak</option>
                              <option value="Iya">Iya</option>
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
              <div class="card-body">
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Asal</th>
                      <th scope="col">Tujuan</th>
                      <th scope="col">Value</th>
                      <th scope="col">Moneter?</th>
                      <th scope="col">Opsi</th>
                    </tr>
                  </thead>
                  <tbody>
                    @php
                        $n = 0;
                    @endphp
                    @foreach ($interaksiPeltoPl as $i)
                      @php
                        $n++;
                      @endphp
                    <tr>
                      <th scope="row">{{ $n }}</th>
                      <td>{{ $i->pelanggan->nama }}</td>
                      <td>{{ $i->platform->nama }}</td>
                      <td>{{ $i->nilai }}</td>
                      <td>{{ $i->moneter }}</td>
                      <td>
                        <button class="btn btn-primary btn-sm"  data-bs-toggle="modal" data-bs-target="#editinteraksiPeltoPl{{ $i->id }}" data-bs-whatever="Edit Data Pelanggan"><i class="bi bi-pencil-square"></i> Edit</button>
                        <div class="modal fade text-start" id="editinteraksiPeltoPl{{ $i->id }}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Edit Data Interaksi Platform ke Pelanggan</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <form action="/editinteraksiPeltoPl/{{ $i->id }}" method="post" class="row g-3">
                                  @method('put')
                                  @csrf
                                  <div class="mb-3 col-md-6">
                                    <label for="tujuan" class="col-form-label">Asal</label>
                                    <select class="form-select" name="pelanggan_id" id="pelanggan_id">
                                      @foreach ($pelanggan as $p)
                                      <option value="{{ $p->id }}" @if($p->id === $i->pelanggan_id) selected @endif>{{ $p->nama }}</option>
                                      @endforeach
                                    </select>
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label for="asal" class="col-form-label">Tujuan</label>
                                    <select class="form-select" name="platform_id" id="platform_id">
                                      <option value="{{ $platform->id }}" @if($platform->id === $i->platform_id) selected @endif>{{ $platform->nama }}</option>
                                    </select>
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label for="nilai" class="col-form-label">Value</label>
                                    <input class="form-control" name="nilai" id="nilai" value="{{ $i->nilai }}" required>
                                    @error('nilai')
                                    <div class="invalid-feedback">
                                      {{ $message }}
                                    </div>
                                    @enderror
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label for="moneter" class="col-form-label">Moneter?</label>
                                    <select class="form-select" name="moneter" id="moneter">
                                      <option selected value="{{ $i->moneter }}">{{ $i->moneter }}</option>
                                      <option value="Tidak">Tidak</option>
                                      <option value="Iya">Iya</option>
                                    </select>
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
                        <form action="/hapusinteraksiPeltoPl/{{ $i->id }}" method="post" class="d-inline">
                          @method('delete')
                          @csrf
                          <button class="btn btn-primary btn-sm" onclick="return confirm('Apakah anda yakin?')"><i class="bi bi-trash"></i> Hapus</button>
                        </form>
                      </td>
                    </tr>
                    @endforeach
                  </tbody>
                </table>
              </div>
              <div class="card-header">
                <h5>Pelanggan ke Pelanggan <button type="button" class="btn btn-primary btn-sm"  data-bs-toggle="modal" data-bs-target="#tambahPeltoPel" data-bs-whatever="Tambah PeltoPel Baru"><i class="bi bi-plus-square"></i></button></h5>
                {{-- Tambah PeltoPel --}}
                <div class="modal fade text-start" id="tambahPeltoPel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Tambah Interaksi Pelanggan ke Pelanggan</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form action="/tambahinteraksiPeltoPel/{{ $platform->nama }}" method="post" class="row g-3">
                          @csrf
                          <div class="mb-3 col-md-6">
                            <label for="tujuan" class="col-form-label">Asal</label>
                            <select class="form-select" name="asal" id="asal" required>
                              @foreach ($pelanggan as $p)
                                <option value="{{ $p->nama }}">{{ $p->nama }}</option>
                              @endforeach
                            </select>
                          </div>
                          <div class="mb-3 col-md-6">
                            <label for="asal" class="col-form-label">Tujuan</label>
                            <select class="form-select" name="tujuan" id="tujuan" required>
                              @foreach ($pelanggan as $p)
                                <option value="{{ $p->nama }}">{{ $p->nama }}</option>
                              @endforeach
                            </select>
                          </div>
                          <div class="mb-3 col-md-6">
                            <label for="nilai" class="col-form-label">Value</label>
                            <input class="form-control" name="nilai" id="nilai" required>
                            @error('nilai')
                            <div class="invalid-feedback">
                              {{ $message }}
                            </div>
                            @enderror
                          </div>
                          <div class="mb-3 col-md-6">
                            <label for="moneter" class="col-form-label">Moneter?</label>
                            <select class="form-select" name="moneter" id="moneter">
                              <option selected value="Tidak">Tidak</option>
                              <option value="Iya">Iya</option>
                            </select>
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
              <div class="card-body">
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Asal</th>
                      <th scope="col">Tujuan</th>
                      <th scope="col">Value</th>
                      <th scope="col">Moneter?</th>
                      <th scope="col">Opsi</th>
                    </tr>
                  </thead>
                  <tbody>
                    @php
                        $n = 0;
                    @endphp
                    @foreach ($interaksiPeltoPel as $i)
                      @php
                        $n++;
                      @endphp
                    <tr>
                      <th scope="row">{{ $n }}</th>
                      <td>{{ $i->asal }}</td>
                      <td>{{ $i->tujuan }}</td>
                      <td>{{ $i->nilai }}</td>
                      <td>{{ $i->moneter }}</td>
                      <td>
                        <button class="btn btn-primary btn-sm"  data-bs-toggle="modal" data-bs-target="#editinteraksiPeltoPel{{ $i->id }}" data-bs-whatever="Edit Data Pelanggan"><i class="bi bi-pencil-square"></i> Edit</button>
                        <div class="modal fade text-start" id="editinteraksiPeltoPel{{ $i->id }}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Edit Data Interaksi Pelanggan ke Pelanggan</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <form action="/editinteraksiPeltoPel/{{ $platform->nama }}" method="post" class="row g-3">
                                  @csrf
                                  <div class="mb-3 col-md-6">
                                    <label for="tujuan" class="col-form-label">Asal</label>
                                    <select class="form-select" name="asal" id="asal">
                                      @foreach ($pelanggan as $p)
                                        <option value="{{ $i->asal }}" selected>{{ $i->asal }}</option>
                                        <option value="{{ $p->nama }}">{{ $p->nama }}</option>
                                      @endforeach
                                    </select>
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label for="asal" class="col-form-label">Tujuan</label>
                                    <select class="form-select" name="tujuan" id="tujuan">
                                      @foreach ($pelanggan as $p)
                                        <option value="{{ $i->tujuan }}" selected>{{ $i->tujuan }}</option>
                                        <option value="{{ $p->nama }}">{{ $p->nama }}</option>
                                      @endforeach
                                    </select>
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label for="nilai" class="col-form-label">Value</label>
                                    <input class="form-control" name="nilai" id="nilai" required>
                                    @error('nilai')
                                    <div class="invalid-feedback">
                                      {{ $message }}
                                    </div>
                                    @enderror
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label for="moneter" class="col-form-label">Moneter?</label>
                                    <select class="form-select" name="moneter" id="moneter">
                                      <option selected value="{{ $i->moneter }}">{{ $i->moneter }}</option>
                                      <option value="Tidak">Tidak</option>
                                      <option value="Iya">Iya</option>
                                    </select>
                                  </div>
                                    <input type="hidden" name="platform_id" id="platform_id" value="{{ $platform->id }}">
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Tutup</button>
                                    <button type="submit" class="btn btn-primary">Edit</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <form action="/hapusinteraksiPeltoPel/{{ $i->id }}" method="post" class="d-inline">
                          @method('delete')
                          @csrf
                          <button class="btn btn-primary btn-sm" onclick="return confirm('Apakah anda yakin?')"><i class="bi bi-trash"></i> Hapus</button>
                        </form>
                      </td>
                    </tr>
                    @endforeach
                  </tbody>
                </table>
              </div>
        </div>
      </div>
      @else
        <h5 class="text-center mt-4">Pelanggan Belum Diidentikasi</h5>
      @endif
    </div>
  <div class="border-bottom">
    <h3 class="text-center mt-3">4.Spike dan Linchpin</h3>
    @if($countInteraksi > 0)
      <div class="row text-center"> 
        <div class="mt-4 mb-4 col-sm-6">
          <div class="card">
            <div class="card-header">
              <h5>Jumlah Interaksi Diberikan</h5>
            </div>
            <div class="card-body">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Pelanggan</th>
                    <th scope="col">Jumlah Interaksi</th>
                  </tr>
                </thead>
                <tbody>
                  @php
                      $n = 0;
                  @endphp
                  @foreach ($interaksiDiberikan as $iD)
                    @php
                      $n++;
                    @endphp
                  <tr>
                    <th scope="row">{{ $n }}</th>
                    <td>{{ $iD->asal }}</td>
                    <td>{{ $iD->jumlah }}</td>
                  </tr>
                  @endforeach
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="mt-4 mb-4 col-sm-6">
          <div class="card">
            <div class="card-header">
              <h5>Jumlah Interaksi Diterima</h5>
            </div>
            <div class="card-body">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Pelanggan</th>
                    <th scope="col">Jumlah Interaksi</th>
                  </tr>
                </thead>
                <tbody>
                  @php
                      $n = 0;
                  @endphp
                  @foreach ($interaksiDiterima as $itrim)
                    @php
                      $n++;
                    @endphp
                  <tr>
                    <th scope="row">{{ $n }}</th>
                    <td>{{ $itrim->tujuan }}</td>
                    <td>{{ $itrim->jumlah }}</td>
                  </tr>
                  @endforeach
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="mt-4 mb-4">
          <div class="card">
            <div class="card-header">
              <h5>Spike dan Linchpin</h5>
            </div>
            <div class="card-body">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Pelanggan</th>
                    <th scope="col">Spike</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  @php
                      $n = 0;
                  @endphp
                  @foreach ($interaksiDiberikan as $iD)
                    @php
                      $n++;
                    @endphp
                  <tr>
                    <th scope="row">{{ $n }}</th>
                    <td>{{ $iD->asal }}</td>
                    <td>{{ $iD->jumlah }}</td>
                    @if($n == 1)
                      <td><button class="btn btn-primary btn-sm">Linchpin</button></td>
                    @else
                      <td></td>
                    @endif
                  </tr>
                  @endforeach
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {{-- <div class="mt-4 mb-4 col-sm-6">
          <div class="card">
            <div class="card-header">
              <h5>Linchpin</h5>
            </div>
            <div class="card-body">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">Pelanggan</th>
                    <th scope="col">Spike</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pengguna</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> --}}
      </div>
      @else
        <h5 class="text-center mt-4">Interaksi antara Pelanggan dengan Pelanggan Belum Diisi</h5>
      @endif
    </div>

</main>

@endsection
