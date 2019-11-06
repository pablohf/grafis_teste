import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

class Produto {
	public Id: number;
	public Descricao: string;
}

class Cliente {
    public Nome: string;
    public Id: Number;
}

@Component({
	selector: 'app-produtos',
	templateUrl: './produtos.component.html',
	styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

    produtos: Produto[] = [];
    
    cliente: Cliente = new Cliente();

    idCliente: number;

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

	constructor(private http: HttpClient, private router: Router) { }

	ngOnInit() {
		this.http.get<Produto[]>('http://localhost:49493/api/produtos/')
			.subscribe(x => this.produtos = x);
	}
			
	novoProduto() {
		this.router.navigate(['produtos/cadastro']);
	}
	
	clientes() {
		this.router.navigate(['clientes']);
	}
	
}


