function goToAndFinalPage(value){
  finalPage = value;
  goToPage = value;
}

for(var i=0; i<users.length; i++){
  if(currentUser == users[i].id){
    data.txtNOMECOMPLETO = `${users[i].firstName} ${users[i].lastName}`
    data.txtEMAIL = users[i].email
    break;
  }    
}

// SEGURANÇA DO TRABALHO - ENQUADRAMENTO PCD
if(data.sltSELECT_ENQUADRAMENTO_PCD == "Sim"){
  schema.txtNOME_COMPLETO_USUARIO_PCD.hide = true  
}
else if(data.sltSELECT_ENQUADRAMENTO_PCD == "Nao"){
  schema.txtNOME_COMPLETO_USUARIO_PCD.hide = false
}

// SOLICITAÇÃO DE PPP
if(data.sltSELECT_MUDANCA_CARGO_PPP === "Sim"){
  schema.txtDESCRICAO_INFORME_CARGO_ANTERIOR_PPP.hide = false
}
else if(data.sltSELECT_MUDANCA_CARGO_PPP === "nao"){
  schema.txtDESCRICAO_INFORME_CARGO_ANTERIOR_PPP.hide = true
}

if(data.sltHOUVE_ACIDENTE_TRABALHO_PP === "Sim"){
  schema.txtINFORME_NUMERO_CAT_PPP.hide = false
}
else if(data.sltHOUVE_ACIDENTE_TRABALHO_PPP === "Nao"){
  schema.txtINFORME_NUMERO_CAT_PPP.hide = true
}

// CRACHÁ - SOLICITAR CRACHÁ
if(data.sltPEDIDO_CRACHA_TITULAR === "Sim"){
  schema.txtSOLICITAR_CRACHA_NOME_PEDIDO.hide = true
}
else if(data.sltPEDIDO_CRACHA_TITULAR === "Não"){
  schema.txtSOLICITAR_CRACHA_NOME_PEDIDO.hide = false
}

if(data.sltTIPO_ENVIO_SOLICITACAO_CRACHA === "Retirada"){
  schema.txaTIPO_ENVIO_CRACHA.hide = true
}
else if(data.sltTIPO_ENVIO_SOLICITACAO_CRACHA === "Envio"){
  schema.txaTIPO_ENVIO_CRACHA.hide = false
}

//Ponto Duvida Orientação
// Função para ocultar todos os campos
function ocultarTodosCampos() {
  schema.lnkLINKGUIA_PRINCIPAL.hide = true;
  schema.lnkLINK_CONVERTER_BANCO_HORAS.hide = true;
  schema.lnkLINK_ESQUECEU_BATER_PONTO.hide = true;
  schema.lnkLINK_EXTENSAO_JORNADA.hide = true;
  schema.lnkLINK_MARCACAO_PONTO_APP.hide = true;
  schema.lnkLINK_PEDIDO_AUSENCIA_FERIAS.hide = true;
  schema.lnkLINK_SICRONIZACAO_APP_MOBILE.hide = true;
  schema.radRADIO_ESCOLHA.hide = true;
  schema.txaDESCRICAO_DUVIDA_MARCACAO_PONTO.hide = true;
}

// Sempre oculte todos os campos antes de exibir o selecionado
ocultarTodosCampos();

// Exibir apenas o campo relacionado à opção selecionada
if (data.sltPONTO_DUVIDA_ORIENTACAO === "baseQualitor") {
  schema.lnkLINKGUIA_PRINCIPAL.hide = false;
  schema.lnkLINK_CONVERTER_BANCO_HORAS.hide = false;
  schema.lnkLINK_ESQUECEU_BATER_PONTO.hide = false;
  schema.lnkLINK_EXTENSAO_JORNADA.hide = false;
  schema.lnkLINK_MARCACAO_PONTO_APP.hide = false;
  schema.lnkLINK_PEDIDO_AUSENCIA_FERIAS.hide = false;
  schema.lnkLINK_SICRONIZACAO_APP_MOBILE.hide = false;
}

if (data.sltPONTO_DUVIDA_ORIENTACAO === "aindaTreinamentos") {
  schema.radRADIO_ESCOLHA.hide = false;
}

