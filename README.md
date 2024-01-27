Avaliação de Desenvolvimento LWC e Apex
Instruções:
Você é responsável por criar um LWC no Salesforce que permitirá aos usuários criar registros de
"Reservas de Eventos" e calcular o valor total da reserva com base nas informações fornecidas.
Requisitos:
Crie um objeto personalizado chamado "Reserva de Evento" com os seguintes campos:
Nome do Cliente (Campo de Texto)
Data do Evento (Campo Data)
Número de Participantes (Campo Numérico)
Valor por Participante (Campo Moeda)
Valor Total da Reserva (Campo Moeda, Calculado)
Desenvolva um componente LWC chamado "Criação de Reserva" que cumpra os seguintes
requisitos:
Fornecer um formulário de frontend para preencher os detalhes da reserva, incluindo:
Nome do Cliente (campo de texto).
Data do Evento (campo de data).
Número de Participantes (campo numérico).
Valor por Participante (campo de moeda).
Calcular automaticamente o "Valor Total da Reserva" com base no número de participantes e no
valor por participante.
O cálculo deve ser feito em tempo real à medida que o usuário preenche o formulário.
Botão "Salvar Reserva" que salvará os dados da reserva no banco de dados como um registro de
"Reserva de Evento".
Configure a página inicial do Salesforce para incluir o componente "Criação de Reserva" para que
os usuários possam acessá-lo facilmente.
Avaliação:
Você será avaliado com base na precisão da implementação, na funcionalidade do componente
LWC, na capacidade de calcular automaticamente o "Valor Total da Reserva" com base nos dados
fornecidos e na capacidade de salvar os dados da reserva no banco de dados.
Dica: Certifique-se de testar completamente sua implementação para garantir que ela atenda aos
requisitos especificados. O foco desta atividade é criar um componente que permita aos usuários
inserir informações de reserva e calcular automaticamente o valor total com base nesses dados.
Atenção: Deverá ser enviado para o github com todos os metadados necessários para a
avaliação. Incluindo: Apex, LWC, Custom Field, Custom Object
