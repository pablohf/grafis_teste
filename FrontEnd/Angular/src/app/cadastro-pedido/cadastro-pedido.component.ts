import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

class NovoPedido {
	public IdContato: number;
	public Numero: number;
	//public ValorTotal: number;
}

@Component({
	selector: 'app-cadastro-pedido',
	templateUrl: './cadastro-pedido.component.html',
	styleUrls: ['./cadastro-pedido.component.css']
})
export class CadastroPedidoComponent implements OnInit {

	form: FormGroup;

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

	constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
		this.form = this.formBuilder.group({
			numero: ['', Validators.required],
			//valortotal: ['', Validators.required]
		});
	}

	ngOnInit() {
	}

	onSubmit() {

		if (this.form.invalid) {
			return;
		}

		let idContato = this.activatedRoute.snapshot.params['id'];	

		let novoPedido = this.form.value as NovoPedido;
		novoPedido.IdContato = idContato;

		this.http.post('http://localhost:49493/api/pedidos/', JSON.stringify(novoPedido), this.httpOptions)
			.subscribe(data => {
				this.router.navigate(['contatos/' + idContato + '/pedidos']);
				//this.router.navigate(['pedidos']);
			}, error => {
				console.log('Error', error);
			});

	}
}
