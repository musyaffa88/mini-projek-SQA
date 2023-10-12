@extends('layouts.main')

@section('container')
<main>
  {{-- <h1 class="visually-hidden">Heroes examples</h1> --}}
  {{-- @foreach($platform as $p) --}}
  <div class="text-center">
    <h1 class="display-5 fw-bold">Dashboard Indikator {{ $indikator->nama }}</h1>
  </div>

  <div class="border-bottom">
    <div class="row text-center">
        <div class="mt-4 mb-4 col-sm-9">
            <div class="card">
                <div class="card-header">
                  <h5 class="card-title">Bar Chart Data Indikator {{ $indikator->nama }}</h5>
                </div>
                <div class="card-body">
                  <div id="chartBulan">
                    {{-- <canvas id="barChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas> --}}
                  </div>
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
    </div>
  </div>
  <div class="border-bottom">
    <div class="row text-center"> 
        <div class="mt-4 mb-4 col-sm-9">
            <div class="card">
                <div class="card-header">
                  <h5 class="card-title">Bar Chart Data Indikator {{ $indikator->nama }}</h5>
                </div>
                <div class="card-body">
                  <div id="chartTahun">
                    {{-- <canvas id="barChart1" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas> --}}
                  </div>
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
    <!-- ChartJS -->
    <script src="https://code.highcharts.com/highcharts.src.js"></script>
    <script src="../../plugins/chart.js/Chart.min.js"></script>
    <script>
        Highcharts.chart('chartBulan', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Berdasarkan Bulan'
            },
            xAxis: {
                categories: {!! json_encode($bulan) !!},
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Data Indikator'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">Bulan {point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Data Indikator',
                data: {!! json_encode($jumlahDataBulan) !!}
            }]
        });
    </script>
    <script>
        Highcharts.chart('chartTahun', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Berdasarkan Tahun'
            },
            xAxis: {
                categories: {!! json_encode($tahun) !!},
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Data Indikator'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Data Indikator',
                data: {!! json_encode($jumlahDataTahun) !!}
            }]
        });
    </script>
@endsection
