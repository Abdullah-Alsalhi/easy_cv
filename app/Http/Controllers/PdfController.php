<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use PDF;

class PdfController extends Controller
{

    public function generatePdf()
    {
        $pdf = PDF::loadView('pdfCv');
        return $pdf->download('template.pdf');
    }
}