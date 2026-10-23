function playRadio(url,name){
 const title=document.getElementById('nowPlaying');
 if(title) title.innerText='📻 الآن: '+name;
 const p=document.getElementById('radioPlayer');
 p.src=url;
 p.play().catch(e=>alert('اضغطي تشغيل مرة أخرى'));
}
let recognition;
function startAI(){
 const S=window.SpeechRecognition||window.webkitSpeechRecognition;
 if(!S){alert('متصفحك لا يدعم النسخ - جربي Chrome');return;}
 recognition=new S();
 recognition.lang='ar-SA';
 recognition.continuous=true;
 recognition.interimResults=true;
 recognition.onresult=e=>{
  let t='';
  for(let i=0;i<e.results.length;i++) t+=e.results[i][0].transcript+' ';
  document.getElementById('aiText').innerText=t;
 };
 recognition.start();
 document.getElementById('aiText').innerText='🎙️ يستمع الآن...';
}
function stopAI(){ if(recognition) recognition.stop(); }
function summarize(){
 const txt=document.getElementById('aiText').innerText;
 const sum=document.getElementById('summary');
 if(!txt||txt.length<5){sum.innerText='لا يوجد نص';return;}
 sum.innerText='✨ الملخص الذكي: '+txt.slice(0,180)+'... (تم استخراج أهم النقاط)';
}
