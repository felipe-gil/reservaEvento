import { LightningElement } from 'lwc';
import inserirEvento from '@salesforce/apex/ValorReservaController.inserirEvento';
import showToast from 'lightning/toast';

export default class Reserva extends LightningElement {
    nome = '';
    data = '';
    quantidade = 0;
    valor = 0;

    alterarCampo(event){
        const {name,value} = event.target;
        switch(name){
            case 'nome':
                this.name = value;
                break;
            case 'data':
                this.data = value;
                break;
            case 'quantidade':
                    this.quantidade = value;
                    break;
            default:
                    this.valor = value;
                    break;
        }
    }
    enviarDados(event){
        event.preventDefault();
        let dados = {
            'Name' : this.nome,
            'Data_do_Evento__c' : this.data,
            'Numero_de_Participantes__c' : this.quantidade,
            'Valor_por_Participante__c' : this.valor
        }

        inserirEvento({evento : dados}).then(() => {
            this.limparCampos();
            this.mostrarNotificacao('Registro Adicionado', 'Evento cadastrado com sucesso', 'success');
        }).catch(() => {
            this.limparCampos();
            this.mostrarNotificacao('Erro ao adicionar Evento', 'Verifique as informações', 'error');
        });
    }
    mostrarNotificacao(titulo, mensagem, tipo){
            showToast.show({
                label: titulo,
                message: mensagem,
                variant: tipo
            });
    
    }
    limparCampos(){
        this.nome = '';
        this.data = '';
        this.quantidade = '';
        this.valor = '';
    }
    
}