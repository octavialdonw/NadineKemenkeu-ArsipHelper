var macro;

// Enter below the URLs to visit (in the same format):
var urls = [
   "https://office.kemenkeu.go.id/nadine/mejaku",
];

// Enter below how many times to repeat the action:
var count = 15;

macro = "CODE:";
urls.forEach(function (url) {
   macro += "SET !ERRORIGNORE YES" + "\n";
   macro += "SET !TIMEOUT_PAGE 10" + "\n";
   macro += "SET !TIMEOUT_STEP 5" + "\n";
   macro += 'EVENT TYPE=CLICK SELECTOR="#todo>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV:nth-of-type(2)>ND-LIST>MAT-PAGINATOR>DIV>DIV>DIV:nth-of-type(2)>BUTTON:nth-of-type(3)" BUTTON=0'+ "\n "; 
   macro += 'WAIT SECONDS=3' + "\n ";
   macro += 'EVENT TYPE=CLICK SELECTOR="#todo>DIV:nth-of-type(2)>DIV:nth-of-type(2)>DIV:nth-of-type(2)>ND-LIST>MAT-PAGINATOR>DIV>DIV>DIV:nth-of-type(2)>BUTTON:nth-of-type(2)" BUTTON=0'+ "\n "; 
   macro += 'WAIT SECONDS=3' + "\n ";
   for (i=0; i<count; i++) {
     macro += 'TAG POS=2 TYPE=IMG ATTR=SRC:https://office.kemenkeu.go.id/assets/icons/custom-icons/ico_secret_off.webp' + "\n ";
     macro += 'WAIT SECONDS=1' + "\n ";
     macro += 'TAG POS=1 TYPE=BUTTON ATTR=TXT:Arsipkan' + "\n ";
     macro += 'WAIT SECONDS=1' + "\n ";
     macro += 'TAG POS=2 TYPE=BUTTON ATTR=TXT:Arsipkan' + "\n ";
     macro += 'WAIT SECONDS=1' + "\n ";
   }
});

for(var i=1; i<101; i++)
{
iimSet("LOOPNUM", i)
iimPlay(macro);
}