import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';
import { DomSanitizer } from '@angular/platform-browser';
import 'fecha';
import fechaObj from 'fecha';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {
  public dd = '';
  @ViewChild('sig1') signaturePad: SignaturePad;
  @ViewChild('sig2') signaturePad2: SignaturePad;
  @ViewChild('sig3') signaturePad3: SignaturePad;
  @ViewChild('sig4') signaturePad4: SignaturePad;
  @ViewChild('sig5') signaturePad5: SignaturePad;
  @ViewChild('sig6') signaturePad6: SignaturePad;
  @ViewChild('sig7') signaturePad7: SignaturePad;
  @ViewChild('sig8') signaturePad8: SignaturePad;
  public signaturePadOptions: Object = {
    'minWidth': 0.7,
    'maxWidth': 0.8,
    'penColor': 'rgb(255,0,0)',
    'canvasWidth': 180,
    'canvasHeight': 85
  };
  save = 0;
  myForm: FormGroup;
  uploadedImage: Blob;
  form_ = {
    orden: null,
    marca: '',
    modelo: '',
    color: '',
    placas: '',
    certi: '',
    asig: false,
    indem: false,
    serie: '',
    aseg: '',
    sini: '',
    poliza: '',
    deduci: '',
    nombre: '',
    tel: '',
    ajusta: '',
    porcen: '',
    importe: null,
    valor: null,
    tipo: '',
    domt: '',
    colt: '',
    telt: '',
    atent: '',
    tcar: 'sedan',
    danios1: '',
    inter1: '',
    carac1: '',
    danios2: '',
    inter2: '',
    carac2: '',
    dere: '',
    frente: '',
    detras: '',
    izq: '',
    dere2: '',
    frente2: '',
    detras2: '',
    izq2: '',
    cuent: '',
    banco: '',
    lugar: '',
    dia: '',
    mes: '',
    anio: '',
    firma1: '',
    firma2: '',
    firma3: ''
  };

  constructor(
    private fb: FormBuilder,
    public toastr: ToastrService,
    public formApi: FormService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.formApi.GetFormsList();
    this.sForm();
    this.form_.dia = fechaObj.format(new Date(), 'D');
    this.form_.mes = fechaObj.format(new Date(), 'MMMM');
    this.form_.anio = fechaObj.format(new Date(), 'YYYY');
  }

  ResetForm() {
    this.myForm.reset();
  }

  submitSurveyData = () => {
    this.formApi.AddForm(this.form_);
    this.toastr.success('Guardado!');
    this.clear1();
    this.clear2();
    this.clear3();
    this.clear4();
    this.clear5();
    this.clear6();
    this.clear7();
    this.clear8();
    this.form_ = {
      orden: null,
      marca: '',
      modelo: '',
      color: '',
      placas: '',
      certi: '',
      asig: false,
      indem: false,
      serie: '',
      aseg: '',
      sini: '',
      poliza: '',
      deduci: '',
      nombre: '',
      tel: '',
      ajusta: '',
      porcen: '',
      importe: null,
      valor: null,
      tipo: '',
      domt: '',
      colt: '',
      telt: '',
      atent: '',
      tcar: 'sedan',
      danios1: '',
      inter1: '',
      carac1: '',
      danios2: '',
      inter2: '',
      carac2: '',
      dere: '',
      frente: '',
      detras: '',
      izq: '',
      dere2: '',
      frente2: '',
      detras2: '',
      izq2: '',
      cuent: '',
      banco: '',
      lugar: '',
      dia: fechaObj.format(new Date(), 'D'),
      mes: fechaObj.format(new Date(), 'MMMM'),
      anio: fechaObj.format(new Date(), 'YYYY'),
      firma1: '',
      firma2: '',
      firma3: '',
    };
    this.ResetForm();
  }

  sForm() {
    this.myForm = this.fb.group({
      orden: ['', [Validators.required]]
    });
  }

  imgChanged($event) {
    this.form_.firma1 = $event.target.src;
  }
  imgChanged2($event) {
    this.form_.firma2 = $event.target.src;
  }
  imgChanged3($event) {
    this.form_.firma3 = $event.target.src;
  }


  drawComplete() {
    this.form_.dere = this.signaturePad.toDataURL();
  }
  drawComplete2() {
    this.form_.frente = this.signaturePad2.toDataURL();
  }
  drawComplete3() {
    this.form_.detras = this.signaturePad3.toDataURL();
  }
  drawComplete4() {
    this.form_.izq = this.signaturePad4.toDataURL();
  }
  drawComplete5() {
    this.form_.dere2 = this.signaturePad5.toDataURL();
  }
  drawComplete6() {
    this.form_.frente2 = this.signaturePad6.toDataURL();
  }
  drawComplete7() {
    this.form_.detras2 = this.signaturePad7.toDataURL();
  }
  drawComplete8() {
    this.form_.izq2 = this.signaturePad8.toDataURL();
  }
  clear1() {
    this.signaturePad.clear();
    this.form_.dere = '';
  }

  clear2() {
    this.signaturePad2.clear();
    this.form_.frente = '';
  }

  clear3() {
    this.signaturePad3.clear();
    this.form_.detras = '';
  }

  clear4() {
    this.signaturePad4.clear();
    this.form_.izq = '';
  }
  clear5() {
    this.signaturePad5.clear();
    this.form_.dere2 = '';
  }
  clear6() {
    this.signaturePad6.clear();
    this.form_.frente2 = '';
  }
  clear7() {
    this.signaturePad7.clear();
    this.form_.detras2 = '';
  }
  clear8() {
    this.signaturePad8.clear();
    this.form_.izq2 = '';
  }

}
