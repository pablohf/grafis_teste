import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImports } from './MaterialImports';

import { AppComponent } from './app.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { CadastroMensagemComponent } from './cadastro-mensagem/cadastro-mensagem.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { PedidosComponent} from './pedidos/pedidos.component';
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';




const appRoutes: Routes = [	
	{ path: 'produtos', component:ProdutosComponent },
	{ path: 'produtos/cadastro', component: CadastroProdutoComponent },
	{ path: 'pedidos', component:PedidosComponent },
	//{ path: 'pedidos/cadastro', component: CadastroPedidoComponent },
	{ path: 'clientes', component: ClientesComponent },
	{ path: 'clientes/cadastro', component: CadastroClienteComponent },
	{ path: 'clientes/:id/mensagens', component: MensagensComponent },
	{ path: 'clientes/:id/mensagens/cadastro', component: CadastroMensagemComponent },
	

	{ path: '', redirectTo: '/clientes', pathMatch: 'full' }
];

@NgModule({
	declarations: [
		AppComponent,		
		ProdutosComponent,
		MensagensComponent,
		CadastroMensagemComponent,
		CadastroProdutoComponent,
		PedidosComponent,
		CadastroPedidoComponent,
		ClientesComponent,
		CadastroClienteComponent,
		
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		HttpClientModule,
		BrowserAnimationsModule,
		MaterialImports,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
