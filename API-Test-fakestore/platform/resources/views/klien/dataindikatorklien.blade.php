@extends('layouts.main')

@section('container')
<main>
  {{-- <h1 class="visually-hidden">Heroes examples</h1> --}}
  {{-- @foreach($platform as $p) --}}
  <div class="text-center">
    <h1 class="display-5 fw-bold">Data Indikator {{ $indikator->nama }}</h1>
    <div class="col-lg-6 mx-auto border-bottom"">
        @if(session()->has('success'))
        <div class="alert alert-success" role="alert">
          {{ session('success') }}
        </div>
        @endif
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3 pt-3 pb-4">
          {{-- <a href="/indikatorklien/{{ $platform->id }}" class="btn btn-primary"><i class="bi bi-info-square"></i> Indikator</a> --}}
          <button type="button" class="btn btn-primary px-4 gap-3 mb-3"  data-bs-toggle="modal" data-bs-target="#tambahDataIndikator" data-bs-whatever="Tambah Data Indikator Baru"><i class="bi bi-plus-square"></i> Tambah Data Indikator</button>
        </div>
        {{-- Tambah Indikator --}}
        <div class="modal fade text-start" id="tambahDataIndikator" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Tambah Data Indikator</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form action="/tambahdataindikator" method="post">
                  @csrf
                  <div class="mb-3">
                    <label for="data" class="col-form-label">Data Indikator</label>
                    <input type="number" class="form-control @error('data') is-invalid @enderror" id="data" name="data" autofocus required>
                    @error('data')
                        <div class="invalid-feedback">
                          {{ $message }}
                        </div>
                    @enderror
                  </div>
                  <div class="mb-3">
                    <label for="date" class="col-form-label">Tanggal</label>
                    <div class="input-group date" id="datepicker">
                      <input type="text" class="form-control" @error('date') is-invalid @enderror" id="date" name="date" required >
                      <span class="input-group-append">
                          <span class="input-group-text bg-white">
                              <i class="fa fa-calendar"></i>
                          </span>
                      </span>
                    </div>
                    @error('date')
                    <div class="invalid-feedback">
                      {{ $message }}
                    </div>
                    @enderror
                  </div>
                  <input type="hidden" name="indikator_id" id="indikator_id" value="{{ $indikator->id }}">
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

  <div class="border-bottom">
    <div class="row text-center">
      <div class="mt-4 mb-4 col-sm-6">
        <div class="card">
          <div class="card-header">
            <h5>Data Indikator</h5>
          </div>
          <div class="card-body">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Data</th>
                  <th scope="col">Tanggal</th>
                  <th scope="col">Opsi</th>
                </tr>
              </thead>
              <tbody>
                @php
                    $n = 0;
                @endphp
                @foreach ($dataIndikator as $d)
                  @php
                    $n++;
                  @endphp
                <tr>
                  <th scope="row">{{ $n }}</th>
                  <td>{{ $d->data }}</td>
                  <td>{{ $d->date }}</td>
                  <td>
                    <button class="btn btn-primary btn-sm"  data-bs-toggle="modal" data-bs-target="#editdataindikator{{ $d->id }}" data-bs-whatever="Edit Data Indikator"><i class="bi bi-pencil-square"></i></button>
                    <div class="modal fade text-start" id="editdataindikator{{ $d->id }}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Data Indikator</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <form action="/editdataindikator/{{ $d->id }}" method="post" class="row g-3">
                              @method('put')
                              @csrf
                              <div class="mb-3">
                                <label for="data" class="col-form-label">Data Indikator</label>
                                <input type="number" class="form-control @error('data') is-invalid @enderror" id="data" name="data" value="{{ $d->data }}" autofocus required>
                                @error('data')
                                    <div class="invalid-feedback">
                                      {{ $message }}
                                    </div>
                                @enderror
                              </div>
                              <div class="mb-3">
                                <label for="date" class="col-form-label">Tanggal</label>
                                <div class="input-group date" id="datepicker1">
                                  <input type="text" class="form-control" @error('date') is-invalid @enderror" id="date" name="date" value="{{ $d->date }}" required >
                                  <span class="input-group-append">
                                      <span class="input-group-text bg-white">
                                          <i class="fa fa-calendar"></i>
                                      </span>
                                  </span>
                                </div>
                                @error('date')
                                <div class="invalid-feedback">
                                  {{ $message }}
                                </div>
                                @enderror
                              </div>
                              <input type="hidden" name="indikator_id" id="indikator_id" value="{{ $indikator->id }}">
                              <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Tutup</button>
                                <button type="submit" class="btn btn-primary">Edit</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <form action="/hapusdataindikator/{{ $d->id }}" method="post" class="d-inline">
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
      <div class="mt-4 mb-4 col-sm-3">
        <div class="card">
          <div class="card-header">
            <h5>Berdasar Bulan</h5>
          </div>
          <div class="card-body">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Data</th>
                  <th scope="col">Bulan</th>
                </tr>
              </thead>
              <tbody>
                @php
                    $n = 0;
                @endphp
                @foreach ($sumDataBulan as $sDB)
                  @php
                    $n++;
                  @endphp
                <tr>
                  <th scope="row">{{ $n }}</th>
                  <td>{{ $sDB->jumlah }}</td>
                  <td>{{ $sDB->bulan }}</td>
                </tr>
                @endforeach
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="mt-4 mb-4 col-sm-3">
        <div class="card">
          <div class="card-header">
            <h5>Berdasar Tahun</h5>
          </div>
          <div class="card-body">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Data</th>
                  <th scope="col">Tahun</th>
                </tr>
              </thead>
              <tbody>
                @php
                    $n = 0;
                @endphp
                @foreach ($sumDataTahun as $sDT)
                  @php
                    $n++;
                  @endphp
                <tr>
                  <th scope="row">{{ $n }}</th>
                  <td>{{ $sDT->jumlah }}</td>
                  <td>{{ $sDT->tahun }}</td>
                </tr>
                @endforeach
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
<script type="text/javascript">
  $(function() {
      $('#datepicker').datepicker({
        format: 'yy/mm/dd'
      });
  });
</script>
<script type="text/javascript">
  $(function() {
      $('#datepicker1').datepicker({
        format: 'yy/mm/dd'
      });
  });
</script>
@endsection
