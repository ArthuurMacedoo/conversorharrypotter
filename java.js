function conversor(){
valorgaleao = prompt("Quantos Galeões você tem em gringotts?")
taxareal = 45.00;
taxadolar = 7.83;
taxaeuro = 7.25;
valoremreais = valorgaleao * taxareal;
valoremdolar = valorgaleao * taxadolar;
valoremeuro = valorgaleao * taxaeuro;
alert ("R$" + valoremreais + '\nUS$' + valoremdolar + '\n€'+ valoremeuro )
}