if (data.sltPONTO_DUVIDA_ORIENTACAO === "realizouTreinamentos") {
  schema.txaDESCRICAO_DUVIDA_MARCACAO_PONTO.hide = false;
}

  
// Code to run on the first page
if (continueClicked && currentPage == 1) {
  switch (data.sltESCOLHA_TIPO_ATENDIMENTO) {
    case "Alteração Planejamento de Férias":
        goToAndFinalPage(2);
        break;
      
    case "Consulta período aquisitivo":
        goToAndFinalPage(3);
        break;
      
    case "Demonstrativo de férias":
        goToAndFinalPage(4);
        break;
      
    case "Solicitar cancelamento de férias":
        goToAndFinalPage(5);
        break;
      
    case "Férias - Dúvida / Orientação":
        goToAndFinalPage(6);
      break;
      
    case "Atualização cadastral / RDT":
        goToAndFinalPage(7);
      break;
      
    case "Não pagamento, sem deposito":
      goToAndFinalPage(8);
      break;
      
    case "FGTS Dúvida / Orientação":
      goToAndFinalPage(9);
      break;
      
    case "Alteração de benefícios da cesta":
      goToAndFinalPage(10);
      break;
      
    case "Aposentadoria - Enviar carta de estabilidade":
      goToAndFinalPage(11);
      break;
      
    case "Bônus eu indico - Informações sobre pagamento":
        goToAndFinalPage(12);
        break;

    case "Contribuição assistencial - Envio de carta de autorização de desconto":
        goToAndFinalPage(13);
        break;

    case "Dissídio":
        goToAndFinalPage(14);
        break;

    case "Empréstimo consignado - Informar quitação de empréstimo consignado":
        goToAndFinalPage(15);
        break;

    case "Informe de rendimento - Solicitar informe de rendimento":
        goToAndFinalPage(16);
        break;

    case "Inss - Cancelamento ou redução de desconto de inss":
        goToAndFinalPage(17);
        break;

    case "Irrf - Informações sobre cálculo de irrf":
        goToAndFinalPage(18);
        break;

    case "Pagamento - Demonstrativo":
        goToAndFinalPage(19);
        break;

    case "Pagamento - Desconto Indevido, exceto benefícios":
        goToAndFinalPage(20);
        break;
      
     case "Pagamento - Informações sobre calculo de adicional noturno":
        goToAndFinalPage(21);
        break;

    case "Pagamento - Informações sobre calculo de banco de horas":
        goToAndFinalPage(22);
        break;

    case "Pagamento - Informações sobre calculo de horas extra":
        goToAndFinalPage(23);
        break;

    case "Pagamento - Informações sobre calculo de sobreaviso":
        goToAndFinalPage(24);
        break;

    case "Pagamento - Informações sobre reajuste/Dissídio":
        goToAndFinalPage(25);
        break;

    case "Pagamento - Salário não caiu":
        goToAndFinalPage(26);
        break;

    case "Pensão alimentícia - Alteração cadastral":
        goToAndFinalPage(27);
        break;

    case "Pensão alimentícia - Dúvida sobre valor de desconto":
        goToAndFinalPage(28);
        break;

    case "Pensão alimentícia - Exclusão":
        goToAndFinalPage(29);
        break;

    case "Pensão alimentícia - Inclusão":
        goToAndFinalPage(30);
        break;

    case "Periculosidade - Exclusão de pagamento":
        goToAndFinalPage(31);
        break;

    case "Periculosidade - Solicitação de pagamento":
        goToAndFinalPage(32);
        break;

    case "Saque de pis - Divergência de dados ou valores para saque pis":
        goToAndFinalPage(33);
        break;

    case "Folha Dúvida / Orientação":
        goToAndFinalPage(34);
        break;
      
    case "Cadastro - Alteração Cadastral":
        goToAndFinalPage(35);
        break;

    case "Cadastro - Ctps digital (CBO)":
        goToAndFinalPage(36);
        break;

    case "Cadastro - Jornada de trabalho":
        goToAndFinalPage(37);
        break;

    case "Cadastro - Validação de salário/cargo":
        goToAndFinalPage(38);
        break;

    case "Cadastro - Valor salário":
        goToAndFinalPage(39);
        break;

    case "Admissão Dúvida / Orientação":
        goToAndFinalPage(40);
        break;

    case "Atualização dados funcionários - Alteração de conta corrente":
        goToAndFinalPage(41);
        break;

    case "Atualização dados funcionários - Alteração de endereço residencial":
        goToAndFinalPage(42);
        break;

    case "Atualização dados funcionários - Alteração de estado civil":
        goToAndFinalPage(43);
        break;

    case "Atualização dados Funcionários - Alteração de nome":
        goToAndFinalPage(44);
        break;

    case "Atualização dados Funcionários - Inclusão ou Exclusão de dependentes":
        goToAndFinalPage(45);
        break;

    case "Atualização dados Funcionários - Inclusão ou renovação de cnh":
        goToAndFinalPage(46);
        break;

    case "Atualização dados Funcionários - Transferência entre empresas":
        goToAndFinalPage(47);
        break;

    case "RH Dúvidas gerais":
        goToAndFinalPage(48);
        break;

case "Alteração de escala de horário":
        goToAndFinalPage(49);
        break;

    case "Banco de horas/horas extra":
        goToAndFinalPage(50);
        break;

    case "Marcação de ponto":
        goToAndFinalPage(51);
        break;

    case "Ponto Dúvida / Orientação":
        goToAndFinalPage(52);
        break;
      
    case "Acidente de trabalho - Informar acidente de trabalho":
        goToAndFinalPage(53);
        break;

    case "Afastamento - Informar atestado inferior a 15 dias":
        goToAndFinalPage(54);
        break;

    case "Afastamento - Informar atestado superior 15 dias":
        goToAndFinalPage(55);
        break;

    case "Enquadramento pcd":
        goToAndFinalPage(56);
        break;

    case "Envio de declaração de horas":
        goToAndFinalPage(57);
        break;

    case "Licença - Licença maternidade":
        goToAndFinalPage(58);
        break;

    case "Licença - Licença paternidade":
        goToAndFinalPage(59);
        break;

    case "Licença - Licenças legais":
        goToAndFinalPage(60);
        break;

    case "Solicitação de EPI":
        goToAndFinalPage(61);
        break;

    case "Solicitação de PPP":
        goToAndFinalPage(62);
        break;

    case "Segurança do trabalho - Dúvida/Orientação":
        goToAndFinalPage(63);
        break;

    case "Declarações de vinculo":
        goToAndFinalPage(64);
        break;

    case "Solicitar crachá":
        goToAndFinalPage(65);
        break; 
  }
}


// Code to run after submit is clicked
if(submitting){}