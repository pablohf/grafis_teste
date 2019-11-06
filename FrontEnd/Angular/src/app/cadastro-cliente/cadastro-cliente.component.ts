import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

class NovoCliente {
	public Nome: string;
	public Email: string;
}

@Component({
	selector: 'app-cadastro-cliente',
	templateUrl: './cadastro-cliente.component.html',
	styleUrls: ['./cadastro-cliente.component.css']
})


export class CadastroClienteComponent implements OnInit {	

	email = new FormControl('', [Validators.required, Validators.email]);	

	form: FormGroup;

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

	
	constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
		this.form = this.formBuilder.group({
			nome: ['', Validators.required],
			//email: ['', Validators.required]
		});
	}	

	ngOnInit() {
	}

	getErrorMessage() {
		return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  
	}

	onSubmit() {

		if (this.form.invalid) {
			return;
		}

		let novoCliente = this.form.value as NovoCliente;

		this.http.post('http://localhost:49493/api/clientes/', JSON.stringify(novoCliente), this.httpOptions)
			.subscribe(data => {
				this.router.navigate(['clientes']);
			}, error => {
				console.log('Error', error);
			});

	}
}
