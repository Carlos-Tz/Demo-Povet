import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { ToastrService } from 'ngx-toastr';
//import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';
//import { Form } from 'src/app/models/form';
//import { Ng2ImgMaxService } from 'ng2-img-max';
//import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-orden',
  templateUrl: './view-orden.component.html',
  styleUrls: ['./view-orden.component.css']
})
export class ViewOrdenComponent implements OnInit {
  public canvasWidth = 150;
  public needleValue = 50;
  public centralLabel = '';
  public name = '';
  public bottomLabel = '';
  public options = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['red', 'yellow', 'green'],
    arcDelimiters: [33, 67],
    rangeLabel: ['E', 'F'],
    needleStartValue: 60,
  };

  public gen = false;
  public zur = false;
  public qua = false;
  public atl = false;
  public pot = false;
  public afi = false;
  public mul = false;
  public air = false;
  public eng = false;
  public abs = false;
  public oil = false;

  @ViewChild('sig1') signaturePad: SignaturePad;
  @ViewChild('sig2') signaturePad2: SignaturePad;
  @ViewChild('sig3') signaturePad3: SignaturePad;
  @ViewChild('sig4') signaturePad4: SignaturePad;
  public signaturePadOptions: Object = {
    'minWidth': 0.7,
    'maxWidth': 0.8,
    'penColor': 'rgb(255,0,0)',
    'canvasWidth': 189,
    'canvasHeight': 125
  };
  save = 1;
  //myForm: FormGroup;
  //uploadedImage: Blob;
  form_ = {
    orden: null,
    marca: '',
    modelo: '',
    color: '',
    placas: '',
    grua: '',
    km: '',
    serie: '',
    aseg: '',
    sini: '',
    ingreso: '',
    circu: '',
    nombre: '',
    tel: '',
    datos: '',
    obser: '',
    gato: false,
    herra: false,
    trian: false,
    tapet: false,
    llanta: false,
    extin: false,
    antena: false,
    emble: false,
    tapo: false,
    cables: false,
    stereo: false,
    encen: false,
    gas: null,
    airbag: false,
    engine: false,
    abs: false,
    oil: false,
    general: false,
    zurich: false,
    qualitas: false,
    atlas: false,
    potosi: false,
    afirme: false,
    multi: false,
    dere: '',
    frente: '',
    detras: '',
    izq: '',
    firma1: '',
    firma2: '',
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    img5: '',
    img6: '',
    img7: '',
    img8: '',
    desc1: '',
    desc2: '',
    desc3: '',
    desc4: '',
    desc5: '',
    desc6: '',
    desc7: '',
    desc8: ''
  };

  constructor(
    //private fb: FormBuilder,
    public toastr: ToastrService,
    public formApi: FormService,
    private actRouter: ActivatedRoute,
    private location: Location
    //private ng2ImgMax: Ng2ImgMaxService,
    //public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    const key = this.actRouter.snapshot.paramMap.get('key');
    this.formApi.GetForm(key).valueChanges().subscribe(data => {
      this.form_ = data;
      this.signaturePad.fromDataURL(this.form_.dere);
      this.signaturePad2.fromDataURL(this.form_.frente);
      this.signaturePad3.fromDataURL(this.form_.detras);
      this.signaturePad4.fromDataURL(this.form_.izq);
      this.gen = this.form_.general;
      this.zur = this.form_.zurich;
      this.qua = this.form_.qualitas;
      this.atl = this.form_.atlas;
      this.pot = this.form_.potosi;
      this.afi = this.form_.afirme;
      this.mul = this.form_.multi;
      this.air = this.form_.airbag;
      this.eng = this.form_.engine;
      this.abs = this.form_.abs;
      this.oil = this.form_.oil;
      this.needleValue = this.form_.gas;
    });
    //this.formApi.GetFormsList();
   // this.sForm();
  }
  combus(ev) {
    // console.log(ev.srcElement.value);
    this.needleValue = ev.srcElement.value;
  }

  goBack = () => {
    this.location.back();
  }

  /* ResetForm() {
    this.myForm.reset();
  } */

  /* submitSurveyData = () => {
    this.formApi.AddForm(this.form_);
    this.toastr.success('Guardado!');
    this.gen = false;
    this.zur = false;
    this.qua = false;
    this.atl = false;
    this.pot = false;
    this.afi = false;
    this.mul = false;
    this.air = false;
    this.eng = false;
    this.abs = false;
    this.oil = false;
    this.needleValue = 50;
    this.clear1();
    this.clear2();
    this.clear3();
    this.clear4();
    this.ResetForm();
  } */

  /* sForm() {
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      orden: ['', [Validators.required]],
      marca: [''],
      modelo: [''],
      color: [''],
      placas: [''],
      grua: [''],
      km: [''],
      serie: [''],
      aseg: [''],
      sini: [''],
      ingreso: [''],
      circu: [''],
      tel: [''],
      datos: [''],
      obser: [''],
      gato: [false],
      herra: [false],
      trian: [false],
      tapet: [false],
      llanta: [false],
      extin: [false],
      antena: [false],
      emble: [false],
      tapo: [false],
      cables: [false],
      stereo: [false],
      encen: [false],
      gas: [''],
      desc1: [''],
      desc2: [''],
      desc3: [''],
      desc4: [''],
      desc5: [''],
      desc6: [''],
      desc7: [''],
      desc8: ['']
    });
  } */

  /* imgChanged($event) {
    this.form_.firma1 = $event.target.src;
  }
  imgChanged2($event) {
    this.form_.firma2 = $event.target.src;
  }
 */
  /* changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const ima = inputValue.files[0];
    this.ng2ImgMax.resizeImage(ima, 400, 400).subscribe(
      result => {
        this.uploadedImage = result;
        const myReader: FileReader = new FileReader();
        myReader.readAsDataURL(this.uploadedImage);
        myReader.onload = (e) => {
          if (inputValue.name == 'img1') {
            this.form_.img1 = <string>myReader.result;
          }
          if (inputValue.name == 'img2') {
            this.form_.img2 = <string>myReader.result;
          }
          if (inputValue.name == 'img3') {
            this.form_.img3 = <string>myReader.result;
          }
          if (inputValue.name == 'img4') {
            this.form_.img4 = <string>myReader.result;
          }
          if (inputValue.name == 'img5') {
            this.form_.img5 = <string>myReader.result;
          }
          if (inputValue.name == 'img6') {
            this.form_.img6 = <string>myReader.result;
          }
          if (inputValue.name == 'img7') {
            this.form_.img7 = <string>myReader.result;
          }
          if (inputValue.name == 'img8') {
            this.form_.img8 = <string>myReader.result;
          }
          // this.logo = <string>myReader.result;
          this.toastr.success('Imagen cargada correctamente!');
        };
      },
      error => {
        this.toastr.error('Imagen invalida!');
      }
    );
  } */

  /* drawComplete() {
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
  } */
 /*  clear1() {
    this.signaturePad.clear();
  }

  clear2() {
    this.signaturePad2.clear();
  }

  clear3() {
    this.signaturePad3.clear();
  }

  clear4() {
    this.signaturePad4.clear();
  } */
  
  /* general() {
    this.gen = !this.gen;
    this.form_.general = !this.form_.general;
  }

  zurich() {
    this.zur = !this.zur;
    this.form_.zurich = !this.form_.zurich;
  }

  qualitas() {
    this.qua = !this.qua;
    this.form_.qualitas = !this.form_.qualitas;
  }

  atlas() {
    this.atl = !this.atl;
    this.form_.atlas = !this.form_.atlas;
  }

  potosi() {
    this.pot = !this.pot;
    this.form_.potosi = !this.form_.potosi;
  }

  afirme() {
    this.afi = !this.afi;
    this.form_.afirme = !this.form_.afirme;
  }

  multiacabados() {
    this.mul = !this.mul;
    this.form_.multi = !this.form_.multi;
  }

  airbag() {
    this.air = !this.air;
    this.form_.airbag = !this.form_.airbag;
  }

  engine() {
    this.eng = !this.eng;
    this.form_.engine = !this.form_.engine;
  }

  abs_() {
    this.abs = !this.abs;
    this.form_.abs = !this.form_.abs;
  }

  oil_() {
    this.oil = !this.oil;
    this.form_.oil = !this.form_.oil;
  } */

}

