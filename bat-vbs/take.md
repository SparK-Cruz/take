# take
Mostre os preços dos produtos para seu cliente enquanto ele conecta ao wifi da sua loja.

### bat 
arquivo: here.bat 

```
@echo OFF take
start take.bat && take.vbs

```
### bat 
arquivo: take.bat

```
@echo OFF take
netsh wlan set hostednetwork mode=allow 
:: ssid=NomeRede key=Senha
msgbox"Bem vindo a nossa loja",vbInformation,"Price 12,90"

```
### vbs
arquivo: take.vbs

```
msgbox"Bem vindo a nossa loja",vbInformation,"Price 12,90"

```

### Para testar e rodar o código siga esses passos:

- Baixe o Bat compiler neste link: http://bc.gotek.info/
- Procure e Baixe o Vbs Compiler:  google.com/search?=VBS+to+Exe
- Depois abra e compile os programas
- Agora, baixe e  use essa ferramenta : https://www.installpackbuilder.com 
- Finalmente, compile e adicione os arquivos executáveis separados para que seja um único arquivo e executável.
