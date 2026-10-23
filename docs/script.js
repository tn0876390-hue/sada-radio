const stations = [
  { name: "📻 إذاعة أم درمان - السودان", url: "https://stream.zeno.fm/f3ewz3qirchvv", desc: "الإذاعة الأم - الخرطوم" },
  { name: "🇸🇩 إذاعة كسلا", url: "https://stream.zeno.fm/s7exg2xry0hvv", desc: "شرق السودان" },
  { name: "🏭 إذاعة عطبرة", url: "https://stream.zeno.fm/g1b8f8q1y0hvv", desc: "نهر النيل - عطبرة" },
  { name: "🌾 إذاعة ود مدني - الجزيرة", url: "https://stream.zeno.fm/ux4b8k3ry0hvv", desc: "وسط السودان - الجزيرة" },
  { name: "🕋 إذاعة القرآن الكريم - مكة", url: "https://server03.quran-uni.com:7032/;", desc: "تلاوات من الحرم" },
  { name: "🌍 مونت كارلو الدولية", url: "https://montecarlodoualiya128k.ice.infomaniak.ch/mc-doualiya-128.mp3", desc: "باريس - أخبار عربية" },
  { name: "🇬🇧 بي بي سي عربي - لندن", url: "https://stream.live.vc.bbcmedia.co.uk/bbc_arabic_radio", desc: "لندن - BBC Arabic" },
  { name: "🇪🇬 صوت العرب - القاهرة", url: "https://stream.zeno.fm/8b6s4yq5z9quv", desc: "إذاعة صوت العرب الشهيرة" }
];
let currentIndex = 0;
function renderStations(){
  const container=document.getElementById('stationsList')||document.getElementById('stations');
  if(!container)return; container.innerHTML='';
  stations.forEach((st,i)=>{
    const btn=document.createElement('button');
    btn.style.cssText='display:block;width:100%;margin:8px 0;padding:14px;background:#fff;color:#222;border:none;border-radius:12px;font-size:16px;cursor:pointer;text-align:right';
    if(i===currentIndex)btn.style.background='#d1c5ff';
    btn.innerHTML=`<b>${st.name}</b><br><small style="color:#666">${st.desc}</small>`;
    btn.onclick=()=>playStation(i);
    container.appendChild(btn);
  });
}
function playStation(index){
  currentIndex=index; const st=stations[index];
  const audio=document.getElementById('audioPlayer');
  const now=document.getElementById('nowPlaying');
  if(now)now.textContent=`🔴 الآن: ${st.name}`;
  audio.src=st.url; audio.play().catch(()=>{if(now)now.textContent=`⏳ يحاول الاتصال...`});
  renderStations();
}
window.onload=()=>{renderStations(); playStation(0);};
window.playStation=playStation;
